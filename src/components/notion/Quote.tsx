import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

export default function Quote({
  content,
}: {
  content: QuoteBlockObjectResponse["quote"];
}) {
  return <div>Quote</div>;
}
