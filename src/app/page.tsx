import { BlogList } from "@/components/BlogList";
import Header from "@/components/Header";

export default function page() {
  return (
    <main className="space-y-12">
      <Header />
      <Blogs />
      <footer className="h-48"></footer>
    </main>
  );
}

function Blogs() {
  return (
    <section
      id="blogs"
      className="mx-auto grid max-w-screen-2xl gap-4 px-8 md:px-16 lg:px-32"
    >
      <BlogList />
    </section>
  );
}
