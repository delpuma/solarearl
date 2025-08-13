import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SavingsCalculator } from "@/components/savings-calculator"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AboutEarlSection } from "@/components/about-earl-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <SavingsCalculator />
      <TestimonialsSection />
      <CaseStudiesSection />
      <AboutEarlSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </main>
  )
}
