"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { primaryNav, socialLinks } from "./navigation"
import { SOCIAL_ICON_MAP } from "./social-icons"
import { useMobileMenu } from "../_hooks/useMobileMenu"
import { useScrollShadow } from "../_hooks/useScrollShadow"

const phoneLink = {
  href: "tel:+13213521167",
  label: "(321) 352-1167",
  icon: (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
      />
    </svg>
  ),
}

const emailLink = {
  href: "mailto:info@electronicshouse.com",
  label: "info@electronicshouse.com",
  icon: (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"
      />
    </svg>
  ),
}

export function Header() {
  const { isOpen: mobileOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const hasShadow = useScrollShadow()
  const pathname = usePathname()

  const isLinkActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  const navButtonBase =
    "relative inline-flex items-center gap-1 rounded-lg border border-slate-700/40 bg-gradient-to-b from-white/92 via-white/86 to-white/72 px-3 py-1.5 text-sm text-slate-700 transition-[color,border-color,box-shadow] hover:text-purple-700 hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
  const navButtonActive = "border-slate-800 text-purple-700"

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${hasShadow ? "shadow-md" : "shadow-sm"}`}>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-700">
            <span className="inline-flex size-2 rounded-full bg-purple-600" aria-hidden />
            <span>Orlando, FL</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-600">
            {[phoneLink, emailLink].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 transition-colors hover:bg-purple-50 hover:text-purple-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            {socialLinks.map((link) => {
              const isX = link.label === "X"
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors hover:bg-purple-50 hover:text-purple-700"
                >
                  {SOCIAL_ICON_MAP[link.label] ?? null}
                  <span className={isX ? "sr-only" : undefined}>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[minmax(250px,1fr)_auto_minmax(250px,1fr)] md:items-center md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 md:justify-self-start"
            aria-label="Electronics House home"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg">
              <span className="text-2xl font-bold text-white">E</span>
            </div>
            <span className="text-[1.2rem] font-semibold leading-tight text-slate-800 md:text-[1.4rem]">Electronics House</span>
          </Link>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="flex size-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-purple-500 hover:text-purple-600 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>

          <div className="hidden md:flex justify-center">
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navButtonBase} ${isLinkActive(item.href) ? navButtonActive : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className="relative rounded-full border-2 border-purple-400/60 bg-gradient-to-b from-white/90 via-white/80 to-white/60 px-7 py-3.5 text-base font-semibold text-purple-600 shadow-lg shadow-purple-400/20 backdrop-blur-sm transition-all before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-50 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-lg"
            >
              <span className="relative z-10">Get a Quote</span>
            </Link>
          </div>
        </div>

        <div
          className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}
        >
          <div className="space-y-6 border-t border-slate-200 bg-white px-6 py-6 text-sm text-slate-700">
            <nav aria-label="Mobile primary" className="space-y-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg border border-slate-700/40 px-3 py-1.5 text-base font-semibold transition-[color,border-color,box-shadow] ${
                    isLinkActive(item.href)
                      ? "border-slate-800 text-purple-700"
                      : "text-slate-800 hover:text-purple-700 hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.25)]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="relative flex w-full items-center justify-center rounded-full border-2 border-purple-400/60 bg-gradient-to-b from-white/90 via-white/80 to-white/60 px-7 py-3.5 text-base font-semibold text-purple-600 shadow-lg shadow-purple-400/20 backdrop-blur-sm transition-all before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-50 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-lg"
                onClick={closeMobileMenu}
              >
                <span className="relative z-10">Get a Quote</span>
              </Link>
              <div className="space-y-2 text-sm text-slate-600">
                <a href={phoneLink.href} className="block hover:text-purple-700">
                  {phoneLink.label}
                </a>
                <a href={emailLink.href} className="block hover:text-purple-700">
                  {emailLink.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
