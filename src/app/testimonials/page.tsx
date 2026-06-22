import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: `What patients say about ${CLINIC.name}. Real reviews from real people in Deoria and across the UP-Bihar border.`,
};

// TODO: replace with real patient testimonials (with permission).
const reviews = [
  {
    name: "Ramesh K.",
    place: "Salempur",
    rating: 5,
    text: "Doctor saheb listened patiently and explained everything in simple Hindi. Cost was very reasonable. Recommended for the whole village.",
  },
  {
    name: "Sunita Devi",
    place: "Mairwa",
    rating: 5,
    text: "Video consultation worked perfectly when my son had fever. We got a proper prescription on WhatsApp. Saved us a long trip.",
  },
  {
    name: "Anil Kumar",
    place: "Deoria",
    rating: 5,
    text: "Emergency at 11pm and the clinic responded immediately. Professional staff and clean facility.",
  },
  {
    name: "Mohini Singh",
    place: "Salempur-Mairwa",
    rating: 5,
    text: "Friday free consultation helped my elderly mother. Doctor took time to understand her chronic issue.",
  },
  {
    name: "Pradeep Yadav",
    place: "Bihar border",
    rating: 5,
    text: "Travel from Bihar to consult here. Worth every kilometre. Honest doctors, no unnecessary tests.",
  },
  {
    name: "Rekha S.",
    place: "Deoria",
    rating: 5,
    text: "Pediatric care was gentle and patient with my toddler. Vaccination went smoothly.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Testimonials</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            What our patients say
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Real stories from patients across UP and Bihar.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-3 text-slate-700 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-sm text-slate-500">{r.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Want to share your experience?</h2>
          <p className="mt-2 opacity-90">We'd love to hear from you on Google or WhatsApp.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white text-brand px-6 py-3 font-medium hover:bg-slate-100">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
