import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

export function Footer() {
  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.png" alt="ONE STOP SIGNATURE" width={180} height={50} className="mb-4" />
            <p className="text-gray-400">Your Partner in Total Facility Management Solutions</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#" className="text-gray-400 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="text-gray-400 hover:text-orange-500">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                <span>Al Qusais Ind 3, Dubai, UAE</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                <span>sales@1stopworld.ae</span>
              </li>
              <li>
                <span className="text-gray-400">
                  055 9566002
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ONE STOP SIGNATURE TECHNICAL SERVICES LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
