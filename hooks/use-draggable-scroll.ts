import { useEffect } from "react"

export function useDraggableScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDown = false
    let startX: number
    let scrollLeft: number

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
      const walk = (x - startX) * 1.5 // scroll speed multiplier
      el.scrollLeft = scrollLeft - walk
    }

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      isDown = true
      startX = e.touches[0].pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return
      const x = e.touches[0].pageX - el.offsetLeft
      const walk = (x - startX) * 1.5
      el.scrollLeft = scrollLeft - walk
    }

    const onTouchEnd = () => {
      isDown = false
    }

    // Mouse events
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)

    // Touch events
    el.addEventListener('touchstart', onTouchStart)
    el.addEventListener('touchmove', onTouchMove)
    el.addEventListener('touchend', onTouchEnd)

    return () => {
      // Clean up mouse events
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)

      // Clean up touch events
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [ref])
} 