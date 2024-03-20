import { TypographyP } from "@/components/ui/typography";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import NameText from "./name-text";

export default function Hero() {
    return (
        <section className="w-full pt-10 pb-20 space-y-10">
            <div className="w-full flex justify-center items-center flex-col">
                <TypographyP>Hey there, it&apos;s me</TypographyP>
                <NameText />
            </div>
            <TypewriterEffect
                className="text-sm md:text-xl lg:text-2xl"
                cursorClassName="h-3 md:h-4 lg:h-6"
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
                <Link href="/codesmith">
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
                        <p className="text-sm border font-light border-foreground/[0.2] rounded-full mt-4 text-foreground px-2 py-0.5">
                            Learn more
                        </p>
                    </div>
                </Link>
                <Link href="/lensmith">
                    <div className="border border-foreground/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
                        <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                        <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                        <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                        <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
                        <EvervaultCard text="Lensmith" />
                        <h2 className="text-foreground mt-4 text-sm font-light">
                            Master of Moments, Capturing Life{"'"}s Beauty Frame
                            by Frame.
                        </h2>
                        <p className="text-sm border font-light border-foreground/[0.2] rounded-full mt-4 text-foreground px-2 py-0.5">
                            Learn more
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
}
