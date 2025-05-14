import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Check, ArrowRight } from "lucide-react"

export default function SpecializedServicesPage() {
  const services = [
    {
      title: "Energy & Asset Management",
      description:
        "Comprehensive energy optimization and asset management services to reduce operational costs and extend equipment lifespan.",
      image: "/images/energy.jpg",
      features: [
        "Energy consumption analysis",
        "Energy efficiency improvements",
        "Asset lifecycle management",
        "Predictive maintenance",
        "Energy audit & certification",
        "Sustainability reporting",
      ],
    },
    {
      title: "MEP Fit-outs & Refurbishments",
      description:
        "Professional mechanical, electrical, and plumbing fit-out services for new constructions or facility renovations.",
      image: "/images/mep-fitouts.jpg",
      features: [
        "MEP system design",
        "Installation & commissioning",
        "System upgrades & retrofits",
        "Space optimization",
        "Regulatory compliance",
        "Project management",
      ],
    },
    {
      title: "Annual Maintenance Contracts",
      description:
        "Customized maintenance agreements to ensure consistent, reliable facility performance throughout the year.",
      image: "/images/amc.jpg",
      features: [
        "Customized maintenance plans",
        "Scheduled preventive maintenance",
        "Priority emergency response",
        "Dedicated account management",
        "Regular performance reporting",
        "Cost-effective maintenance solutions",
      ],
    },
    {
      title: "Building Audits & Technical Assessments",
      description:
        "Thorough facility evaluations to identify improvement opportunities and ensure regulatory compliance.",
      image: "/images/audits.jpg",
      features: [
        "Comprehensive building inspections",
        "System performance evaluation",
        "Compliance verification",
        "Energy efficiency assessment",
        "Safety & security audits",
        "Improvement recommendations",
      ],
    },
    {
      title: "Water Tank & Duct Cleaning",
      description:
        "Specialized cleaning services for water storage systems and HVAC ducts to ensure clean, safe environments.",
      image: "/images/specialized services water tank cleaning .jpeg",
      features: [
        "Water tank disinfection",
        "HVAC duct cleaning",
        "Bacterial testing",
        "Sediment removal",
        "Ventilation system cleaning",
        "Compliance certification",
      ],
    },
    {
      title: "Emergency Callout & 24/7 Helpdesk",
      description: "Round-the-clock support services to address urgent facility issues and minimize downtime.",
      image: "/images/specialized services specific page , emergency services.jpeg",
      features: [
        "24/7 emergency response",
        "Dedicated helpdesk",
        "Rapid technician dispatch",
        "Issue tracking & resolution",
        "Priority service levels",
        "Regular status updates",
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Specialized Services"
        description="Advanced facility management solutions to optimize performance, enhance efficiency, and address specific operational needs."
        backgroundImage="/images/specialized-header.jpg"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-orange-600">{service.title}</h2>
                  <p className="mb-6 text-gray-700">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    {/* Removed Request Service button */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Specialized Services for Your Facility?</h2>
            <p className="mb-8">
              Our team of experts is ready to provide advanced facility management solutions tailored to your specific
              operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-orange-500 hover:bg-orange-600">Contact Us Today</Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
