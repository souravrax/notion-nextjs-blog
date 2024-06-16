"use client";
import { cn } from "@/lib/utils";
import { Gloock } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const gloock_font = Gloock({
    subsets: ["latin"],
    weight: "400",
});

export default function HeroHeader() {
    const location = usePathname();
    const [isNotHome, setIsNotHome] = useState(location != "/");
    useEffect(() => {
        setIsNotHome(location !== "/");
    }, [location]);
    return (
        <AnimatePresence>
            <motion.header
                className={cn(
                    "flex justify-center items-center rounded-bl-5xl rounded-br-5xl select-none",
                    isNotHome
                        ? "flex-col py-3 px-24 sticky left-0 right-0 top-0 z-50 justify-between rounded-none backdrop-blur-xl bg-secondary/30 gap-2"
                        : "flex-col gap-8 bg-heroImage bg-cover bg-no-repeat bg-center backdrop-blur-sm py-24 lg:py-48"
                )}
                initial={{ y: -200, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <motion.div className="space-y-5" layout>
                    <Link href={"/"}>
                        <motion.h1
                            className={cn(
                                gloock_font.className,
                                "font-bold uppercase text-center text-primary",
                                isNotHome ? "lg:text-3xl" : "lg:text-9xl",
                                isNotHome ? "md:text-md" : "md:text-7xl",
                                isNotHome ? "text-sm" : "text-5xl"
                            )}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Sourav
                            {!isNotHome ? <br /> : " "}
                            Rakshit
                        </motion.h1>
                    </Link>
                    {!isNotHome ? (
                        <motion.p
                            className="font-medium text-center text-sm md:text-[10px] lg:text-[20px] max-w-screen-sm md:max-w-screen-md px-5 text-secondary"
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
                            }}
                        >
                            Embark on the digital journey of Sourav Rakshit. An
                            adept software engineer during the day, a passionate
                            photographer capturing life&apos;s essence in his
                            free time. Plunge in to explore further!
                        </motion.p>
                    ) : null}
                </motion.div>
                <motion.ul
                    id="nav-menu"
                    className="flex flex-row gap-5 justify-center items-center"
                    layout
                >
                    {navItems.map((item, idx) => (
                        <motion.li
                            key={item.name}
                            initial={{
                                opacity: 0,
                                y: -10,
                            }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: "easeInOut",
                                delay: 0.5 + 0.1 * (idx + 1),
                            }}
                            className="relative items-center justify-center flex"
                        >
                            <Link
                                className={cn(
                                    "px-4 py-2",
                                    location.match(item.url)
                                        ? "text-background"
                                        : "underline text-link",
                                    isNotHome
                                        ? "text-sm md:text-md"
                                        : "text-md md:text-xl lg:text-3xl text-background"
                                )}
                                href={item.url}
                            >
                                {item.name}
                            </Link>
                            {location.startsWith(item.url) ? (
                                <motion.div
                                    layoutId="activePage"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute top-0 left-0 bottom-0 right-0 -z-10 bg-foreground rounded-lg"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.header>
        </AnimatePresence>
    );
}
