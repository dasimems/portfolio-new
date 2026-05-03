"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/motion/button"
import { Section } from "@/components/layout/section"
import { aria } from "@/lib/aria"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/projects", label: "Works" },
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Process" },
  { href: "#journal", label: "Journal" },
]

function NavBar() {
  const [open, setOpen] = React.useState(false)

  const close = React.useCallback(() => setOpen(false), [])

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
      <Section className="flex items-center justify-between py-5">
        <Link
          href="/"
          onClick={close}
          className="text-2xl font-bold tracking-[-0.05em] text-foreground"
        >
          DASIMEMS
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-auto rounded-xl px-6 py-2 text-base lg:inline-flex"
          >
            <Link href="/contact">Connect</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden"
            {...aria({
              label: "Toggle menu",
              expanded: open,
              controls: "mobile-menu",
            })}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </Section>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background/90 backdrop-blur-md transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        )}
      >
        <Section className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-2 h-auto rounded-xl px-6 py-2 text-base"
          >
            <Link href="/contact" onClick={close}>
              Connect
            </Link>
          </Button>
        </Section>
      </div>
    </header>
  )
}

export { NavBar }
