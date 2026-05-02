"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Cloud, Monitor, Server } from "lucide-react"
import { usePathname } from "next/navigation"
import { FaAws } from "react-icons/fa"
import {
  SiAnsible,
  SiApachekafka,
  SiAppstore,
  SiCloudflare,
  SiDocker,
  SiElectron,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiGoogleplay,
  SiGooglecloud,
  SiGrafana,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiReact,
  SiRedis,
  SiRedux,
  SiRust,
  SiSentry,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTauri,
  SiTerraform,
  SiVercel,
  SiXcode,
} from "react-icons/si"
import type { IconType } from "react-icons"

import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

type Skill = { icon: IconType; label: string }

const frontend: Skill[] = [
  { icon: SiReact, label: "React" },
  { icon: SiReact, label: "React Native" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiFramer, label: "Framer Motion" },
  { icon: SiRedux, label: "Redux" },
  { icon: SiSqlite, label: "SQLite" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiSupabase, label: "Supabase" },
  { icon: SiTauri, label: "Tauri" },
  { icon: SiElectron, label: "Electron" },
]

const backend: Skill[] = [
  { icon: SiGo, label: "Go" },
  { icon: SiRust, label: "Rust" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiExpress, label: "Express" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiRedis, label: "Redis" },
  { icon: SiApachekafka, label: "Kafka" },
]

const devops: Skill[] = [
  { icon: SiKubernetes, label: "Kubernetes" },
  { icon: SiDocker, label: "Docker" },
  { icon: FaAws, label: "AWS" },
  { icon: SiGooglecloud, label: "Google Cloud" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiNetlify, label: "Netlify" },
  { icon: SiCloudflare, label: "Cloudflare" },
  { icon: SiExpo, label: "EAS / Expo" },
  { icon: SiTerraform, label: "Terraform" },
  { icon: SiAnsible, label: "Ansible" },
  { icon: SiNginx, label: "Nginx" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiGithubactions, label: "GitHub Actions" },
  { icon: SiSentry, label: "Sentry" },
  { icon: SiGrafana, label: "Grafana" },
  { icon: SiPrometheus, label: "Prometheus" },
  { icon: SiXcode, label: "Xcode" },
  { icon: SiAppstore, label: "App Store Connect" },
  { icon: SiGoogleplay, label: "Google Play Console" },
]

type Category = {
  label: string
  icon: typeof Monitor
  iconClassName: string
  items: Skill[]
  scrollClass: string
}

const categories: Category[] = [
  {
    label: "Frontend",
    icon: Monitor,
    iconClassName: "text-brand-400",
    items: frontend,
    scrollClass: "marquee-fast",
  },
  {
    label: "Backend",
    icon: Server,
    iconClassName: "text-foreground",
    items: backend,
    scrollClass: "marquee-medium",
  },
  {
    label: "DevOps & Tools",
    icon: Cloud,
    iconClassName: "text-orange-400",
    items: devops,
    scrollClass: "marquee-slow",
  },
]

function SkillBox({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -6,
        rotateY: 6,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group/skill relative mr-4 flex size-16 shrink-0 transform-3d cursor-pointer items-center justify-center rounded-lg border border-border/50 bg-card text-foreground hover:z-20 hover:border-primary hover:shadow-[0_0_20px_-6px] hover:shadow-primary/40"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] scale-90 whitespace-nowrap rounded-md bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground opacity-0 shadow-lg ring-1 ring-border/50 transition-all duration-200 ease-out group-hover/skill:scale-100 group-hover/skill:opacity-100"
      >
        {skill.label}
      </span>
      <Icon className="size-7" aria-label={skill.label} />
    </motion.div>
  )
}

function ScrollRow({
  items,
  scrollClass,
}: {
  items: Skill[]
  scrollClass: string
}) {
  return (
    <div className="overflow-hidden py-12 mask-[linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
      <div
        className={cn(
          "flex w-max will-change-transform [perspective:1000px]",
          scrollClass
        )}
      >
        {[...items, ...items].map((skill, i) => (
          <SkillBox key={`${skill.label}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function TechnicalArsenal() {
  const pathname = usePathname()
  if (pathname !== "/") return null

  return (
    <section>
      <Section className="flex flex-col gap-12 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="max-w-md text-sm text-muted-foreground md:text-right md:text-base">
            Core competencies across the stack, focusing on scalable,
            maintainable, and high-performance technologies.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <category.icon
                  className={cn("size-5", category.iconClassName)}
                />
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {category.label}
                </h3>
              </div>
              <div className="border-t border-border/50" />
              <ScrollRow
                items={category.items}
                scrollClass={category.scrollClass}
              />
            </div>
          ))}
        </div>
      </Section>
    </section>
  )
}

export { TechnicalArsenal }
