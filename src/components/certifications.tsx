"use client"

import React from "react";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import {certificationsData} from "@/lib/data";
import Certification from "@/components/certification";
import {motion} from "framer-motion";


export default function Certifications() {
    const {ref} = useSectionInView("Certifications");

    return (
        <section id="certifications" className="scroll-mt-28 mb-28 max-w-[50rem]" ref={ref}>
            <SectionHeading title={"My Certifications"} />
            <div className="">

                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    {
                        certificationsData.map((certification, index) => (
                            <motion.li
                                className="bg-white border border-black/[0.1] rounded-xl px-5 py-4 max-w-[20rem] w-64 h-72"
                                key={index}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                {
                                    <React.Fragment key={index}>
                                        <Certification {...certification} />
                                    </React.Fragment>
                                }
                            </motion.li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}