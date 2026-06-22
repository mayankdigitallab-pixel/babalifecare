import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Take a look inside ${CLINIC.name} - facilities, consultation rooms, and the team.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[340px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.contact.header}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 brand-hero-overlay" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Gallery</p>
          <p className="text-xs opacity-80">गैलरी</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">A look inside our clinic</h1>
          <p className="mt-1 text-lg opacity-95 font-medium">हमारे क्लिनिक की एक झलक</p>
          <p className="mt-3 max-w-3xl text-lg opacity-95">
            Clean, comfortable, and equipped with everything needed for quality care.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.gallery.map((p) => (
            <div key={p.title} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-medium text-sm">{p.title}</p>
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
