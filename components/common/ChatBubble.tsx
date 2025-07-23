"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
}

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I assist you today?", sender: "ai" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
    }
    setMessages((prev) => [...prev, newUserMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: `Thanks for your message about "${inputMessage}". I'm an AI assistant. For specific policy details, please visit our FAQ or contact support.`,
        sender: "ai",
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Button
          variant="default"
          size="icon"
          className="h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
          <span className="sr-only">Toggle chat assistant</span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 h-[500px] w-[350px] rounded-xl border border-gray-800 bg-card shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between rounded-t-xl bg-gray-900 p-4">
                <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5 text-gray-400" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn("flex items-end gap-2", msg.sender === "user" ? "justify-end" : "justify-start")}
                    >
                      {msg.sender === "ai" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-[70%] rounded-lg p-3",
                          msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-gray-800 text-gray-200",
                        )}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === "user" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "easeInOut" }}
                      className="flex items-end justify-start gap-2"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div className="max-w-[70%] rounded-lg bg-gray-800 p-3 text-gray-200">
                        <div className="flex space-x-1">
                          <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                            className="block h-2 w-2 rounded-full bg-gray-400"
                          ></motion.span>
                          <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                            className="block h-2 w-2 rounded-full bg-gray-400"
                          ></motion.span>
                          <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                            className="block h-2 w-2 rounded-full bg-gray-400"
                          ></motion.span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex items-center border-t border-gray-800 p-4">
                <Input
                  placeholder="Type your message..."
                  className="flex-1 rounded-r-none bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  size="icon"
                  className="rounded-l-none bg-primary hover:bg-primary/90"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
