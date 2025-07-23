import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { navItems, policyIcons } from "@/lib/data"
import { Mail, Linkedin, Facebook, Github, PhoneIcon as Whatsapp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card py-12 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              Yhelix Insurance
            </Link>
            <p className="mt-4 text-sm">Modern, sleek, and animated insurance solutions for your peace of mind.</p>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons (placeholders) */}
              <Link href="https://www.linkedin.com/in/yussef-ahmed-3bb294343/" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.facebook.com/share/1Bj2YuNWWH/" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://wa.me/+201095798212" className="hover:text-primary">
                <Whatsapp className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://github.com/LilYussef" className="hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {policyIcons.map((policy) => (
                <li key={policy.name}>
                  <Link href="#" className="text-sm hover:text-primary">
                    {policy.name} Insurance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-sm">Stay up-to-date with our latest news and offers.</p>
            <form className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-r-none bg-gray-800 text-white placeholder:text-gray-500 focus:ring-primary"
              />
              <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Yhelix Insurance. All rights reserved.
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          Developed By Yussef Helmy.
        </div>
      </div>
    </footer>
  )
}
