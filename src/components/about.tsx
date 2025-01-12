"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import {underline} from "next/dist/lib/picocolors";

export default function About() {
    const {ref} = useSectionInView("About", 0.75)

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175, }}
            ref={ref}
        >
            <SectionHeading title={"About me"} />
            <p className="mb-3">
                I am an <span className="font-medium">enthusiastic software engineer</span>, passionate self-learner, and a collaborative team player. I <span className="underline">thrive on solving complex problems</span> and am driven by the thrill of finding elegant solutions. I am excited to work with a talented team and contribute to the success of Intel’s mission to create world-changing technology that improves every person’s life on the planet.
            </p>
            <p>
                My core technical expertise lies in <span className="font-medium">Python, Typescript, Jenkins, and Docker</span>. I am also proficient in web development with React, Next.js, and Node.js, alongside experience with various DevOps tools.
            </p>
            <p>
                My diverse skill set enables me to tackle challenges across the software development lifecycle with creativity and precision.
            </p>
        </motion.section>
    )
}