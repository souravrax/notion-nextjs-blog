"use client";
import { TypographyP, TypographyProps } from "@/components/ui/typography";
import { motion } from "framer-motion";
import React from "react";

export default function Kicker(props: TypographyProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: [1],
                scale: 1,
            }}
            transition={{
                duration: 1,
            }}
        >
            <TypographyP {...props} />
        </motion.div>
    );
}
