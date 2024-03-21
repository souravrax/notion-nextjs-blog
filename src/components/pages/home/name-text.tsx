"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NameText() {
    return (
        <>
            <h1
                className={cn(
                    "text-7xl lg:text-9xl font-extrabold flex flex-col md:flex-row justify-center items-center gap-2"
                )}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1],
                        y: [200, 0],
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="text-primary"
                >
                    Sourav
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1],
                        y: [200, 0],
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 1,
                    }}
                    className="text-secondary-foreground"
                >
                    Rakshit
                </motion.span>
            </h1>
            <div className="w-full h-40 relative">
                {/* Gradients */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-x-20 top-0 left-1/2 -translate-x-1/2 right-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-x-20 top-0 left-1/2 -translate-x-1/2 right-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-x-60 top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-x-60 top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"
                />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={250}
                    className="w-full h-full"
                    particleColor="#ffffff"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </>
    );
}
