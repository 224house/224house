import type { Ref } from 'react'

interface AboutProps {
  sectionRef: Ref<HTMLElement>
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-28 px-6 md:px-10 text-white"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <div>
          <p className="font-display italic text-2xl text-white/70">
            Founded by
          </p>
          <p className="font-display italic text-4xl md:text-5xl mt-1">
            Roshani Giri
          </p>
        </div>

        <div className="space-y-6 text-white/80 leading-relaxed text-base md:text-lg">
          <p>
            224 House was built on a simple observation: most founders
            don't have a content problem, they have a bandwidth problem.
            The ideas are there. The time to script, shoot, edit, and post
            every week isn't.
          </p>
          <p>
            Roshani started the agency to be the room where that gets
            handled — a small, hands-on team that thinks like a strategist
            and executes like an in-house creative department, so the
            people we work with can stay focused on running their company.
          </p>
          <p>
            We keep client rosters small on purpose. Every account gets one
            strategist who knows the brand, the audience, and what's coming
            next — not a rotating cast of freelancers.
          </p>
        </div>
      </div>
    </section>
  )
}
