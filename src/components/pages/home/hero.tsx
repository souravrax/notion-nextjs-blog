"use client";
import { motion, scroll, useScroll, useTransform } from "framer-motion";
import { cn } from "@/libs/utils";
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
                `h-screen relative flex justify-end py-[5%] items-end overflow-hidden flex-col gap-11 px-5`
            )}
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            ref={ref}
        >
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
            <MotionImage
                fill={true}
                priority={true}
                alt="Sourav's Self Image"
                className="select-none pointer-events-none mix-blend-screen opacity-50"
                src="/images/cloud.png"
                initial={{
                    opacity: 0,
                    x: -400,
                }}
                animate={{
                    opacity: 0.5,
                    x: -300,
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
                className="pointer-events-none select-none rotate-180 mix-blend-screen opacity-50"
                src="/images/cloud.png"
                initial={{
                    opacity: 0,
                    x: 400,
                }}
                animate={{
                    opacity: 0.5,
                    x: 300,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 10,
                }}
            />
            <Heading />
            <motion.div
                className="font-light text-right text-sm md:text-base lg:text-lg max-w-screen-sm lg:max-w-screen-md px-5 text-white"
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
                    delay: 0.5,
                    // ease: "easeInOut",
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
