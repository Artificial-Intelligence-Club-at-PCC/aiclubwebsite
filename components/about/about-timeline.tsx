"use client"

import { SectionWrapper } from "@/components/section-wrapper"

const timeline = [
  {
    year: "Fall 2024",
    title: "Club Founded",
    description:
      "A group of students came together to establish the AI and ML Club at PCC.",
  },
  {
    year: "Fall 2024",
    title: "First Appearance at Club Rush",
    description:
      "Introduced the club to the campus community.",
  },
  {
    year: "Fall 2024",
    title: "Official Club Kickoff Meeting",
    description:
      "Launched the club’s first meeting and shared upcoming projects.",
  },
  {
    year: "Spring 2025",
    title: "Meeting of the Spring",
    description:
      "Welcomed over 100 new members, growing the club community.",
  },
  {
    year: "Spring 2025",
    title: "JPL Field Trip",
    description:
      "Visited NASA’s Jet Propulsion Laboratory for a guided tour on space exploration.",
  },
  {
    year: "Spring 2025",
    title: "AI Horizons Convention",
    description:
      "Hosted the largest event of the year for AI enthusiasts.",
  },
  {
    year: "Fall 2025",
    title: "Club Rush",
    description:
      "New board, fresh energy, and outreach to campus.",
  },
  {
    year: "Fall 2025",
    title: "Club Meeting",
    description:
      "Full room, kicking off the semester with enthusiasm.",
  },
  {
    year: "Fall 2025",
    title: "JPL Field Trip",
    description:
      "Second visit, more members experienced JPL up close.",
  },
  {
    year: "Fall 2025",
    title: "End-of-Semester Club Showcase",
    description:
      "Showcased projects and collaborated with two other clubs.",
  },
  {
    year: "Spring 2026",
    title: "200+ Members and Growing",
    description:
      "The club continues to expand its community and impact.",
  },
]

export function AboutTimeline() {
  return (
    <SectionWrapper className="bg-card py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Journey
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Timeline
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timeline.map((timeline, i) => (
              <div
                key={`${timeline.year}-${timeline.title}`}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-10 flex-1 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {timeline.year}
                  </span>
                  <h3 className="mt-1 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                    {timeline.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {timeline.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
