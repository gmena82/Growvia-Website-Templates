import Link from "next/link"

import { serviceNav, socialLinks } from "./navigation"
import { SOCIAL_ICON_MAP } from "./social-icons"

const serviceAreas = [
  "Orlando, FL",
  "Winter Park, FL",
  "Kissimmee, FL",
  "Altamonte Springs, FL",
  "Apopka, FL",
  "Surrounding Areas",
]

const contactItems = [
  {
    label: "(321) 352-1167",
    href: "tel:+13213521167",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
        />
      </svg>
    ),
  },
  {
    label: "info@electronicshouse.com",
    href: "mailto:info@electronicshouse.com",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"
        />
      </svg>
    ),
  },
  {
    label: "Orlando, FL",
    href: "https://maps.google.com/?q=Orlando,FL",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        />
      </svg>
    ),
  },
]

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:justify-items-start">
          <div className="space-y-3 max-w-[200px]">
            <h3 className="text-lg font-semibold">Electronics House</h3>
            <p className="text-sm leading-6 text-slate-300">
              Orlando's premier destination for buying, selling, and repairing Apple and Samsung devices. Expert service, certified technicians, and flexible payment options.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {serviceNav.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-purple-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-300">
              {contactItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg transition-colors hover:text-purple-400"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-400">Certified technicians. Authorized dealer.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-slate-300">
            {socialLinks.map((link) => {
              const isX = link.label === "X"
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-purple-400 hover:text-purple-400 whitespace-nowrap"
                >
                  {SOCIAL_ICON_MAP[link.label] ?? null}
                  <span className={isX ? "sr-only" : undefined}>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-3">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          <p>
            &copy; {currentYear} Electronics House. All rights reserved. Designed and hosted by {" "}
            <a
              href="https://www.growviamarketing.ai/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-purple-400 transition hover:text-purple-300"
            >
              Growvia Marketing
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

