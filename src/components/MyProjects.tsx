import { useState } from 'react'
import { workItems, WorkCategory } from '../data'

// const filters: Array<'All' | WorkCategory> = ['All', 'Real Project', 'Exploration']

export default function SelectedWork() {
  const [active] = useState<'All' | WorkCategory>('All')

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
          /MY PROJECTS
        </h2>
      </div>



      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {visible.map((item) => (
          <div key={item.id} className="group block">
            {/* <div
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
            </div> */}
            {/* <div className='max-w-82 items-center'> */}
            <h3 className="mt-4 text-base font-medium leading-snug">{item.title}</h3>
              <div className='text-gray-500 text-sm mt-3 '>{item.para}</div>
            <div className="lg:mt-2 lg:gap-2 lg:flex lg:text-center mt-3 grid grid-cols-3 gap-3 text-center items-center">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* </div> */}
           </div>
        ))}
      </div>
    </section>
  )
}
