"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

export default function Hero() {
    return (
        <motion.section
            className={cn(
                `flex justify-center items-center select-none overflow-hidden backdrop-grayscale rounded-bl-5xl rounded-br-5xl flex-col`,
                `gap-11 relative bg-heroImage bg-cover bg-no-repeat bg-center backdrop-blur-sm py-20`
            )}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 2 }}
        >
            <motion.p>Hey, I&apos;m</motion.p>
            <motion.div className="space-y-5" layout>
                <Heading />
                <motion.p
                    className="font-medium text-center text-sm md:text-base lg:text-lg max-w-screen-sm lg:max-w-screen-md px-5 text-background"
                    key="portfolio-description"
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    Embark on the digital journey of Sourav Rakshit. An adept
                    software engineer during the day, a passionate photographer
                    capturing life&apos;s essence in his free time. Plunge in to
                    explore further!
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
