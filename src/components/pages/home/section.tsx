"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function LandingSection({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.main
            className="container p-6 md:p-12 lg:p-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.main>
    );
}
