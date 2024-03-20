import { TitleDescriptionCard } from "@/components/atoms/title-description-container";
import {
    TypographyH1,
    TypographyH2,
    TypographyH4,
    TypographyLarge,
    TypographyLead,
    TypographyP,
    TypographySmall,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";

const achievements = [
    {
        title: "Ranked 36(Global) and 1(India) in Leetcode contest",
        description: "Rated 2337*",
        platform: "Leetcode",
        year: "2022",
    },
    {
        title: "Wrote 33 Editorial",
        description: "Received 337* upvotes",
        platform: "Binarysearch.com",
        year: "2022",
    },
    {
        title: "Became Specialist",
        description: "Max rating of 1571*",
        platform: "Codeforces",
        year: "2021",
    },
    {
        title: "Became 5 Kyu*",
        description: "Max rating of 1135*",
        platform: "Atcoder.jp",
        year: "2021",
    },
    {
        title: "Listed among top 1% contestants",
        description: "Achieved a rating of 1971*",
        platform: "Binarysearch.com",
        year: "2021",
    },
    {
        title: "Ranked 179 Globally and 48 in India",
        description: "Achieved my best rank in Google Kickstart till date",
        platform: "Google Kick Start 2021",
        year: "2021",
    },
    {
        title: "Qualified for Google Codejam",
        description: "Successfully qualified the Google Codejam Qualifier",
        platform: "Google Codejam 2021",
        year: "2021",
    },
    {
        title: "Became 4*",
        description: "Got my best global rank till date, 17",
        platform: "Codechef",
        year: "2021",
    },
];

export default function Achievements() {
    return (
        <TitleDescriptionCard title="Achievements">
            <div className="w-full flex flex-col justify-center items-center">
                {achievements.map((achievement, achievement_idx) => (
                    <div
                        key={achievement.title}
                        className="w-full flex justify-start relative items-start gap-4"
                    >
                        <div
                            className={cn(
                                "w-0.5  absolute left-0 top-0 bottom-0 rounded-full",
                                achievement_idx < achievements.length - 1
                                    ? "bg-primary-foreground"
                                    : "bg-gradient-to-t from-transparent to-primary-foreground"
                            )}
                        ></div>
                        <CircleIcon className="bg-primary-foreground rounded-full text-primary-foreground absolute top-0 -left-1.5" />
                        <div className="flex justify-start items-start gap-6 ml-5">
                            <span className="px-4 text-xs py-0.5 bg-background/[0.5] border border-foreground rounded">
                                {achievement.year}
                            </span>
                            <div className="w-full pb-5">
                                <TypographyLarge className="break-all">
                                    {achievement.title}
                                </TypographyLarge>
                                <TypographySmall className="break-all">
                                    {achievement.description}
                                </TypographySmall>
                                <TypographyLead className="break-all">
                                    {achievement.platform}
                                </TypographyLead>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </TitleDescriptionCard>
    );
}
