import { getBlockData } from "@/lib/helpers/api";
import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React, { Suspense } from "react";
import { Block } from "../Block";
import { RichText } from "./RichText";
import { Skeleton } from "../ui/skeleton";

async function QuoteAsync({ block }: { block: QuoteBlockObjectResponse }) {
  const hasChildren = block.has_children;
  const children = hasChildren ? await getBlockData(block.id) : null;
  return (
    <div className="relative flex items-start py-1">
      <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-secondary"></div>
      <div className="space-y-2 pl-6">
        <div>
          <RichText block={block.quote.rich_text} />
        </div>
        <div>
          {children &&
            children.map((block, i) => (
              <Block block={block} key={`${i}${block.id}`} />
            ))}
        </div>
      </div>
    </div>
  );
}

export function Quote({ block }: { block: QuoteBlockObjectResponse }) {
  return (
    <Suspense fallback={<Skeleton className="h-12 w-full" />}>
      <QuoteAsync block={block} />
    </Suspense>
  );
}
