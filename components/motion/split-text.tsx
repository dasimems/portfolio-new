"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "motion/react"

type SplitTextProps = Omit<HTMLMotionProps<"span">, "children"> & {
  text: string
  splitBy?: "char" | "word"
  stagger?: number
  delay?: number
  duration?: number
  distance?: number
}

function SplitText({
  text,
  splitBy = "char",
  stagger = 0.04,
  delay = 0,
  duration = 0.6,
  distance = 40,
  className,
  ...props
}: SplitTextProps) {
  const segments = React.useMemo(
    () => (splitBy === "word" ? text.split(" ") : Array.from(text)),
    [text, splitBy]
  )

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -20px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
      {...props}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${segment}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: -distance },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
          {splitBy === "word" && i < segments.length - 1 ? `${segment} ` : segment}
        </motion.span>
      ))}
    </motion.span>
  )
}

export { SplitText }
