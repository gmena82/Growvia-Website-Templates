const NAV_ITEMS = ["Home", "About", "Supply", "Repairs", "Financing"]

export function GlassHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-purple-200/70 bg-gradient-to-r from-white/95 via-purple-50/90 to-white/95 px-6 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
        <div className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-2xl sm:tracking-[0.35em]">
          Electronics House
        </div>
        <nav className="hidden items-center gap-2 text-sm font-semibold text-slate-800 sm:flex" aria-label="Static site navigation">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-purple-200/70 bg-white px-4 py-1.5 text-xs tracking-wide text-slate-800 shadow-inner shadow-white/40 transition"
            >
              {item}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 sm:hidden">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border border-purple-200/70 bg-white px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
