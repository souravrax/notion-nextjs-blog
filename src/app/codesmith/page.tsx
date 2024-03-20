import Achievements from "@/components/pages/codesmith/achievement";
import Education from "@/components/pages/codesmith/education";
import Experience from "@/components/pages/codesmith/experience";
import Projects from "@/components/pages/codesmith/projects";
import Skills from "@/components/pages/codesmith/skills";
import Hero from "@/components/pages/home/hero";
import NameText from "@/components/pages/home/name-text";
import React from "react";

export default function page() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 py-20">
            <NameText />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
        </section>
    );
}
