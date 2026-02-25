import { Linkedin, Github, User } from "lucide-react"

interface BoardMemberCardProps {
  name: string
  role: string
  major: string
  year: string
  bio: string
  linkedin?: string
  github?: string
}

export function BoardMemberCard({
  name,
  role,
  major,
  year,
  bio,
  linkedin,
  github,
}: BoardMemberCardProps) {
  return (
    <article className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
      {/* Avatar placeholder */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <User className="h-7 w-7" />
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
          {name}
        </h3>
        <p className="text-sm font-semibold text-accent">{role}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {major} &middot; {year}
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {bio}
      </p>

      <div className="mt-4 flex items-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  )
}
