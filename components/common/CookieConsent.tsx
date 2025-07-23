"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Show after a short delay to not block initial content
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false") // Or handle more granularly
    setIsVisible(false)
  }

  const bannerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 p-4 shadow-lg md:flex md:items-center md:justify-between"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 text-sm text-gray-300 md:mb-0 md:mr-4">
            <p>
              We use cookies to ensure you get the best experience on our website. By continuing to use our site, you
              agree to our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <Button onClick={handleAccept} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Accept All
            </Button>
            <Button
              variant="outline"
              onClick={handleDecline}
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              Decline
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
