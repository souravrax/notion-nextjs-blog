import Blog from "@/components/Blog";
import BlogLoading from "@/components/BlogLoadingAnimate";
import { getBlogs } from "@/lib/helpers/api";
import { getBlogPath } from "@/lib/helpers/transformer";
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { redirect } from "next/navigation";
// import Comments from "@/components/Comments/Comments";
// import Reactions from "@/components/Reaction/Reactions";
import { Suspense } from "react";

export const dynamicParams = true;
// Dynamic segments not included in generateStaticParams are generated on demand.

export async function generateStaticParams() {
  const blogs = (await getBlogs()) as DatabaseObjectResponse[];
  return blogs.map((blog) => ({ blogId: getBlogPath(blog.url) }));
}

export default function page({
  params: { blogId: blogPath },
}: Readonly<{
  params: { blogId: string };
}>) {
  const blogId = blogPath.split("-").pop();
  if (!blogId || blogId.length !== 32) return redirect("/");
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
