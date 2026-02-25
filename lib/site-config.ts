/**
 * Site-wide page configuration.
 * Set `enabled: false` to hide a page from the navbar and footer.
 * The route will still exist, but it won't appear in navigation.
 */

export interface PageConfig {
  href: string
  label: string
  enabled: boolean
}

export const pages: PageConfig[] = [
  { href: "/", label: "Home", enabled: true },
  { href: "/about", label: "About", enabled: true },
  { href: "/board", label: "Board", enabled: true },
  { href: "/events", label: "Events", enabled: true },
  { href: "/convention", label: "AI Convention", enabled: true },
  { href: "/projects", label: "Projects", enabled: false },
  { href: "/resources", label: "Resources", enabled: false },
  { href: "/contact", label: "Contact", enabled: true },
]

/** Only pages the user should see in nav / footer. */
export const enabledPages = pages.filter((p) => p.enabled)
