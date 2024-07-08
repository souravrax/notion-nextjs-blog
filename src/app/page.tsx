import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import {
  SiGithub as GithubIcon,
  SiLinkedin as LinkedinIcon,
  SiInstagram as InstagramIcon,
  SiGmail as GmailIcon,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Menu from "@/components/Menu";
import { blogs } from "@/data/blogs";
import dynamic from "next/dynamic";
import { getBlogs } from "@/lib/helpers/api";
import {
  DatabaseObjectResponse,
  PartialDatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const ThemeSwitcher = dynamic(() => import("@/components/theme-switcher"), {
  ssr: false,
});

const HagmolyaFont = localFont({
  src: "../../public/fonts/Hagmolya.woff2",
  display: "swap",
});

const socialLinks = [
  { name: "Github", icon: GithubIcon, url: "https://github.com/souravrax" },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/souravrax/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/rax.lens/",
  },
  {
    name: "Gmail",
    icon: GmailIcon,
    url: "mailto:rakshitsourav3@gmail.com",
  },
];

export default function page() {
  return (
    <main className="space-y-12">
      <header className="sticky top-0 z-10 mx-auto max-w-screen-2xl px-4 py-2 md:px-16 md:py-4 lg:px-32">
        <div className="grid w-full grid-cols-2 items-center justify-center gap-4 rounded-full border border-foreground bg-background/30 p-2 backdrop-blur-xl md:p-4 lg:grid-cols-3 lg:p-6">
          <div className="flex items-center justify-start gap-1.5">
            <Menu />
            <Link href="https://www.souravrax.com/" target="_blank">
              <p className="text-nowrap rounded-full bg-foreground p-4 text-center text-sm font-light uppercase text-background md:text-lg">
                Sourav Rakshit
              </p>
            </Link>
          </div>
          <h1
            className={cn(
              HagmolyaFont.className,
              "text-end text-5xl text-foreground md:text-6xl lg:text-center lg:text-7xl",
            )}
          >
            Blogs
          </h1>

          <div className="hidden justify-end gap-4 lg:flex">
            <ThemeSwitcher />
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url} target="_blank">
                <link.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </header>
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

async function BlogList() {
  const blogs = await getBlogs();
  return blogs.map((blog, index) => (
    <div
      key={index}
      className="flex h-full flex-col items-start justify-center p-4"
    >
      <Link href={`/${blog.id}`} target="_blank" key={blog.id}>
        <h2 className="text-xl font-bold text-primary md:text-2xl lg:text-4xl">
          {/* @ts-expect-error */}
          {blog.properties.Title.title[0].plain_text}
        </h2>
      </Link>
      <div className="flex items-center gap-4 text-sm md:text-base lg:text-lg">
        {/* @ts-expect-error */}
        <p className="">{blog.properties.Date.date.start}</p>
        <span className="h-1/2 border"></span>
        <div className="flex items-center">
          {/* @ts-expect-error */}
          {blog.properties.Tags["multi_select"].map((tag, index) => (
            <span key={index} className="rounded-full px-2 py-1 text-sm">
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));
}
