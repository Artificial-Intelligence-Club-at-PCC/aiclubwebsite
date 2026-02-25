"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Building the future of AI, together</span>
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">Artificial Intelligence Club</span>
        </h1>

        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          at Pasadena City College
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-md">
          A community of curious minds exploring machine learning, deep learning,
          and the boundless possibilities of AI. Learn, build, and innovate with
          us.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join the Club
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
