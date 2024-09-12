import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaad | Personal Portfolio",
  description: "Yaad is a software engineer with 6 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-sky-50 text-gray-950 relative`}>
    <div
        className="bg-amber-50 absolute blur-[10rem] top-[-6rem] z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem]">
    </div>
    <div
        className="bg-fuchsia-50 absolute blur-[10rem] top-[-1rem] z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">
    </div>
    {children}
    </body>
    </html>
  );
}
