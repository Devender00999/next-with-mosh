import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      Credentials({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "email", placeholder: "Email" },
            password: {
               label: "Password",
               type: "password",
               placeholder: "Password",
            },
         },
         async authorize(credentials, req) {
            if (!credentials?.email || !credentials.password) return null;
            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });

            if (!user) return null;
            console.log(user.hashedPassword);
            const passwordMatched = await bcrypt.compare(
               credentials.password,
               user.hashedPassword!
            );

            console.log(passwordMatched);
            return passwordMatched ? user : null;
         },
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   session: {
      strategy: "jwt",
   },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
