import Blog from "@/components/Blog";
import BlogLoading from "@/components/BlogLoadingAnimate";
import { Suspense } from "react";

export default function page({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  if (!blogId) return null;
  return (
    <main className="mx-auto max-w-screen-lg px-4 py-4 md:px-16 md:py-8 lg:px-32">
      <Suspense fallback={<BlogLoading />}>
        <Blog blogId={blogId} />
      </Suspense>
    </main>
  );
}
