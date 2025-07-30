"use client"

import ContactForm from "@/components/contact/ContactForm"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          Get In <span className="text-primary">Touch</span>
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-xl bg-card p-8 shadow-lg"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Contact Information</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center">
                <Mail className="mr-4 h-6 w-6 text-primary" />
                <span>yhelix_@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-6 w-6 text-primary" />
                <span>+20 (109) 579-8212</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-primary" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Business Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}
