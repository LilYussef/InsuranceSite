"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/lib/data"

export default function FAQSection() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
      className="mx-auto max-w-3xl"
    >
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AccordionItem value={`item-${index}`} className="border-b border-gray-700">
              <AccordionTrigger className="py-4 text-left text-lg font-medium text-white hover:no-underline data-[state=open]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-300">{item.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  )
}
