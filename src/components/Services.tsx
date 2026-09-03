import type { Ref } from 'react'

interface HeroProps {
  sectionRef: Ref<HTMLElement>
}

interface Package {
  name: string
  cadence: string
  items: string[]
}

const PACKAGES: Package[] = [
  {
    name: 'Instagram',
    cadence: '6–8 posts / month',
    items: [
      'Custom scripting',
      'Concept & direction',
      'Editing that suits your format',
      'Done-for-you posting & engagement',
      'Weekly strategy calls',
      'Shooting / production — optional',
    ],
  },
  {
    name: 'LinkedIn',
    cadence: '12 posts / month',
    items: [
      'SEO-driven profile optimisation',
      'Strategic pre & post-posting engagement',
      'Banner design for leadership positioning',
      'Top Voice badge strategy',
      '100+ targeted connections weekly',
      'Weekly strategy calls',
    ],
  },
  {
    name: 'Meta Ads',
    cadence: 'Always-on management',
    items: [
      'Campaign setup & audience targeting',
      'Ad creative direction — static & video',
      'A/B testing & optimisation',
      'Daily budget & bid management',
      'Pixel & Conversions API setup',
      'Weekly performance reporting',
    ],
  },
  {
    name: 'Build Your Own',
    cadence: 'Custom scope',
    items: [
      'Combine any platforms above',
      'Scaled for bigger teams & budgets',
      'Shooting / production — optional',
      'One strategist, one point of contact',
    ],
  },
]

export default function Services({ sectionRef }: HeroProps) {
  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-6 md:px-10 text-[#bc0c00]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          Pick a platform, or let us run the whole house.
        </h2>
        <p className="mt-6 max-w-xl text-[#bc0c00]/80 leading-relaxed">
          Every package is built around one strategist who knows your brand,
          not a rotating queue of freelancers.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#bc0c00]/25">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="border-r border-b border-[#bc0c00]/25 p-7 md:p-8 flex flex-col"
            >
              <h3 className="font-display italic text-2xl md:text-[1.75rem]">
                {pkg.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#bc0c00]/60">
                {pkg.cadence}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] block w-1 h-1 rounded-full bg-[#bc0c00]/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
