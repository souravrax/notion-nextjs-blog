import {
    TypographyH3,
    TypographyH4,
    TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <nav className="container py-3">
            <div className="border rounded-xl py-3 px-5 justify-between flex items-center">
                <Link href="/">
                    <TypographyH4>Sourav Rakshit</TypographyH4>
                </Link>
                <div className="flex justify-center items-center gap-2">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:underline">
                        Project
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
