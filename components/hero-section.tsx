import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/home page title card.jpg" alt="Home Page Title Card" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Total Facilities Management</h1>
          <p className="text-xl mb-8">
            Your Partner in Total Facility Management Solutions. Delivering integrated, smart, and sustainable solutions
            across commercial, residential, and industrial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/hard-fm" scroll={true}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                HARD FM SERVICES <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services/soft-fm" scroll={true}>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                SOFT FM SERVICES <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
