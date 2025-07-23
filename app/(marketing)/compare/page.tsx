"use client"

import ComparisonTable from "@/components/compare/ComparisonTable"
import { motion } from "framer-motion"

export default function ComparePlansPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          Compare Our <span className="text-primary">Insurance Plans</span>
        </h1>
        <ComparisonTable />
      </div>
    </motion.div>
  )
}
