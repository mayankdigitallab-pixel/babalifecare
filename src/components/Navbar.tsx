"use client";

import Link from "next/link";
import { useState } from "react";
import { CLINIC, HEADER_NAV } from "@/lib/clinic";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="bg-slate-900 text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium text-amber-300">{CLINIC.taglineHindi}</span>
          <span className="hidden sm:inline">Reg. No. {CLINIC.registration}</span>
        </div>
      </div>

      <div className="bg-brand text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <span>Emergency 24x7 · Call {CLINIC.phone} / {CLINIC.phoneAlt}</span>
          <span className="hidden sm:inline">{CLINIC.freeConsultDay}: {CLINIC.freeConsultLabel}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-brand text-white font-bold">B</span>
          <span className="font-semibold text-slate-900 leading-tight">
            {CLINIC.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-[10px] font-normal text-slate-500 uppercase tracking-wider">
              {CLINIC.name.split(" ").slice(2).join(" ")}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {HEADER_NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-700 hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${CLINIC.phoneRaw}`} className="text-sm font-medium text-slate-700 hover:text-brand">
            {CLINIC.phone}
          </a>
          <Link
            href="/book-appointment"
            className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M5 5L15 15M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {HEADER_NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-slate-700 hover:text-brand border-b border-slate-100 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-brand px-4 py-3 text-base font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
