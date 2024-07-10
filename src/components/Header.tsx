import React from "react";
import Menu from "@/components/Menu";
import Link from "next/link";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const ThemeSwitcher = dynamic(() => import("@/components/theme-switcher"), {
  ssr: false,
});

const HagmolyaFont = localFont({
  src: "../../public/fonts/Hagmolya.woff2",
  display: "swap",
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
      path: "../../public/fonts/Author/Author-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Author/Author-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
});

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-lg px-4 py-4 md:px-16 md:py-8 lg:px-32">
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
                "font-base text-nowrap rounded-full text-center text-base uppercase text-primary transition-all hover:scale-[101%] md:text-lg lg:text-xl",
                // AuthorFont.className,
                "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent",
              )}
            >
              Sourav Rakshit
            </p>
          </Link>
          {/* <Menu> */}
          <div className="flex items-center justify-center gap-4 rounded-full bg-primary p-2 text-white">
            <ThemeSwitcher />
          </div>
          {/* </Menu> */}
        </div>
      </div>
    </header>
  );
}
