"use client";
import { primary_font, tertiary_font } from "@/assets/fonts";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowDownToLine } from "lucide-react";
import React from "react";

export default function DownloadResumeButton() {
    return (
        <motion.a
            href="./Sourav_Rakshit_Resume.pdf"
            download="Sourav_Rakshit_Resume"
            className="bg-foreground text-background no-underline group cursor-pointer relative shadow-xl shadow-primary ring-1 ring-primary/30 rounded-full p-px text-xs font-medium leading-6"
            initial={{
                y: -30,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                delay: 3,
            }}
        >
            <motion.div className="relative flex flex-col items-center py-1 px-5">
                {/* <ArrowDownCircle size={20} /> */}
                <span
                    className={cn(
                        "uppercase tracking-widest",
                        primary_font.className
                    )}
                >
                    Download
                </span>
            </motion.div>
        </motion.a>
    );
}
