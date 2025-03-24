import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY} className="w-fit flex flex-col gap-2">
        <Link href="/" className="text-xs flex items-center gap-1 text-muted-foreground">
          <Undo2 className="w-3 h-3" />
          Home
        </Link>
        <h1 className="text-lg font-medium mb-8">Writing</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex rounded-lg flex-col space-y-1 mb-4 hover:bg-[#F5F4F4] focus:bg-[#F5F4F4] -mx-3 p-3"
              href={`/writing/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="font-medium">{post.metadata.title}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
