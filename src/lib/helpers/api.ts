import {
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionPageMetadata } from "./types";

const baseURL = process.env.HOSTNAME!;
const revalidate = 900;

const authToken = process.env.API_AUTH_TOKEN!;

export async function getBlogs(limit?: number, offset?: number) {
  const res = await fetch(`${baseURL}/api/blogs`, {
    headers: {
      Authorization: authToken,
    },
    next: {
      revalidate,
      tags: ["blog-list"],
    },
  });
  const data = await res.json();
  return data as QueryDatabaseResponse["results"];
}

export async function getBlog(blogId: string) {
  const metadataDto = await fetch(`${baseURL}/api/blogs/${blogId}/metadata`, {
    headers: {
      Authorization: authToken,
    },
    next: {
      revalidate,
      tags: [`blog:${blogId}`, "blog"],
    },
  });
  const contentDto = await fetch(`${baseURL}/api/blogs/${blogId}/content`, {
    headers: {
      Authorization: authToken,
    },
    next: {
      revalidate,
      tags: [`blog:${blogId}`, "blog"],
    },
  });
  const metadata: NotionPageMetadata = await metadataDto.json();
  const content: ListBlockChildrenResponse["results"] = await contentDto.json();
  return {
    metadata,
    content,
  };
}
