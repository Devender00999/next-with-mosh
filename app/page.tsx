"use client";

export default function Home() {
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
