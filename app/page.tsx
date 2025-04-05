import { getServerSession } from "next-auth/next";
import { authOptions } from "./Auth";

export default async function Home() {
   const session = await getServerSession(authOptions);
   console.log(session);
   return (
      <main className="relative h-screen">Hello {session?.user?.name}</main>
   );
}
