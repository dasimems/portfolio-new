"use client"

import { motion, type HTMLMotionProps } from "motion/react"

type DivProps = HTMLMotionProps<"div">

function Div({ layout = true, ...props }: DivProps) {
  return <motion.div layout={layout} {...props} />
}

export { Div }
