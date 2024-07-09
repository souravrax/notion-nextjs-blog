import { validateToken } from "@/lib/utils";
import { Client } from "@notionhq/client";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { blogId: string } },
) {
  const headers = new Headers(request.headers);
  const token = headers.get("Authorization");
  if (!validateToken(token)) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }

  console.info(`Info: Cache missed for Blog Metadata: ${params.blogId}`);

  const blogId = params.blogId;
  const notion = new Client({
    auth: process.env.NOTION_TOKEN!,
  });

  try {
    const metadata: GetPageResponse = await notion.pages.retrieve({
      page_id: blogId,
    });
    return NextResponse.json(metadata ?? {});
  } catch (error) {
    console.error(error);
    return NextResponse.json({});
  }
}
