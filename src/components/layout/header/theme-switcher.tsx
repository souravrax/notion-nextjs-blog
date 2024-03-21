"use client";
import { useTheme } from "next-themes";
import { BlendingModeIcon } from "@radix-ui/react-icons";
import {
    Select,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectContent,
} from "@/components/ui/select";

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
        <Select
            onValueChange={(value) => {
                setTheme(value);
            }}
            value={theme ?? "black"}
        >
            <SelectTrigger className="gap-2 flex justify-center items-center">
                <BlendingModeIcon />
                Theme
            </SelectTrigger>
            <SelectContent className="p-0.5 rounded-[1rem]">
                <SelectGroup>
                    {themes.map((theme) => (
                        <SelectItem key={theme.value} value={theme.value}>
                            {theme.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
