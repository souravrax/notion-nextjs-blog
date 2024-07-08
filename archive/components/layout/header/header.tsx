"use client";
import { cn } from "@/libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "./nav-bar";
import { primary_font } from "../../../assets/fonts";

export function Logo() {
    return (
        <motion.h1
            className={cn(
                primary_font.className,
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
                location == "/"
                    ? "fixed bg-transparent"
                    : "sticky backdrop-blur-lg",
                "top-0 left-0  right-0 z-20"
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
                <AnimatePresence>
                    <Link className={cn()} href={"/"}>
                        <Logo />
                    </Link>
                </AnimatePresence>
                <NavigationMenu />
            </div>
        </motion.header>
    );
}
