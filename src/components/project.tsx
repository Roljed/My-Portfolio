"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-8 last:mb-0 sm:mb-8"
        >
            <section
                className="bg-gray-100 w-full max-w-[42rem] mx-auto border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition
                    flex flex-col
                    sm:block sm:relative sm:h-[20rem] sm:pr-8
                    group-even:sm:pl-8"
            >
                <div className="px-5 pt-5 pb-4 sm:py-4 sm:px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:sm:ml-[18rem] group-odd:sm:mr-[18rem]">
                    <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative w-full px-5 pb-5 sm:hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        quality={95}
                        className="w-full h-auto rounded-lg shadow-lg"
                        sizes="(max-width: 640px) 100vw, 0px"
                    />
                </div>

                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                        group-even:right-[initial] group-even:-left-40
                        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                        group-hover:scale-[1.04] transition"
                    sizes="(min-width: 640px) 452px, 0px"
                />
            </section>
        </motion.div>
    );
}
