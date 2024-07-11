import React from "react";
import { default as NextImage } from "next/image";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

export function Image({
  content,
}: {
  content: ImageBlockObjectResponse["image"];
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-80 w-full">
        {content.type === "external" ? (
          <NextImage
            src={content.external.url}
            alt={content.caption.map((item) => item.plain_text).join(" ")}
            unoptimized
            fill
            style={{
              objectFit: "contain",
            }}
          />
        ) : (
          <NextImage
            src={content.file.url}
            unoptimized
            alt={content.caption.map((item) => item.plain_text).join(" ")}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <p className="text-foreground">
        <RichText block={content.caption} />
      </p>
    </div>
  );
}
