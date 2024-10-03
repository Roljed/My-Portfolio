import {links} from "@/lib/data";
import {Dispatch, ReactNode, SetStateAction} from "react";

export type SectionName = (typeof links)[number]["name"];
export type ActiveSectionContextProviderProps = { children: ReactNode };
export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}