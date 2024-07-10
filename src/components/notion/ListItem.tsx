import { getBlockData } from "@/lib/helpers/api";
import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { Suspense } from "react";
import { RichText } from "./RichText";
import { Skeleton } from "../ui/skeleton";
import { CircleIcon, Square, SquareIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Block } from "../Block";

export async function UnorderedListItem({
  content,
  depth = 0,
}: {
  content: BulletedListItemBlockObjectResponse;
  depth?: number;
}) {
  const id = content.id;
  const hasChildren = content.has_children;
  const children = hasChildren ? await getBlockData(id) : undefined;

  let lastBlockType = "none";
  let currentBlockTrail = 0;

  return (
    <Suspense fallback={<Skeleton className="h-5 w-full" />}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>
            {depth % 4 < 2 ? (
              <CircleIcon
                size={10}
                className={cn(depth & 1 ? "fill-none" : "fill-foreground")}
              />
            ) : (
              <SquareIcon
                size={10}
                className={cn(depth & 1 ? "fill-none" : "fill-foreground")}
              />
            )}
          </span>
          <RichText items={content["bulleted_list_item"]["rich_text"]} />
        </div>
        {hasChildren && (
          <ul className={`w-full space-y-2 pl-4`}>
            {children?.map((child, index) => {
              if (child.type === lastBlockType) {
                currentBlockTrail++;
              } else {
                currentBlockTrail = 0;
              }
              lastBlockType = child.type;
              return (
                <li key={index}>
                  <Block
                    block={child}
                    depth={depth + 1}
                    blockTrail={currentBlockTrail}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Suspense>
  );
}

export async function OrderedListItem({
  content,
  depth = 0,
  blockTrail = 0,
}: {
  content: NumberedListItemBlockObjectResponse;
  depth?: number;
  index?: number;
  blockTrail?: number;
}) {
  const id = content.id;
  const hasChildren = content.has_children;
  const children = hasChildren ? await getBlockData(id) : undefined;
  let lastBlockType = "none";
  let currentBlockTrail = 0;
  return (
    <Suspense fallback={<Skeleton className="h-5 w-full" />}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>{blockTrail + 1}.</span>
          <RichText items={content["numbered_list_item"]["rich_text"]} />
        </div>
        {hasChildren && (
          <ul className={`w-full space-y-2 pl-4`}>
            {children?.map((child, index) => {
              if (child.type === lastBlockType) {
                currentBlockTrail++;
              } else {
                currentBlockTrail = 0;
              }
              lastBlockType = child.type;
              return (
                <li key={index}>
                  <Block
                    block={child}
                    depth={depth + 1}
                    blockTrail={currentBlockTrail}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Suspense>
  );
}
