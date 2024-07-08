"use client";
import { useTheme } from "next-themes";
import { MoonStarIcon, SunIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const themes = [
  {
    label: "Black",
    value: "black",
  },
  {
    label: "Dark",
    value: "dark",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonStarIcon className="h-6 w-6" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent className="uppercase">Toggle theme</TooltipContent>
    </Tooltip>
  );
}
