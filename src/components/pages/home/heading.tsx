import { primary_font } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Heading() {
    return (
        <motion.h1
            className={cn(
                primary_font.className,
                "font-bold uppercase text-center text-primary mix-blend-multiply",
                "text-7xl md:text-9xl lg:text-10xl"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                ease: "easeInOut",
            }}
        >
            Sourav
            <br />
            Rakshit
        </motion.h1>
    );
}
