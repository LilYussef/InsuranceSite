"use client"

import PricingPlans from "@/components/pricing/PricingPlans"
import { motion } from "framer-motion"

export default function PricingPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          Our Flexible <span className="text-primary">Pricing Plans</span>
        </h1>
        <PricingPlans />
      </div>
    </motion.div>
  )
}
