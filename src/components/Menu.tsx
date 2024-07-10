"use client";
import { MenuIcon } from "lucide-react";
import React from "react";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full bg-primary p-2">
      <MenuIcon size={24} className="bg-transparent text-background" />
      <div className="hidden">{children}</div>
    </div>
  );
}
