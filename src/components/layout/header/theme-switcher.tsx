"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
    Command,
    CommandInput,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BlendingModeIcon, CheckIcon } from "@radix-ui/react-icons";

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
    const { theme: value, setTheme: setValue } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="gap-2 flex justify-center items-center"
                >
                    <BlendingModeIcon />
                    Theme
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search theme..." />
                    <CommandEmpty>No theme found.</CommandEmpty>
                    <CommandGroup>
                        {themes.map((theme) => (
                            <CommandItem
                                key={theme.value}
                                value={theme.value}
                                onSelect={(currentValue) => {
                                    console.log(currentValue);
                                    setValue(currentValue);
                                    setOpen(false);
                                }}
                            >
                                <CheckIcon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === theme.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {theme.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
