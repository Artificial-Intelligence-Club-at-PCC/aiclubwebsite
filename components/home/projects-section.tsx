"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, Bot, BarChart3, Eye } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    icon: Bot,
    title: "Campus AI Assistant",
    description:
      "An intelligent chatbot that helps students navigate campus resources, find study groups, and get academic support.",
    tags: ["NLP", "RAG", "LangChain"],
    status: "In Progress",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analyzer",
    description:
      "A real-time social media sentiment analysis tool built with transformer models and deployed as a web application.",
    tags: ["Transformers", "PyTorch", "FastAPI"],
    status: "Completed",
  },
  {
    icon: Eye,
    title: "Vision Lab",
    description:
      "Computer vision experiments exploring object detection, image segmentation, and generative models for creative applications.",
    tags: ["Computer Vision", "YOLO", "Stable Diffusion"],
    status: "In Progress",
  },
]

export function ProjectsSection() {
  return (
    <SectionWrapper className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Projects
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What we are building
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                  <project.icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-secondary text-muted-foreground"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
