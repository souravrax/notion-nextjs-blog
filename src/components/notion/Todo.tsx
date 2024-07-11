import { getBlockData } from "@/lib/helpers/api";
import { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { CheckboxIcon } from "@radix-ui/react-icons";
import React, { Suspense } from "react";
import { RichText } from "./RichText";
import { Block } from "../Block";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

async function TodoAsync({ block }: { block: ToDoBlockObjectResponse }) {
  if (block.type !== "to_do") return null;
  const hasChildren = block.has_children;
  const checked = block.to_do.checked;
  const children = hasChildren ? await getBlockData(block.id) : null;
  return (
    <div className="space-y-2">
      <div
        className={cn("flex items-center gap-2", checked ? "line-through" : "")}
      >
        <div
          className={cn(
            "rounded-md p-0.5",
            checked
              ? "bg-primary text-background/40"
              : "border-2 border-primary",
          )}
        >
          <CheckIcon
            size={14}
            style={{
              visibility: checked ? "visible" : "hidden",
            }}
          />
        </div>
        <RichText block={block.to_do.rich_text} />
      </div>
      <div className="space-y-2 pl-8">
        {children &&
          children.map((block, i) => (
            <Block block={block} key={`${i}${block.id}`} />
          ))}
      </div>
    </div>
  );
}

export function Todo({ block }: { block: ToDoBlockObjectResponse }) {
  return (
    <Suspense fallback={<Skeleton className="h-8 w-full" />}>
      <TodoAsync block={block} />
    </Suspense>
  );
}
