"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import {useSectionInView} from "@/lib/hooks";


export default function Projects() {
    const {ref} = useSectionInView("Projects");

    return (
        <section id="projects" className="scroll-mt-28" ref={ref}>
            <SectionHeading title={"My Projects"} />
            <div className="">
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
