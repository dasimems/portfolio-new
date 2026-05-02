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
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
      </body>
    </html>
  )
}
