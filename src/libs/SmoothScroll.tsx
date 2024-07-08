"use client";
import { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
export default function SmoothScroll({ children }: { children: ReactNode }) {
    // const lenis = useLenis(() => {});
    return <ReactLenis root>{children}</ReactLenis>;
}
