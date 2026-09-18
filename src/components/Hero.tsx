import AvatarPlaceholder from './AvatarPlaceholder'
import { socials } from '../data'

export default function Hero() {
  return (
    <section className="relative mx-auto mt-16 max-w-5xl px-4 text-center">
      <h1 className="select-none font-display text-[15vw] font-semibold leading-[0.85] tracking-tight sm:text-[9rem] md:text-[10rem]">
        <text
          className="animate-slideInDown text-transparent"
          style={{ WebkitTextStroke: '2px #141414' }}
        >
          Benjamin
        </text>{' '}
        <span>Luke</span>
      </h1>

      <div className="relative mx-auto -mt-6 flex max-w-3xl items-end justify-between gap-6 text-left sm:-mt-10">
        <div className="max-w-[220px] pb-6">
          <p className="font-display text-lg font-medium">def SOFTWARE_DEVELOPER():</p>
          <p className=" mt-2 text-sm text-muted">
          building software that benefits society \n :)
          </p>
          <a
            href="#work"
            className="group mt-4 inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Let's collaborate
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        <AvatarPlaceholder className="h-[280px] w-[220px] shrink-0 rounded-t-[120px] object-cover sm:h-[340px] sm:w-[270px]" />

        <div className="flex flex-col gap-2.5 pb-6">

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="rounded-pill border border-line bg-white px-4 py-2 text-right text-sm transition-colors hover:border-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
