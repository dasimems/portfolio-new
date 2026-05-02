"use client"

import * as React from "react"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

type Experience = {
  period: string
  location: string
  title: string
  company: string
  description: string
  tech?: string[]
  active?: boolean
  badge?: string
  highlights?: string[]
}

const experiences: Experience[] = [
  {
    period: "2021 - PRESENT",
    location: "REMOTE / GLOBAL",
    title: "Principal Mobile Architect",
    company: "FinTech Global Corp",
    description:
      "Directed architectural strategy for a globally distributed engineering team across US, UK, and EMEA. Designed and deployed a resilient React Native ecosystem handling 5M+ daily transactions, implementing a micro-frontend architecture to unblock parallel development streams.",
    tech: ["React Native", "GraphQL", "Distributed Teams"],
    active: true,
    badge: "LEADERSHIP NODE ACTIVE",
    highlights: [
      "Designed and shipped a micro-frontend architecture across the React Native ecosystem.",
      "Led migration of legacy auth flow, increasing login conversion by 18%.",
      "Hired, onboarded, and mentored 6 senior engineers across 3 timezones.",
      "Established the weekly architecture review process — adopted org-wide.",
      "Cut CI build times from 22 minutes to 6 minutes via Nx + remote caching.",
      "Drove the design-token RFC, reducing UI inconsistency tickets by 60%.",
    ],
  },
  {
    period: "2018 - 2021",
    location: "REMOTE / US EAST",
    title: "Senior Full-Stack Engineer",
    company: "HealthTech Innovations",
    description:
      "Architected HIPAA-compliant backend services using Node.js and AWS infrastructure. Led a core remote team in rebuilding the legacy monolith into scalable microservices, reducing data retrieval latency by 40%.",
    tech: ["Node.js", "AWS", "Microservices"],
    highlights: [
      "Decomposed the legacy monolith into 14 services with clear data boundaries.",
      "Implemented mTLS between internal services, satisfying HIPAA audit requirements.",
      "Reduced p95 data retrieval latency from 320ms to 190ms.",
      "Owned on-call rotation, runbooks, and incident postmortem culture.",
    ],
  },
  {
    period: "2016 - 2018",
    location: "REMOTE / US EAST",
    title: "Full-Stack Engineer",
    company: "Acme Studios",
    description:
      "Shipped two consumer-facing products from prototype to production. Owned the React frontend and the Express API layer, integrating Stripe billing and a real-time notification system on top of Redis pub/sub.",
    tech: ["React", "Express", "Stripe", "Redis"],
    highlights: [
      "Shipped two consumer products from zero to first paying customer.",
      "Integrated Stripe billing including proration, dunning, and webhooks.",
      "Built a real-time notification fan-out on Redis pub/sub.",
    ],
  },
]

function DeploymentLog() {
  const pathname = usePathname()
  if (pathname !== "/") return null

  return (
    <section>
      <Section className="flex flex-col gap-12 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            System Deployment <span className="text-primary">Log</span>
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:inline">
            ARCHITECTURAL_HISTORY
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col gap-8"
        >
          {experiences.map((exp, i) => (
            <Entry
              key={exp.title + exp.period}
              experience={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </motion.div>
      </Section>
    </section>
  )
}

function Entry({
  experience,
  isLast,
}: {
  experience: Experience
  isLast: boolean
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 gap-4 md:grid-cols-[180px_1fr] md:gap-10"
    >
      {/* Meta column */}
      <div className="relative flex flex-col gap-1 md:items-end md:pr-8 md:pt-2 md:text-right">
        {/* Connecting line — rendered first so dot stacks on top */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="hidden md:absolute md:right-[4px] md:top-[24px] md:-bottom-11 md:block md:w-0 md:border-l-2 md:border-dashed md:border-muted-foreground/70"
          />
        )}

        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {experience.period}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {experience.location}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "hidden size-2.5 shrink-0 rounded-full md:absolute md:right-0 md:top-3 md:block",
            experience.active
              ? "bg-emerald-500 shadow-[0_0_12px_-1px] shadow-emerald-500/60"
              : "bg-muted-foreground/40"
          )}
        />
      </div>

      <ExperienceCard experience={experience} />
    </motion.div>
  )
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)
  const hasHighlights = !!experience.highlights && experience.highlights.length > 0
  const isCollapsible = hasHighlights && !expanded

  const interactiveProps: Record<string, unknown> = {}
  if (isCollapsible) {
    interactiveProps.role = "button"
    interactiveProps.tabIndex = 0
  }
  if (hasHighlights) {
    interactiveProps["aria-expanded"] = expanded ? "true" : "false"
  }

  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      onClick={() => isCollapsible && setExpanded(true)}
      onKeyDown={(event) => {
        if (isCollapsible && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault()
          setExpanded(true)
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...interactiveProps}
      className={cn(
        "rounded-2xl border border-border/50 bg-card p-6 outline-none md:p-8",
        isCollapsible &&
          "cursor-pointer transition-colors hover:border-border focus-visible:ring-2 focus-visible:ring-ring/50"
      )}
    >
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {experience.title}
          </h3>
          <p className="text-sm text-muted-foreground md:text-base">
            {experience.company}
          </p>
        </div>
        {experience.badge && (
          <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
            {experience.badge}
          </span>
        )}
      </header>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
        {experience.description}
      </p>

      {experience.tech && experience.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border/50 bg-muted/30 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {hasHighlights && expanded && (
        <div className="mt-6">
          <ul className="space-y-2">
            {experience.highlights!.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setExpanded(false)
              }}
              className="rounded-full border border-border/50 bg-muted/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              ← Show less
            </button>
          </div>
        </div>
      )}

      {hasHighlights && !expanded && hovered && (
        <div className="relative mt-6">
          <div className="max-h-32 overflow-hidden">
            <ul className="space-y-2">
              {experience.highlights!.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-card via-card/85 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-2">
            <span className="rounded-full border border-primary/40 bg-card/95 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-lg backdrop-blur-sm">
              Show more
            </span>
          </div>
        </div>
      )}

      {hasHighlights && !expanded && !hovered && (
        <div className="mt-6 flex justify-end">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            See more →
          </span>
        </div>
      )}
    </motion.article>
  )
}

export { DeploymentLog }
