import { getBlockData } from "@/lib/helpers/api";
import { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

export default async function ToggleList({
  content,
}: {
  content: ToggleBlockObjectResponse;
}) {
  const id = content.id;
  const hasChildren = content.has_children;
  const children = hasChildren ? await getBlockData(id) : [];
  if (!children) return null;
  return <div>ToggleList</div>;
}
