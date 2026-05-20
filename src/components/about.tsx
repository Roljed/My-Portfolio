"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("About", 0.75)

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[50rem] w-full px-4 mx-auto text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175, }}
            ref={ref}
        >
            <SectionHeading title={"About me"} />
            <p className="mb-3">
                I am a <span className="font-medium">Senior Cloud Software Engineer and Tech Lead</span> at Intel Corporation, specializing in <span className="underline">platform engineering, high-scale DevOps orchestration, and reliable software delivery</span>. I focus on turning complex infrastructure and pipeline bottlenecks into highly automated, repeatable systems, and I thrive when leading technical strategy, mentoring engineers, and raising engineering standards.
            </p>
            <p className="mb-3">
                My core professional expertise centers on building robust <span className="font-medium">on-premises cloud infrastructure</span>, optimizing massive enterprise CI/CD workflows, and developing custom automation tooling. To continuously expand my technical horizon, I dedicate my personal projects to mastering public cloud ecosystems (<span className="font-medium">AWS & GCP</span>) and building autonomous <span className="font-medium">AI agents with LangChain</span> to eliminate operational toil and streamline developer workflows.
            </p>
            <p>
                My technical toolkit spans <span className="font-medium">Python, Jenkins, GitHub Actions, Terraform, Kubernetes, and Docker</span>, with hands-on full-stack experience in React/Next.js for engineering portals. I bridge the gap between heavy infrastructure automation and modern software development.
            </p>
        </motion.section>
    )
}