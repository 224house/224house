import type { Ref } from 'react'
import InstagramEmbed from './InstagramEmbed'

interface PortfolioProps {
  sectionRef: Ref<HTMLElement>
}

interface ClientWork {
  name: string
  handle: string
  urls: string[]
}

const CLIENTS: ClientWork[] = [
  {
    name: 'Event Plus',
    handle: '@eventplus.in',
    urls: [
      'https://www.instagram.com/reel/DctRdgzzu4n/',
      'https://www.instagram.com/reel/DcJCNQvNlw4/',
    ],
  },
  {
    name: 'Bhoomi Events & Planners',
    handle: '@bhoomievents',
    urls: ['https://www.instagram.com/p/DbN0bz4ilgk/'],
  },
  {
    name: 'Artistry X Design Studio',
    handle: '@artistryxdesignstudio',
    urls: ['https://www.instagram.com/reel/DceeEeQov9P/'],
  },
]

export default function Portfolio({ sectionRef }: PortfolioProps) {
  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-10 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          Selected results.
        </h2>
        <p className="mt-6 max-w-xl text-white/75 leading-relaxed">
          A few of the founders and brands we run Instagram for. Live posts,
          straight from their pages.
        </p>

        <div className="mt-16 space-y-20">
          {CLIENTS.map((client) => (
            <div key={client.handle}>
              <div className="flex items-baseline justify-between border-b border-white/25 pb-4 mb-8">
                <h3 className="font-display italic text-2xl md:text-3xl">
                  {client.name}
                </h3>
                <a
                  href={`https://instagram.com/${client.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {client.handle}
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {client.urls.map((url) => (
                  <InstagramEmbed key={url} url={url} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
