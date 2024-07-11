"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
  const color = getComputedStyle(document.body).getPropertyValue("--primary");
  return <NextTopLoader color={color} />;
}
