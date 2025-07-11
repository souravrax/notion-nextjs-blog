import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Callout } from "./notion/Callout";
import { UnorderedListItem, OrderedListItem } from "./notion/ListItem";
import { Paragraph } from "./notion/Paragraph";
import { Heading1, Heading2, Heading3 } from "./notion/Heading";
import { Code } from "./notion/Code";
import { Image as NotionImage } from "./notion/Image";
import { Quote } from "./notion/Quote";
import { NotionTable } from "./notion/Table";
import { ToggleList } from "./notion/ToggleList/ToggleList";
import { Separator } from "./ui/separator";
import { Todo } from "./notion/Todo";
import dynamic from "next/dynamic";
import { Video } from "./notion/Video";
const EquationBlock = dynamic(
  () => import("./notion/Equation").then((mod) => mod.EquationBlock),
  {
    ssr: false,
  },
);

export function Block({
  block,
  depth = 0,
  blockTrail = 0,
}: {
  block: BlockObjectResponse;
  blockTrail?: number;
  depth?: number;
}) {
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
      return <Quote block={block} />;
    case "bulleted_list_item":
      return <UnorderedListItem content={block} depth={depth} />;
    case "numbered_list_item":
      return (
        <OrderedListItem
          content={block}
          blockTrail={blockTrail}
          depth={depth}
        />
      );
    case "table":
      return <NotionTable content={block} />;
    case "toggle":
      return <ToggleList content={block} />;
    case "divider":
      return <Separator />;
    case "to_do":
      return <Todo block={block} />;
    case "equation":
      return <EquationBlock block={block} />;
    case "video":
      return <Video block={block} />;
  }
  return <div className="h-8" />;
}
