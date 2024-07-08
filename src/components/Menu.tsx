"use client";
import { MenuIcon } from "lucide-react";
import React from "react";

export default function Menu() {
  return (
    <div className="rounded-full bg-foreground p-4 lg:hidden">
      <MenuIcon size={24} className="bg-foreground text-background" />
    </div>
  );
}
