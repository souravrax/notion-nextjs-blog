"use client";
import { motion, scroll, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

export default function Hero() {
    const MotionImage = motion(Image);
    const ref = useRef<HTMLElement>() as RefObject<HTMLElement>;
    const { scrollYProgress } = useScroll();
    const scroll = useTransform(scrollYProgress, [0, 1], [0, 1]);
    useEffect(() => {
        console.log(scroll.get());
    });
    return (
        <motion.section
            className={cn(
                `relative flex justify-center items-center overflow-hidden rounded-bl-lg rounded-br-lg lg:rounded-bl-5xl lg:rounded-br-5xl flex-col gap-11 py-20`
            )}
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            ref={ref}
        >
            <motion.div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary to-transparent"></motion.div>
            <MotionImage
                fill={true}
                priority={true}
                unoptimized={true}
                alt="Sourav's Self Image"
                className="select-none -z-10 pointer-events-none"
                src="/images/self.jpg"
                animate={{
                    scale: [1, 1.2],
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 10,
                }}
                style={{
                    objectFit: "cover",
                }}
            />

            <motion.p
                className="mix-blend-luminosity"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
            >
                Hey, I&apos;m
            </motion.p>
            <Heading />

            <MotionImage
                fill={true}
                priority={true}
                alt="Sourav's Self Image"
                className="select-none mix-blend-screen pointer-events-none"
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
                    duration: 10,
                }}
                style={{
                    objectFit: "cover",
                }}
            />
            <MotionImage
                style={{
                    objectFit: "cover",
                }}
                fill={true}
                priority={true}
                alt="Sourav's Self Image"
                className="pointer-events-none select-none rotate-180 mix-blend-screen"
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
                    duration: 10,
                }}
            />
            <motion.div
                className="font-medium text-center text-sm md:text-base lg:text-lg max-w-screen-sm lg:max-w-screen-md px-5 text-white"
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
                    delay: 3,
                    ease: "easeInOut",
                }}
            >
                Embark on the digital journey of Sourav Rakshit. An adept
                software engineer during the day, a passionate photographer
                capturing life&apos;s essence in his free time. Plunge in to
                explore further!
            </motion.div>
        </motion.section>
    );
}
