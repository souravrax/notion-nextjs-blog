import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { RichText } from "./RichText";

export function Callout({
  content,
}: {
  content: CalloutBlockObjectResponse["callout"];
}) {
  return (
    <div className="flex w-full items-start justify-start gap-2 rounded border p-4">
      {content.icon?.type === "emoji" && <div>{content.icon.emoji}</div>}
      <div>
        <RichText block={content.rich_text} />
      </div>
    </div>
  );
}
