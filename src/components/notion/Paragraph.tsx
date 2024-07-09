import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { RichText } from "./RichText";

export function Paragraph({
  content,
}: {
  content: ParagraphBlockObjectResponse["paragraph"];
}) {
  return (
    <h1 className="text-lg">
      <RichText items={content.rich_text} />
    </h1>
  );
}
