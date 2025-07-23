import HeroSection from "@/components/home/HeroSection"
import PricingPlans from "@/components/pricing/PricingPlans"
import FAQSection from "@/components/home/FAQSection"
import ClientReviews from "@/components/home/ClientReviews"
import ParallaxSection from "@/components/home/ParallaxSection"

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Our Flexible Pricing</h2>
          <PricingPlans />
        </div>
      </section>
      <ParallaxSection />
      <section id="reviews" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">What Our Clients Say</h2>
          <ClientReviews />
        </div>
      </section>
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>
      {/* Insurance Calculator Modal is rendered globally or triggered from HeroSection */}
      {/* The DialogTrigger in HeroSection will open the DialogContent from InsuranceCalculatorModal */}
    </div>
  )
}
