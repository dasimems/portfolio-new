import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ConsultationCTA } from "@/components/layout/consultation-cta"
import { DeploymentLog } from "@/components/layout/deployment-log"
import { Footer } from "@/components/layout/footer"
import { NavBar } from "@/components/layout/nav-bar"
import { Stats } from "@/components/layout/stats"
import { SystemVisualizations } from "@/components/layout/system-visualizations"
import { TechnicalArsenal } from "@/components/layout/technical-arsenal"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site"
import { SOCIAL_LIST } from "@/lib/socials"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.shortName, url: SITE.url }],
  creator: SITE.shortName,
  publisher: SITE.shortName,
  keywords: [
    "Isaac Omonimewa",
    "Duyil Ayomid",
    "Dasimems",
    "Senior Full Stack Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Mobile App Developer",
    "React Native",
    "Software Architect",
    "Backend Engineer",
    "Frontend Engineer",
    "Web Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    creator: "@dasimems",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/og.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaac Omonimewa",
  alternateName: ["Duyil Ayomid", "Dasimems"],
  url: SITE.url,
  jobTitle: "Senior Full Stack Engineer",
  description: SITE.description,
  image: `${SITE.url}/og.png`,
  sameAs: SOCIAL_LIST.map((social) => social.href),
  knowsAbout: [
    "Full Stack Development",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Architecture",
    "Distributed Systems",
    "Cloud Infrastructure",
    "Microservices",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  inLanguage: "en-US",
  publisher: { "@type": "Person", name: "Isaac Omonimewa" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
          <Stats />
          <DeploymentLog />
          <TechnicalArsenal />
          <SystemVisualizations />
          <ConsultationCTA />
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
