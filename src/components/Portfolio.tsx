import type { Ref } from 'react'

interface PortfolioProps {
  sectionRef: Ref<HTMLElement>
}

const PLACEHOLDER_CASES = [
  { client: 'Add client name', category: 'Instagram', result: 'Add result — e.g. 2M views in 3 posts' },
  { client: 'Add client name', category: 'LinkedIn', result: 'Add result — e.g. 300K profile visits in 28 days' },
  { client: 'Add client name', category: 'Meta Ads', result: 'Add result — e.g. 4x ROAS in 60 days' },
]

export default function Portfolio({ sectionRef }: PortfolioProps) {
  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-6 md:px-10 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          Selected results.
        </h2>
        <p className="mt-6 max-w-xl text-white/75 leading-relaxed">
          A few of the founders and brands we've built rooms for. Case
          studies go here as work ships.
        </p>

        <div className="mt-16 border-t border-white/25">
          {PLACEHOLDER_CASES.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-2 md:gap-8 items-baseline py-8 border-b border-white/25"
            >
              <span className="font-display italic text-2xl md:text-3xl text-white/90">
                {item.client}
              </span>
              <span className="text-xs uppercase tracking-wide text-white/50">
                {item.category}
              </span>
              <span className="text-white/70 text-sm md:text-base md:text-right">
                {item.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
