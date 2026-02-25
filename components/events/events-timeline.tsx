"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    title: "Intro to Transformers Workshop",
    date: "March 12, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Hall, Room 204",
    description:
      "A hands-on workshop covering the transformer architecture, attention mechanisms, and building your first model from scratch using PyTorch.",
    type: "Workshop",
  },
  {
    title: "AI Ethics Panel Discussion",
    date: "March 19, 2026",
    time: "5:30 PM - 7:00 PM",
    location: "Student Union Auditorium",
    description:
      "Join faculty members and industry guests for a thought-provoking discussion on bias, fairness, and responsible AI development.",
    type: "Panel",
  },
  {
    title: "Spring AI Hackathon",
    date: "April 5 - 6, 2026",
    time: "Saturday 9 AM - Sunday 5 PM",
    location: "Innovation Center",
    description:
      "Our flagship 32-hour hackathon. Build AI-powered solutions to real-world challenges. Open to all skill levels. Prizes worth $5,000+.",
    type: "Hackathon",
  },
  {
    title: "Resume & Interview Prep for AI Roles",
    date: "April 15, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Career Center, Room 101",
    description:
      "Get your resume reviewed and practice ML-specific interview questions with alumni working at top tech companies.",
    type: "Career",
  },
  {
    title: "Reinforcement Learning Deep Dive",
    date: "April 22, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Hall, Room 204",
    description:
      "Explore reward functions, policy gradients, and Q-learning. Bring your laptop for a live coding session building an RL agent.",
    type: "Workshop",
  },
]

const typeColors: Record<string, string> = {
  Workshop: "bg-accent/10 text-accent",
  Panel: "bg-primary/10 text-primary",
  Hackathon: "bg-chart-2/10 text-chart-2",
  Career: "bg-chart-4/10 text-chart-4",
}

export function EventsTimeline() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Coming Up
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Upcoming Events
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:self-start md:pr-12"
                    : "md:self-end md:pl-12"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:top-1.5 ${
                    index % 2 === 0
                      ? "md:left-auto md:right-[-6.5px]"
                      : "md:left-[-6.5px]"
                  }`}
                />

                <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-md">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        typeColors[event.type] ?? "bg-secondary text-foreground"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                    {event.title}
                  </h3>

                  <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Notified About Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
