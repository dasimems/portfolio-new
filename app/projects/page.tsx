import type { Metadata } from "next"

import { Section } from "@/components/layout/section"
import { SplitText } from "@/components/motion/split-text"
import { BannerLabel } from "@/components/projects/banner-label"
import { ProjectGrid } from "@/components/projects/project-grid"
import { PROJECTS } from "@/lib/projects"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected artifacts — a showcase of high-performance systems and architectural solutions designed for scale, resilience, and user impact.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Isaac Omonimewa",
    description:
      "Selected artifacts — high-performance systems and architectural solutions designed for scale, resilience, and user impact.",
    url: `${SITE.url}/projects`,
    type: "website",
  },
}

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE.url}/projects`,
  name: "Projects | Isaac Omonimewa",
  description:
    "A curated collection of engineering projects spanning high-performance systems, distributed architectures, and product engineering.",
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: `${SITE.url}/projects/${project.slug}`,
        keywords: project.stack.join(", "),
      },
    })),
  },
}

export default function ProjectsPage() {
  return (
    <main>
      <Section className="flex flex-col gap-10 py-24 md:py-32">
        <header className="flex flex-col gap-10">
          <BannerLabel text="Selected Artifacts" />

          <h1 className="text-6xl font-bold uppercase leading-[1.05] tracking-tight md:text-8xl lg:text-9xl">
            <SplitText
              text="Engineering"
              splitBy="char"
              stagger={0.04}
              duration={0.7}
              distance={60}
              className="block text-muted-foreground/30"
            />
            <SplitText
              text="Excellence."
              splitBy="char"
              stagger={0.04}
              delay={0.45}
              duration={0.7}
              distance={60}
              className="block text-primary"
            />
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A showcase of high-performance systems and architectural solutions
            designed for scale, resilience, and user impact.
          </p>
        </header>
      </Section>

      <ProjectGrid />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
    </main>
  )
}
