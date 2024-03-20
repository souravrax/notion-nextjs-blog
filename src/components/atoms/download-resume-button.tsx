import { ArrowDownToLine } from "lucide-react";
import React from "react";

export default function DownloadResumeButton() {
    return (
        <a
            href="./Sourav_Rakshit_Resume.pdf"
            download="Sourav_Rakshit_Resume"
            className="bg-background no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-medium leading-6  text-foreground inline-block"
        >
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>Download resume</span>
                <ArrowDownToLine height={15} />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-primary to-primary/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
    );
}
