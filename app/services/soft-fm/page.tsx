import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Check, ArrowRight } from "lucide-react"

export default function SoftFMServicesPage() {
  const services = [
    {
      title: "General Cleaning & Housekeeping",
      description:
        "Comprehensive cleaning services to maintain a pristine, healthy environment for your facility's occupants and visitors.",
      image: "/images/cleaning.jpg",
      features: [
        "Daily office cleaning",
        "Deep cleaning services",
        "Floor care & maintenance",
        "Window & façade cleaning",
        "Carpet & upholstery cleaning",
        "High-level cleaning",
      ],
    },
    {
      title: "Landscaping & Irrigation",
      description:
        "Professional landscaping services to enhance the aesthetic appeal of your property while ensuring sustainable water usage.",
      image: "/images/landscaping.jpg",
      features: [
        "Garden design & maintenance",
        "Irrigation system installation & repair",
        "Tree & shrub care",
        "Lawn maintenance",
        "Seasonal planting",
        "Water conservation solutions",
      ],
    },
    {
      title: "Waste Management",
      description:
        "Efficient waste collection, segregation, and disposal services that comply with environmental regulations and promote sustainability.",
      image: "/images/waste.jpg",
      features: [
        "Waste collection & disposal",
        "Recycling programs",
        "Hazardous waste management",
        "Waste reduction strategies",
        "Waste audits & reporting",
        "Sustainable disposal methods",
      ],
    },
    {
      title: "Pest Control Services",
      description:
        "Comprehensive pest management solutions to protect your facility from unwanted pests while ensuring the safety of occupants.",
      image: "/images/soft fm specific page pest control.jpeg",
      features: [
        "Preventive pest control",
        "Targeted pest treatments",
        "Rodent control",
        "Insect management",
        "Bird deterrent solutions",
        "Eco-friendly pest control options",
      ],
    },
    {
      title: "Reception & Front-of-House Services",
      description:
        "Professional front-of-house services to create a positive first impression and ensure smooth visitor management.",
      image: "/images/reception.jpg",
      features: [
        "Professional reception staff",
        "Visitor management",
        "Mail & package handling",
        "Concierge services",
        "Meeting room management",
        "Administrative support",
      ],
    },
    {
      title: "Disinfection & Sanitization",
      description:
        "Thorough disinfection services to maintain a hygienic environment and reduce the risk of disease transmission.",
      image: "/images/soft fm specific page disinfection and sanition.jpeg",
      features: [
        "Surface disinfection",
        "Fogging & misting treatments",
        "High-touch point sanitization",
        "Air purification",
        "Antimicrobial treatments",
        "Infection control protocols",
      ],
    },
  ]

  return (
    <>
      <PageHeader
        title="Soft FM Services"
        description="Comprehensive soft services to enhance the comfort, cleanliness, and aesthetic appeal of your facility."
        backgroundImage="/images/Soft Fm home page photo.jpeg"
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
                    <Link href="/contact">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Request Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
            <h2 className="text-3xl font-bold mb-6">Need Soft FM Services for Your Facility?</h2>
            <p className="mb-8">
              Our team of trained professionals is ready to provide comprehensive Soft FM services tailored to your
              facility's specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600">Contact Us Today</Button>
              </Link>
              <Link href="/services">
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
