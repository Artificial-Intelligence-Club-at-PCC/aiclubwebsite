"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Trophy, GraduationCap, Globe } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "National Recognition",
    description:
      "Top 10 placement in three national collegiate AI competitions, including the Intercollegiate ML Challenge.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Success",
    description:
      "Our alumni have joined teams at Google, OpenAI, Meta AI Research, and leading graduate programs worldwide.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description:
      "Partnered with local nonprofits to build AI-powered tools for education accessibility and community health.",
  },
]

export function AboutImpact() {
  return (
    <SectionWrapper className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Impact
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Achievements and recognition
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
