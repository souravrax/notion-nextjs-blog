import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/providers/theme-provider";
import Footer from "@/components/layout/footer/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Poppins({
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
            <body className={cn(inter.className)}>
                <ThemeProvider>
                    <TooltipProvider>
                        <Header />
                        <main className="container">{children}</main>
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
