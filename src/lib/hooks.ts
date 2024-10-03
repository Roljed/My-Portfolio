import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import type {SectionName} from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold: number = 0.5) {
    const {ref, inView} = useInView({
        threshold: threshold,
    });
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    }
}