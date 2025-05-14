import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Check, ArrowRight } from "lucide-react"

export default function HardFMServicesPage() {
  const services = [
    {
      title: "Electrical & Lighting Maintenance",
      description:
        "Comprehensive electrical systems maintenance including power distribution, lighting systems, emergency lighting, and electrical safety compliance.",
      image: "/images/electrical.jpg",
      features: [
        "24/7 emergency electrical support",
        "Lighting system optimization",
        "Electrical safety inspections",
        "Power quality monitoring",
        "Energy-efficient lighting solutions",
        "Preventive maintenance programs",
      ],
    },
    {
      title: "HVAC & Mechanical Systems",
      description:
        "Complete heating, ventilation, and air conditioning services to ensure optimal indoor air quality and comfort while maximizing energy efficiency.",
      image: "/images/hard fm specific page , hvac systems.jpeg",
      features: [
        "Air conditioning maintenance & repair",
        "Heating system servicing",
        "Ventilation system optimization",
        "Chiller & cooling tower maintenance",
        "Air quality testing & improvement",
        "Energy efficiency audits",
      ],
    },
    {
      title: "Plumbing & Drainage Solutions",
      description:
        "Professional plumbing and drainage services to prevent leaks, blockages, and water damage while ensuring water conservation.",
      image: "/images/plumbing.jpg",
      features: [
        "Leak detection & repair",
        "Drainage system maintenance",
        "Water pressure optimization",
        "Fixture installation & repair",
        "Pipe network maintenance",
        "Water conservation solutions",
      ],
    },
    {
      title: "Fire Alarm & Firefighting Systems",
      description:
        "Comprehensive fire safety services to protect your property and ensure compliance with local safety regulations.",
      image: "/images/hard fm specific page fire alarms and fire fighting.jpeg",
      features: [
        "Fire alarm system testing & maintenance",
        "Sprinkler system inspections",
        "Fire extinguisher servicing",
        "Emergency lighting checks",
        "Fire safety compliance audits",
        "Fire suppression system maintenance",
      ],
    },
    {
      title: "Building Fabric & Civil Works",
      description:
        "Structural maintenance services to preserve the integrity and appearance of your building's interior and exterior.",
      image: "/images/building-fabric.jpg",
      features: [
        "Structural inspections & repairs",
        "Painting & decorating",
        "Flooring maintenance & replacement",
        "Roof maintenance & waterproofing",
        "Façade cleaning & maintenance",
        "Partition installation & modifications",
      ],
    },
    {
      title: "Preventive & Reactive Maintenance",
      description:
        "Proactive maintenance programs to prevent issues before they occur, complemented by rapid response reactive maintenance when needed.",
      image: "/images/maintenance.jpg",
      features: [
        "Scheduled preventive maintenance",
        "Condition-based monitoring",
        "Emergency response services",
        "Asset lifecycle management",
        "Maintenance planning & scheduling",
        "Detailed maintenance reporting",
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Hard FM Services"
        description="Comprehensive technical and infrastructure maintenance services to keep your facility operating at peak efficiency."
        backgroundImage="/images/hard fm home page .jpeg"
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
            <h2 className="text-3xl font-bold mb-6">Need Hard FM Services for Your Facility?</h2>
            <p className="mb-8">
              Our team of certified technicians is ready to provide comprehensive Hard FM services tailored to your
              facility's specific requirements.
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
