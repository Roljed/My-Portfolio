"use client";

import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import type {ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName} from "@/lib/types";


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children, }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }}>
            { children }
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (!context) {
        throw new Error(
            "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        )
    }

    return context;
}