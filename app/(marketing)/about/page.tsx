"use client"

import CompanyTimeline from "@/components/about/CompanyTimeline"
import { motion } from "framer-motion"

export default function AboutUsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          Our Journey: <span className="text-primary">A Legacy of Trust</span>
        </h1>
        <CompanyTimeline />
      </div>
    </motion.div>
  )
}
