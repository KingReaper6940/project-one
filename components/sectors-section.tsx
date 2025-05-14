import { Building } from "lucide-react"
import Link from "next/link"

export function SectorsSection() {
  const sectors = [
    "Residential communities & towers",
    "Commercial offices & business centers",
    "Retail stores & shopping malls",
    "Hospitality & leisure facilities",
    "Warehouses & industrial sites",
    "Educational institutions",
    "Healthcare facilities",
  ]

  return (
    <section id="sectors" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sectors We Serve</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our expertise spans across various sectors, providing tailored facility management solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <Building className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="font-medium">{sector}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
