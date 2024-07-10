import { NotionThrottle } from "@/lib/throttle";
import { validateToken } from "@/lib/utils";
import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { blogId: string } },
) {
  const headers = new Headers(request.headers);
  const token = headers.get("Authorization");
  if (!validateToken(token)) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }

  console.info(`Info: Cache missed for Blog Content: ${params.blogId}`);

  const blogId = params.blogId;
  const notion = new Client({
    auth: process.env.NOTION_TOKEN!,
  });
  try {
    await NotionThrottle.throttle();
    const content = await notion.blocks.children.list({
      block_id: blogId,
    });
    return NextResponse.json(content?.results ?? []);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}
