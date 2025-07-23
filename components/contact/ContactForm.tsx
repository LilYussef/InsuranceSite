"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { CheckCircle, XCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    // Clear error on change
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)
    if (validate()) {
      setIsSubmitting(true)
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)

      // Simulate success or error
      const success = Math.random() > 0.2 // 80% success rate
      if (success) {
        setSubmitStatus("success")
        toast.success("Message Sent!", {
          description: "We've received your message and will get back to you shortly.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
      } else {
        setSubmitStatus("error")
        toast.error("Submission Failed", {
          description: "There was an issue sending your message. Please try again.",
        })
      }
    } else {
      toast.error("Validation Error", {
        description: "Please fill in all required fields correctly.",
      })
    }
  }

  const inputVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl bg-card p-8 shadow-lg"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-gray-300">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                variants={inputVariants}
                className="text-sm text-red-500"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                variants={inputVariants}
                className="text-sm text-red-500"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject" className="text-gray-300">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                variants={inputVariants}
                className="text-sm text-red-500"
              >
                {errors.subject}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-gray-300">
            Message
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                variants={inputVariants}
                className="text-sm text-red-500"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 flex items-center justify-center rounded-md bg-green-900/30 p-3 text-green-400"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Message sent successfully!
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 flex items-center justify-center rounded-md bg-red-900/30 p-3 text-red-400"
            >
              <XCircle className="mr-2 h-5 w-5" />
              Failed to send message. Please try again.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}
