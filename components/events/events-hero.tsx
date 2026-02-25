"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function EventsHero() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      ref={ref}
      className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-secondary"
    >
      <div
        className={`relative z-10 mx-auto max-w-3xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Stay Updated
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          <span className="text-balance">Events & Workshops</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          From weekly study sessions to major hackathons, there is always
          something happening at AI Club.
        </p>
      </div>
    </section>
  )
}
