import React from "react";
import Menu from "@/components/Menu";
import Link from "next/link";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import {
  SiGithub as GithubIcon,
  SiLinkedin as LinkedinIcon,
  SiInstagram as InstagramIcon,
  SiGmail as GmailIcon,
} from "@icons-pack/react-simple-icons";
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

const socialLinks = [
  { name: "Github", icon: GithubIcon, url: "https://github.com/souravrax" },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/souravrax/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/rax.lens/",
  },
  {
    name: "Gmail",
    icon: GmailIcon,
    url: "mailto:rakshitsourav3@gmail.com",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mx-auto max-w-screen-2xl px-4 py-2 md:px-16 md:py-4 lg:px-32">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-4 rounded-full border border-foreground bg-background/30 p-2 backdrop-blur-xl md:p-4 lg:grid-cols-3 lg:p-6">
        <div className="flex items-center justify-start gap-1.5">
          <Menu />
          <Link href="/">
            <p className="text-nowrap rounded-full bg-foreground p-4 text-center text-sm font-light uppercase text-background md:text-lg">
              Sourav Rakshit
            </p>
          </Link>
        </div>
        <h1
          className={cn(
            HagmolyaFont.className,
            "text-end text-5xl text-foreground md:text-6xl lg:text-center lg:text-7xl",
          )}
        >
          Blogs
        </h1>

        <div className="hidden justify-end gap-4 lg:flex">
          <ThemeSwitcher />
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.url} target="_blank">
              <link.icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
