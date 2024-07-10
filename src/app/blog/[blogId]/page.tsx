import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  if (!blogId) return null;
  return (
    <main className="mx-auto max-w-screen-lg px-4 py-4 md:px-16 md:py-8 lg:px-32">
      <Blog blogId={blogId} />
    </main>
  );
}
