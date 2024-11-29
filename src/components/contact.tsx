"use client"

import React from "react"
import SectionHeading from "@/components/section-heading";
import {FaPaperPlane} from "react-icons/fa";
import { motion } from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    return (
        <motion.section id="contact"
                        ref={ref}
                        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
        >
            <SectionHeading title={"Contact"} />
            <p  className="text-gray-700 -mt-6">Please contact me directly at <a className="underline" href="mailto:ydnahshon@gmail.com">ydnahshon@gmail.com</a>, or trough this email form.</p>
            <form className="mt-10 flex flex-col">
                <input className="h-14 px-4 rounded-lg borderBlack"
                       type="email"
                       required={true}
                       maxLength={100}
                       placeholder="Your email"
                />
                <textarea className="h-52 my-3 p-4 rounded-lg borderBlack"
                          placeholder="Your message..."
                          required={true}
                          maxLength={500}
                />
                <button className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 bg-gray-950"
                        type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/></button>

            </form>
        </motion.section>
    )
}