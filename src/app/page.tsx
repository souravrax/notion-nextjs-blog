export const revalidate = 900;

import { BlogList } from "@/components/BlogList";
import BlogLoading from "@/components/BlogLoadingAnimate";
import { AuthorFont } from "@/components/Fonts";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="mx-auto max-w-screen-2xl space-y-4 px-4 py-4 md:px-16 md:py-8 lg:px-32">
      <h1
        className={cn(
          "text-3xl font-light tracking-tight",
          AuthorFont.className,
        )}
      >
        Welcome to my blog!
        <br />
        I&apos;m Sourav Rakshit and here I document my journey of learning and
        building things.
      </h1>
      <Separator />
      <Blogs />
    </main>
  );
}

function Blogs() {
  return (
    <section
      id="blogs"
      className="flex h-full flex-col items-start justify-center gap-2 space-y-8"
    >
      <Suspense fallback={<BlogLoading />}>
        <BlogList />
      </Suspense>
    </section>
  );
}
