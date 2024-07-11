import { cn } from "@/lib/utils";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import React from "react";
import { EquationInline } from "./Equation";
import { Tooltip } from "../ui/tooltip";

export function RichText(props: { block: Array<RichTextItemResponse> }) {
  return props.block.map((item, i) =>
    item.type === "equation" ? (
      <RichEquationItem key={`${i}${item.plain_text}${item.type}`} {...item} />
    ) : (
      <RichTextItem key={`${i}${item.plain_text}${item.type}`} {...item} />
    ),
  );
}

function RichTextItem({ annotations, href, plain_text }: RichTextItemResponse) {
  return (
    <WrapInsideLink href={href}>
      <span
        className={cn(
          annotations.bold && "font-bold",
          annotations.italic && "italic",
          annotations.strikethrough && "line-through",
          annotations.underline && "underline",
          annotations.code &&
            "rounded bg-primary/10 px-1 py-0.5 font-mono text-primary",
        )}
      >
        {plain_text}
      </span>
    </WrapInsideLink>
  );
}

function RichEquationItem({
  plain_text,
  href,
  annotations,
}: RichTextItemResponse) {
  return (
    <WrapInsideLink href={null}>
      <EquationInline expression={plain_text} />
    </WrapInsideLink>
  );
}

function WrapInsideLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string | null;
  className?: string;
}) {
  return href ? (
    <Tooltip>
      <Link
        href={href}
        className={cn("font-semibold italic text-primary hover:underline")}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </Link>
    </Tooltip>
  ) : (
    children
  );
}
