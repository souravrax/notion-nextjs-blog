import Hero from "@/components/pages/home/hero";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

const gaId = process.env.GOOGLE_ANALYTICS_ID as string;

export default function Home() {
    return (
        <>
            <GoogleAnalytics gaId={gaId} />
            <VercelAnalytics />
            <VercelSpeedInsights />
            <Hero />
        </>
    );
}
