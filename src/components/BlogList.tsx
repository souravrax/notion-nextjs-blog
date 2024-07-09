//@ts-nocheck
import { getBlogs } from "@/lib/helpers/api";
import { isArray } from "util";
import Link from "next/link";

export async function BlogList() {
  const blogs = await getBlogs();
  try {
    console.log("Rendering BlogList");
  } catch (e) {
    console.error("BlogList is not rendering", e);
  }
  if (!isArray(blogs)) return null;
  return blogs.map((blog, index) => (
    <div
      key={index}
      className="flex h-full flex-col items-start justify-center p-4"
    >
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <h2 className="text-xl font-bold text-primary md:text-2xl lg:text-4xl">
          {blog.properties.Title.title[0].plain_text}
        </h2>
      </Link>
      <div className="flex items-center gap-4 text-sm md:text-base lg:text-lg">
        <p className="">{blog.last_edited_time}</p>
        <span className="h-1/2 border"></span>
        <div className="flex items-center">
          {blog.properties.Tags["multi_select"].map((tag, index) => (
            <span key={index} className="rounded-full px-2 py-1 text-sm">
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));
}
