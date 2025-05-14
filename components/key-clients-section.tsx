"use client"

import Image from "next/image"
import React, { useRef } from "react"

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

function useDraggableScroll(ref: React.RefObject<HTMLDivElement | null>) {
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    let isDown = false
    let startX: number, scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      el.classList.add('cursor-grabbing')
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => {
      isDown = false
      el.classList.remove('cursor-grabbing')
    }
    const onMouseUp = () => {
      isDown = false
      el.classList.remove('cursor-grabbing')
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.5 //scroll-fast
      el.scrollLeft = scrollLeft - walk
    }
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
    }
  }, [ref])
}

export function KeyClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  useDraggableScroll(scrollRef)

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Clients & Partners</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We are proud to work with leading organizations across various sectors in the UAE.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-8 items-center overflow-x-auto scrollbar-hide px-2 select-none cursor-grab"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {clientImages.map((img, idx) => (
            <div
              key={img}
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
