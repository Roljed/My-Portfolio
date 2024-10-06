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

export const experiencesData = [
    {
        title: "Lab Operator",
        location: "Intel",
        date: "Sep 2016",
        icon: React.createElement(CgWorkAlt),
        description: "Operation of mechanized microprocessor- chip test, requiring assessment and troubleshooting."
    },    {
        title: "Software Engineer Intern",
        location: "Intel",
        date: "Oct 2018",
        icon: React.createElement(CgWorkAlt),
        description: "Developed internal tools for analysis of power and thermal simulations."
    },
    {
        title: "Graduated B.Sc. in Computer Science",
        location: "Haifa University",
        date: "Sep 2020",
        icon: React.createElement(LuGraduationCap),
        description: "Graduated BS in Computer Science",
    },
    {
        title: "Software Engineer",
        location: "Intel",
        date: "July 2020",
        icon: React.createElement(CgWorkAlt),
        description: "Developed internal tools for analysis of power and thermal simulations and studies."
    },
    {
        title: "Software Simulation Engineer",
        location: "Intel",
        date: "Jan 2022",
        icon: React.createElement(CgWorkAlt),
        description: "Developed simulation infrastructure, simulators, and models to optimize performance, power, quality, and reliability of future Intel chips."
    },
    {
        title: "Cloud Software Engineer",
        location: "Intel",
        date: "Sep 2024",
        icon: React.createElement(CgWorkAlt),
        description: "DevOps, CI/CD pipeline integration, pull requests, code reviews, load/stress testing, unit/integration/e2e testing.",
    }
] as const;

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
    "Python",
    "Bash / Shell",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "Django",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Dashlane",
    "Bokeh",
    "MySQL",
    "MongoDB",
    "R",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "AWS",
] as const;