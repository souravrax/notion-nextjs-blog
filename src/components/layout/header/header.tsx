"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "./nav-bar";
import { gloock_font } from "@/assets/fonts";

export function Logo() {
    return (
        <motion.h1
            className={cn(
                gloock_font.className,
                "font-bold uppercase text-center text-primary mix-blend-multiply text-sm"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 0.7,
            }}
        >
            Sourav Rakshit
        </motion.h1>
    );
}

export default function Header() {
    const location = usePathname();
    return (
        <motion.header
            className={cn(
                "sticky",
                location == "/" ? "bg-white" : "backdrop-blur-lg"
            )}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 2 }}
        >
            <div
                className={cn(
                    "flex flex-col-reverse gap-2 py-2 md:py-0 md:flex-row justify-between items-center px-8"
                )}
            >
                <NavigationMenu />
                <AnimatePresence>
                    {location !== "/" && (
                        <Link className={cn()} href={"/"}>
                            <Logo />
                        </Link>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
