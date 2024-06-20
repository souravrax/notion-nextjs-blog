import { primary_font } from "@/assets/fonts";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";

export function Heading() {
    return (
        <motion.h1
            className={cn(
                primary_font.className,
                "font-bold uppercase text-right text-primary tracking-widest z-10",
                "text-7xl md:text-9xl lg:text-10xl"
            )}
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
                // ease: "easeInOut",
                staggerChildren: 0.5,
                // duration: 0.5,
            }}
        >
            <motion.span
                className={cn("text-black text-5xl md:text-7xl lg:text-8xl")}
            >
                Sourav
            </motion.span>
            <br />
            <motion.span
                className={cn("text-white text-7xl md:text-9xl lg:text-10xl")}
            >
                Rakshit
            </motion.span>
        </motion.h1>
    );
}
