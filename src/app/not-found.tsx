import Link from "next/link";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export default function NotFound() {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-700">
          The page you are looking for does not exist. It may have moved, or you
          followed a broken link.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark"
          >
            Back to Home
          </Link>
          <Link
            href="/book-appointment"
            className="inline-flex items-center rounded-full bg-white border border-slate-300 px-6 py-3 text-slate-800 font-medium hover:border-brand hover:text-brand"
          >
            Book an Appointment
          </Link>
          <a
            href={whatsappLink(`Hello ${CLINIC.name}, I have a question.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:opacity-95"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
