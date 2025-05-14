import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { AboutSection } from "@/components/about-section"
import { SectorsSection } from "@/components/sectors-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { KeyClientsSection } from "@/components/key-clients-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Sectors Section */}
      <SectorsSection />

      {/* Key Clients Section */}
      <KeyClientsSection />

      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
