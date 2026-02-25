"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Mic2,
  MessageSquare,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionWrapper } from "@/components/section-wrapper"

const schedule = [
  {
    time: "9:00 AM - 9:30 AM",
    title: "Doors Open & Check-In",
    description: "Pick up your badge and grab coffee before the day begins.",
  },
  {
    time: "9:30 AM - 10:00 AM",
    title: "Opening Remarks",
    description:
      "Welcome address from the AI Club president and faculty advisor.",
  },
  {
    time: "10:00 AM - 12:00 PM",
    title: "Tabling Fair",
    description:
      "Browse booths from campus programs, research labs, student clubs, and industry partners. Explore opportunities in AI research, internships, graduate programs, and more.",
    tag: "Tabling Fair",
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Lunch Break",
    description:
      "Catered lunch in the atrium. Network with speakers and attendees.",
  },
  {
    time: "1:00 PM - 2:30 PM",
    title: "Guest Speaker Presentations",
    description:
      "Hear from leading researchers and industry professionals on the latest breakthroughs in AI, from generative models to responsible deployment.",
    tag: "Guest Speakers",
  },
  {
    time: "2:30 PM - 2:45 PM",
    title: "Short Break",
    description: "Refreshments and networking.",
  },
  {
    time: "2:45 PM - 4:00 PM",
    title: "Panel Discussion",
    description:
      "An engaging panel of academics and practitioners discussing the future of AI in industry, academia, and society. Audience Q&A included.",
    tag: "Panel",
  },
  {
    time: "4:00 PM - 4:30 PM",
    title: "Closing Ceremony & Awards",
    description:
      "Wrap-up, acknowledgements, and recognition of outstanding projects and contributors.",
  },
]

const highlights2025 = [
  { stat: "200+", label: "Attendees" },
  { stat: "15", label: "Clubs & Career Programs" },
  { stat: "9", label: "Guest Speakers" },
  { stat: "2", label: "Panel Discussions" },
]

export default function ConventionPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.05)

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/convention-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-background/50" />

        <div
          className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Spring 2026
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            <span className="text-balance">AI Convention</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Our flagship annual event bringing together students, researchers,
            and industry leaders to explore the frontiers of artificial
            intelligence.
          </p>

          {/* Quick details */}
          <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-accent" />
              <span>April 12, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>9:00 AM - 4:30 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>University Conference Center</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Interest
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              What to Expect
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A Full Day of AI
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                Tabling Fair
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Explore booths from campus programs, research labs, student
                clubs, and industry partners offering internships and graduate
                opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
                <Mic2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                Guest Speakers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hear from leading researchers and industry professionals on
                the latest breakthroughs in generative AI, responsible
                deployment, and more.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                Panel Discussion
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                An engaging conversation with academics and practitioners on the
                future of AI in industry, academia, and society, with audience
                Q&A.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Schedule */}
      <SectionWrapper className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Event Schedule
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Day at a Glance
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-0">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`flex gap-6 py-6 ${
                  i < schedule.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="w-40 shrink-0">
                  <p className="text-sm font-semibold text-foreground">
                    {item.time}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Last year's convention */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Looking Back
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Spring 2025 Convention
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our inaugural AI Convention brought the campus community together
              for a day of learning, networking, and inspiration. Here is what
              we accomplished.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {highlights2025.map((h) => (
              <div key={h.label} className="text-center">
                <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-foreground">
                  {h.stat}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              The 2025 convention featured keynotes on foundation models and
              responsible AI, a tabling fair with over 15 organizations
              representing research labs, graduate programs, and tech companies,
              and a lively panel on the intersection of AI and society. It set
              the bar for what we are building again this year, bigger and
              better.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Be Part of AI Convention 2026
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            Whether you want to attend, speak, or table, we would love to have
            you. Reach out to get involved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              View All Events
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
