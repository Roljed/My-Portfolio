"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    mounted: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let stored: string | null = null;
        try {
            stored = localStorage.getItem("theme");
        } catch (e) { /* storage blocked in privacy mode */ }
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

    const toggleTheme = useCallback(() => {
        setTheme((current) => {
            const next: Theme = current === "light" ? "dark" : "light";
            try { window.localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
            document.documentElement.classList.toggle("dark", next === "dark");
            return next;
        });
    }, []);

    const value = useMemo(
        () => ({ theme, mounted, toggleTheme }),
        [theme, mounted, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
