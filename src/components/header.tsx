"use client";

import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { HiMenu } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import MobileNav, { MOBILE_NAV_DIALOG_ID } from "@/components/mobile-nav";
import ThemeSwitch from "@/components/theme-switch";

const barClassName =
    "fixed top-0 left-1/2 h-14 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-stone-950/85 dark:border-stone-800 dark:shadow-stone-950/10 md:top-6 md:h-[3.25rem] md:w-[45rem] md:rounded-full";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const handleNavClick = (name: (typeof links)[number]["name"]) => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
    };

    const closeMobileNav = useCallback(() => {
        setMobileNavOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
    }, []);

    const openMobileNav = useCallback(() => {
        setMobileNavOpen(true);
    }, []);

    return (
        <header className="z-[999] relative">
            <motion.div
                className={barClassName}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            />

            {/* Mobile: hamburger + site label + theme */}
            <nav
                className="fixed top-0 left-1/2 z-[999] flex h-14 w-full max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center justify-between px-4 md:hidden"
                aria-label="Mobile navigation"
            >
                <Link
                    href="#home"
                    className="text-sm font-semibold text-gray-950 dark:text-stone-100"
                    onClick={() => handleNavClick("Home")}
                >
                    Yaad
                </Link>
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeSwitch variant="header" />
                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
                        aria-label="Open navigation menu"
                        aria-expanded={mobileNavOpen}
                        aria-controls={MOBILE_NAV_DIALOG_ID}
                        onClick={openMobileNav}
                    >
                        <HiMenu className="text-xl" aria-hidden />
                    </button>
                </motion.div>
            </nav>

            <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />

            {/* Desktop: inline links */}
            <nav
                className="fixed top-[1.7rem] left-1/2 z-[999] hidden -translate-x-1/2 md:flex"
                aria-label="Desktop navigation"
            >
                <ul className="flex flex-nowrap items-center gap-5 text-[0.9rem] font-medium text-gray-500 dark:text-stone-400">
                    {links.map((link) => {
                        const isActive = activeSection === link.name;
                        return (
                            <motion.li
                                className="relative flex items-center justify-center"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx(
                                        "relative flex items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:hover:text-stone-100",
                                        {
                                            "text-gray-950 dark:text-stone-100":
                                                isActive,
                                        }
                                    )}
                                    href={link.hash}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => handleNavClick(link.name)}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-stone-800"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
