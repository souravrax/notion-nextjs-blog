import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/libs/utils";
import ThemeProvider from "@/libs/providers/theme-provider";
import Footer from "@/components/layout/footer/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/header/header";
import { secondary_font } from "@/assets/fonts";
import SmoothScroll from "@/utils/SmoothScroll";

const gaId = process.env.GOOGLE_ANALYTICS_ID as string;

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
        <html lang="en">
            <GoogleAnalytics gaId={gaId} />
            <VercelAnalytics />
            <VercelSpeedInsights />
            <SmoothScroll>
                <body className={cn(secondary_font.className)}>
                    <ThemeProvider>
                        <TooltipProvider>
                            <Header />
                            {children}
                            <Footer />
                        </TooltipProvider>
                    </ThemeProvider>
                </body>
            </SmoothScroll>
        </html>
    );
}
