"use client";

import React, {useRef} from "react";
import {certificationsData} from "@/lib/data";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";

type certificationProps = (typeof certificationsData)[number];

export default function Certification({
                                    title,
                                    url,
                                    imageUrl,
                                } : certificationProps
) {
    const ref = useRef<HTMLDivElement >(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress =   useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress =   useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                className="flex flex-col max-w-[13.5rem] overflow-hidden relative sm:w-[14rem] sm:h-[16rem] hover:bg-gray-50 dark:hover:bg-stone-800 transition justify-center items-center rounded-md"
            >
                <div>
                    <h3 className="text-s font-semibold text-center pb-2">{title}</h3>
                </div>
                <a href={url}>
                    <Image src={imageUrl} alt={title} quality={95}
                           className="w-[10rem] rounded-t-lg shadow-l group-hover:scale-[1.04] transition"/>
                </a>
            </section>
        </motion.div>

    )
}