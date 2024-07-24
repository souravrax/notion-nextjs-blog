import Link from "next/link";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { HagmolyaFont } from "./Fonts";

const ThemeSwitcher = dynamic(() => import("@/components/theme-switcher"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-2xl px-4 py-4 md:px-16 md:py-8 lg:px-32">
      <div className="flex w-full items-center justify-between gap-4 rounded-full bg-background/30 backdrop-blur-xl">
        <Link href="/">
          <h1
            className={cn(
              HagmolyaFont.className,
              "bg-clip-text text-end text-4xl text-foreground md:text-5xl lg:text-center lg:text-6xl",
            )}
          >
            Blogs
          </h1>
        </Link>
        <div className="flex items-center justify-start gap-1.5">
          <p className="text-xs lowercase">By</p>
          <Link href="https://www.souravrax.com/" target="_blank">
            <p
              className={cn(
                "font-base text-nowrap rounded-full text-center text-base text-primary transition-all hover:scale-[101%] md:text-lg lg:text-xl",
                "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent",
              )}
            >
              Sourav Rakshit
            </p>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
