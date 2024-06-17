"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import Image from "next/image";

export default function Hero() {
    const MotionImage = motion(Image);
    return (
        <motion.section
            className={cn(
                `flex justify-center items-center select-none overflow-hidden backdrop-grayscale rounded-bl-5xl rounded-br-5xl flex-col gap-11 py-20`
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <MotionImage
                fill={true}
                priority={true}
                unoptimized={true}
                alt="Sourav's Self Image"
                layout="preserve-aspect"
                className="select-none -z-10"
                objectFit="cover"
                src="/images/self.jpg"
                animate={{
                    scale: [1, 1.2],
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 15,
                }}
            />

            <motion.p className="">Hey, I&apos;m</motion.p>
            <Heading />
            <motion.div
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
            </motion.div>
            <MotionImage
                fill={true}
                priority={true}
                alt="Sourav's Self Image"
                layout="preserve-aspect"
                className="select-none mix-blend-screen"
                objectFit="cover"
                src="/images/cloud.png"
                initial={{
                    opacity: 0,
                    x: -400,
                }}
                animate={{
                    opacity: 0.5,
                    x: -200,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 20,
                }}
            />
            <MotionImage
                fill={true}
                priority={true}
                alt="Sourav's Self Image"
                layout="preserve-aspect"
                className="select-none rotate-180 mix-blend-screen"
                objectFit="cover"
                src="/images/cloud.png"
                initial={{
                    opacity: 0,
                    x: 400,
                }}
                animate={{
                    opacity: 0.5,
                    x: 200,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 20,
                }}
            />
        </motion.section>
    );
}
