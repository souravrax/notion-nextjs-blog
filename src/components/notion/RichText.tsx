import { cn } from "@/lib/utils";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import React from "react";

export function RichText(props: { items: Array<RichTextItemResponse> }) {
  return props.items.map((item, i) => (
    <RichTextItem key={`${i}${item.plain_text}${item.type}`} {...item} />
  ));
}

function RichTextItem(props: RichTextItemResponse) {
  return (
    <InlineText
      href={props.href}
      className={cn(
        props.annotations.bold && "font-bold",
        props.annotations.italic && "italic",
        props.annotations.strikethrough && "line-through",
        props.annotations.underline && "underline",
        props.annotations.code &&
          "rounded bg-primary/10 px-1 py-0.5 font-mono text-primary",
      )}
    >
      {props.plain_text}
    </InlineText>
  );
}

function InlineText({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string | null;
  className: string;
}) {
  return href ? (
    <Link
      href={href}
      className={cn(className, "font-semibold text-primary hover:underline")}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}
