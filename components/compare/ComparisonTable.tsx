"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Check, X, Info } from "lucide-react"
import { pricingPlans, comparisonFeatures, hasFeature } from "@/lib/data"

export default function ComparisonTable() {
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const cellVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  }

  return (
    <TooltipProvider>
      <div className="overflow-x-auto rounded-lg border border-gray-800 bg-card shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="w-[200px] text-lg font-semibold text-white">Feature</TableHead>
              {pricingPlans.map((plan) => (
                <TableHead key={plan.id} className="text-center text-lg font-semibold text-white">
                  {plan.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonFeatures.map((feature, featureIndex) => (
              <motion.tr
                key={feature.id}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: featureIndex * 0.05 }}
                className="border-b border-gray-800 last:border-b-0 hover:bg-gray-800"
              >
                <TableCell className="flex items-center py-4 font-medium text-gray-200">
                  <feature.icon className="mr-2 h-5 w-5 text-primary" />
                  {feature.name}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="ml-2 h-4 w-4 cursor-help text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent className="rounded-md border border-gray-600 bg-gray-700 text-white">
                      <p>Details about {feature.name}.</p>
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                {pricingPlans.map((plan, planIndex) => (
                  <motion.td
                    key={`${plan.id}-${feature.id}`}
                    variants={cellVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: featureIndex * 0.05 + planIndex * 0.03 }}
                    className="py-4 text-center"
                  >
                    {hasFeature(plan.id, feature.id) ? (
                      <Check className="mx-auto h-6 w-6 text-green-500" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-red-500" />
                    )}
                  </motion.td>
                ))}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  )
}
