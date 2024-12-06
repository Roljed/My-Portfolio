import  React from "react"
import { CgWorkAlt } from "react-icons/cg";
import { SiIntel } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import {LuGraduationCap} from "react-icons/lu";
import projectRedisImg from "@/static/projects/project-redis-in-python.png"
import projectAnalysisImg from "@/static/projects/project-cyclistic-study.png"
import projectERDiagram from "@/static/projects/project-ER-Diagram.png"
import projectLittleLemonRestaurantImg from "@/static/projects/project-little-lemon-restaurant.png"
import certificationAWSCloudPractitioner from "@/static/certs/aws-certified-cloud-practitioner.png"
import certificationGoogleDataAnalytics from "@/static/certs/google-data-analytics-professional-certificate.png"
import certificationGoogleProjectManagement from "@/static/certs/google-project-management-certificate.png"
import certificationMetaFullStackEngineer from "@/static/certs/meta-full-stack-engineer-certificate.png"
import certificationMetaDatabaseEngineer from "@/static/certs/meta-database-engineer-certificate.png"

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
        title: "Cloud Software Engineer",
        location: "Intel",
        date: "Sep 2024",
        icon: React.createElement(SiIntel),
        description: "DevOps, CI/CD pipeline integration, pull requests, code reviews, load/stress testing, unit/integration/e2e testing.",
    },
    {
        title: "Software Simulation Engineer",
        location: "Intel",
        date: "Jan 2022",
        icon: React.createElement(SiIntel),
        description: "Developed simulation infrastructure, simulators, and models to optimize performance, power, quality, and reliability of future Intel chips."
    },
    {
        title: "Software Engineer",
        location: "Intel",
        date: "July 2020",
        icon: React.createElement(SiIntel),
        description: "Developed internal tools for analysis of power and thermal simulations and studies."
    },
    {
        title: "Graduated B.Sc. in Computer Science",
        location: "Haifa University",
        date: "Sep 2020",
        icon: React.createElement(LuGraduationCap),
        description: "Graduated BS in Computer Science",
    },
    {
        title: "Software Engineer Intern",
        location: "Intel",
        date: "Oct 2018",
        icon: React.createElement(PiStudent),
        description: "Developed internal tools for analysis of power and thermal simulations."
    },
    {
        title: "Lab Operator",
        location: "Intel",
        date: "Sep 2016",
        icon: React.createElement(CgWorkAlt),
        description: "Operation of mechanized microprocessor- chip test, requiring assessment and troubleshooting."
    },
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

export const certificationsData = [
    {
        title: "Google Data Analytics Professional",
        url: "https://www.credly.com/badges/988b67fd-c859-4ae6-b59a-93f875056982/public_url",
        imageUrl: certificationGoogleDataAnalytics,
    },
    {
        title: "Meta Full-Stack Software Engineer",
        url: "https://www.credly.com/badges/bb4bbc25-b673-4949-be55-c3945638be44/public_url",
        imageUrl: certificationMetaFullStackEngineer,
    },
    {
        title: "Google Project Management",
        url: "https://www.credly.com/badges/c3ab0266-384c-44bf-969d-7eaadd1827b7/public_url",
        imageUrl: certificationGoogleProjectManagement,
    },
    {
        title: "AWS Cloud Practitioner",
        url: "https://www.credly.com/badges/8817feb2-37b8-4b9f-b217-92dc21c636b9/public_url",
        imageUrl: certificationAWSCloudPractitioner,
    },
    {
        title: "Meta Database Engineer",
        url: "https://www.credly.com/badges/468973e9-9697-40c8-b030-69c7762641f6/public_url",
        imageUrl: certificationMetaDatabaseEngineer,
    }
] as const;