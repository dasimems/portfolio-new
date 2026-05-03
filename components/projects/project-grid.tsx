"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Hexagon, Sparkle } from "lucide-react"

import { Section } from "@/components/layout/section"
import { PROJECTS, type Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

function ProjectGrid() {
  return (
    <Section className="py-12 md:py-20">
      <div className="flex flex-col gap-16 md:gap-24">
        {PROJECTS.map((project, i) =>
          project.featured ? (
            <FeaturedProject key={project.slug} project={project} />
          ) : (
            <StandardProject
              key={project.slug}
              project={project}
              index={i}
            />
          )
        )}
      </div>
    </Section>
  )
}

function StandardProject({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reverse = index % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10"
    >
      <div
        className={cn(
          "md:col-span-5",
          reverse ? "md:order-2" : "md:order-1"
        )}
      >
        <InfoCard project={project} />
      </div>
      <div
        className={cn(
          "md:col-span-7",
          reverse ? "md:order-1" : "md:order-2"
        )}
      >
        <ProjectImage
          project={project}
          aspect="aspect-[4/5] md:aspect-[5/6]"
          sizes="(min-width: 768px) 55vw, 100vw"
        />
      </div>
    </motion.article>
  )
}

function InfoCard({ project }: { project: Project }) {
  const StackIcon = project.stackLabel.toLowerCase().includes("system")
    ? Hexagon
    : Sparkle

  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-border/50 bg-card p-6 md:p-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {project.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-primary md:text-4xl">
              {stat.value}
            </p>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {project.stack.length > 0 && (
        <div className="flex flex-col gap-3 rounded-xl border border-border/40 bg-background/30 p-4">
          <div className="flex items-center gap-2">
            <StackIcon className="size-3.5 text-primary" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {project.stackLabel}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/50 bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border/50 bg-card p-6 md:p-10"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          {project.category && (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-400">
              {project.category.label}
            </p>
          )}

          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {project.name}
            </h3>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="grid max-w-md grid-cols-2 gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-xl border border-border/40 bg-background/30 p-4"
              >
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {project.cta && (
            <div className="mt-auto flex items-center gap-3 pt-2">
              <Link
                href={project.cta.href}
                className="group flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-primary/80"
              >
                {project.cta.label}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              {project.cta.iconChips && project.cta.iconChips.length > 0 && (
                <div className="flex -space-x-1.5">
                  {project.cta.iconChips.map((chip) => (
                    <span
                      key={chip}
                      className="grid size-7 place-items-center rounded-full border border-border/50 bg-muted/40 font-mono text-[9px] font-semibold uppercase text-muted-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <ProjectImage
            project={project}
            aspect="aspect-video lg:aspect-auto lg:min-h-[320px] lg:h-full"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent p-4">
            <span className="size-1.5 animate-pulse rounded-full bg-orange-400" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-400">
              Live System Telemetry
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectImage({
  project,
  aspect,
  sizes,
}: {
  project: Project
  aspect: string
  sizes: string
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-muted/60 via-muted/20 to-background",
        aspect
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/40">
            /public/projects/{project.slug}
          </span>
        </div>
      )}
    </div>
  )
}

export { ProjectGrid }
