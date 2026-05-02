import * as React from "react"

import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section">

function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-[var(--container-max-w)] px-[var(--container-px)]",
        className
      )}
      {...props}
    />
  )
}

export { Section }
