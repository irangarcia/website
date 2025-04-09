"use client"

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { data } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";
import { Redo2 } from "lucide-react";
import { InlineCopyCode } from "@/components/inline-copy-code";
import { SquarePenIcon, SquarePenIconHandle } from "@/components/write-icon";
import { useRef } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const writingIconRef = useRef<SquarePenIconHandle>(null);

  return (
    <main className="flex flex-col space-y-8">
      <section id="hero max-w-lg">
        <div className="w-full">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex">
              <BlurFade delay={BLUR_FADE_DELAY} className="flex flex-col w-fit">
                <Avatar className="w-12 h-12 mb-4 shadow-lg">
                  <AvatarImage src="/me.jpeg" className="" />
                </Avatar>
                <h1 className="text-lg font-medium">{data.name}</h1>
                <BlurFadeText
                  className="text-md mt-1 text-muted-foreground"
                  delay={BLUR_FADE_DELAY}
                  text={data.description}
                />
                <Markdown className="max-w-lg prose text-pretty font-sans text-md text-muted-foreground">
                  {data.summary}
                </Markdown>
                {/* <Link
                  href="/writing"
                  onMouseOver={() => {
                    writingIconRef.current?.startAnimation()
                  }}
                  onMouseLeave={() => {
                    writingIconRef.current?.stopAnimation()
                  }}
                  className="text-gray-400 text-sm flex text-muted-foreground w-fit items-center gap-1 "
                >
                  <span className="text-md">
                    Writing
                  </span>
                  <SquarePenIcon ref={writingIconRef} size={14} />
                </Link> */}
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      {/* <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="max-w-lg prose text-pretty font-sans text-md text-muted-foreground">
          {data.summary}
        </Markdown>
      </BlurFade> */}
      <section id="work">
        <div className="flex min-h-0 flex-col space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-md font-serif font-medium">Work Experience</h2>
          </BlurFade>
          <ul className="list-none space-y-6">
            {data.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                {/* <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                url={work.url}
                period={`${work.start} - ${work.end}`}
              /> */}
                <li className="flex items-baseline gap-8">
                  <div className="text-[#999999] text-sm">
                    {`${work.start} — ${work.end}`}
                  </div>
                  <div className="flex text- flex-col">
                    <div className="text-muted-foreground">
                      {work.title} at {work.company}
                    </div>
                    {/* <div className="text-sm text-[#777]">
                      {work.location}
                    </div> */}
                  </div>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>
      <section id="contact">
        <div className="grid gap-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-md font-serif font-medium">Contact</h2>
              <p className="prose text-pretty font-sans text-md text-muted-foreground">
                Check out my work on <a href="https://x.com/irangarci4" target="_blank" className="text-primary hover:underline not-prose font-semibold">𝕏</a>, reach out at <InlineCopyCode>hello@irangarcia.co</InlineCopyCode>, explore my projects on <a href="https://github.com/irangarcia" target="_blank" className="text-primary hover:underline not-prose">GitHub</a>, or connect on <a href="https://linkedin.com/in/garcia-iran" target="_blank" className="text-primary hover:underline not-prose">LinkedIn</a>.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
