import { TypographySmall } from "@/components/ui/typography";
import {
    GitHubLogoIcon,
    HeartFilledIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { YoutubeIcon } from "lucide-react";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { link } from "fs";

const links = [
    {
        name: "Github",
        link: "https://github.com/souravrax",
        icon: <GitHubLogoIcon />,
    },
    {
        name: "Linkedin",
        icon: <LinkedInLogoIcon />,
        link: "https://linkedin.com/in/souravrax",
    },
    {
        name: "Youtube",
        icon: <YoutubeIcon height={16} />,
        link: "https://www.youtube.com/souravrakshit",
    },
    {
        name: "X(Twitter)",
        icon: <TwitterLogoIcon />,
        link: "https://x.com/ImSouravRakshit",
    },
    {
        name: "Instagram",
        icon: <InstagramLogoIcon />,
        link: "https://www.instagram.com/souravrax",
    },
];

export default function Footer() {
    return (
        <>
            <section className="py-10 flex flex-col justify-center items-center gap-5">
                <div
                    id="social_links"
                    className="flex items-center justify-center gap-4"
                >
                    {links.map((link) => (
                        <Tooltip key={link.name}>
                            <TooltipTrigger>
                                <Link href={link.link} target="_blank">
                                    {link.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <TypographySmall>{link.name}</TypographySmall>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
                <TypographySmall className="flex items-center justify-center gap-1">
                    Made with <HeartFilledIcon className="text-red-500" /> by
                    <Link
                        href="https://www.souravrax.com/"
                        className="text-blue-500"
                    >
                        Sourav Rakshit
                    </Link>
                </TypographySmall>
            </section>
        </>
    );
}
