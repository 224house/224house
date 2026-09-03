import type { Ref } from 'react'

interface HeroProps {
  sectionRef: Ref<HTMLElement>
}

export default function Hero({ sectionRef }: HeroProps) {
  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 text-white"
    >
      <div className="max-w-5xl">
        <p className="font-display italic text-2xl md:text-3xl mb-6 text-white/70">
          224 House
        </p>
        <h1 className="font-display italic text-[13vw] md:text-[7.5vw] leading-[0.95] tracking-tight">
          Content that behaves
          <br />
          like a growth engine,
          <br />
          not a chore.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
          We run Instagram, LinkedIn, and Meta Ads for founders and brands
          who'd rather build their company than babysit a content calendar.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-white text-[#1e1e1e] px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium hover:border-white transition-colors"
          >
            See how we work
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="hidden sm:flex absolute bottom-10 left-6 md:left-10 items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="block w-8 h-px bg-current" />
        Scroll
      </a>
    </section>
  )
}
