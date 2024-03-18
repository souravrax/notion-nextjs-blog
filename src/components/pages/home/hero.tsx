import { TypographyH1, TypographyP } from "@/components/ui/typography";
import React from "react";

export default function Hero() {
    return (
        <div>
            <TypographyP>Hey there!, my name is</TypographyP>
            <TypographyH1 className="text-5xl lg:text-9xl">
                Sourav Rakshit
            </TypographyH1>
        </div>
    );
}
