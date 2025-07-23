"use client"

import { motion } from "framer-motion"
import { companyTimeline } from "@/lib/data"

export default function CompanyTimeline() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="relative mx-auto max-w-4xl py-12">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-gray-700 md:left-1/2"></div>

      {companyTimeline.map((event, index) => (
        <motion.div
          key={event.year}
          className="mb-8 flex w-full items-center md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          {/* Left side (for even index) or Right side (for odd index) */}
          <div className={`w-full px-4 md:w-1/2 ${index % 2 === 0 ? "text-right md:pr-12" : "text-left md:pl-12"}`}>
            <h3 className="text-3xl font-bold text-primary">{event.year}</h3>
            <h4 className="mt-2 text-xl font-semibold text-white">{event.title}</h4>
            <p className="mt-2 text-gray-400">{event.description}</p>
          </div>

          {/* Circle in the middle */}
          <div className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary ring-8 ring-gray-900 md:left-1/2">
            <span className="h-3 w-3 rounded-full bg-white"></span>
          </div>

          {/* Empty div for spacing on the other side */}
          <div className="hidden w-full px-4 md:block md:w-1/2"></div>
        </motion.div>
      ))}
    </div>
  )
}
