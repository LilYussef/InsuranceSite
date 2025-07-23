"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [0, 100], ["rgba(20, 20, 20, 0)", "rgba(20, 20, 20, 0.8)"])
  const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll spy logic for active section (simplified for multi-page app)
  // This primarily highlights the current page in the nav.
  // For single-page scroll spy, more complex IntersectionObserver logic would be needed.
  useEffect(() => {
    // No specific scroll spy for sections on multi-page nav,
    // but the pathname check below handles current page highlighting.
  }, [pathname])

  return (
    <motion.header
      style={{ background, backdropFilter }}
      className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300"
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Yhelix Insurance
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href || (item.href === "/" && pathname === "/") ? "text-primary" : "text-gray-400",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background border-l border-gray-800">
            <div className="flex flex-col items-start pt-8">
              <Link
                href="/"
                className="text-2xl font-bold text-primary mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Yhelix Insurance
              </Link>
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-xl font-medium transition-colors hover:text-primary",
                        pathname === item.href || (item.href === "/" && pathname === "/")
                          ? "text-primary"
                          : "text-gray-400",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
