import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { data } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col space-y-8">
      <section id="hero">
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
              <Link href="/writing" className="flex text-muted-foreground w-fit items-center gap-1 ">
                <span className="text-md">
                  Writing
                </span>
                <MoveUpRight className="text-gray-400 w-4 h-4" />
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
          <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground">
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
                Send me a message on <a href="https://linkedin.com/in/garcia-iran" target="_blank" className="underline">LinkedIn</a>, check out my work on <a href="https://github.com/irangarcia" target="_blank" className="underline">GitHub</a>, or reach out via <a href="mailto:irangarciaj@gmail.com" className="underline">email</a>.  Looking forward to hearing from you.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
