import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, getPost } from "@/data/blog";
import { data } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { MoveUpLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  const posts = await getBlogPosts()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  let ogImage = `${data.url}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${data.url}/writing/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${data.url}${post.metadata.image}`
              : `${data.url}/api/og?title=${post.metadata.title}`,
            url: `${data.url}/writing/${post.slug}`,
            author: {
              "@type": "Person",
              name: data.name,
            },
          }),
        }}
      />
      <BlurFade delay={BLUR_FADE_DELAY} className="w-fit flex flex-col gap-2">
        <Link href="/writing" className="text-xs flex items-center gap-1 text-muted-foreground">
          <MoveUpLeft className="w-3 h-3" />
          Writing 
        </Link>
        <h1 className="text-lg font-medium max-w-[650px]">
          {post.metadata.title}
        </h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex justify-between items-center mb-8 text-sm">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-md text-neutral-600">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <article
          className="prose text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </BlurFade>
    </section>
  );
}
