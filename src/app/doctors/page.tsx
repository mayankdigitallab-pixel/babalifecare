import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import { DOCTORS } from "@/lib/doctors";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the doctors at ${CLINIC.name} - experienced specialists in pediatrics, orthopaedics, neuro medicine, ayurveda, and general practice.`,
};

export default function DoctorsPage() {
  return (
    <>
      <section className="relative h-[360px] md:h-[440px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.testimonials.header}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 brand-hero-overlay" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Our Team</p>
          <p className="text-xs opacity-80">हमारी टीम</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Meet the doctors who care
          </h1>
          <p className="mt-1 text-lg opacity-95 font-medium">
            हमारे डॉक्टरों से मिलें
          </p>
          <p className="mt-3 max-w-3xl text-lg opacity-95">
            Experience from AIIMS Delhi, BHU, SNMC Agra, UPUMS Saifai, and
            Gujarat Ayurved University - all in one clinic.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2">
          {DOCTORS.map((d) => {
            const photo = IMAGES.doctors[d.slug as keyof typeof IMAGES.doctors];
            return (
              <div key={d.slug} className="rounded-2xl border border-slate-200 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition">
                <div className="sm:w-48 relative aspect-square sm:aspect-auto bg-gradient-to-br from-brand to-brand-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={d.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/95 text-brand font-bold text-sm">
                    {d.initial}
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-xs text-brand font-medium uppercase tracking-wider">{d.role}</p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{d.name}</h3>
                  <p className="text-sm text-slate-500">{d.roleHindi}</p>
                  <p className="mt-3 text-sm font-medium text-slate-700">{d.qualifications}</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {d.experience.map((e) => (
                      <li key={e} className="flex gap-1.5">
                        <span className="text-brand">·</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                  {d.availability && (
                    <p className="mt-3 inline-block rounded-full bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1">
                      {d.availability}
                    </p>
                  )}
                  <Link
                    href="/book-appointment"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand hover:underline"
                  >
                    Book Appointment →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-slate-600">Choose your doctor and preferred slot on the booking page.</p>
          <Link
            href="/book-appointment"
            className="mt-4 inline-flex items-center rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-brand-dark"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
