import { tertiary_font } from "@/assets/fonts";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavigationMenu() {
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
                                tertiary_font.className
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
