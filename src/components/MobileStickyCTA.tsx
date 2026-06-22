"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname === "/book-appointment") return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-slate-200 shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-slate-200">
        <a
          href={`tel:${CLINIC.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2.5 text-slate-700 hover:bg-slate-50"
        >
          <span className="text-lg">📞</span>
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={whatsappLink("Hello Baba Life Care Clinic, I would like to know more.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 text-[#25D366] hover:bg-slate-50"
        >
          <span className="text-lg">💬</span>
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-2.5 bg-brand text-white"
        >
          <span className="text-lg">📅</span>
          <span className="text-xs font-bold">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
