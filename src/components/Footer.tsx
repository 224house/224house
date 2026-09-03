import type { Ref } from 'react'

interface FooterProps {
  sectionRef: Ref<HTMLElement>
}

export default function Footer({ sectionRef }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer
      ref={sectionRef}
      className="relative py-10 px-6 md:px-10 text-white/60"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-display italic text-white">224 House</span>
        <span>© {year} 224 House. All rights reserved.</span>
        <a href="#top" className="hover:text-white transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  )
}
