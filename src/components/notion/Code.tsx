"use client";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
// import { CSSProperties } from "react";
// import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import Highlight from "react-highlight.js";

export default function Code({
  content,
}: {
  content: CodeBlockObjectResponse["code"];
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-primary/10 p-4">
      {/* <CopyBlock
        language="javascript"
        text={content.rich_text
          .map((item, index) => item.plain_text)
          .join("\n")}
        showLineNumbers
        wrapLongLines
        codeContainerStyle={
          {
            margin: 0,
          } as CSSProperties
        }
      /> */}
      <Highlight language="cpp">
        {content.rich_text.map((item, index) => item.plain_text).join("\n")}
      </Highlight>
    </div>
  );
}
