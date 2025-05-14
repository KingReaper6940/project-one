import Link from "next/link"
import { MapPin, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8">
              Let's work together to elevate your facility management experience. Reach out to us for more information
              or to schedule a consultation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>Al Qusais Ind 3, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>sales@1stopworld.ae</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <div className="flex flex-col space-y-2">
                <p className="text-orange-400">
                  055 9566002
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
