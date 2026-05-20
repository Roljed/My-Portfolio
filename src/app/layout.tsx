import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaad | Personal Portfolio",
  description:
    "Yaad Nahshon — Senior Cloud Software Engineer & Tech Lead at Intel Corporation. DevOps, CI/CD, Terraform/IaC, AWS/GCP, LangChain AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-sky-50 text-gray-950 dark:bg-stone-950 dark:text-stone-100 relative pt-28 sm:pt-36 overflow-x-hidden transition-colors`}>
        <div
            className="bg-lime-50 dark:bg-lime-900/45 absolute blur-[10rem] top-[-6rem] z-60 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem]">
        </div>
        <div
            className="bg-amber-50 dark:bg-amber-900/50 absolute blur-[10rem] top-[-1rem] z-60 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
