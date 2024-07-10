import React from "react";
import {
  SiGithub as GithubIcon,
  SiLinkedin as LinkedinIcon,
  SiInstagram as InstagramIcon,
  SiGmail as GmailIcon,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export default function Footer() {
  return (
    <footer
      className={cn(
        "mx-auto max-w-screen-lg space-y-4 px-4 py-32 md:px-16 lg:px-32",
      )}
    >
      <div className="flex w-full items-center justify-center gap-4 text-foreground/70">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="hover:scale-[105%]"
          >
            <link.icon size={24} />
          </Link>
        ))}
      </div>
      <p className="w-full text-center font-mono text-xs text-foreground/70">
        Made with ❤️ by Sourav Rakshit
      </p>
    </footer>
  );
}
