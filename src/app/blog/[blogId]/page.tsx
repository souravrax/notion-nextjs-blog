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
    <main className="space-y-12">
      {/* <Header /> */}
      <section className="flex w-full items-center justify-between gap-4 px-32 py-8">
        <Link
          href="/"
          className="flex items-center justify-between gap-2 rounded-full bg-foreground px-4 py-2 font-bold text-background"
        >
          Back
          <Undo2Icon />
        </Link>
      </section>
      <Blog blogId={blogId} />
    </main>
  );
}
