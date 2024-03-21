import { TypographyH2, TypographyH4 } from "@/components/ui/typography";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import {
    BookmarkIcon,
    Cross2Icon,
    HamburgerMenuIcon,
    ReaderIcon,
} from "@radix-ui/react-icons";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const barkshire_swash_font = Pacifico({
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <nav className="container py-3 top-0 left-0 right-0 z-40">
            <div className="w-full py-3 px-5 justify-between flex items-center backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <TypographyH4
                            className={cn(
                                barkshire_swash_font.className,
                                "font-light"
                            )}
                        >
                            <span className="text-primary">S</span>
                            <span className="text-foreground">ourav</span>
                            <span className="text-primary"> R</span>
                            <span className="text-foreground">akshit</span>
                        </TypographyH4>
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="justify-center items-center gap-4 hidden md:flex">
                        <ThemeSwitcher />
                        <Link href="/resources" className="hover:underline">
                            <Button
                                className="flex items-center justify-center gap-2"
                                variant="outline"
                            >
                                <BookmarkIcon />
                                Resources
                            </Button>
                        </Link>
                        <Link href="/blogs" className="hover:underline">
                            <Button
                                className="flex items-center justify-center gap-2"
                                variant="outline"
                            >
                                <ReaderIcon />
                                Blogs
                            </Button>
                        </Link>
                    </div>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}

function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-col gap-8">
                    <SheetClose>
                        <Link href="/lensmith" className="hover:underline">
                            <TypographyH2 className="flex items-center justify-center gap-2">
                                Lensmith
                            </TypographyH2>
                        </Link>
                    </SheetClose>
                    <Link href="/codesmith" className="hover:underline">
                        <TypographyH2 className="flex items-center justify-center gap-2">
                            Codesmith
                        </TypographyH2>
                    </Link>
                    <Link
                        href="/resources"
                        className="hover:underline md:hidden"
                    >
                        <TypographyH2 className="flex items-center justify-center gap-2">
                            Resources
                        </TypographyH2>
                    </Link>
                    <Link href="/blogs" className="hover:underline md:hidden">
                        <TypographyH2 className="flex items-center justify-center gap-2">
                            Blogs
                        </TypographyH2>
                    </Link>
                    <ThemeSwitcher />
                </div>
                <SheetClose
                    asChild
                    className="flex justify-center items-center m-10"
                >
                    <Button
                        className="border-destructive rounded-full py-8 px-10 border-4"
                        variant="outline"
                    >
                        <Cross2Icon className="h-10 w-10" />
                    </Button>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
}
