import { getBlockData } from "@/lib/helpers/api";
import { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "../RichText";
import ToggleHandle from "./ToggleHandle";
import { Block } from "@/components/Block";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

async function ToggleListAsync({
  content,
}: {
  content: ToggleBlockObjectResponse;
}) {
  if (content.type !== "toggle") return null;
  const id = content.id;
  const hasChildren = content.has_children;
  const children = hasChildren ? await getBlockData(id) : [];
  if (!children) return null;
  return (
    <ToggleHandle
      text={<RichText block={content.toggle.rich_text} />}
      id={id}
      className="space-y-4"
    >
      {children.map((child) => (
        <Block key={`${child.id}`} block={child} />
      ))}
      {children.length === 0 && (
        <div className="text-foreground/50">No children</div>
      )}
    </ToggleHandle>
  );
}

export function ToggleList({
  content,
}: {
  content: ToggleBlockObjectResponse;
}) {
  return (
    <Suspense fallback={<Skeleton className="h-8 w-full" />}>
      <ToggleListAsync content={content} />
    </Suspense>
  );
}
