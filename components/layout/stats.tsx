"use client"

import * as React from "react"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

import {
  CompassIcon,
  SpeedometerIcon,
  TeamsIcon,
  TimerHistoryIcon,
} from "@/components/icons"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

type Stat = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  iconColor: string
  value: string
  label: string
}

const stats: Stat[] = [
  {
    icon: TimerHistoryIcon,
    iconColor: "text-brand-400",
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: CompassIcon,
    iconColor: "text-cool-300",
    value: "50+",
    label: "Projects Architected",
  },
  {
    icon: SpeedometerIcon,
    iconColor: "text-orange-300",
    value: "99%",
    label: "System Uptime",
  },
  {
    icon: TeamsIcon,
    iconColor: "text-brand-600",
    value: "3+",
    label: "Teams Led",
  },
]

function Stats() {
  const pathname = usePathname()
  if (pathname !== "/") return null

  return (
    <section>
      <Section className="py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </Section>
    </section>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  const Icon = stat.icon
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card p-6 md:p-8"
    >
      <Icon className={cn("size-7", stat.iconColor)} />
      <div className="space-y-1">
        <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {stat.value}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {stat.label}
        </p>
      </div>
    </motion.div>
  )
}

export { Stats }
