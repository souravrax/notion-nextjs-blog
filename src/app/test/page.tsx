import JSONViewer from "@/components/jsonviewer";
import { getBlog, getBlogs } from "@/lib/helpers/api";
import React from "react";

export default async function page() {
  const blogs = await getBlogs();
  const content = await getBlog("9b850a8178a14aa0becf420559efcddc");
  return (
    <>
      <JSONViewer value={blogs} />
      <JSONViewer value={content} />
    </>
  );
}
