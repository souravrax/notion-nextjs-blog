import Blog from "@/components/Blog";
import Header from "@/components/Header";
import React from "react";

export default function page({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  if (!blogId) return null;
  return (
    <main className="space-y-12">
      <Header />
      <Blog blogId={blogId} />
    </main>
  );
}
