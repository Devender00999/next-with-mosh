import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const poppins = localFont({
   src: "../public/fonts/poppins-regular.ttf",
   variable: "--font-poppins",
});

const roboto = Roboto({
   subsets: ["latin"],
   weight: ["400", "500"],
});
const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${poppins.variable} antialiased`}>
            <Navbar />
            <div className="px-4 py-2">{children}</div>
            <h1 className="font-poppins">Hello</h1>
         </body>
      </html>
   );
}
