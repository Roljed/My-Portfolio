import  React from "react"
import { CgWorkAlt } from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import projectRedisImg from "@/static/projects/project-redis-in-python.png"
import projectAnalysisImg from "@/static/projects/project-cyclistic-study.png"
import projectERDiagram from "@/static/projects/project-ER-Diagram.png"
import projectLittleLemonRestaurantImg from "@/static/projects/project-little-lemon-restaurant.png"

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
        title: "Redis",
        tags: ["Python", "Threading", "Network"],
        description: "My implementation of Redis DB in Python.",
        imageUrl: projectRedisImg,
    },
    {
        title: "Little Lemon Database",
        tags: ["SQL", "MySQL"],
        description: "Little Lemon Database",
        imageUrl: projectERDiagram,

    },
    {
        title: "Little Lemon Restaurant",
        tags: ["React", "Python", "Django"],
        description: "Little Lemon Restaurant",
        imageUrl: projectLittleLemonRestaurantImg,
    },
    {
        title: "Cyclist Study",
        tags: ["Python", "R", "Data analysis"],
        description: "Google cyclist bike-share analysis case study using R and Python",
        imageUrl: projectAnalysisImg,
    }
] as const;

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