import React from "react"
import { CgWorkAlt } from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import projectAnalysisImg from "@/static/projects/project-cyclistic-study.png"
import projectLLVMImg from "@/static/projects/project-llvm.png"
import projectLittleLemonImg from "@/static/projects/project-little-lemon.png"

export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Certifications",
        hash: "#certifications"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
] as const;

export const experienceData = [
    {
        title: "Cloud Software Engineer",
        location: "Haifa, Israel",
        date: "Sep 2024 - present",
        // icon: React.createElement(IntelLog),
        description: "Cloud Software Engineer",
    }
]

export const projectsData = [
    {
        title: "Little Lemon Database",
        tags: ["SQL", "MySQL"],
        // imageUrl: someImg,
        description: "Little Lemon Database",
    }
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Tailwind",
    "Python",
    "Django",
    "Git"
]