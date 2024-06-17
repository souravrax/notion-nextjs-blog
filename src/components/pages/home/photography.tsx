import LandingSection from "./section";
import { primary_font } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

async function InstagramPosts() {
    // console.log("localhost:3000/api/instagram");
    const response = await fetch(`${process.env.HOSTNAME}/api/instagram`);
    if (!response) return null;
    const posts = await response.json();
    const images = posts.data.data.filter(
        (post: any) => post["media_type"] !== "VIDEO"
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-auto w-full gap-4 relative">
            {images.map((post: any, idx: number) => (
                <div
                    key={post.id}
                    className={cn(
                        "relative aspect-square w-full rounded-lg overflow-hidden"
                        // `col-span-1 row-span-${Math.min(
                        //     (idx % 3) + 1,
                        //     2
                        // )} rounded-lg bg-primary h-[${
                        //     Math.min((idx % 3) + 1, 2) * 300
                        // }px]`
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
            {/* <div className="col-span-1 row-span-1 rounded-lg bg-primary"></div> */}
            {/* <div className="col-span-1 row-span-2 rounded-lg bg-primary"></div> */}
            {/* <div className="col-span-1 row-span-2 rounded-lg bg-primary"></div> */}
            {/* <div className="col-span-1 row-span-1 rounded-lg bg-primary"></div> */}
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
