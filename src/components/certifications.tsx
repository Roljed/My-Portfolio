"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { certificationsData } from "@/lib/data";
import Certification from "@/components/certification";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: Math.min(0.05 * index, 0.3),
        },
    }),
};

export default function Certifications() {
    const { ref } = useSectionInView("Certifications");
    const lastIndex = certificationsData.length - 1;

    return (
        <section
            id="certifications"
            className="scroll-mt-28 mb-28 sm:mb-40 max-w-[50rem] w-full px-4 mx-auto"
            ref={ref}
        >
            <SectionHeading title={"My Certifications"} />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {certificationsData.map((certification, index) => (
                    <motion.li
                        className={`bg-white dark:bg-stone-900 border border-black/[0.1] dark:border-stone-800 rounded-xl px-5 py-5 flex flex-col ${
                            // center last card when total count is odd
                            index === lastIndex
                                ? "sm:col-span-2 sm:max-w-[20rem] sm:mx-auto sm:w-full"
                                : ""
                        }`}
                        key={certification.title}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <Certification {...certification} />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
