"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import ctaImage from "@/assets/images/cta-section.png"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/motion/button"
import { Paragraph } from "@/components/motion/paragraph"
import { SOCIALS } from "@/lib/socials"

const HIDE_ON_PATHS = ["/contact"]

function ConsultationCTA() {
  const pathname = usePathname()

  if (HIDE_ON_PATHS.some((path) => pathname.startsWith(path))) {
    return null
  }

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background">
      <Image
        src={ctaImage}
        alt=""
        aria-hidden
        priority={false}
        className="pointer-events-none absolute -left-32 -bottom-44 hidden h-auto w-72 select-none md:block lg:w-96"
      />

      <Section className="relative flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          <span className="block text-muted-foreground">
            Initiate Consultation for your
          </span>
          <span className="block text-primary">Next Deployment</span>
        </h2>

        <Paragraph className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Ready to build resilient, distributed architectures? Let&apos;s
          engineer the future of your platform at scale.
        </Paragraph>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            variant="brand"
            size="lg"
            className="font-mono tracking-wider"
          >
            <Link href="/contact">ESTABLISH_CONNECTION</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-mono tracking-wider"
          >
            <Link
              href={SOCIALS.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW_GIT_REPOS
            </Link>
          </Button>
        </div>
      </Section>
    </section>
  )
}

export { ConsultationCTA }
