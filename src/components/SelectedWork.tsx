import { useState } from 'react'
import { workItems, WorkCategory } from '../data'

const filters: Array<'All' | WorkCategory> = ['All', 'Real Project', 'Exploration']

export default function SelectedWork() {
  const [active, setActive] = useState<'All' | WorkCategory>('All')

  const visible =
    active === 'All' ? workItems : workItems.filter((w) => w.category === active)

  return (
    <section id="work" className="mx-auto mt-32 max-w-5xl px-4">
      <div className="relative text-center">
        <p
          aria-hidden
          className="pointer-events-none select-none font-display text-[4rem] font-semibold text-ink/5 sm:text-[6rem]"
        >
          PORTFOLIO
        </p>
        <h2 className="-mt-10 font-display text-3xl font-semibold sm:-mt-14 sm:text-4xl">
          /SELECTED WORK
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-6 text-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`transition-colors ${
                active === f ? 'text-ink font-medium' : 'text-muted hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 rounded-pill border border-line bg-white px-4 py-2 text-sm transition-colors hover:border-ink"
        >
          View All Work
          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {visible.map((item) => (
          <a key={item.id} href="#" className="group block">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-card"
              style={{
                backgroundImage: `linear-gradient(160deg, ${item.from}, ${item.to})`,
              }}
            >
              {item.badge && (
                <span className="absolute left-4 top-4 rounded-pill bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
                  {item.badge}
                </span>
              )}
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
            <h3 className="mt-4 text-base font-medium leading-snug">{item.title}</h3>
            <div className="mt-2 flex gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
