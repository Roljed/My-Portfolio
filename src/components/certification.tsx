"use client";

import React, { useRef } from "react";
import { certificationsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type certificationProps = (typeof certificationsData)[number];

export default function Certification({
    title,
    url,
    imageUrl,
}: certificationProps) {
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
            className="group relative flex w-full flex-col"
        >
            <motion.div className="flex min-h-[2.75rem] items-center justify-center">
                <h3 className="text-sm font-semibold text-center text-gray-800 dark:text-stone-200">
                    {title}
                </h3>
            </motion.div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-32 w-full items-center justify-center rounded-md transition hover:bg-gray-50 dark:hover:bg-stone-800"
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className="max-h-28 w-auto max-w-full object-contain shadow-lg transition group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 20rem"
                />
            </a>
        </motion.div>
    );
}
