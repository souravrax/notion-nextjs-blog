import {
  BlockObjectResponse,
  CodeBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { RichText } from "./RichText";

export function Heading1({
  content,
}: {
  content: Heading1BlockObjectResponse["heading_1"];
}) {
  return (
    <h1 className="text-3xl font-extrabold">
      <RichText items={content.rich_text} />
    </h1>
  );
}

export function Heading2({
  content,
}: {
  content: Heading2BlockObjectResponse["heading_2"];
}) {
  return (
    <h2 className="text-2xl font-bold">
      <RichText items={content.rich_text} />
    </h2>
  );
}

export function Heading3({
  content,
}: {
  content: Heading3BlockObjectResponse["heading_3"];
}) {
  return (
    <h3 className="text-xl font-semibold">
      <RichText items={content.rich_text} />
    </h3>
  );
}
