"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "CampusBot",
    description:
      "An AI-powered chatbot that answers questions about campus resources, events, and directions using a fine-tuned LLM.",
    tags: ["NLP", "RAG", "Python"],
    status: "Active",
  },
  {
    title: "MedScan",
    description:
      "A computer vision model that classifies skin lesion images to assist in early detection of potential health concerns.",
    tags: ["Computer Vision", "PyTorch", "Healthcare"],
    status: "Active",
  },
  {
    title: "StudyBuddy",
    description:
      "A recommendation system that matches students for study groups based on courses, learning style, and availability.",
    tags: ["RecSys", "ML", "Flask"],
    status: "Completed",
  },
  {
    title: "EcoPredict",
    description:
      "Time-series forecasting for campus energy consumption, helping the sustainability office optimize usage patterns.",
    tags: ["Time Series", "Forecasting", "Sustainability"],
    status: "Completed",
  },
  {
    title: "SentimentStream",
    description:
      "Real-time sentiment analysis dashboard for social media feeds, built during the Fall 2025 hackathon.",
    tags: ["NLP", "Streaming", "React"],
    status: "Archived",
  },
  {
    title: "FairML Audit",
    description:
      "A toolkit for auditing ML models for bias across demographic groups, built in collaboration with the Ethics department.",
    tags: ["Ethics", "Fairness", "Audit"],
    status: "Active",
  },
]

const statusColors: Record<string, string> = {
  Active: "bg-accent/10 text-accent",
  Completed: "bg-chart-2/10 text-chart-2",
  Archived: "bg-muted text-muted-foreground",
}

export default function ProjectsPage() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <>
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
            What We Build
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Projects</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hands-on projects where members apply AI to solve real problems.
            From hackathon prototypes to semester-long research initiatives.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Code className="h-5 w-5" />
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      statusColors[project.status] ?? "bg-secondary text-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground">
              Have a project idea?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              We are always looking for new projects. Pitch your idea at a weekly
              meeting or reach out to us directly.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Propose a Project
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
