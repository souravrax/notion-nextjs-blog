import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/providers/theme-provider";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/lib/SmoothScroll";
import {
  Bitter,
  Bree_Serif,
  IBM_Plex_Serif,
  Libre_Baskerville,
  Lora,
  Merriweather,
  Open_Sans,
  Playfair_Display,
  PT_Serif,
} from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const OpenSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const LoraFont = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "100", "300", "500", "600"],
  display: "swap",
});

const BreeSerifFont = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Redaction = localFont({
  src: [
    {
      path: "../../public/fonts/Redaction/Redaction-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Redaction/Redaction-Bold.woff2",
      weight: "700",
    },
  ],
});

const ChubboFont = localFont({
  src: [
    {
      path: "../../public/fonts/Chubbo/Chubbo-Extralight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/Chubbo/Chubbo-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Chubbo/Chubbo-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Chubbo/Chubbo-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Chubbo/Chubbo-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
});

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
