import type { Ref } from 'react'

interface ContactProps {
  sectionRef: Ref<HTMLElement>
}

export default function Contact({ sectionRef }: ContactProps) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center py-28 px-6 md:px-10 text-[#bc0c00]"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-display italic text-5xl md:text-7xl leading-[1.02]">
          Let's build
          <br />
          your feed.
        </h2>

        <p className="mt-8 max-w-md text-[#bc0c00]/80 leading-relaxed">
          Tell us what you're building and which platform you want to win
          first. We'll get back to you within a day.
        </p>

        <div className="mt-14 flex flex-col gap-1 border-t border-[#bc0c00]/25">
          <a
            href="mailto:the224house@gmail.com"
            className="group flex items-center justify-between py-6 border-b border-[#bc0c00]/25"
          >
            <span className="font-display italic text-2xl md:text-4xl">
              the224house@gmail.com
            </span>
            <span className="hidden sm:block text-sm opacity-60 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </a>
          <a
            href="tel:+918010330652"
            className="group flex items-center justify-between py-6 border-b border-[#bc0c00]/25"
          >
            <span className="font-display italic text-2xl md:text-4xl">
              +91 80103 30652
            </span>
            <span className="hidden sm:block text-sm opacity-60 group-hover:opacity-100 transition-opacity">
              Call
            </span>
          </a>
          <a
            href="https://instagram.com/the224house"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-6 border-b border-[#bc0c00]/25"
          >
            <span className="font-display italic text-2xl md:text-4xl">
              @the224house
            </span>
            <span className="hidden sm:block text-sm opacity-60 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
