import { NextRequest, NextResponse } from "next/server";
import User from "./schema";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export async function GET() {
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
   try {
      const userDetails = await request.json();
      const validate = User.safeParse(userDetails);
      if (!validate.success)
         return NextResponse.json(validate.error, { status: 400 });

      const user = await prisma.user.findUnique({
         where: { email: userDetails?.email },
      });

      if (user)
         return NextResponse.json(
            { error: "User already exisits" },
            { status: 400 }
         );
      const hashedPassword = await bcrypt.hash(userDetails?.password, 10);
      const res = await prisma.user.create({
         data: {
            email: userDetails.email,
            name: userDetails?.name,
            hashedPassword: hashedPassword!,
         },
      });
      return NextResponse.json(res, { status: 201 });
   } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err }, { status: 500 });
   }
}
