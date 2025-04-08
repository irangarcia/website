import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { data } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";
import { Redo2 } from "lucide-react";
import { InlineCopyCode } from "@/components/inline-copy-code";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col space-y-8">
      <section id="hero max-w-lg">
        <div className="w-full">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1">
              <BlurFade delay={BLUR_FADE_DELAY} className="w-fit">
                <Link href="/">
                  <h1 className="text-lg font-medium">{data.name}</h1>
                </Link>
              </BlurFade>
              <BlurFadeText
                className="text-md text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Link href="/writing" className="text-gray-400 text-sm flex text-muted-foreground w-fit items-center gap-1 ">
                <span className="text-md">
                  Writing
                </span>
                <Redo2 strokeWidth={1.5} className="w-3 h-3" />
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-md font-medium">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="max-w-lg prose text-pretty font-sans text-md text-muted-foreground">
            {data.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-md font-medium">Work Experience</h2>
          </BlurFade>
          {data.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                url={work.url}
                period={`${work.start} - ${work.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid gap-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-md font-medium">Contact</h2>
              <p className="prose text-pretty font-sans text-md text-muted-foreground">
                Check out my work on <a href="https://x.com/irangarci4" target="_blank" className="text-primary hover:underline not-prose">𝕏</a>, reach out at <InlineCopyCode>hello@irangarcia.co</InlineCopyCode>, explore my projects on <a href="https://github.com/irangarcia" target="_blank" className="text-primary hover:underline not-prose">GitHub</a>, or connect on <a href="https://linkedin.com/in/garcia-iran" target="_blank" className="text-primary hover:underline not-prose">LinkedIn</a>.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
