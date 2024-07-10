import React from "react";
import {
  SiGithub as GithubIcon,
  SiLinkedin as LinkedinIcon,
  SiInstagram as InstagramIcon,
  SiGmail as GmailIcon,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

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
    <footer className="h-48">
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.url} target="_blank">
          <link.icon size={24} />
        </Link>
      ))}
    </footer>
  );
}
