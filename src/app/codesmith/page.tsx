import Achievements from "@/components/pages/codesmith/achievement";
import Education from "@/components/pages/codesmith/education";
import Experience from "@/components/pages/codesmith/experience";
import Kicker from "@/components/pages/codesmith/kicker";
import Projects from "@/components/pages/codesmith/projects";
import Skills from "@/components/pages/codesmith/skills";
import NameText from "@/components/pages/home/name-text";
import { Badge } from "@/components/ui/badge";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

const sections = [
    "education",
    "skill",
    "experience",
    "projects",
    "achievements",
];

export default function page() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 py-20">
            <Kicker className="text-center">
                Transforming your ideas into seamless digital experiences -
                let&apos;s collaborate! I&apos;m
            </Kicker>
            <NameText />
            <TypewriterEffect
                className="text-md md:text-md lg:text-xl"
                cursorClassName="h-6 md:h-6 lg:h-8 hidden"
                words={"a passionate software developer, ready to bring your vision to life."
                    .split(" ")
                    .map((word) => ({ text: word }))}
            />
            <div className="w-full flex-wrap flex justify-center items-center gap-2">
                {sections.map((section) => (
                    <Link key={`${section}-tag-redirect`} href={`#${section}`}>
                        <Badge>#{section}</Badge>
                    </Link>
                ))}
            </div>
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
        </section>
    );
}
