import { TypographyH4 } from "@/components/ui/typography";
import { Berkshire_Swash } from "next/font/google";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import {
    BookmarkIcon,
    HamburgerMenuIcon,
    ReaderIcon,
} from "@radix-ui/react-icons";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const barkshire_swash_font = Berkshire_Swash({
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <nav className="container py-3">
            <div className="border w-full py-3 px-5 justify-between flex items-center backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <TypographyH4
                            className={barkshire_swash_font.className}
                        >
                            Sourav Rakshit
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
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you
                        {"'"}re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
