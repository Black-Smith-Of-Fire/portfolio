export default function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-4 py-2 text-sm text-ink">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Available for New Project
    </span>
  )
}
