import Link from "next/link";
import { CLINIC, FOOTER_NAV } from "@/lib/clinic";

const NAV_HINDI: Record<string, string> = {
  "/": "होम",
  "/about": "हमारे बारे में",
  "/doctors": "डॉक्टर",
  "/services": "सेवाएं",
  "/book-appointment": "अपॉइंटमेंट",
  "/gallery": "गैलरी",
  "/testimonials": "समीक्षा",
  "/contact": "संपर्क",
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-brand-dark font-bold">B</span>
            <span className="font-semibold text-white">{CLINIC.name}</span>
          </div>
          <p className="mt-2 text-amber-300 font-medium text-sm">{CLINIC.taglineHindi}</p>
          <p className="mt-3 text-sm text-emerald-100/90 leading-relaxed">
            Trusted multi-specialty care serving the UP-Bihar border region.
          </p>
          <p className="mt-1 text-xs text-emerald-100/70">
            यूपी-बिहार बॉर्डर क्षेत्र की भरोसेमंद मल्टी-स्पेशियलिटी देखभाल।
          </p>
          <p className="mt-3 text-xs text-emerald-100/70">
            Reg. No. {CLINIC.registration}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Quick Links</h4>
          <p className="text-xs text-emerald-100/70 mb-3">त्वरित लिंक</p>
          <ul className="space-y-2 text-sm">
            {FOOTER_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-emerald-50/90 hover:text-white">
                  {l.label}
                  <span className="block text-xs text-emerald-100/60">{NAV_HINDI[l.href]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Contact</h4>
          <p className="text-xs text-emerald-100/70 mb-3">संपर्क</p>
          <ul className="space-y-2 text-sm text-emerald-50/90">
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
          <h4 className="text-white font-semibold mb-1">Hours</h4>
          <p className="text-xs text-emerald-100/70 mb-3">समय</p>
          <ul className="space-y-2 text-sm text-emerald-50/90">
            <li>Mon to Sat: {CLINIC.hours.weekdays}</li>
            <li>Sunday: {CLINIC.hours.sunday}</li>
            <li>Emergency: {CLINIC.hours.emergency} <span className="text-emerald-100/70">/ आपातकालीन</span></li>
            <li className="text-amber-300">
              {CLINIC.freeConsultDay}: Free Consultation
            </li>
            <li className="text-amber-200/90 text-xs">
              शुक्रवार: नि:शुल्क परामर्श
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 bg-brand-dark/40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-100/80">
          <span>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</span>
          <span>
            Website by{" "}
            <a href="https://mayankdigitallabs.in" target="_blank" rel="noopener" className="text-white hover:underline">
              Mayank Digital Labs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
