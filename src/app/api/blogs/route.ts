import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { validateToken } from "@/lib/utils";
import { NotionThrottle } from "@/lib/throttle";
export async function GET(request: NextRequest) {
  const headers = new Headers(request.headers);
  const token = headers.get("Authorization");

  if (!validateToken(token)) {
    return NextResponse.json({
      error: "Unauthorized",
    });
  }

  console.info("Info: Cache missed for Blog List");

  const notion = new Client({
    auth: process.env.NOTION_TOKEN!,
  });
  const results: QueryDatabaseResponse["results"] = [];
  let nextCursor = null;

  try {
    do {
      nextCursor = null;
      await NotionThrottle.throttle();
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
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      });
      results.push(...blogs.results);
      nextCursor = blogs.next_cursor;
    } while (nextCursor !== null);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }

  return NextResponse.json(results);
}
