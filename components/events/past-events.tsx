"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { CheckCircle } from "lucide-react"

const pastEvents = [
  {
    title: "Fall AI Hackathon 2025",
    date: "October 2025",
    summary: "80+ participants, 20 teams. Top project: an AI-powered campus navigation assistant.",
  },
  {
    title: "Guest Talk: Scaling LLMs in Production",
    date: "September 2025",
    summary: "Industry speaker from a major AI lab shared insights on infrastructure challenges.",
  },
  {
    title: "Computer Vision Workshop Series",
    date: "August 2025",
    summary: "3-part series covering CNNs, object detection, and image segmentation with 60+ attendees.",
  },
  {
    title: "AI for Social Good Sprint",
    date: "April 2025",
    summary: "Weekend sprint building AI tools for local nonprofits. 5 projects delivered.",
  },
]

export function PastEvents() {
  return (
    <SectionWrapper className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Looking Back
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Past Events
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="mt-0.5 shrink-0">
                <CheckCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-foreground">
                    {event.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {event.date}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {event.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
