"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { clientReviews } from "@/lib/data"

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 0: initial, 1: next, -1: prev

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientReviews.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientReviews.length) % clientReviews.length)
  }

  const reviewVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-xl bg-gray-900 p-6 shadow-xl md:h-[200px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={reviewVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full px-6"
          >
            <Card className="w-full border-none bg-transparent text-center shadow-none">
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < clientReviews[currentIndex].rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-4 text-lg italic text-gray-200">&quot;{clientReviews[currentIndex].content}&quot;</p>
                <p className="text-md font-semibold text-primary">- {clientReviews[currentIndex].author}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="rounded-full bg-gray-800/50 text-white hover:bg-gray-700/70"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Previous review</span>
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="rounded-full bg-gray-800/50 text-white hover:bg-gray-700/70"
        >
          <ArrowRight className="h-6 w-6" />
          <span className="sr-only">Next review</span>
        </Button>
      </div>
    </div>
  )
}
