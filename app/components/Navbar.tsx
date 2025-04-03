"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
   const { data, status } = useSession();
   return (
      <div className="Navbar flex items-center justify-between gap-2 bg-gray-200 px-4 py-2 w-screen">
         <div className="flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            {status === "authenticated" ? (
               <>{data.user?.name}</>
            ) : (
               <Link href="/api/auth/signin">Login</Link>
            )}
         </div>
         {status === "authenticated" && (
            <button
               className="btn btn-sm btn-secondary"
               onClick={() => signOut()}
            >
               Logout
            </button>
         )}
      </div>
   );
};

export default Navbar;
