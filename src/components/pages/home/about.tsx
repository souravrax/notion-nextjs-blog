import React from "react";
import LandingSection from "./section";
import { primary_font } from "@/assets/fonts";
import { cn } from "@/lib/utils";

export default function About() {
    return (
        <LandingSection>
            <div className="w-full grid md:grid-cols-2 gap-3 md:gap-7 lg:gap-10">
                <div className="flex flex-col justify-center items-start gap-10">
                    <h2
                        className={cn(
                            primary_font.className,
                            "text-4xl md:text-5xl lg:text-6xl text-primary"
                        )}
                    >
                        About Sourav
                    </h2>
                    <p
                        className={cn(
                            "text-sm md:text-base lg:text-lg text-primary/70"
                        )}
                    >
                        In the realm of ones and zeros, Sourav dances with
                        elegance. As a software engineer, he weaves symphonies
                        in syntax, guiding software from embryonic concepts to
                        full-blown applications.
                    </p>
                    <p
                        className={cn(
                            "text-sm md:text-base lg:text-lg text-primary/70"
                        )}
                    >
                        When the day’s work rings its closing bell, another
                        exciting venture kicks off. Sourav’s eyes, skilled at
                        zeroing in on bugs, switch their focus to finding beauty
                        through a lens.
                    </p>
                    <p
                        className={cn(
                            "text-sm md:text-base lg:text-lg text-primary/70"
                        )}
                    >
                        Embarking on this website takes you on a journey through
                        his professional and personal endeavors. It’s a gallery,
                        a portfolio, a luminary reflection of Sourav’s world.
                    </p>
                </div>
                <div></div>
            </div>
        </LandingSection>
    );
}
