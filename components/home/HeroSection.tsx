"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { policyIcons } from "@/lib/data"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import InsuranceCalculatorModal from "@/components/common/InsuranceCalculatorModal"

export default function HeroSection() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-gray-800 py-20 text-white">
      {/* Background Grid/Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" fill="none" viewBox="0 0 100 100">
          <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#333" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Your Future, <span className="text-primary">Secured.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-10 max-w-3xl text-lg text-gray-300 sm:text-xl"
        >
          Experience modern insurance solutions designed for clarity, flexibility, and your ultimate peace of mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Get an Instant Quote
              </Button>
            </DialogTrigger>
            <InsuranceCalculatorModal />
          </Dialog>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 px-8 py-3 text-lg font-semibold text-gray-200 hover:bg-gray-800 hover:text-white bg-transparent"
          >
            Learn More
          </Button>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {policyIcons.map((policy, i) => (
            <motion.div
              key={policy.name}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <policy.icon className="mb-3 h-10 w-10 text-primary" />
              <span className="text-md font-medium text-gray-200">{policy.name} Insurance</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
