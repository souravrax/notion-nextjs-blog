import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

export function Heading1({
  content,
}: {
  content: Heading1BlockObjectResponse["heading_1"];
}) {
  return (
    <h1 className="py-1.5 text-3xl font-extrabold">
      <RichText block={content.rich_text} />
    </h1>
  );
}

export function Heading2({
  content,
}: {
  content: Heading2BlockObjectResponse["heading_2"];
}) {
  return (
    <h2 className="py-1 text-2xl font-bold">
      <RichText block={content.rich_text} />
    </h2>
  );
}

export function Heading3({
  content,
}: {
  content: Heading3BlockObjectResponse["heading_3"];
}) {
  return (
    <h3 className="py-0.5 text-xl font-bold">
      <RichText block={content.rich_text} />
    </h3>
  );
}
