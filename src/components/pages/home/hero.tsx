import { Berkshire_Swash } from "next/font/google";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import React from "react";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const barkshire_swash_font = Berkshire_Swash({
    weight: "400",
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <section className="w-full pt-10 pb-20 space-y-10">
            <div className="w-full flex justify-center items-center flex-col">
                <TypographyP>Hey there, it's me</TypographyP>
                <TypographyH1
                    className={cn(
                        "text-5xl lg:text-9xl"
                        // barkshire_swash_font.className
                    )}
                >
                    <span className="text-primary">Sourav </span>
                    <span className="text-secondary-foreground">Rakshit</span>
                </TypographyH1>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <TypewriterEffect
                words={[
                    { text: "Peek" },
                    { text: "into" },
                    { text: "my" },
                    { text: "digital" },
                    { text: "and" },
                    { text: "visual" },
                    { text: "symphonies" },
                ]}
            />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                <div className="border border-foreground/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
                    <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
                    <EvervaultCard text="Codesmith" />
                    <h2 className="text-foreground mt-4 text-sm font-light">
                        Architect of Digital Realms, Crafting Tomorrow{"'"}s
                        Solutions.
                    </h2>
                    <Link href="/codesmith">
                        <p className="text-sm border font-light border-foreground/[0.2] rounded-full mt-4 text-foreground px-2 py-0.5">
                            Learn more
                        </p>
                    </Link>
                </div>
                <div className="border border-foreground/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
                    <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                    <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
                    <EvervaultCard text="Lensmith" />
                    <h2 className="text-foreground mt-4 text-sm font-light">
                        Master of Moments, Capturing Life{"'"}s Beauty Frame by
                        Frame.
                    </h2>
                    <Link href="/lensmith">
                        <p className="text-sm border font-light border-foreground/[0.2] rounded-full mt-4 text-foreground px-2 py-0.5">
                            Learn more
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
