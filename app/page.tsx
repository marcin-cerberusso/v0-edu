import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseMe } from "@/components/why-choose-me"
import { ParentsPreview } from "@/components/parents-preview"
import { ServicesGrid } from "@/components/services-grid"
import { PricingPreview } from "@/components/pricing-preview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      <SectionDivider variant="wave" color="cyan" flip />

      <WhyChooseMe />

      <SectionDivider variant="handprints" flip />

      <ParentsPreview />

      <SectionDivider variant="curve" color="yellow" flip />

      <ServicesGrid />

      <SectionDivider variant="wave" color="blue" />

      <PricingPreview />

      <SectionDivider variant="curve" color="cyan" />
      {/* </CHANGE> */}

      <ContactSection />
      <Footer />

      <WhatsAppButton />
    </main>
  )
}
