import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/AuthProvider";

const poppins = localFont({
   src: "../public/fonts/poppins-regular.ttf",
   variable: "--font-poppins",
});
export const metadata: Metadata = {
   title: "Home Page",
   description: "Home page of next with mosh",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <AuthProvider>
            <body className={`${poppins.variable} antialiased`}>
               <Navbar />
               <div className="">{children}</div>
            </body>
         </AuthProvider>
      </html>
   );
}
