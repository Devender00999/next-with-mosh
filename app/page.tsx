"use client";
import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
   return (
      <main className="">
         <div>Hello World</div>
         <Link href="/users">Users</Link>
         <ProductCart />
      </main>
   );
}
