"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

export default function ToggleHandle({
  text,
  children,
  className,
}: {
  text: React.ReactNode;
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-start gap-2">
        <motion.button
          onClick={() => setShow((v) => !v)}
          className="rounded-lg bg-secondary p-1 text-secondary-foreground"
          animate={{
            rotate: show ? 90 : 0,
          }}
        >
          <ChevronRightIcon size={16} />
        </motion.button>
        {text}
      </div>
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={cn("pl-8", className)}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
