import type { Metadata } from "next";
import { Poppins, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/providers/theme-provider";
import Footer from "@/components/layout/footer/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";
import HeroHeader from "@/components/pages/home/header";

const gaId = process.env.GOOGLE_ANALYTICS_ID as string;

const gf_zilla_slab = Zilla_Slab({
    subsets: ["latin"],
    weight: "500",
});

export const metadata: Metadata = {
    title: "Sourav Rakshit",
    description:
        "Combining my expertise in software development with a creative flair cultivated through photography, I deliver innovative solutions that seamlessly blend form and function, elevating your digital presence to new heights.",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <GoogleAnalytics gaId={gaId} />
            <VercelAnalytics />
            <VercelSpeedInsights />
            <body className={cn(gf_zilla_slab.className)}>
                <ThemeProvider>
                    <TooltipProvider>
                        {/* <Header /> */}
                        <HeroHeader />
                        <main className="container">{children}</main>
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
