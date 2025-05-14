"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSInit() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 })
  }, [])
  return null
} 