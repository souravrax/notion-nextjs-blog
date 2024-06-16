import React from "react";
import LandingSection from "./section";
import { primary_font } from "@/assets/fonts";
import { cn } from "@/lib/utils";

export default function Photography() {
    return (
        <LandingSection>
            <div className="flex flex-col justify-center items-start gap-10">
                <h2
                    className={cn(
                        primary_font.className,
                        "text-4xl md:text-5xl lg:text-6xl text-primary"
                    )}
                >
                    Captured Moments
                </h2>
                <div className="grid grid-cols-2 grid-rows-3 h-[900px] w-full gap-4">
                    <div className="col-span-1 row-span-1 rounded-lg bg-primary"></div>
                    <div className="col-span-1 row-span-2 rounded-lg bg-primary"></div>
                    <div className="col-span-1 row-span-2 rounded-lg bg-primary"></div>
                    <div className="col-span-1 row-span-1 rounded-lg bg-primary"></div>
                </div>
            </div>
        </LandingSection>
    );
}
