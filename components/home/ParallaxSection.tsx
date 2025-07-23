"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section
      ref={ref}
      className="relative flex h-[500px] items-center justify-center overflow-hidden bg-gray-950 text-white"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: yImage }}>
        <img
          src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg"
          alt="Abstract background"
          className="h-full w-full object-cover opacity-30"
        />
      </motion.div>
      <motion.h2
        style={{ y: yText }}
        className="relative z-10 text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
      >
        <span className="text-primary">Innovation</span> in Every Policy
      </motion.h2>
    </section>
  )
}
