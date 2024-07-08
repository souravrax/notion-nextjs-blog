"use client";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";

export default function JSONViewer({ value }: { value: any }) {
  return <JsonViewer value={value} />;
}
