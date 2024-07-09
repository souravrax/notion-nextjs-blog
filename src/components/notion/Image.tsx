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
      {content.type === "external" ? (
        <NextImage
          src={content.external.url}
          alt={content.caption.map((item) => item.plain_text).join(" ")}
          unoptimized
          width={500}
          height={500}
        />
      ) : (
        <NextImage
          src={content.file.url}
          unoptimized
          alt={content.caption.map((item) => item.plain_text).join(" ")}
          width={500}
          height={500}
        />
      )}
      <p className="text-foreground">
        <RichText items={content.caption} />
      </p>
    </div>
  );
}
