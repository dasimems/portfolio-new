import Link from "next/link"

import { Section } from "@/components/layout/section"
import { SOCIAL_LIST } from "@/lib/socials"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-muted">
      <Section className="flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
        <p className="text-xs font-normal uppercase tracking-widest text-muted-foreground">
          © {year} DASIMEMS. BUILT FOR THE VOID.
        </p>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {SOCIAL_LIST.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-normal uppercase tracking-widest text-muted-foreground opacity-80 transition-opacity hover:opacity-100"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </Section>
    </footer>
  )
}

export { Footer }
