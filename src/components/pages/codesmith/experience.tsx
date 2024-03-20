import { TitleDescriptionCard } from "@/components/atoms/title-description-container";
import {
    TypographyH1,
    TypographyLead,
    TypographyP,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CircleIcon, TargetIcon } from "@radix-ui/react-icons";
import React from "react";

const experiences = [
    {
        company: "Commerce Fabric Solutions Private Ltd.",
        designation: "Software Development Engineer 2",
        works: [
            "Developed end-to-end self-service onboarding app using Kotlin, Micronaut, React, and gained exposure to GraphQL.",
            "Engineered company's one of the most ambitious projects of creating a Design System using reusable React UI components with comprehensive documentation.",
            "Created visually appealing and scalable micro-frontend applications following design guidelines and implemented feature flagging with Unleash for streamlined testing and access control.",
            "Led the development of a crucial micro frontend, specifically focusing on the global navigation system. Ensured scalability and seamless navigation throughout the application",
            "Constructed a storefront application using Next.js 13, integrating the fabric's own APIs for a seamless user experience, and collaborated with Contentful to integrate a robust CMS system into the storefront application.",
        ],
        location: "Remote, India",
        tenure: "March 2022 - Present",
    },
    {
        company: "Tata Consultancy Services",
        designation: "System Engineer",
        works: [
            "Created and enhanced API endpoints utilizing .NET Framework for the KPMG client",
        ],
        location: "Remote, India",
        tenure: "July 2021 - March 2022",
    },
];

export default function Experience() {
    return (
        <TitleDescriptionCard title="Experience">
            <div className="w-full flex flex-col justify-center items-center">
                {experiences.map((experience, exp_idx) => (
                    <div
                        key={experience.company}
                        className="w-full flex justify-center relative items-start gap-4"
                    >
                        <div
                            className={cn(
                                "w-0.5  absolute left-0 top-0 bottom-0 rounded-full",
                                exp_idx < experiences.length - 1
                                    ? "bg-primary-foreground"
                                    : "bg-gradient-to-t from-transparent to-primary-foreground"
                            )}
                        ></div>
                        <CircleIcon className="bg-primary-foreground rounded-full text-primary-foreground absolute top-0 -left-1.5" />
                        <div className="w-full ml-6 pb-5">
                            <TypographyH1>{experience.company}</TypographyH1>
                            <TypographyLead>
                                {experience.designation}
                            </TypographyLead>
                            <div className="flex flex-col justify-start items-start py-5">
                                {experience.works.map((work, idx) => (
                                    <TypographyP key={work}>
                                        {idx + 1}. {work}
                                    </TypographyP>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TitleDescriptionCard>
    );
}
