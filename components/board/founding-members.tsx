"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Users } from "lucide-react"

const founders = [
  {
    name: "Evan Chou",
    role: "President",
    contribution:
      "",
  },
  {
    name: "Shin Aung",
    role: "Vice-President",
    contribution:
      "",
  },
  {
    name: "Akki Akshit",
    role: "Secretary",
    contribution:
      "",
  },
  {
    name: "Nyan Lynn Phyoe Zaw",
    role: "Events Coordinator",
    contribution:
      "",
  },
  {
    name: "Tuan Dien Tran",
    role: "ICC Representative",
    contribution:
      "",
  },
  {
    name: "Jamal Ashraf",
    role: "Faculty Advisor",
    contribution:
      "",
  },
]

export function FoundingMembers() {
  return (
    <SectionWrapper className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Where It All Began
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Founding Members
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-foreground">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-accent">{founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {founder.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
