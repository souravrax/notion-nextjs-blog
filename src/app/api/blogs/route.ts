import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { validateToken } from "@/libs/utils";
export async function GET(request: NextRequest) {
  const headers = new Headers(request.headers);
  const token = headers.get("Authorization");

  if (!validateToken(token)) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }

  const notion = new Client({
    auth: process.env.NOTION_TOKEN!,
  });
  const results: QueryDatabaseResponse["results"] = [];
  let nextCursor = null;

  do {
    nextCursor = null;
    const blogs = await notion.databases.query({
      filter: {
        property: "Status",
        status: {
          equals: "Done",
        },
      },
      database_id: process.env.NOTION_DATABASE_ID!,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    results.push(...blogs.results);
    nextCursor = blogs.next_cursor;
  } while (nextCursor !== null);

  return NextResponse.json(results);
}
