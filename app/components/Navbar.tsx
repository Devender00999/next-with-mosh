import Link from "next/link";
import React from "react";

const Navbar = () => {
   return (
      <div className="Navbar flex gap-2 bg-gray-200 px-4 py-2 w-screen">
         <Link href="/">Home</Link>
         <Link href="/users">Users</Link>
      </div>
   );
};

export default Navbar;
