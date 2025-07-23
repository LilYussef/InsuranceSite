import type React from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ChatBubble from "@/components/common/ChatBubble"
import NeedHelpFloatingButton from "@/components/common/NeedHelpFloatingButton"
import CookieConsent from "@/components/common/CookieConsent"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <ChatBubble />
      <NeedHelpFloatingButton />
      <CookieConsent />
    </div>
  )
}
