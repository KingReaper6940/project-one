import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Leaf, Zap } from "lucide-react"

export function ServicesOverview() {
  return (
    <section id="services" className="py-16">
      <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 py-16 mb-16">
        <div className="container">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl">Comprehensive facility management solutions tailored to your specific needs</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Hard FM Services */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">Hard FM Services</h3>
            </div>
            <p className="mb-6 text-gray-700">
              Technical and infrastructure maintenance services to keep your facility operating at peak efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Electrical & Lighting Maintenance</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>HVAC & Mechanical Systems</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Plumbing & Drainage Solutions</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Fire Alarm & Firefighting Systems</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Building Fabric & Civil Works</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Preventive & Reactive Maintenance</span>
              </div>
            </div>
            <Link href="/services/hard-fm">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/hard-fm-service.jpg" alt="Hard FM Services" fill className="object-cover" />
          </div>
        </div>

        {/* Soft FM Services */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/soft-fm-service.jpg" alt="Soft FM Services" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">Soft FM Services</h3>
            </div>
            <p className="mb-6 text-gray-700">
              Services focused on maintaining a clean, comfortable, and aesthetically pleasing environment for occupants
              and visitors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>General Cleaning & Housekeeping</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Landscaping & Irrigation</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Waste Management</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Pest Control Services</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Reception & Front-of-House Services</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Disinfection & Sanitization</span>
              </div>
            </div>
            <Link href="/services/soft-fm">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">Specialized Services</h3>
            </div>
            <p className="mb-6 text-gray-700">
              Advanced solutions to optimize facility performance, enhance efficiency, and address specific operational
              needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Energy & Asset Management</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>MEP Fit-outs & Refurbishments</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Annual Maintenance Contracts</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Building Audits & Technical Assessments</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Water Tank & Duct Cleaning</span>
              </div>
              <div className="flex items-start">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                <span>Emergency Callout & 24/7 Helpdesk</span>
              </div>
            </div>
            <Link href="/services/specialized">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/specialized-service.jpg" alt="Specialized Services" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
