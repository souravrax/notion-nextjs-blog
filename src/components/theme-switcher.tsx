"use client";
import { useTheme } from "next-themes";
import { LaptopIcon, MoonStarIcon, SunIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const themes = {
  dark: <MoonStarIcon size={16} />,
  light: <SunIcon size={16} />,
  system: <LaptopIcon size={16} />,
};

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(
      theme === "dark" ? "system" : theme === "light" ? "dark" : "light",
    );
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={changeTheme}
          className="flex items-center justify-center gap-4 rounded-full bg-primary p-2 text-white"
        >
          {themes[theme as keyof typeof themes]}
        </button>
      </TooltipTrigger>
      <TooltipContent className="uppercase">Toggle theme</TooltipContent>
    </Tooltip>
  );
}
