"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const events = [
  {
    date: "Mar 15, 2026",
    title: "Intro to Neural Networks Workshop",
    location: "Engineering Hall, Room 301",
    description:
      "A beginner-friendly workshop covering the fundamentals of neural networks with hands-on coding exercises.",
  },
  {
    date: "Apr 2, 2026",
    title: "AI in Healthcare Panel",
    location: "Auditorium B",
    description:
      "Industry professionals discuss the latest applications of AI in medical imaging, drug discovery, and patient care.",
  },
  {
    date: "Apr 20, 2026",
    title: "Spring Hackathon",
    location: "Innovation Lab",
    description:
      "A 24-hour hackathon challenging teams to build creative AI solutions for real-world campus problems.",
  },
]

export function UpcomingEventsSection() {
  return (
    <SectionWrapper className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Upcoming Events
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">What is happening next</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            See all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-accent">
                <Calendar className="h-4 w-4" />
                <time>{event.date}</time>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {event.title}
              </h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{event.location}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
