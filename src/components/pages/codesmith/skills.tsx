import { TitleDescriptionCard } from "@/components/atoms/title-description-container";
import {
    TypographyH1,
    TypographyP,
    TypographyMuted,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";

const skills = [
    {
        title: "Languages",
        values: [
            "C",
            "C++",
            "Python",
            "Javascript",
            "Kotlin",
            "Dart",
            "Typescript",
            "Java",
        ],
    },
    {
        title: "Frameworks",
        values: ["ReactJS", "Flutter", "NodeJS", "Micronaut", "ExpressJS"],
    },
    {
        title: "Tools",
        values: ["Git", "VSCode", "Vim", "IntelliJ IDEA", "Android Studio"],
    },
];

export default function Skills() {
    return (
        <TitleDescriptionCard title="Skills">
            <div className="w-full flex flex-col justify-center items-center">
                {skills.map((skill, skill_idx) => (
                    <div
                        key={skill.title}
                        className="w-full flex justify-center relative items-start gap-4 pb-5"
                    >
                        <div
                            className={cn(
                                "w-0.5  absolute left-0 top-0 bottom-0 rounded-full",
                                skill_idx < skills.length - 1
                                    ? "bg-primary-foreground"
                                    : "bg-gradient-to-t from-transparent to-primary-foreground"
                            )}
                        ></div>
                        <CircleIcon className="bg-primary-foreground rounded-full text-primary-foreground absolute top-0 -left-1.5" />
                        <div className="w-full ml-6">
                            <TypographyH1>{skill.title}</TypographyH1>
                            <TypographyP className="flex justify-start items-center gap-4 flex-wrap">
                                {skill.values.map((value) => (
                                    <span key={value}>{value}</span>
                                ))}
                            </TypographyP>
                        </div>
                    </div>
                ))}
            </div>
        </TitleDescriptionCard>
    );
}
