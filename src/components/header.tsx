"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function Header() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <header className="z-[999] relative">
            <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-stone-950/85 dark:border-stone-800 dark:shadow-stone-950/10 sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center justify-center gap-y-1 text-[0.75rem] font-medium text-gray-500 dark:text-stone-400 sm:w-[initial] sm:max-w-none sm:flex-nowrap sm:gap-5 sm:text-[0.9rem]">
                    {links.map((link) => (
                        <motion.li className="h-3/4 flex items-center justify-center relative"
                                   key={link.hash}
                                   initial={{ y: -100, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                        >
                            <Link className={clsx("flex w-full items-center justify-center px-2 py-2 sm:px-3 sm:py-3 hover:text-gray-950 dark:hover:text-stone-100 transition", {"text-gray-950 dark:text-stone-100": activeSection === link.name })}
                                  href={link.hash}
                                  onClick={() => {
                                      setActiveSection(link.name)
                                      setTimeOfLastClick(Date.now())
                                  }}>{link.name}
                                {link.name === activeSection && (
                                    <motion.span className="bg-gray-100 dark:bg-stone-800 rounded-full absolute inset-0 -z-10"
                                    layoutId="activeSection"
                                     transition={{
                                         type: "spring",
                                         stiffness: 380,
                                         damping: 30,
                                     }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}