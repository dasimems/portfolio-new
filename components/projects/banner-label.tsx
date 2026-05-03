"use client"

import { motion } from "motion/react"

import { SplitText } from "@/components/motion/split-text"

function BannerLabel({ text }: { text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -20px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="flex items-center gap-4"
    >
      <motion.span
        aria-hidden
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-12 origin-left bg-primary md:w-16"
      />
      <SplitText
        text={text}
        splitBy="char"
        stagger={0.04}
        delay={0.35}
        duration={0.5}
        distance={14}
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary"
      />
    </motion.div>
  )
}

export { BannerLabel }
