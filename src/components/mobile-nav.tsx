"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const MOBILE_NAV_DIALOG_ID = "mobile-nav-dialog";

const FOCUSABLE_SELECTOR =
    'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type MobileNavProps = {
    isOpen: boolean;
    onClose: () => void;
};

export { MOBILE_NAV_DIALOG_ID };

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab" || !drawerRef.current) return;

            const focusable = Array.from(
                drawerRef.current.querySelectorAll<HTMLElement>(
                    FOCUSABLE_SELECTOR
                )
            ).filter((el) => !el.hasAttribute("disabled"));

            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleLinkClick = (name: (typeof links)[number]["name"]) => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.button
                        type="button"
                        aria-label="Close navigation menu"
                        className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        ref={drawerRef}
                        id={MOBILE_NAV_DIALOG_ID}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        className="fixed inset-y-0 right-0 z-[999] flex w-[min(100%,20rem)] flex-col border-l border-white/40 bg-white/95 px-6 py-6 shadow-2xl backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/95 md:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="mb-8 flex h-11 w-11 items-center justify-center self-end rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
                            aria-label="Close menu"
                            onClick={onClose}
                        >
                            <HiX className="text-xl" aria-hidden />
                        </button>
                        <nav>
                            <ul className="flex flex-col gap-1">
                                {links.map((link) => {
                                    const isActive =
                                        activeSection === link.name;
                                    return (
                                        <li key={link.hash}>
                                            <Link
                                                href={link.hash}
                                                aria-current={
                                                    isActive
                                                        ? "page"
                                                        : undefined
                                                }
                                                className={clsx(
                                                    "flex min-h-[2.75rem] items-center rounded-lg px-4 py-3 text-lg font-medium transition",
                                                    isActive
                                                        ? "bg-gray-100 text-gray-950 dark:bg-stone-800 dark:text-stone-100"
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950 dark:text-stone-400 dark:hover:bg-stone-900 dark:hover:text-stone-100"
                                                )}
                                                onClick={() =>
                                                    handleLinkClick(link.name)
                                                }
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
