// @ts-nocheck
import { getBlogs } from "@/lib/helpers/api";
import { isArray } from "util";
import Link from "next/link";
import { convertTimestampToDate } from "@/lib/utils";
import React from "react";
import { Heading1 } from "./notion/Heading";

export async function BlogList() {
  const blogs = await getBlogs();
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
          {blog.properties.Title.title[0].plain_text}
        </h2>
      </Link>
      <div className="flex flex-col items-start gap-1 text-sm md:text-base lg:text-lg">
        <div className="flex flex-wrap items-center gap-1">
          {blog.properties.Tags["multi_select"].map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-foreground/50 px-2 py-0.5 text-xs text-background"
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <p className="text-sm">
          {convertTimestampToDate(blog.last_edited_time)}
        </p>
      </div>
    </div>
  ));
}
