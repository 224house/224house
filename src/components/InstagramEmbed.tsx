import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void }
    }
  }
}

let scriptPromise: Promise<void> | null = null

function loadInstagramScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    )
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })

  return scriptPromise
}

interface InstagramEmbedProps {
  url: string
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    loadInstagramScript().then(() => {
      if (cancelled) return
      window.instgrm?.Embeds.process()
    })
    return () => {
      cancelled = true
    }
  }, [url])

  return (
    <div ref={wrapperRef} className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '4px',
          margin: '0',
          maxWidth: '400px',
          minWidth: '280px',
          width: '100%',
        }}
      />
    </div>
  )
}
