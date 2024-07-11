import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionPageMetadata } from "./types";
import { cache } from "react";

const baseURL = process.env.HOSTNAME!;
const revalidate = 900; // 15 minutes

const authToken = process.env.API_AUTH_TOKEN!;

export const getBlogs = cache(async function (limit?: number, offset?: number) {
  console.log("getBlogs Called");
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
});

export async function getBlockData(blockId: string) {
  const res = await fetch(`${baseURL}/api/blogs/${blockId}/content`, {
    headers: {
      Authorization: authToken,
    },
    next: {
      revalidate,
      tags: [`blog:${blockId}`, "blog"],
    },
  });
  const data = await res.json();
  return data as BlockObjectResponse[];
}

export async function getPageMetadata(blogId: string) {
  const res = await fetch(`${baseURL}/api/blogs/${blogId}/metadata`, {
    headers: {
      Authorization: authToken,
    },
    next: {
      revalidate,
      tags: [`blog:${blogId}`, "blog"],
    },
  });
  const data = await res.json();
  return data as NotionPageMetadata;
}
