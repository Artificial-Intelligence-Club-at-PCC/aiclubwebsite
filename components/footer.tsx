import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa"
import { SiInstagram, SiLinktree } from "react-icons/si"
import { enabledPages } from "@/lib/site-config"
import { LINKS } from "@/lib/links"

const mainLinks = enabledPages.filter((p) => p.href !== "/")
const half = Math.ceil(mainLinks.length / 2)
const columnOne = mainLinks.slice(0, half)
const columnTwo = mainLinks.slice(half)

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <Image
                src="/club_logo.png"
                alt="AI Club Logo"
                width={32}
                height={32}
                className="h-12 w-12"
              />
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight">
                  Artificial Intelligence Club
                </span>
                <br />
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-tight">
                  at Pasadena City College
                </span>
              </div>
            </Link>
            
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Exploring the frontiers of artificial intelligence through
              collaboration, education, and hands-on projects. Building the
              future, one model at a time.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Discord"
              >
                <FaDiscord className="h
                -5 w-5" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <SiInstagram className="h
                -5 w-5" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <FaGithub className="h
                -5 w-5" />
              </a>
              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Linktree"
              >
                <SiLinktree className="h
                -5 w-5" />
              </a>
              <a
                href={LINKS.email}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {columnOne.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-wider text-foreground">
              More
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {columnTwo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            {new Date().getFullYear()} AI Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
