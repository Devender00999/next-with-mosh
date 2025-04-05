import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
   const session = await getServerSession(authOptions);
   console.log(session);
   return (
      <main className="relative h-screen">Hello {session?.user?.name}</main>
   );
}
