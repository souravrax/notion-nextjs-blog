import { getBlockData } from "@/lib/helpers/api";
import {
  getBlock,
  TableBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { Suspense } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RichText } from "./RichText";
import { Skeleton } from "../ui/skeleton";

async function NotionTableAsync({
  content,
}: {
  content: TableBlockObjectResponse;
}) {
  const column = content.table.table_width;
  const hasTableHeader = content.table.has_column_header;
  const hasColumnHeader = content.table.has_column_header;
  const tableRows = await getBlockData(content.id);
  if (!tableRows) return null;

  const body = tableRows.slice(hasTableHeader ? 1 : 0).map((row, index) => (
    <TableRow key={index}>
      {row.type === "table_row" &&
        row.table_row.cells.map((cell, index) => (
          <TableCell key={index}>
            <RichText block={cell} />
          </TableCell>
        ))}
    </TableRow>
  ));

  return (
    <Table className="rounded-3xl border">
      <TableCaption>Caption</TableCaption>
      {hasTableHeader && (
        <TableHeader>
          <TableRow>
            {tableRows[0].type === "table_row" &&
              tableRows[0].table_row.cells.map((cell, index) => (
                <TableHead key={index}>
                  <RichText block={cell} />
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
      )}
      <TableBody>{body}</TableBody>
    </Table>
  );
}

export function NotionTable({
  content,
}: {
  content: TableBlockObjectResponse;
}) {
  return (
    <Suspense fallback={<Skeleton className="h-20 w-full" />}>
      <NotionTableAsync content={content} />
    </Suspense>
  );
}
