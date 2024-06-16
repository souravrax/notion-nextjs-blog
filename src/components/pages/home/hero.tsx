"use client";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Gloock } from "next/font/google";

export default function Hero() {
    return (
        <>
            <HeroBanner />
            <section className="w-full pt-10 pb-20 space-y-10">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    <Link href="/codesmith">
                        <div className="border border-foreground/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
                            <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                            <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                            <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                            <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
                            <EvervaultCard text="Codesmith" />
                            <h2 className="text-foreground mt-4 text-sm font-light">
                                Architect of Digital Realms, Crafting Tomorrow
                                {"'"}s Solutions.
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
                                Master of Moments, Capturing Life{"'"}s Beauty
                                Frame by Frame.
                            </h2>
                            <p className="text-sm border font-light border-foreground/[0.2] rounded-full mt-4 text-foreground px-2 py-0.5">
                                Learn more
                            </p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

const gloock_font = Gloock({
    subsets: ["latin"],
    weight: "400",
});

function MotionHeader({ isNotHome }: { isNotHome: boolean }) {
    return (
        <motion.h1
            className={cn(
                gloock_font.className,
                "font-bold uppercase text-center text-primary mix-blend-multiply",
                isNotHome ? "lg:text-3xl" : "lg:text-10xl",
                isNotHome ? "md:text-md" : "md:text-7xl",
                isNotHome ? "text-sm" : "text-5xl"
            )}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 0.7,
            }}
        >
            Sourav
            {!isNotHome ? <br /> : " "}
            Rakshit
        </motion.h1>
    );
}

function HeroBanner() {
    return (
        <motion.section
            className={cn(
                "flex justify-center items-center select-none overflow-hidden backdrop-grayscale rounded-bl-5xl rounded-br-5xl",
                // isNotHome
                // ? "flex-col py-2 px-24 sticky left-0 right-0 top-0 z-50 justify-between rounded-none backdrop-blur-xl bg-secondary/30 gap-2"
                "flex-col gap-11 relative bg-heroImage bg-cover bg-no-repeat bg-center backdrop-blur-sm h-[85vh]"
            )}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 2 }}
        >
            <motion.p>Hey, I&apos;m</motion.p>
            <motion.div className="space-y-5" layout>
                <MotionHeader isNotHome={false} />
                <AnimatePresence>
                    <motion.p
                        className="font-medium text-center text-sm md:text-[10px] lg:text-[20px] max-w-screen-sm md:max-w-screen-md px-5 text-background"
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
                        Embark on the digital journey of Sourav Rakshit. An
                        adept software engineer during the day, a passionate
                        photographer capturing life&apos;s essence in his free
                        time. Plunge in to explore further!
                    </motion.p>
                </AnimatePresence>
            </motion.div>
        </motion.section>
    );
}
