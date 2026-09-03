export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const bigint = parseInt(h, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

export function rgbToCss(rgb: [number, number, number]): string {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function lerpColor(hexA: string, hexB: string, t: number): string {
  const a = hexToRgb(hexA)
  const b = hexToRgb(hexB)
  const rgb: [number, number, number] = [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ]
  return rgbToCss(rgb)
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n))
}
