"use client";
import About from "@/components/pages/home/about";
import Hero from "@/components/pages/home/hero";
import Photography from "@/components/pages/home/photography";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <main className="space-y-4">
            <Hero />
            <About />
            <Photography />
        </main>
    );
}
