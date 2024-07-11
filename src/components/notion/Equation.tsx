"use client";
import { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import katex from "katex";
import React, { useEffect, useRef } from "react";

export function EquationBlock({
  block,
}: {
  block: EquationBlockObjectResponse;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const expression = block.equation.expression;
  useEffect(() => {
    if (!containerRef.current) return;
    if (block.type === "equation") {
      katex.render(expression, containerRef.current, {
        displayMode: true,
        output: "mathml",
      });
    }
  }, [block.type, expression]);
  if (block.type !== "equation") return null;
  return (
    <div
      className="rounded-md bg-foreground/5 px-2 py-4 text-2xl"
      ref={containerRef}
    />
  );
}

export function EquationInline({ expression }: { expression: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    katex.render(expression, containerRef.current, {
      output: "mathml",
    });
  }, [expression]);
  return <span ref={containerRef} />;
}
