"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    category,
    description,
    tags,
    imageUrl,
    url,
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
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="group mb-8 last:mb-0"
        >
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <section className="bg-gray-100 dark:bg-stone-900 border border-black/5 dark:border-stone-800 rounded-lg overflow-hidden
                    flex flex-col
                    transition-all duration-300
                    hover:shadow-lg hover:border-black/10 dark:hover:border-stone-600 hover:bg-gray-200 dark:hover:bg-stone-800">

                    <div className="relative w-full aspect-video bg-stone-200 dark:bg-stone-800 overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            quality={95}
                            className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw, 800px"
                        />
                    </div>

                    <div className="px-6 py-5 flex flex-col gap-3">
                        <div>
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                {category}
                            </span>
                            <h3 className="mt-1 text-xl font-semibold flex items-center gap-2">
                                {title}
                                <HiExternalLink className="text-base shrink-0 opacity-0 group-hover:opacity-40 transition text-gray-500 dark:text-stone-400" />
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-stone-300">
                                {description}
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="bg-black/[0.7] dark:bg-stone-700 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </a>
        </motion.div>
    );
}
