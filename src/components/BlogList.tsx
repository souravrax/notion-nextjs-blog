import { getBlogs } from "@/lib/helpers/api";
import Link from "next/link";
import { convertTimestampToDate } from "@/lib/utils";
import {
  DatabaseObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./notion/RichText";
import isArray from "lodash/isArray";
import MotionImage from "./MotionImage";
import { getBlogPath } from "@/lib/helpers/transformer";

type TagsType = Array<{ name: string; id: string; color: string }>;

export async function BlogList() {
  const blogs = (await getBlogs()) as DatabaseObjectResponse[];
  try {
    console.log("Rendering BlogList");
  } catch (e) {
    console.error("BlogList is not rendering", e);
  }
  if (!isArray(blogs)) return null;
  return (
    <>
      {/* <p className="text-xs text-foreground/30">{blogs.length} blogs found</p> */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Link
            href={`/${getBlogPath(blog.url)}`}
            key={blog.id}
            className="relative flex h-[400px] w-full items-end overflow-hidden rounded-lg border p-4"
          >
            {blog.cover?.type === "external" ? (
              <MotionImage
                src={blog.cover.external.url}
                fill
                className="object-cover"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                //@ts-ignore
                alt={blog.properties.Title.title
                  .map(
                    (item: { type: string; plain_text: string }) =>
                      item.plain_text,
                  )
                  .join(" ")}
              />
            ) : null}
            <div
              key={index}
              className="relative flex w-full flex-col gap-2 rounded-lg border border-white/20 bg-black/10 p-2 backdrop-blur-xl"
            >
              <h2 className="text-lg font-extrabold text-primary transition-all md:text-xl lg:text-2xl">
                {blog.properties.Title.type === "title" && (
                  <RichText
                    block={
                      blog.properties.Title
                        .title as unknown as RichTextItemResponse[]
                    }
                  />
                )}
              </h2>
              <p className="text-xs text-white">
                {blog.properties.Description.type === "rich_text" && (
                  <RichText
                    block={
                      blog.properties.Description
                        .rich_text as unknown as RichTextItemResponse[]
                    }
                  />
                )}
              </p>
              <div className="flex flex-col items-start gap-1 text-sm md:text-base lg:text-lg">
                <div className="flex flex-wrap items-center gap-1">
                  {blog.properties.Tags.type === "multi_select" &&
                    (
                      blog.properties.Tags[
                        "multi_select"
                      ] as unknown as TagsType
                    ).map((tag) => (
                      <span
                        key={`${tag.id}${tag.name}`}
                        className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tag.name}
                      </span>
                    ))}
                </div>
                <p className="text-sm text-white">
                  {convertTimestampToDate(blog.last_edited_time)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
