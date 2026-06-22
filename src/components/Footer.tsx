import Link from "next/link";
import { CLINIC, FOOTER_NAV } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-brand text-white font-bold">B</span>
            <span className="font-semibold text-white">{CLINIC.name}</span>
          </div>
          <p className="mt-2 text-amber-300 font-medium text-sm">{CLINIC.taglineHindi}</p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Trusted multi-specialty care serving the UP-Bihar border region.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Reg. No. {CLINIC.registration}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{CLINIC.address.line1}</li>
            <li>{CLINIC.address.line2}</li>
            <li>{CLINIC.address.line3}</li>
            <li className="pt-2">
              <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-white">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${CLINIC.phoneAltRaw}`} className="hover:text-white">
                {CLINIC.phoneAlt}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Hours</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Mon to Sat: {CLINIC.hours.weekdays}</li>
            <li>Sunday: {CLINIC.hours.sunday}</li>
            <li>Emergency: {CLINIC.hours.emergency}</li>
            <li className="text-accent">
              {CLINIC.freeConsultDay}: Free Consultation
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</span>
          <span>
            Website by{" "}
            <a href="https://mayankdigitallabs.in" target="_blank" rel="noopener" className="text-slate-300 hover:text-white">
              Mayank Digital Labs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
