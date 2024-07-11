import { getBlockData } from "@/lib/helpers/api";
import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { Suspense } from "react";
import { RichText } from "./RichText";
import { Skeleton } from "../ui/skeleton";
import {
  CircleIcon,
  CornerDownRightIcon,
  Square,
  SquareIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Block } from "../Block";

async function UnorderedListItemAsync({
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
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>
          {depth === 0 ? (
            <CircleIcon
              size={14}
              className={cn(
                depth & 1 ? "fill-none" : "fill-foreground",
                `opacity-${Math.max(100 - depth * 10, 10)}`,
              )}
            />
          ) : (
            <CornerDownRightIcon
              style={{
                opacity: Math.max(100 - depth * 30, 10) / 100,
              }}
              size={24}
            />
          )}
          {/* {depth % 4 < 2 ? (
              <CircleIcon
                size={10}
                className={cn(depth & 1 ? "fill-none" : "fill-foreground")}
              />
            ) : (
              <SquareIcon
                size={10}
                className={cn(depth & 1 ? "fill-none" : "fill-foreground")}
              />
            )} */}
        </span>
        <RichText block={content["bulleted_list_item"]["rich_text"]} />
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
  );
}

async function OrderedListItemAsync({
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
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>{blockTrail + 1}.</span>
        <RichText block={content["numbered_list_item"]["rich_text"]} />
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
  );
}

export function UnorderedListItem({
  content,
  depth = 0,
}: {
  content: BulletedListItemBlockObjectResponse;
  depth?: number;
}) {
  return (
    <Suspense fallback={<Skeleton className="h-5 w-full" />}>
      <UnorderedListItemAsync content={content} depth={depth} />
    </Suspense>
  );
}

export function OrderedListItem({
  content,
  depth = 0,
  blockTrail = 0,
}: {
  content: NumberedListItemBlockObjectResponse;
  depth?: number;
  index?: number;
  blockTrail?: number;
}) {
  return (
    <Suspense fallback={<Skeleton className="h-5 w-full" />}>
      <OrderedListItemAsync
        content={content}
        depth={depth}
        blockTrail={blockTrail}
      />
    </Suspense>
  );
}
