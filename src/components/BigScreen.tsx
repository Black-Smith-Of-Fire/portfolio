import { nav } from '../data'
export default function BigScreen() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-full max-w-xl items-center justify-between gap-4 rounded-pill border border-line bg-white/80 px-3 py-2 backdrop-blur">
      <div className="pl-1">
      
      </div>

      <nav className="hidden items-center gap-7 text-sm text-ink/80 md:flex">
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 transition-colors hover:text-ink"
          >
            {item.label}
            {item.count !== undefined && (
              <span className="text-xs text-muted">[{item.count}]</span>
            )}
          </a>
        ))}
      </nav>

      <a
        href="https://linkedin.com/in/benjaminluke03"
        className="group inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
      >
      Connect
        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </a>
    </header>
  )
}