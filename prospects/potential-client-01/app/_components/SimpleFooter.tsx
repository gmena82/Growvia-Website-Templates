export function SimpleFooter() {
  return (
    <footer className="mt-4 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-center text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-base font-semibold text-slate-800">Electronics House</p>
          <p>Downtown Orlando • Serving Central Florida</p>
        </div>
        <div className="space-y-1">
          <p>Phone: (321) 352-1167</p>
          <p>Email: info@electronicshouse.com</p>
          <p>Hours: Mon–Sat · 10am – 7pm</p>
        </div>
        <div className="text-xs text-slate-500">
          <p>Device sales • Certified repairs • Trade-ins & financing</p>
          <p>Demo preview site — for showcase only</p>
        </div>
      </div>
    </footer>
  )
}
