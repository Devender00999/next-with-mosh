"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

import _ from "lodash";
// import HeavyComponent from "./components/HeavyComponent";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
   ssr: false,
   loading: () => <p>Loading...</p>,
});

export default function Home() {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <main className="relative h-screen">
         {/* <Image src={coffee} alt="Coffee"  /> */}
         {/* <Image
            src="https://bit.ly/react-cover"
            fill
            alt="React Cover"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={100}
            priority
         /> */}
         {/* <div>Hello World</div>
         <Link href="/users">Users</Link>
         <ProductCart /> */}
         {isVisible && <HeavyComponent />}
         <button
            className="btn btn-secondary font-poppins"
            onClick={async () => {
               const _ = (await import("lodash")).default;
               const a = [
                  { val: "a" },
                  { val: "c" },
                  { val: "b" },
                  { val: "d" },
               ];
               console.log(_.orderBy(a, "val"));
            }}
         >
            Secondary
         </button>
      </main>
   );
}
