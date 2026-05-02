import Link from "next/link"
import { Link2, Mail, Phone } from "lucide-react"

import { Button } from "@/components/motion/button"
import { CONTACT } from "@/lib/contact"
import { SOCIALS } from "@/lib/socials"

function SystemStatus() {
  return (
    <div className="flex flex-col gap-6">
      <article className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8">
        <Link2
          aria-hidden
          className="pointer-events-none absolute right-6 top-6 size-5 -rotate-45 text-primary/40"
        />

        <div className="flex items-center gap-2">
          <span aria-hidden className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-foreground">
            System Status
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
          Available for Remote Roles
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Currently accepting strategic engineering engagements. Flexible
          scheduling optimized for asynchronous collaboration across{" "}
          <span className="text-primary">US, UK, and CA</span> timezones.
        </p>
      </article>

      <article className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Direct Channels
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <ChannelRow
            icon={Mail}
            label="Electronic Mail"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ChannelRow
            icon={Phone}
            label="Voice Protocol"
            value={CONTACT.phone}
            href={CONTACT.phoneHref}
          />
        </div>

        <div className="my-6 border-t border-border/50" />

        <div className="grid grid-cols-2 gap-3">
          <Button asChild variant="outline" size="lg" className="font-mono tracking-wider">
            <Link
              href={SOCIALS.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-mono tracking-wider">
            <Link
              href={SOCIALS.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub {`</>`}
            </Link>
          </Button>
        </div>
      </article>
    </div>
  )
}

function ChannelRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-xl outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-primary transition-colors group-hover:border-primary/40">
        <Icon className="size-4" />
      </span>
      <span className="flex flex-col gap-0.5 min-w-0">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </span>
        <span className="truncate text-sm font-medium text-foreground">
          {value}
        </span>
      </span>
    </Link>
  )
}

export { SystemStatus }
