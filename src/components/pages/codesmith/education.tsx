import { TitleDescriptionCard } from "@/components/atoms/title-description-container";
import {
    TypographyH1,
    TypographyH4,
    TypographyLarge,
    TypographyMuted,
    TypographyP,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Education() {
    return (
        <TitleDescriptionCard title="Education">
            <div className="w-full flex justify-center relative items-start gap-4">
                <div
                    className={cn(
                        "w-0.5  absolute left-0 top-0 bottom-0 rounded-full",
                        "bg-gradient-to-t from-transparent to-primary-foreground"
                    )}
                ></div>
                <CircleIcon className="bg-primary-foreground rounded-full text-primary-foreground absolute top-0 -left-1.5" />
                <div className="w-full ml-6">
                    <TypographyH1>
                        B.Tech in Computer Science and Engineering
                    </TypographyH1>
                    <TypographyP>
                        Cooch Behar Government Engineering College
                    </TypographyP>
                    <TypographyMuted>Class of 2021</TypographyMuted>
                    <TypographyMuted>CGPA: 8.5/10</TypographyMuted>
                </div>
            </div>
        </TitleDescriptionCard>
    );
}
