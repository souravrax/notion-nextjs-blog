import { Gloock, Source_Sans_3, Zilla_Slab } from "next/font/google";

export const primary_font = Gloock({
    subsets: ["latin"],
    weight: "400",
});

export const secondary_font = Zilla_Slab({
    subsets: ["latin"],
    weight: "500",
});

export const tertiary_font = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400"],
});
