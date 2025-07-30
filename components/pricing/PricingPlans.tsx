"use client"

import { Variants } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { pricingPlans } from "@/lib/data"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function PricingPlans() {
  const [coverageType, setCoverageType] = useState<"individual" | "family">("individual")

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <ToggleGroup
          type="single"
          value={coverageType}
          onValueChange={(value: "individual" | "family") => value && setCoverageType(value)}
          className="rounded-full bg-gray-800 p-1"
        >
          <ToggleGroupItem
            value="individual"
            aria-label="Toggle individual"
            className="rounded-full px-6 py-2 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=off]:text-gray-400 data-[state=off]:hover:bg-gray-700"
          >
            Individual
          </ToggleGroupItem>
          <ToggleGroupItem
            value="family"
            aria-label="Toggle family"
            className="rounded-full px-6 py-2 text-lg font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=off]:text-gray-400 data-[state=off]:hover:bg-gray-700"
          >
            Family
          </ToggleGroupItem>
        </ToggleGroup>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <Card className="flex h-full flex-col justify-between rounded-xl border-gray-700 bg-card p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-primary">${plan.price[coverageType].toFixed(2)}</span>
                  <span className="ml-1 text-xl font-medium text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full bg-primary py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
