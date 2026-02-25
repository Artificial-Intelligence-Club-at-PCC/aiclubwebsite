"use client"

import { useState } from "react"
import { SectionWrapper } from "@/components/section-wrapper"
import { BoardMemberCard } from "@/components/board/board-member-card"

interface BoardMember {
  name: string
  role: string
  major: string
  year: string
  bio: string
  linkedin?: string
  github?: string
}

interface BoardYear {
  label: string
  members: BoardMember[]
}

const boardYears: BoardYear[] = [
  {
    label: "2025-2026",
    members: [
      {
        name: "Shin Aung",
        role: "President",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Vivian Nguyen",
        role: "Vice-President",
        major: "Mechanical Engineering",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Rehaan Shaw",
        role: "Secretary",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jeremy Lin",
        role: "Public Relations",
        major: "Computer Engineering",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Nyan Lynn Phyoe Zaw",
        role: "Events Coordinator",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Tuan Dien Tran",
        role: "ICC Representative",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Yu-Wen Wang",
        role: "ICC Representative",
        major: "Data Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jian Wang",
        role: "Social Media Manager",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Isaac Cheng",
        role: "Project Manager",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Mike Chen",
        role: "Treasurer",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Augustus Le",
        role: "Treasurer",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jamal Ashraf",
        role: "Faculty Advisor",
        major: "",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
    ],
  },
  {
    label: "2024-2025",
    members: [
      {
        name: "Evan Chou",
        role: "President",
        major: "Electrical Engineering",
        year: "",
        bio: "",
        //linkedin: "https://linkedin.com",
        //github: "https://github.com",
      },
      {
        name: "Shin Aung",
        role: "Vice President",
        major: "Computer Science",
        year: "",
        bio: "",
        //linkedin: "https://linkedin.com",
        //github: "https://github.com",
      },
      {
        name: "Akki Akshit",
        role: "Secretary",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Nyan Lynn Phyoe Zaw",
        role: "Events Coordinator",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Tuan Dien Tran",
        role: "ICC Representative",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jordan Marcelo",
        role: "Treasurer",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Vivian Nguyen",
        role: "Treasurer",
        major: "Mechanical Engineering",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jian Wang",
        role: "Social Media Manager",
        major: "Computer Science",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "David Alcala",
        role: "Public Relations",
        major: "",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Timothy De Lange",
        role: "Project Manager",
        major: "Economics",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
      {
        name: "Jamal Ashraf",
        role: "Faculty Advisor",
        major: "",
        year: "",
        bio: "",
        // linkedin: "https://linkedin.com",
        // github: "https://github.com",
      },
    ],
  },
]

export function BoardGrid() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = boardYears[activeIndex]

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Year toggle buttons */}
        <div className="mb-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1">
            {boardYears.map((by, i) => (
              <button
                key={by.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  activeIndex === i
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {by.label}
              </button>
            ))}
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {activeIndex === 0 ? "Current Board" : `${active.label} Board`}
          </h2>
        </div>

        {/* Members grid */}
        <div
          key={active.label}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in"
        >
          {active.members.map((member) => (
            <BoardMemberCard key={`${active.label}-${member.name}`} {...member} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
