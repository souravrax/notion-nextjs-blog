import Blog from "@/components/Blog";
import BlogLoading from "@/components/BlogLoadingAnimate";
import { getBlogs } from "@/lib/helpers/api";
// import Comments from "@/components/Comments/Comments";
// import Reactions from "@/components/Reaction/Reactions";
import { Suspense } from "react";

export const dynamicParams = true
// Dynamic segments not included in generateStaticParams are generated on demand.

export async function generateStaticParams() {
  const blogs = await getBlogs();
  console.log('Generating static blogs')
  return blogs.map((blog) => ({ blogId: blog.id }));
}

export default function page({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  if (!blogId) return null;
  return (
    <main className="mx-auto max-w-screen-2xl space-y-12 px-4 py-4 md:px-16 md:py-8 lg:px-32">
      <Suspense fallback={<BlogLoading />}>
        <Blog blogId={blogId} />
      </Suspense>
      {/* <Suspense fallback={<BlogLoading />}>
        <Reactions blogId={blogId} />
      </Suspense> */}
      {/* <Suspense fallback={<BlogLoading />}>
        <Comments id={blogId} />
      </Suspense> */}
    </main>
  );
}
