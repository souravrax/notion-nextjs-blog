"use client";
import { cn } from "@/lib/utils";
import { Gloock, Open_Sans, Source_Sans_3 } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const gloock_font = Gloock({
    subsets: ["latin"],
    weight: "400",
});

const playfair_display = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400"],
});

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

function NavBar() {
    const location = usePathname();
    const [hoveredUrl, setHoveredUrl] = useState<string>(location);
    useEffect(() => {
        setHoveredUrl(location);
    }, [location]);
    return (
        <motion.nav>
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
                            delay: 0.5 + 0.2 * idx,
                            duration: 0.2,
                        }}
                        className="relative items-center justify-center flex"
                        onMouseEnter={() => setHoveredUrl(item.url)}
                        onMouseLeave={() => setHoveredUrl(location)}
                    >
                        <Link
                            className={cn(
                                "uppercase px-4 py-2 text-xs font-light",
                                location.startsWith(item.url)
                                    ? "text-background"
                                    : "text-foreground",
                                playfair_display.className
                            )}
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                        {hoveredUrl == item.url ? (
                            <motion.div
                                layoutId="linkHover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute top-0 left-0 bottom-0 right-0 -z-10 bg-foreground/30"
                            />
                        ) : null}
                        {location.startsWith(item.url) ? (
                            <motion.div
                                layoutId="activePage"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute top-0 left-0 bottom-0 right-0 -z-10 bg-foreground"
                            />
                        ) : null}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
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
                <NavBar />
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
