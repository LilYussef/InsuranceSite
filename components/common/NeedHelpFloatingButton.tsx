"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import Link from "next/link"

export default function NeedHelpFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <Button
          variant="default"
          className="h-14 rounded-full bg-gray-700 px-6 shadow-lg hover:bg-gray-600"
          onClick={() => setIsOpen(true)}
        >
          <HelpCircle className="mr-2 h-6 w-6" />
          <span className="font-semibold text-white">Need Help?</span>
        </Button>
      </motion.div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-gray-800 bg-card">
          <SheetHeader>
            <SheetTitle className="text-white">How Can We Help?</SheetTitle>
            <SheetDescription className="text-gray-400">
              Find answers to common questions or get in touch with our support team.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-8 space-y-6">
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/faq" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                    View Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-semibold text-white">Contact Us Directly</h3>
              <p className="text-gray-300">
                Email:{" "}
                <a href="mailto:yhelix_@outlook.com" className="text-primary hover:underline">
                  yhelix_@outlook.com
                </a>
              </p>
              <p className="text-gray-300">
                Phone:{" "}
                <a href="tel:+11234567890" className="text-primary hover:underline">
                  +20 (109) 579-8212
                </a>
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-semibold text-white">Live Chat</h3>
              <p className="text-gray-300">Click the chat bubble on the bottom right to talk to our AI assistant.</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
