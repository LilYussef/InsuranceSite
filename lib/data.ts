import { type LucideIcon, Heart, Car, Home, Plane, ShieldCheck, Users, Info, MessageSquare, Globe } from "lucide-react"

export interface NavItem {
  name: string
  href: string
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Compare Plans", href: "/compare" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export interface PolicyIcon {
  name: string
  icon: LucideIcon
  description: string
}

export const policyIcons: PolicyIcon[] = [
  { name: "Health", icon: Heart, description: "Comprehensive health coverage." },
  { name: "Car", icon: Car, description: "Protect your vehicle on the road." },
  { name: "Property", icon: Home, description: "Secure your home and assets." },
  { name: "Travel", icon: Plane, description: "Worry-free travel insurance." },
]

export interface PricingPlan {
  id: string
  name: string
  description: string
  features: string[]
  price: {
    individual: number
    family: number
  }
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Shield",
    description: "Essential coverage for everyday peace of mind.",
    features: [
      "Basic medical coverage",
      "Accidental damage protection",
      "24/7 online support",
      "Digital policy access",
    ],
    price: { individual: 29.99, family: 59.99 },
  },
  {
    id: "premium",
    name: "Premium Guard",
    description: "Enhanced protection with extended benefits.",
    features: [
      "Comprehensive medical coverage",
      "Full accidental damage",
      "Theft protection",
      "Priority support",
      "Annual health check-up",
    ],
    price: { individual: 49.99, family: 99.99 },
  },
  {
    id: "ultimate",
    name: "Ultimate Fortress",
    description: "Maximum security for complete peace of mind.",
    features: [
      "All-inclusive medical & dental",
      "Worldwide coverage",
      "Natural disaster protection",
      "Dedicated personal agent",
      "Legal assistance",
      "Travel cancellation",
    ],
    price: { individual: 79.99, family: 149.99 },
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "We offer a wide range of insurance products including health, car, property, and travel insurance, tailored to meet your specific needs.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can get an instant quote using our online insurance calculator on the homepage, or by contacting our sales team directly.",
  },
  {
    question: "Is my data secure with you?",
    answer:
      "Absolutely. We use industry-standard encryption and security protocols to ensure your personal and financial data is always protected.",
  },
  {
    question: "Can I manage my policy online?",
    answer:
      "Yes, our client portal allows you to view your policy details, make payments, and submit claims conveniently from anywhere.",
  },
  {
    question: "What is your claims process?",
    answer:
      "Our claims process is designed to be simple and efficient. You can submit a claim online through our portal, and our team will guide you through the steps.",
  },
]

export interface Review {
  id: string
  author: string
  rating: number // out of 5
  content: string
}

export const clientReviews: Review[] = [
  {
    id: "1",
    author: "Sarah L.",
    rating: 5,
    content: "Yhelix Insurance made getting coverage so easy!",
  },
  {
    id: "2",
    author: "John P.",
    rating: 4,
    content:
      "Great service and competitive prices. The team was very responsive when I had questions about my car insurance.",
  },
  {
    id: "3",
    author: "Emily R.",
    rating: 5,
    content:
      "I highly recommend Yhelix Insurance. Their property insurance gave me peace of mind, and the digital policy access is a huge plus.",
  },
  {
    id: "4",
    author: "Michael B.",
    rating: 4,
    content: "The travel insurance saved my trip! Quick and efficient claims process. Will definitely use them again.",
  },
  {
    id: "5",
    author: "Jessica T.",
    rating: 5,
    content: "Fantastic customer support and a very user-friendly website. The dark mode design is a nice touch!",
  },
]

export interface TimelineEvent {
  year: number
  title: string
  description: string
}

export const companyTimeline: TimelineEvent[] = [
  {
    year: 2010,
    title: "Founded Yhelix Insurance",
    description: "Established with a vision to simplify insurance for everyone.",
  },
  {
    year: 2013,
    title: "Launched Online Calculator",
    description: "Introduced our innovative online insurance calculator for instant quotes.",
  },
  {
    year: 2016,
    title: "Expanded Coverage Options",
    description: "Added comprehensive property and travel insurance to our portfolio.",
  },
  {
    year: 2019,
    title: "Digital Transformation",
    description: "Migrated to a fully digital platform, enhancing client experience and accessibility.",
  },
  {
    year: 2022,
    title: "AI Assistant Integration",
    description: "Pioneered AI-powered virtual assistant for 24/7 customer support.",
  },
  {
    year: 2024,
    title: "Global Expansion",
    description: "Opened new offices in key international markets, serving clients worldwide.",
  },
]

export const comparisonFeatures = [
  { id: "medical", name: "Medical Coverage", icon: Heart },
  { id: "car", name: "Car Protection", icon: Car },
  { id: "property", name: "Property Security", icon: Home },
  { id: "travel", name: "Travel Assurance", icon: Plane },
  { id: "support", name: "24/7 Support", icon: MessageSquare },
  { id: "claims", name: "Easy Claims", icon: ShieldCheck },
  { id: "personalAgent", name: "Personal Agent", icon: Users },
  { id: "legal", name: "Legal Assistance", icon: Info },
  { id: "worldwide", name: "Worldwide Coverage", icon: Globe },
]

// Helper to check if a plan has a feature
export const hasFeature = (planId: string, featureId: string): boolean => {
  const plan = pricingPlans.find((p) => p.id === planId)
  if (!plan) return false

  switch (featureId) {
    case "medical":
      return (
        plan.features.includes("Basic medical coverage") ||
        plan.features.includes("Comprehensive medical coverage") ||
        plan.features.includes("All-inclusive medical & dental")
      )
    case "car":
      return (
        plan.features.includes("Accidental damage protection") ||
        plan.features.includes("Full accidental damage") ||
        plan.features.includes("Theft protection")
      )
    case "property":
      return plan.features.includes("Natural disaster protection") // Simplified for example
    case "travel":
      return plan.features.includes("Travel cancellation")
    case "support":
      return plan.features.includes("24/7 online support") || plan.features.includes("Priority support")
    case "claims":
      return true // Assume all plans have claims process
    case "personalAgent":
      return plan.features.includes("Dedicated personal agent")
    case "legal":
      return plan.features.includes("Legal assistance")
    case "worldwide":
      return plan.features.includes("Worldwide coverage")
    default:
      return false
  }
}
