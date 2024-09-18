"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.175, }}
        >
            <SectionHeading title={"About me"} />
            <p className="mb-3">
                I’m an <span className="font-medium">enthusiastic software engineer</span>, self-learner, and excellent team player. I am excited to work with a talented team and contribute to the success of Intel’s mission to create world-changing technology that improves every person’s life on the planet. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem.
            </p>
            <p>
                My core stack is <span className="font-medium">Python, Typescript, Jenkins, and Docker</span>. I'm also familiar with web development with React, Next.js and Node.js, and other DevOps tools.
            </p>
        </motion.section>
    )
}