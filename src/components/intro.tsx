"use client";

import Image from "next/image";
import React from "react";
import portrait from "../../public/portrait.jpeg"
import { motion } from "framer-motion";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";

export default function Intro() {
    const {ref} = useSectionInView("Home")

    return (
        <section
            id="home"
            ref={ref}
            className="mb-28 max-w-[50rem] w-full px-4 mx-auto text-center sm:mb-0 z-10 scroll-mt-28">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                    >
                        <Image src={portrait}
                               alt="Yaad portrait"
                               width={192}
                               height={192}
                               quality="95"
                               priority={true}
                               className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white dark:border-stone-700 shadow-xl"
                        ></Image>
                    </motion.div>
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                                 initial={{ opacity: 0, scale: 0 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{
                                     type: "spring",
                                     stiffness: 125,
                                     delay: 0.2,
                                     duration: 0.7,
                                 }}
                    >
                        👋</motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hello, I&apos;m Yaad.{" "}
                </span>
                I&apos;m a{" "}
                <span className="font-bold">
                    senior cloud software engineer & tech lead{" "}
                </span>
                with{" "}
                <span className="font-semibold">
                    6+ years of experience.{" "}
                </span>
                I design{" "}
                <span className="italic">
                    CI/CD platforms, cloud infrastructure, and AI agents.{" "}
                </span>
                My focus is{" "}
                <span className="font-semibold">
                    DevOps, IaC (Terraform), and AWS/GCP
                </span>
                .
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <a href="mailto:ydnahshon@gmail.com" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-[1.02] transition">
                    Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"
                  // onClick={() => {
                  //     setActiveSection("Contact")
                  //     setTimeOfLastClick(Date.now())
                  // }}
                />
                </a>

                <a className="group bg-white dark:bg-stone-900 text-gray-900 dark:text-stone-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-[1.02] transition cursor-pointer borderBlack"
                   href="/cv_yaad_nahshon.pdf"
                   download="cv_yaad_nahshon.pdf"
                >
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <div className="flex sm:flex-row items-center justify-center gap-2">
                    <a className="bg-white dark:bg-stone-900 text-gray-700 dark:text-stone-200 p-4 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 dark:hover:text-stone-50 active:scale-105 transition cursor-pointer borderBlack"
                        href="https://www.linkedin.com/in/yaad-nahshon/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        <BsLinkedin />
                    </a>

                    <a className="bg-white dark:bg-stone-900 text-gray-700 dark:text-stone-200 p-4 flex items-center text-[1.33rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 dark:hover:text-stone-50 active:scale-105 transition cursor-pointer border border-black/10 dark:border-stone-800"
                        href="https://github.com/Roljed"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}