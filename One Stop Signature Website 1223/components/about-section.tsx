import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className="space-y-4">
              <p>
                Established in 2012 and headquartered in Dubai, ONE STOP SIGNATURE TECHNICAL SERVICES LLC is a dynamic
                facility management company offering integrated, smart, sustainable solutions across commercial,
                residential, and industrial sectors.
              </p>
              <p>
                We focus on quality, safety, and operational excellence with a customer-first approach, ensuring that
                your facilities are maintained to the highest standards.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Vision, Mission & Core Values</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Vision:</h4>
                  <p>To be the preferred FM partner known for excellence, innovation, and customer focus.</p>
                </div>
                <div>
                  <h4 className="font-bold">Mission:</h4>
                  <p>Deliver reliable, efficient, and innovative services enhancing value and sustainability.</p>
                </div>
                <div>
                  <h4 className="font-bold">Core Values:</h4>
                  <ul className="grid grid-cols-2 gap-2 mt-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" /> Professionalism
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" /> Innovation
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" /> Integrity
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" /> Sustainability
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" /> Customer Commitment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/about-company.jpg" alt="Facility Management" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
