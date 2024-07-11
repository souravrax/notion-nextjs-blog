import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/providers/theme-provider";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/lib/SmoothScroll";
import { Merriweather } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const MerriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900", "300"],
  display: "swap",
});

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
        <body className={cn(MerriweatherFont.className)}>
          <NextTopLoader />
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
