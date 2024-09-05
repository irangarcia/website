import BlurFade from "@/components/magicui/blur-fade";
import { getPost } from "@/data/blog";
import { data } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const BLUR_FADE_DELAY = 0.04;

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
      url: `${data.url}/blog/${post.slug}`,
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
            url: `${data.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: data.name,
            },
          }),
        }}
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-lg font-medium text-2xl max-w-[650px]">
          {post.metadata.title}
        </h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex justify-between items-center mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <article
          className="prose dark:prose-invert text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </BlurFade>
    </section>
  );
}
