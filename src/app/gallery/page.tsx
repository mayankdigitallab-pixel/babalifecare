import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Take a look inside ${CLINIC.name} - facilities, consultation rooms, and the team.`,
};

// TODO: replace placeholder gallery with real clinic photos.
const photos = [
  { title: "Reception", emoji: "🏥", grad: "from-brand to-brand-dark" },
  { title: "Waiting Area", emoji: "🛋️", grad: "from-emerald-500 to-emerald-700" },
  { title: "Consultation Room", emoji: "🩺", grad: "from-teal-500 to-teal-700" },
  { title: "Examination", emoji: "👨‍⚕️", grad: "from-cyan-500 to-cyan-700" },
  { title: "Pharmacy", emoji: "💊", grad: "from-sky-500 to-sky-700" },
  { title: "Pediatric Corner", emoji: "🧸", grad: "from-amber-500 to-amber-700" },
  { title: "Diagnostic", emoji: "🔬", grad: "from-violet-500 to-violet-700" },
  { title: "Front Desk", emoji: "🎫", grad: "from-rose-500 to-rose-700" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Gallery</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            A look inside our clinic
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Clean, comfortable, and equipped with everything needed for quality care.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p) => (
            <div
              key={p.title}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${p.grad}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-5xl mb-3 transition-transform group-hover:scale-110">{p.emoji}</span>
                <span className="font-medium">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-slate-600">Want to visit us in person?</p>
          <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-brand-dark">
            View Location
          </Link>
        </div>
      </section>
    </>
  );
}
