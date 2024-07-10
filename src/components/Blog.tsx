import { getBlockData, getPageMetadata } from "@/lib/helpers/api";
import { cn, convertTimestampToDate } from "@/lib/utils";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { Heading1, Heading2, Heading3 } from "@/components/notion/Heading";
import { Paragraph } from "@/components/notion/Paragraph";
import dynamic from "next/dynamic";
const Code = dynamic(() => import("@/components/notion/Code"), { ssr: false });
import { Image as NotionImage } from "@/components/notion/Image";
import Callout from "./notion/Callout";
import Quote from "./notion/Quote";
import localFont from "next/font/local";

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

export default function Blog({ blogId }: { blogId: string }) {
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
  return (
    <div className={cn("space-y-3 font-light")}>
      {content.map((block, index) => (
        <Block block={block} key={index} />
      ))}
    </div>
  );
}

function Block({ block }: { block: BlockObjectResponse }) {
  switch (block.type) {
    case "heading_1":
      return <Heading1 content={block.heading_1} />;
    case "heading_2":
      return <Heading2 content={block.heading_2} />;
    case "heading_3":
      return <Heading3 content={block.heading_3} />;
    case "paragraph":
      return <Paragraph content={block.paragraph} />;
    case "code":
      return <Code content={block.code} />;
    case "image":
      return <NotionImage content={block.image} />;
    case "callout":
      return <Callout content={block.callout} />;
    case "quote":
      return <Quote content={block.quote} />;
    default:
      return null;
  }
  return null;
}
