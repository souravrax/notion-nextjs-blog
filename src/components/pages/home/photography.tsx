import LandingSection from "./section";
import { primary_font } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { getInstagramPosts } from "@/lib/api/instagram";
import Image from "next/image";
import { Suspense } from "react";

async function InstagramPosts() {
    const images = await getInstagramPosts(["IMAGE", "CAROUSEL_ALBUM"]);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-auto w-full gap-4 relative">
            {images.map((post: any, idx: number) => (
                <div
                    key={post.id}
                    className={cn(
                        "relative aspect-square w-full rounded-lg overflow-hidden"
                    )}
                >
                    <Image
                        fill={true}
                        src={post.media_url}
                        alt={post.caption}
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default function Photography() {
    return (
        <LandingSection>
            <div className="flex flex-col justify-center items-start gap-10">
                <h2
                    className={cn(
                        primary_font.className,
                        "text-4xl md:text-5xl lg:text-6xl text-primary"
                    )}
                >
                    Captured Moments
                </h2>
                <Suspense>
                    <InstagramPosts />
                </Suspense>
            </div>
        </LandingSection>
    );
}
