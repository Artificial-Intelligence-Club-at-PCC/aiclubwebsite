"use client"

import { SectionWrapper } from "@/components/section-wrapper"

export function AboutStory() {
  return (
    <SectionWrapper className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              The Beginning
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground">
              <span className="text-balance">Founded on curiosity and collaboration</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The AI Club was founded in 2024 by a group of college
              students who wanted a space to explore artificial intelligence
              beyond the classroom.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today, we are a multidisciplinary club with members from computer
              science, mathematics, and electrical & mechanical engineering. We believe that
              the future of AI is interdisciplinary, and AI isn't the replacement; it's the tool. Those who learn to use it will move ahead.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "200+", label: "Members" },
              { number: "9+", label: "Events Hosted" },
              { number: "Weekly", label: "Club Meetings" },
              { number: "1.5", label: "Years Running" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-accent">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second block - alternated */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          {/* Left - visual element */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-4">
              {[
                "Workshops",
                "Hackathons",
                "Research",
                "Networking",
                "Field Trips",
                "Resources",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center rounded-lg border border-border bg-secondary px-3 py-6 text-center text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              What We Do
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground">
              <span className="text-balance">More than just a club</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We organize weekly presentations/workshops, host guest speakers from industry,
              run semester-long project teams, and build a supportive AI learning community at PCC.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
