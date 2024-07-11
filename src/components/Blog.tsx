import { getBlockData, getPageMetadata } from "@/lib/helpers/api";
import { cn, convertTimestampToDate } from "@/lib/utils";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import localFont from "next/font/local";
import { Block } from "./Block";
import { Skeleton } from "./ui/skeleton";

const TelmaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Telma/Telma-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Telma/Telma-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Telma/Telma-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Telma/Telma-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Telma/Telma-Black.woff2",
      weight: "900",
    },
  ],
  display: "swap",
});

const ContentSkeleton = () =>
  Array.from({ length: 10 }).map((_, index) => (
    <Skeleton key={`${index}-content-skeleton-title`} className="h-8 w-full" />
  ));

const MetadataSkeleton = () => (
  <div className="flex w-full flex-col items-center justify-center gap-4">
    <div className="font-xs flex flex-col items-center justify-center text-sm font-semibold text-primary">
      <Skeleton className="h-4 w-1/2" />
    </div>
    <Skeleton className="h-12 w-full" />
    <ul className="flex flex-wrap gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <li
          key={index}
          className={cn(
            "rounded-full bg-foreground/60 px-2 py-1 text-sm text-background",
          )}
        >
          <Skeleton className="h-2 w-8" />
        </li>
      ))}
    </ul>
  </div>
);

export default async function Blog({ blogId }: { blogId: string }) {
  return (
    <section className="space-y-12">
      <BlogMetadata blogId={blogId} />
      <BlogContent blogId={blogId} />
    </section>
  );
}

async function BlogMetadata({ blogId }: { blogId: string }) {
  const metadata = await getPageMetadata(blogId);
  if (!metadata) return null;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="font-xs flex flex-col items-center justify-center text-sm font-semibold text-primary">
        <p>{convertTimestampToDate(metadata.last_edited_time)}</p>
      </div>
      <h1
        className={cn(
          TelmaFont.className,
          "text-center text-5xl font-black md:text-7xl",
        )}
      >
        {metadata.properties.Title.title[0].plain_text}
      </h1>
      <ul className="flex flex-wrap gap-2">
        {metadata.properties.Tags.multi_select.map((tag, index) => (
          <li
            key={index}
            className={cn(
              "rounded-full bg-foreground/60 px-2 py-1 text-sm text-background",
            )}
          >
            #{tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

async function BlogContent({ blogId }: { blogId: string }) {
  const content: BlockObjectResponse[] = await getBlockData(blogId);
  if (!content) return null;
  let lastBlockType = "none";
  let blockTrail = 0;
  return (
    <div className={cn("space-y-4 font-light")}>
      {content.map((block, index) => {
        if (block.type === lastBlockType) {
          blockTrail++;
        } else {
          blockTrail = 0;
        }
        lastBlockType = block.type;
        return (
          <Block block={block} key={index} blockTrail={blockTrail} depth={0} />
        );
      })}
    </div>
  );
}
