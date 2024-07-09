import { getBlockData, getPageMetadata } from "@/lib/helpers/api";
import { cn } from "@/lib/utils";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Inter } from "next/font/google";

import { RichText } from "@/components/notion/RichText";
import { Heading1, Heading2, Heading3 } from "@/components/notion/Heading";
import { Paragraph } from "@/components/notion/Paragraph";
import dynamic from "next/dynamic";
const Code = dynamic(() => import("./notion/Code"), { ssr: false });

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Blog({ blogId }: { blogId: string }) {
  return (
    <section className="mx-auto max-w-6xl space-y-12 px-8">
      <BlogMetadata blogId={blogId} />
      <BlogContent blogId={blogId} />
    </section>
  );
}

async function BlogMetadata({ blogId }: { blogId: string }) {
  const metadata = await getPageMetadata(blogId);
  if (!metadata) return null;
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <p className="flex justify-end text-lg">
        Created on{metadata.created_time}
      </p>
      <p className="flex justify-end text-lg">
        Last edited on {metadata.last_edited_time}
      </p>
      <h1 className="text-5xl font-black">
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
    </section>
  );
}

async function BlogContent({ blogId }: { blogId: string }) {
  const content: BlockObjectResponse[] = await getBlockData(blogId);
  if (!content) return null;
  return (
    <section className={cn("mx-auto max-w-4xl px-8")}>
      {content.map((block, index) => (
        <Block block={block} key={index} />
      ))}
    </section>
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
    default:
      return null;
  }
  return null;
}
