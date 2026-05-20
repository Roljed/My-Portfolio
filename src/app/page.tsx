import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
// import Contact from "@/components/contact";
import Certifications from "@/components/certifications";

export default function Home() {
  return <main className="flex flex-col items-center w-full overflow-x-hidden">
    <Intro />
    <SectionDivider />
    <About />
    <Experience />
    <Skills />
    <Certifications />
    <Projects />
    {/*<Contact />*/}
  </main>;
}
