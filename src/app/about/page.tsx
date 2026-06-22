import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${CLINIC.name} - a trusted multi-specialty clinic in Salempur-Mairwa, Deoria, serving the UP-Bihar border region.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">About Us</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            Care rooted in community
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            {CLINIC.name} has been serving patients across the UP-Bihar border
            for years, providing accessible and trustworthy medical care
            to thousands of families.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              To make quality multi-specialty healthcare accessible, affordable,
              and approachable for every family in our region - whether they
              walk in or consult us from home via video. We believe care begins
              with listening, and every patient deserves a doctor who explains.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Founded with the goal of bringing modern, ethical medical care to
              the under-served UP-Bihar border region, {CLINIC.name} has grown
              into a trusted name in Deoria. We treat patients across all age
              groups and continue to expand our services every year.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Compassion", d: "We treat every patient like family - with empathy, dignity, and patience." },
              { t: "Transparency", d: "Clear pricing, honest opinions, no unnecessary tests or prescriptions." },
              { t: "Accessibility", d: "Affordable consultation, video calls for distant patients, and a free consultation day each week." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-white p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{v.t}</h3>
                <p className="mt-2 text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="rounded-3xl bg-brand p-10 text-white text-center">
            <p className="text-sm uppercase tracking-wider opacity-80">Registration</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold">{CLINIC.registration}</p>
            <p className="mt-2 opacity-80">{CLINIC.address.full}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-white text-brand px-6 py-3 font-medium hover:bg-slate-100"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
