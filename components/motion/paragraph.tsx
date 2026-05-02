"use client"

import { motion, type HTMLMotionProps } from "motion/react"

type ParagraphProps = HTMLMotionProps<"p"> & {
  animate?: boolean
  delay?: number
  duration?: number
}

function Paragraph({
  animate = true,
  delay = 0,
  duration = 0.6,
  initial,
  whileInView,
  viewport,
  transition,
  ...props
}: ParagraphProps) {
  if (!animate) {
    return <motion.p initial={false} {...props} />
  }

  return (
    <motion.p
      initial={initial ?? { opacity: 0, y: 12 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true, margin: "0px 0px -20px 0px" }}
      transition={transition ?? { duration, delay, ease: "easeOut" }}
      {...props}
    />
  )
}

export { Paragraph }
