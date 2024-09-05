import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY} className="w-fit">
        <Link href="/blog">
          <h1 className="text-lg font-medium mb-8">Blog</h1>
        </Link>
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
              className="flex rounded-md flex-col space-y-1 mb-4 hover:bg-[#F5F4F4] focus:bg-[#F5F4F4] -mx-3 px-3 py-3"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="font-medium">{post.metadata.title}</p>
                <p className="h-6 text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
