import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { ConnectionForm } from "@/components/contact/connection-form"
import { SystemStatus } from "@/components/contact/system-status"
import { SplitText } from "@/components/motion/split-text"
import { CONTACT } from "@/lib/contact"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Initiate a system connection with Isaac Omonimewa. Available for remote senior full-stack engineering engagements across US, UK, and CA timezones.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Isaac Omonimewa",
    description:
      "Initiate a system connection. Available for remote senior full-stack engineering engagements worldwide.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
}

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE.url}/contact`,
  name: "Contact Isaac Omonimewa",
  description:
    "Direct channels for engaging Isaac Omonimewa for remote senior full-stack engineering work.",
  mainEntity: {
    "@type": "Person",
    name: "Isaac Omonimewa",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    jobTitle: "Senior Full Stack Engineer",
  },
}

export default function ContactPage() {
  return (
    <main>
      <Section className="flex flex-col gap-12 py-24 md:py-32">
        <header className="flex max-w-3xl flex-col gap-6">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <SplitText
              text="Initiate"
              splitBy="char"
              stagger={0.05}
              duration={0.7}
              distance={50}
              className="block text-muted-foreground/40"
            />
            <SplitText
              text="System Connection"
              splitBy="char"
              stagger={0.04}
              delay={0.45}
              duration={0.7}
              distance={50}
              className="block text-primary"
            />
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="text-primary">Operating globally.</span> Ready for
            your next high-impact engineering challenge in the{" "}
            <span className="text-foreground">US, UK, Canada,</span> or beyond.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <ConnectionForm />
          <SystemStatus />
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </main>
  )
}
