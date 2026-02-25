"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Brain, Users, Lightbulb, Code } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Learn",
    description:
      "Workshops, tutorials, and study groups covering everything from the fundamentals of ML to cutting-edge research papers.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description:
      "Join a diverse community of students from every discipline, united by curiosity and a drive to push the boundaries of AI.",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    description:
      "Participate in hackathons, competitions, and open-source projects that turn ideas into real-world impact.",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Get hands-on experience building AI systems, from training models to deploying production applications.",
  },
]

export function MissionSection() {
  return (
    <SectionWrapper className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Mission
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Empowering the next generation of AI innovators</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We bridge the gap between academic theory and practical application,
            creating a space where students can explore AI through hands-on
            projects and collaborative learning.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
