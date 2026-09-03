import { useEffect, useRef, useState } from 'react'
import { clamp, lerpColor } from '../lib/color'

export interface ThemeStop {
  bg: string
  fg: string
  accent: string
}

export function useScrollTheme(stops: ThemeStop[]) {
  const sectionEls = useRef<(HTMLElement | null)[]>([])
  const callbackCache = useRef<Map<number, (el: HTMLElement | null) => void>>(
    new Map(),
  )
  const [bg, setBg] = useState(stops[0].bg)
  const [fg, setFg] = useState(stops[0].fg)

  useEffect(() => {
    let raf = 0
    const compute = () => {
      const els = sectionEls.current
      if (els.length < 2 || els.some((e) => !e)) return

      const mids = els.map((el) => el!.offsetTop + el!.offsetHeight / 2)
      const centerY = window.scrollY + window.innerHeight / 2

      let idx = 0
      if (centerY <= mids[0]) {
        idx = 0
      } else if (centerY >= mids[mids.length - 1]) {
        idx = mids.length - 2
      } else {
        for (let i = 0; i < mids.length - 1; i++) {
          if (centerY >= mids[i] && centerY <= mids[i + 1]) {
            idx = i
            break
          }
        }
      }

      const span = mids[idx + 1] - mids[idx]
      const t = span > 0 ? clamp((centerY - mids[idx]) / span, 0, 1) : 0

      setBg(lerpColor(stops[idx].bg, stops[idx + 1].bg, t))
      setFg(lerpColor(stops[idx].fg, stops[idx + 1].fg, t))
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    compute()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [stops])

  const registerSection = (index: number) => {
    if (!callbackCache.current.has(index)) {
      callbackCache.current.set(index, (el: HTMLElement | null) => {
        sectionEls.current[index] = el
      })
    }
    return callbackCache.current.get(index)!
  }

  return { bg, fg, registerSection }
}
