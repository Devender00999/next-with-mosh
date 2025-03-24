"use client";
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import Image from "next/image";
import coffee from "@/public/image.jpg";

export default function Home() {
   return (
      <main className="relative h-screen">
         {/* <Image src={coffee} alt="Coffee"  /> */}
         <Image
            src="https://bit.ly/react-cover"
            fill
            alt="React Cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={10}
            priority
         />
         {/* <div>Hello World</div>
         <Link href="/users">Users</Link>
         <ProductCart /> */}
      </main>
   );
}
