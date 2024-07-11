import { getBlogs } from "@/lib/helpers/api";
import Link from "next/link";
import { convertTimestampToDate } from "@/lib/utils";
import {
  DatabaseObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./notion/RichText";
import isArray from "lodash/isArray";

type TagsType = Array<{ name: string; id: string; color: string }>;

export async function BlogList() {
  const blogs = (await getBlogs()) as DatabaseObjectResponse[];
  try {
    console.log("Rendering BlogList");
  } catch (e) {
    console.error("BlogList is not rendering", e);
  }
  if (!isArray(blogs)) return null;
  return blogs.map((blog, index) => (
    <div key={index} className="flex flex-col gap-2">
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <h2 className="text-2xl font-extrabold text-primary transition-all hover:scale-[101%] md:text-2xl lg:text-4xl">
          {blog.properties.Title.type === "title" && (
            <RichText
              block={
                blog.properties.Title.title as unknown as RichTextItemResponse[]
              }
            />
          )}
        </h2>
        <p>
          {blog.properties.Description.type === "rich_text" && (
            <RichText
              block={
                blog.properties.Description
                  .rich_text as unknown as RichTextItemResponse[]
              }
            />
          )}
        </p>
      </Link>
      <div className="flex flex-col items-start gap-1 text-sm md:text-base lg:text-lg">
        <div className="flex flex-wrap items-center gap-1">
          {blog.properties.Tags.type === "multi_select" &&
            (blog.properties.Tags["multi_select"] as unknown as TagsType).map(
              (tag) => (
                <span
                  key={`${tag.id}${tag.name}`}
                  className="rounded-full bg-foreground/50 px-2 py-0.5 text-xs text-background"
                >
                  #{tag.name}
                </span>
              ),
            )}
        </div>
        <p className="text-sm">
          {convertTimestampToDate(blog.last_edited_time)}
        </p>
      </div>
    </div>
  ));
}
