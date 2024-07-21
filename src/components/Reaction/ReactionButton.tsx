"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function ReactionButton({
  emoji,
  count,
}: {
  emoji: string;
  count: number;
}) {
  const { pending } = useFormStatus();
  const [localCount, setLocalCount] = useState(count);
  return (
    <button
      type="submit"
      className="flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-2 py-0.5 text-base text-muted-foreground disabled:opacity-50"
      disabled={pending}
      onClick={() => {
        setLocalCount(localCount + 1);
      }}
    >
      <span>{emoji}</span>
      <span>{localCount}</span>
    </button>
  );
}
