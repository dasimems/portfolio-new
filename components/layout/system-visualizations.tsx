"use client"

import * as React from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import { usePathname } from "next/navigation"

import { MeshIcon, OdometerIcon, ShieldIcon } from "@/components/icons"
import { Section } from "@/components/layout/section"

const items = [
  {
    icon: MeshIcon,
    title: "Microservices Mesh",
    description:
      "Decoupled event-driven architecture using Kafka for high-throughput messaging.",
  },
  {
    icon: ShieldIcon,
    title: "Zero Trust Security",
    description:
      "Implementing mTLS and identity-aware proxies for all internal communication.",
  },
  {
    icon: OdometerIcon,
    title: "Edge Optimization",
    description:
      "Global CDN edge computing to reduce TTFB for international users.",
  },
]

function shouldShow(pathname: string): boolean {
  if (pathname === "/") return true
  if (pathname === "/projects" || pathname.startsWith("/projects/")) return true
  return false
}

type Item = (typeof items)[number]

function Card({ item }: { item: Item }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      style={{ rotateX, rotateY }}
      className="flex transform-3d flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8 text-center"
    >
      <Icon className="size-6 translate-z-10 text-primary" />
      <h3 className="translate-z-[25px] text-lg font-bold text-foreground">
        {item.title}
      </h3>
      <p className="translate-z-[15px] text-sm text-muted-foreground">
        {item.description}
      </p>
    </motion.div>
  )
}

function SystemVisualizations() {
  const pathname = usePathname()

  if (!shouldShow(pathname)) {
    return null
  }

  return (
    <section>
      <Section className="flex flex-col items-center gap-12 py-24 md:py-32">
        <h2 className="text-center text-2xl font-bold uppercase tracking-widest text-muted-foreground/40 md:text-3xl">
          System Architecture Visualizations
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid w-full grid-cols-1 gap-6 perspective-distant md:grid-cols-3"
        >
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </motion.div>
      </Section>
    </section>
  )
}

export { SystemVisualizations }
