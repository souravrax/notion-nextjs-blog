import { BlogList } from "@/components/BlogList";
import Header from "@/components/Header";

export default function page() {
  return (
    <main className="mx-auto max-w-screen-lg px-4 py-4 md:px-16 md:py-8 lg:px-32">
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
      <BlogList />
    </section>
  );
}
