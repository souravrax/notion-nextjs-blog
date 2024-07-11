"use client";
import { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import Youtube from "react-youtube";
import { RichText } from "./RichText";

export function Video({ block }: { block: VideoBlockObjectResponse }) {
  if (block.type !== "video" || block.video.type !== "external") return null;
  if (
    !block.video.external.url.startsWith("https://www.youtube.com/watch?v=")
  ) {
    return null;
  }
  const url = new URL(block.video.external.url);
  const id = url.searchParams.get("v")!;
  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center overflow-hidden rounded-lg">
        <Youtube
          title={block.video.caption.map((item) => item.plain_text).join(" ")}
          videoId={id}
        />
      </div>
      <p className="mx-auto text-center">
        <RichText block={block.video.caption} />
      </p>
    </div>
  );
}
