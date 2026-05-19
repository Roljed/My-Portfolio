import projectRedisImg from "../../public/projects/project-redis-in-python.png"
import projectAnalysisImg from "../../public/projects/project-cyclistic-study.png"
import projectERDiagram from "../../public/projects/project-ER-Diagram.png"
import projectLittleLemonRestaurantImg from "../../public/projects/project-little-lemon-restaurant.png"
import certificationAWSCloudPractitioner from "../../public/certs/aws-certified-cloud-practitioner.png"
import certificationGoogleDataAnalytics from "../../public/certs/google-data-analytics-professional-certificate.png"
import certificationGoogleProjectManagement from "../../public/certs/google-project-management-certificate.png"
import certificationMetaFullStackEngineer from "../../public/certs/meta-full-stack-engineer-certificate.png"
import certificationMetaDatabaseEngineer from "../../public/certs/meta-database-engineer-certificate.png"

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
    // {
    //     name: "Contact",
    //     hash: "#contact"
    // },
] as const;

export const experiencesData = [
    {
        title: "Senior Cloud Software Engineer / Tech Lead",
        location: "Intel Corporation",
        date: "Feb 2026 – Present",
        icon: "intel",
        bullets: [
            "Serve as Tech Lead for a platform/DevOps squad, balancing day-to-day framework maintenance with technical guidance for the team.",
            "Maintain, test, and extend features within our core internal infrastructure and CI/CD frameworks built on Jenkins and GitHub Actions.",
            "Write and review Python automation scripts to streamline internal operations and support concurrent engineering workflows.",
            "Build custom, internal AI tools using LangChain to help colleagues parse documentation, automate runbooks, and reduce repetitive daily tasks.",
            "Guide team workflows, coordinate task allocation, and mentor peers on code reviews and testing standards.",
        ],
    },
    {
        title: "Cloud Software Engineer / Tech Lead",
        location: "Intel Corporation",
        date: "Jan 2025 – Feb 2026",
        icon: "intel",
        bullets: [
            "Appointed to a Tech Lead role to oversee the stability and release practices of our existing internal cloud platform pipelines.",
            "Extended framework capabilities to support new deployment requirements while ensuring zero downtime or disruption for internal users.",
            "Maintained continuous integration environments, troubleshooted pipeline failures, and optimized execution steps in Jenkins and GitHub Actions.",
        ],
    },
    {
        title: "Cloud Software Engineer",
        location: "Intel Corporation",
        date: "Sep 2024 – Jan 2025",
        icon: "intel",
        bullets: [
            "Assisted in the day-to-day integration and maintenance of CI/CD artifact promotion pipelines.",
            "Wrote and updated automated tests (such as unit and integration tests) to ensure framework stability before updates are rolled out.",
            "Worked with on-premises cloud infrastructure components, focusing on script reliability, environment consistency, and pipeline observability.",
        ],
    },
    {
        title: "Software Simulation Engineer",
        location: "Intel Corporation",
        date: "Jan 2022",
        icon: "intel",
        description: "Built and scaled simulation infrastructure and tooling in Python—automation, batch orchestration, and internal platforms that improved performance/power modeling workflows for next-gen Intel silicon.",
    },
    {
        title: "Software Engineer",
        location: "Intel Corporation",
        date: "July 2020",
        icon: "intel",
        description: "Developed Python-based internal platforms for power and thermal simulation analysis—data pipelines, reproducible studies, and tooling used by cross-functional hardware teams.",
    },
    {
        title: "Graduated B.Sc. in Computer Science",
        location: "Haifa University",
        date: "Sep 2020",
        icon: "graduation",
        description: "Graduated BS in Computer Science",
    },
    {
        title: "Software Engineer Intern",
        location: "Intel Corporation",
        date: "Oct 2018",
        icon: "intern",
        description: "Developed internal tools for analysis of power and thermal simulations."
    },
    {
        title: "Lab Operator",
        location: "Intel Corporation",
        date: "Sep 2016",
        icon: "work",
        description: "Operation of mechanized microprocessor- chip test, requiring assessment and troubleshooting."
    },
] as const;

export type ExperienceItem = (typeof experiencesData)[number];
export type ExperienceIcon = ExperienceItem["icon"];

export const intelCloudGroup = {
    employer: "Intel Corporation",
    headline: "Senior Cloud Software Engineer / Tech Lead",
    roles: experiencesData.slice(0, 3),
} as const;

export const desktopExperienceItems = [
    { type: "group" as const, ...intelCloudGroup },
    ...experiencesData.slice(3).map((item) => ({ type: "single" as const, ...item })),
];

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
    "GCP",
    "LangChain",
    "Platform Engineering",
    "IaC",
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