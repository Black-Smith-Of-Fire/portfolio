import AvailableBadge from './AvailableBadge'
import { socials } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-32 mb-16 max-w-4xl rounded-card border border-line bg-white px-6 py-16 text-center sm:px-10"
    >
      <div className="flex justify-center">
        <AvailableBadge />
      </div>

      <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
      Volunteering
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted">
      Volunteered to teach English to school-age children, helping them develop foundational reading, writing, vocabulary, and communication skills in Mount Carmel School Informal Learning Center. It was a honor to serve the community 
      </p>

      {/* <a
        href="mailto:hello@example.com"
        className="group mt-6 inline-flex items-center gap-1.5 rounded-pill bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
      >
        Contact Me
        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </a> */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-pill bg-ink px-3 py-1.5 text-sm text-paper">
          <span className="h-5 w-5 rounded-full bg-paper/20" />
          Dymas Alfin
        </span>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="rounded-pill border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}
