"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { IMAGES } from "@/lib/images";

type Slide = {
  eyebrow: string;
  eyebrowHindi?: string;
  title: React.ReactNode;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string; external?: boolean };
  image: string;
  overlay: string;
  textClass: string;
};

const slides: Slide[] = [
  {
    eyebrow: `Reg. No. ${CLINIC.registration}`,
    title: (
      <>
        Trusted Multi-Specialty Care
        <br />
        <span className="text-amber-300">on the UP-Bihar Border</span>
      </>
    ),
    subtitle:
      "Expert in-clinic and video consultations, 24x7 emergency support, nebulizer and oxygen facility, and free Friday consultation for the community.",
    ctaPrimary: { label: "Book an Appointment", href: "/book-appointment" },
    ctaSecondary: {
      label: "Chat on WhatsApp",
      href: whatsappLink("Hello Baba Life Care Clinic, I have a question."),
      external: true,
    },
    image: IMAGES.hero.welcome,
    overlay: "linear-gradient(115deg, rgba(10,91,75,0.92) 0%, rgba(14,124,102,0.75) 60%, rgba(0,0,0,0.4) 100%)",
    textClass: "text-white",
  },
  {
    eyebrow: "Friday Special",
    eyebrowHindi: "विशेष",
    title: (
      <>
        प्रत्येक शुक्रवार
        <br />
        <span className="text-red-700">नि:शुल्क परामर्श</span>
      </>
    ),
    subtitle:
      "Free consultation every Friday for all patients. Walk in or book in advance. Doctors trained at AIIMS, BHU and Gujarat Ayurved University.",
    ctaPrimary: { label: "Book Friday Slot", href: "/book-appointment" },
    ctaSecondary: { label: "Meet the Doctors", href: "/doctors" },
    image: IMAGES.hero.friday,
    overlay: "linear-gradient(115deg, rgba(252,211,77,0.88) 0%, rgba(245,158,11,0.78) 60%, rgba(120,53,15,0.5) 100%)",
    textClass: "text-slate-900",
  },
  {
    eyebrow: "विशेष सूचना · Special Note",
    title: (
      <>
        Free Consultation Always
        <br />
        <span className="text-amber-300">for Orphans & Seniors 60+</span>
      </>
    ),
    subtitle:
      "जिन बच्चों के माता-पिता नहीं हैं एवं 60 वर्ष से अधिक उम्र के लोगों का नि:शुल्क परामर्श। Care that is rooted in community first.",
    ctaPrimary: { label: "Book Free Consultation", href: "/book-appointment" },
    ctaSecondary: { label: "About Our Mission", href: "/about" },
    image: IMAGES.hero.seniors,
    overlay: "linear-gradient(115deg, rgba(159,18,57,0.92) 0%, rgba(190,18,60,0.78) 60%, rgba(50,7,18,0.55) 100%)",
    textClass: "text-white",
  },
  {
    eyebrow: "24x7 Emergency Care",
    title: (
      <>
        Emergency? <span className="text-amber-300">We are here.</span>
      </>
    ),
    subtitle:
      "Round-the-clock emergency contact support with nebulization and oxygen facility on-site. Call us anytime.",
    ctaPrimary: { label: `📞 Call ${CLINIC.phone}`, href: `tel:${CLINIC.phoneRaw}` },
    ctaSecondary: { label: "View Services", href: "/services" },
    image: IMAGES.hero.emergency,
    overlay: "linear-gradient(115deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.78) 60%, rgba(2,6,23,0.6) 100%)",
    textClass: "text-white",
  },
];

const AUTO_ADVANCE_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[620px] md:h-[720px]">
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0"
              style={{ background: s.overlay }}
            />
            <div className={`relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center ${s.textClass}`}>
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                  {s.eyebrowHindi ? (
                    <>
                      <span className="text-amber-300 mr-2">{s.eyebrowHindi}</span>
                      {s.eyebrow}
                    </>
                  ) : (
                    s.eyebrow
                  )}
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">
                  {s.title}
                </h1>
                <p className="mt-5 max-w-xl text-base md:text-lg opacity-95 drop-shadow">
                  {s.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={s.ctaPrimary.href}
                    className="inline-flex items-center rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 text-base font-semibold transition shadow-lg"
                  >
                    {s.ctaPrimary.label}
                  </Link>
                  {s.ctaSecondary && (
                    s.ctaSecondary.external ? (
                      <a
                        href={s.ctaSecondary.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-transparent border-2 border-current opacity-95 hover:bg-white/10 px-6 py-3 text-base font-semibold transition"
                      >
                        {s.ctaSecondary.label}
                      </a>
                    ) : (
                      <Link
                        href={s.ctaSecondary.href}
                        className="inline-flex items-center rounded-full bg-transparent border-2 border-current opacity-95 hover:bg-white/10 px-6 py-3 text-base font-semibold transition"
                      >
                        {s.ctaSecondary.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur text-white transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18L9 12l6-6" />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur text-white transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-10 bg-white" : "w-2.5 bg-white/60 hover:bg-white/85"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
