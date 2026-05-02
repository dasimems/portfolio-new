"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/motion/button"
import { Section } from "@/components/layout/section"

const HIDE_ON_PATHS = ["/contact"]

function CallToAction() {
  const pathname = usePathname()

  if (HIDE_ON_PATHS.some((path) => pathname.startsWith(path))) {
    return null
  }

  return (
    <section className="border-t border-border/50">
      <Section className="flex flex-col items-start gap-10 py-24 md:py-32 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Initiate transmission
          </p>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Initiate <span className="text-brand-400">Consultation</span> for
            your <span className="text-brand-400">Next Deployment</span>
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Ready to architect your next move? Let&apos;s discuss the parameters
            of your engagement.
          </p>
        </div>

        <Button
          asChild
          variant="brand"
          size="xl"
          className="shrink-0 rounded-xl"
        >
          <Link href="/contact">
            Schedule Consultation
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </Section>
    </section>
  )
}

export { CallToAction }
