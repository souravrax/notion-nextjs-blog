import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/providers/theme-provider";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/lib/SmoothScroll";
import { Bitter, Open_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import localFont from "next/font/local";

const OpenSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const AuthorFont = localFont({
  src: [
    {
      path: "../../public/fonts/Author/Author-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Author/Author-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Author/Author-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Author/Author-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Author/Author-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
});

const BoskaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Boska/Boska-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Boska/Boska-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Boska/Boska-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Boska/Boska-Bold.woff2",
      weight: "700",
    },
  ],
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
        <body className={cn(OpenSansFont.className)}>
          <ThemeProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </body>
      </SmoothScroll>
    </html>
  );
}
