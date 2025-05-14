import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Leaf, Zap } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      title: "Hard FM Services",
      icon: <Building className="h-8 w-8 text-orange-500 mr-3" />,
      description: "Technical and infrastructure maintenance services to keep your facility operating at peak efficiency.",
      features: [
        "Electrical & Lighting Maintenance",
        "HVAC & Mechanical Systems",
        "Plumbing & Drainage Solutions",
        "Fire Alarm & Firefighting Systems",
        "Building Fabric & Civil Works",
        "Preventive & Reactive Maintenance",
      ],
      link: "/services/hard-fm",
      image: "/images/hard fm home page .jpeg",
      alt: "Hard FM Services",
    },
    {
      title: "Soft FM Services",
      icon: <Leaf className="h-8 w-8 text-orange-500 mr-3" />,
      description: "Services focused on maintaining a clean, comfortable, and aesthetically pleasing environment for occupants and visitors.",
      features: [
        "General Cleaning & Housekeeping",
        "Landscaping & Irrigation",
        "Waste Management",
        "Pest Control Services",
        "Reception & Front-of-House Services",
        "Disinfection & Sanitization",
      ],
      link: "/services/soft-fm",
      image: "/images/Soft Fm home page photo.jpeg",
      alt: "Soft FM Services",
    },
    {
      title: "Specialized Services",
      icon: <Zap className="h-8 w-8 text-orange-500 mr-3" />,
      description: "Advanced solutions to optimize facility performance, enhance efficiency, and address specific operational needs.",
      features: [
        "Energy & Asset Management",
        "MEP Fit-outs & Refurbishments",
        "Annual Maintenance Contracts",
        "Building Audits & Technical Assessments",
        "Water Tank & Duct Cleaning",
        "Emergency Callout & 24/7 Helpdesk",
      ],
      link: "/services/specialized",
      image: "/images/specialized-service.jpg",
      alt: "Specialized Services",
    },
  ]

  return (
    <section id="services" className="py-0 w-full">
      <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 py-16 mb-16 w-full">
        <div className="max-w-2xl text-white mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl">Comprehensive facility management solutions tailored to your specific needs</p>
        </div>
      </div>
      <div className="w-full">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`grid grid-cols-1 md:grid-cols-2 w-full`}
          >
            {/* Image and text columns alternate based on index */}
            <div className={`relative h-[300px] md:h-[400px] ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
              <Image src={service.image} alt={service.alt} fill className="object-cover" />
            </div>
            <div className={`flex flex-col justify-center p-8 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="flex items-center mb-4">{service.icon}<h3 className="text-2xl font-bold">{service.title}</h3></div>
              <p className="mb-6 text-gray-700">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, i) => (
                  <div className="flex items-start" key={i}>
                    <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href={service.link}>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
