"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import { useDraggableScroll } from "@/hooks/use-draggable-scroll"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clientImages = [
  "Screenshot 2025-05-14 at 10.23.30 PM.png",
  "Screenshot 2025-05-14 at 10.28.25 PM.png",
  "Screenshot 2025-05-14 at 10.28.30 PM.png",
  "Screenshot 2025-05-14 at 10.28.35 PM.png",
  "Screenshot 2025-05-14 at 10.28.38 PM.png",
  "Screenshot 2025-05-14 at 10.28.43 PM.png",
  "Screenshot 2025-05-14 at 10.28.47 PM.png",
  "Screenshot 2025-05-14 at 10.28.50 PM.png",
  "Screenshot 2025-05-14 at 10.28.54 PM.png",
  "Screenshot 2025-05-14 at 10.28.58 PM.png",
  "Screenshot 2025-05-14 at 10.29.03 PM.png",
  "Screenshot 2025-05-14 at 10.29.06 PM.png",
  "Screenshot 2025-05-14 at 10.29.09 PM.png",
  "Screenshot 2025-05-14 at 10.29.12 PM.png",
  "Screenshot 2025-05-14 at 10.29.15 PM.png",
  "Screenshot 2025-05-14 at 10.29.18 PM.png",
  "Screenshot 2025-05-14 at 10.29.22 PM.png",
  "Screenshot 2025-05-14 at 10.29.27 PM.png",
  "Screenshot 2025-05-14 at 10.29.32 PM.png",
  "Screenshot 2025-05-14 at 10.29.36 PM.png",
]

export function KeyClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null)
  const isDragging = useRef(false)

  // --- Auto-scroll logic ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768
    if (!isMobile) return
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = scrollContainer.scrollLeft
    const scrollSpeed = 1
    const scrollInterval = 30

    const autoScroll = () => {
      if (!isDragging.current) {
        scrollAmount += scrollSpeed
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0
        }
        scrollContainer.scrollLeft = scrollAmount
      }
    }

    autoScrollInterval.current = setInterval(autoScroll, scrollInterval)

    // Pause/resume helpers
    const pauseAutoScroll = () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
    }
    const resumeAutoScroll = (delay = 800) => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
      resumeTimeout.current = setTimeout(() => {
        autoScrollInterval.current = setInterval(autoScroll, scrollInterval)
      }, delay)
    }

    // Touch/drag events
    const handleTouchStart = () => {
      isDragging.current = true
      pauseAutoScroll()
    }
    const handleTouchEnd = () => {
      isDragging.current = false
      resumeAutoScroll()
    }
    const handleMouseDown = () => {
      isDragging.current = true
      pauseAutoScroll()
    }
    const handleMouseUp = () => {
      isDragging.current = false
      resumeAutoScroll()
    }

    scrollContainer.addEventListener('touchstart', handleTouchStart)
    scrollContainer.addEventListener('touchend', handleTouchEnd)
    scrollContainer.addEventListener('mousedown', handleMouseDown)
    scrollContainer.addEventListener('mouseup', handleMouseUp)

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
      scrollContainer.removeEventListener('touchstart', handleTouchStart)
      scrollContainer.removeEventListener('touchend', handleTouchEnd)
      scrollContainer.removeEventListener('mousedown', handleMouseDown)
      scrollContainer.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // --- Arrow scroll handlers ---
  const scrollByAmount = 220 // px, adjust as needed
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" })
      // Pause auto-scroll and resume after
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
      resumeTimeout.current = setTimeout(() => {
        autoScrollInterval.current = setInterval(() => {
          if (scrollRef.current) {
            let scrollAmount = scrollRef.current.scrollLeft + 1
            if (scrollAmount >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
              scrollAmount = 0
            }
            scrollRef.current.scrollLeft = scrollAmount
          }
        }, 30)
      }, 800)
    }
  }
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" })
      // Pause auto-scroll and resume after
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current)
      resumeTimeout.current = setTimeout(() => {
        autoScrollInterval.current = setInterval(() => {
          if (scrollRef.current) {
            let scrollAmount = scrollRef.current.scrollLeft + 1
            if (scrollAmount >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
              scrollAmount = 0
            }
            scrollRef.current.scrollLeft = scrollAmount
          }
        }, 30)
      }, 800)
    }
  }

  // --- Drag-to-scroll (useDraggableScroll) ---
  useDraggableScroll(scrollRef)

  return (
    <section id="clients" className="py-16 bg-gray-50 relative">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Clients & Partners</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We are proud to work with leading organizations across various sectors in the UAE.
          </p>
        </div>
        {/* Left Arrow */}
        <button
          type="button"
          onClick={scrollLeft}
          className="block md:hidden absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-orange-500" />
        </button>
        {/* Right Arrow */}
        <button
          type="button"
          onClick={scrollRight}
          className="block md:hidden absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-orange-500" />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-nowrap md:flex-wrap gap-8 items-center overflow-x-auto md:overflow-x-visible scrollbar-hide px-2 select-none cursor-grab"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {clientImages.map((img, idx) => (
            <div
              key={img}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="min-w-[180px] bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:scale-105 hover:border-orange-500 border border-transparent flex-shrink-0"
            >
              <Image
                src={`/images/clients/${img}`}
                alt={`Client Logo ${idx + 1}`}
                width={150}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Add this to your global CSS if not present:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
