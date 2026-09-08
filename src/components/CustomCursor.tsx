import { useEffect, useRef, useState } from 'react'

interface CustomCursorProps {
  color: string
}

const HOVER_SELECTOR = 'a, button, [role="button"]'

export default function CustomCursor({ color }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      }
    }

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(HOVER_SELECTOR)) setHovering(true)
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(HOVER_SELECTOR)) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full transition-[width,height] duration-200 ease-out"
        style={{
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
          backgroundColor: color,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          borderColor: color,
          opacity: hovering ? 0.9 : 0.45,
        }}
      />
    </>
  )
}
