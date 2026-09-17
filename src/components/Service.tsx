import { useState } from 'react'
import { services } from '../data'

export default function Service() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="service" className="mx-auto mt-32 max-w-5xl px-4">
      <h2 className="font-display text-2xl font-semibold">/SERVICE</h2>

      <div className="mt-8 divide-y divide-line">
        {services.map((service, i) => {
          const isOpen = openIndex === i
          return (
            <div key={service.title}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-2xl font-semibold sm:text-3xl">
                  {service.title}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  {isOpen ? '×' : '↗'}
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] pb-8 opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0">
                  <div
                    className={`rounded-card p-6 sm:p-8 ${
                      i === 0 ? 'bg-ink text-paper' : 'bg-transparent'
                    }`}
                  >
                    <p className={`max-w-sm text-sm ${i === 0 ? 'text-paper/70' : 'text-muted'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
