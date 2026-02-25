"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Access to exclusive workshops and tutorials",
  "Networking with industry professionals",
  "Hands-on project experience with real datasets",
  "Resume-building opportunities and mentorship",
  "Competition teams and hackathon sponsorship",
  "A supportive community of AI enthusiasts",
]

export function MembershipSection() {
  return (
    <SectionWrapper className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left text */}
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Join Us
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">Become a member today</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Whether you are a complete beginner or an experienced practitioner,
              there is a place for you in the AI Club. Join us and be part of a
              community shaping the future of technology.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right CTA card */}
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground">
              Ready to get started?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Membership is free for all enrolled students. Fill out our interest
              form and we will get you connected with the community right away.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              No fees. No commitments. Just curiosity.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
