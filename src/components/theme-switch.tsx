"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import clsx from "clsx";

type Theme = "light" | "dark";

type ThemeSwitchProps = {
    variant?: "fixed" | "header";
};

const iconClass = "text-xl shrink-0 transition-colors";

const buttonBase =
    "bg-white w-[2.75rem] h-[2.75rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-[1.08] active:scale-105 transition-all dark:bg-stone-900 dark:border-stone-700 dark:shadow-amber-950/20";

export default function ThemeSwitch({ variant = "fixed" }: ThemeSwitchProps) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const localTheme: Theme | null =
            stored === "light" || stored === "dark" ? stored : null;
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const resolvedTheme: Theme =
            localTheme ?? (prefersDark ? "dark" : "light");

        setTheme(resolvedTheme);
        document.documentElement.classList.toggle(
            "dark",
            resolvedTheme === "dark"
        );
        setMounted(true);
    }, []);

    const ariaLabel =
        theme === "light" ? "Switch to dark mode" : "Switch to light mode";

    return (
        <button
            type="button"
            className={clsx(
                buttonBase,
                variant === "fixed" &&
                    "fixed bottom-5 right-5 z-[999] hidden md:flex w-[3rem] h-[3rem] shadow-2xl hover:scale-[1.15]",
                variant === "header" && "md:hidden"
            )}
            onClick={toggleTheme}
            aria-label={ariaLabel}
            title={ariaLabel}
        >
            {!mounted ? (
                <BsSun className={clsx(iconClass, "opacity-0")} aria-hidden />
            ) : theme === "light" ? (
                <BsSun
                    className={clsx(iconClass, "text-amber-500")}
                    aria-hidden
                />
            ) : (
                <BsMoon
                    className={clsx(iconClass, "text-sky-300")}
                    aria-hidden
                />
            )}
        </button>
    );
}
