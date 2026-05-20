"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <section
            id="projects"
            className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[50rem] px-4 mx-auto overflow-x-clip"
            ref={ref}
        >
            <SectionHeading title={"My Projects"} />
            <div className="w-full">
                {projectsData.map((project) => (
                    <React.Fragment key={project.title}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
