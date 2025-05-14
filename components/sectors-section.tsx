"use client"

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
    <section id="sectors" className="py-16 bg-orange-500">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Sectors We Serve</h2>
          <p className="max-w-2xl mx-auto text-white">
            Our expertise spans across various sectors, providing tailored facility management solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center min-h-[180px]">
              <Building className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="font-medium">{sector}</h3>
            </div>
          ))}
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg min-h-[180px] cursor-pointer"
            type="button"
            aria-label="Scroll to Contact Section"
          >
            <span className="text-orange-500 font-extrabold text-2xl mb-3">Contact Us For More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="orange"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 mt-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
