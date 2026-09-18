import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto mt-32 max-w-5xl px-4">

        <p
          aria-hidden
          className="pointer-events-none select-none font-display text-[4rem] font-semibold text-ink/5 sm:text-[6rem]"
        >
          COMPANIES
        </p>
      <div className="relative overflow-hidden rounded-card bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
      
        <div className="relative flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold">/EXPERIENCE</h2>
          <p className="text-sm text-paper/60">9+ years of experience</p>
        </div>

        <div className="relative mt-8 divide-y divide-paper/10">
          {experience.map((item) => (
            <div
              key={item.company}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div>
                <p className="font-medium">{item.company}</p>
                <p className="text-sm text-paper/60">{item.role}</p>
              </div>
              <p className="whitespace-nowrap text-sm text-paper/60">
                {item.from} - {item.to}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
