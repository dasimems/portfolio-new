export type ProjectStat = {
  value: string
  label: string
}

export type Project = {
  slug: string
  name: string
  description: string
  stats: ProjectStat[]
  stackLabel: string
  stack: string[]
  /** Path under /public, or "" to render a placeholder. */
  image: string
  imageAlt: string
  /** Featured (Mango-style) layout instead of the alternating row. */
  featured?: boolean
  category?: { label: string }
  cta?: {
    label: string
    href: string
    iconChips?: string[]
  }
}

export const PROJECTS: Project[] = [
  {
    slug: "tuse",
    name: "Tuse",
    description:
      "A next-generation logistics engine optimizing last-mile delivery protocols through real-time telemetry and predictive routing.",
    stats: [
      { value: "45%", label: "Response Time Red." },
      { value: "1.2M", label: "Daily Events" },
    ],
    stackLabel: "Architecture Stack",
    stack: ["Node.js", "Kubernetes", "Redis OSS", "gRPC"],
    image: "",
    imageAlt: "Real-time telemetry visualization for Tuse logistics platform",
  },
  {
    slug: "buabedbanafa",
    name: "BuabedBanafa",
    description:
      "Enterprise-scale resource planning system for luxury distribution hubs, centralizing supply chain intelligence into a unified dashboard.",
    stats: [
      { value: "30%", label: "Retention Inc." },
      { value: "<150ms", label: "Avg Latency" },
    ],
    stackLabel: "Systems Design",
    stack: ["React Engine", "PostgreSQL", "AWS SQS", "Terraform"],
    image: "",
    imageAlt: "Server infrastructure powering BuabedBanafa",
  },
  {
    slug: "mango-entertainment",
    name: "Mango Entertainment",
    description:
      "Architecting a resilient content delivery network capable of handling high-concurrent traffic for live global broadcasts.",
    stats: [
      { value: "99.99%", label: "Uptime Record" },
      { value: "5TB/s", label: "Peak Throughput" },
    ],
    stackLabel: "",
    stack: [],
    image: "",
    imageAlt: "Live system telemetry dashboard for Mango Entertainment",
    featured: true,
    category: { label: "Streaming Infrastructure" },
    cta: {
      label: "View Architecture",
      href: "/projects/mango-entertainment",
      iconChips: ["Go", "Ka", "Az"],
    },
  },
]
