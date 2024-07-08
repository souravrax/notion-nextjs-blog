import React from "react";

export default function page({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  return <div>{blogId}</div>;
}
