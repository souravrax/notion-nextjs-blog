"use client";
import { Badge } from "@/components/ui/badge";
import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
} from "@/components/ui/typography";
import { GithubProjectType } from "@/libs/api/github/type";
import { cn } from "@/libs/utils";
import {
    ArrowTopRightIcon,
    EyeOpenIcon,
    GitHubLogoIcon,
    StarIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const ProjectCard = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-background border border-foreground/[0.2] group-hover:border-slate-foreground/[0.4] relative z-20",
                className
            )}
        >
            <div className="p-4">{children}</div>
        </div>
    );
};

export const HoverGrid = ({
    items,
    className,
}: {
    items: GithubProjectType[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.name}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <ProjectCard>
                        <div className="w-full h-full flex flex-col gap-4">
                            <Link
                                href={item?.owner?.html_url ?? "#"}
                                className="flex items-center justify-start flex-wrap gap-2"
                                target="_blank"
                            >
                                <Image
                                    height={20}
                                    width={20}
                                    src={item?.owner?.avatar_url ?? ""}
                                    alt={"User Avatar"}
                                    className="rounded-full"
                                />
                                <Badge variant="secondary" className="w-fit">
                                    @{item?.owner?.login}
                                </Badge>
                            </Link>
                            <TypographyH2 className="text-wrap break-all">
                                {item.name}
                            </TypographyH2>

                            <div className="flex items-center justify-start flex-wrap gap-2">
                                <GitHubLogoIcon />

                                {item.fork && (
                                    <Badge variant="outline">{"Forked"}</Badge>
                                )}
                                <Badge className="flex justify-center items-center gap-2">
                                    <StarIcon />
                                    <span>{item.stargazers_count}</span>
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="flex justify-center items-center gap-2"
                                >
                                    <EyeOpenIcon />
                                    <span>{item.watchers_count}</span>
                                </Badge>
                            </div>
                            <TypographyMuted className="text-wrap break-words">
                                {item.description}
                            </TypographyMuted>
                            <div className="flex items-center justify-start gap-4">
                                <Link
                                    href={item.html_url ?? ""}
                                    className="text-foreground text-sm rounded-md border border-primary-foreground hover:bg-primary-foreground hover:text-primary py-1 px-4 flex items-center justify-center gap-2 w-fit"
                                    target="_blank"
                                >
                                    <span>Code</span>
                                    <ArrowTopRightIcon />
                                </Link>
                                {item?.homepage && (
                                    <Link
                                        href={item.homepage ?? ""}
                                        className="text-foreground text-sm rounded-md border border-primary-foreground hover:bg-primary-foreground hover:text-primary py-1 px-4 flex items-center justify-center gap-2 w-fit"
                                        target="_blank"
                                    >
                                        <span>Preview</span>
                                        <ArrowTopRightIcon />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </ProjectCard>
                </div>
            ))}
        </div>
    );
};
