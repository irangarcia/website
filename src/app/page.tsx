import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main  className="flex flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1">
              <Link href="/">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-lg font-medium"
                  yOffset={8}
                  text={DATA.name}
                />
              </Link>
              <BlurFadeText
                className="text-md text-muted-foreground max-w-[600px]"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-md font-medium">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-md font-medium">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
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
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
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
              <p className="max-w-[600px] text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan nulla. Donec lacinia commodo lacus, a semper turpis efficitur non.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}