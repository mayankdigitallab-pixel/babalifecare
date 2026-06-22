import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${CLINIC.name} - a trusted multi-specialty clinic in Salempur-Mairwa, Deoria, serving the UP-Bihar border region.`,
};

const stats = [
  { num: "10+", label: "Years of Service", hindi: "वर्षों की सेवा" },
  { num: "50,000+", label: "Patients Treated", hindi: "मरीज़ों का इलाज" },
  { num: "4", label: "Expert Doctors", hindi: "विशेषज्ञ डॉक्टर" },
  { num: "8+", label: "Specialties", hindi: "विशेषज्ञताएं" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Compassion",
    hindi: "करुणा",
    desc: "We treat every patient like family - with empathy, dignity, and patience.",
    descHindi: "हम हर मरीज़ को परिवार जैसा मानते हैं।",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Transparency",
    hindi: "पारदर्शिता",
    desc: "Clear pricing, honest opinions, no unnecessary tests or prescriptions.",
    descHindi: "स्पष्ट कीमत, ईमानदार सलाह, कोई अनावश्यक जांच नहीं।",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12Z" />
      </svg>
    ),
    title: "Accessibility",
    hindi: "सुलभता",
    desc: "Affordable care, video consultation, and free Friday consultations.",
    descHindi: "किफायती देखभाल और शुक्रवार को निःशुल्क परामर्श।",
  },
];

const whyChoose = [
  { en: "Multi-specialty under one roof", hi: "एक छत के नीचे सभी विशेषज्ञ" },
  { en: "On-site Nebulizer & Oxygen", hi: "नेबुलाइज़र और ऑक्सीजन सुविधा" },
  { en: "Friday free consultation for all", hi: "शुक्रवार सभी के लिए नि:शुल्क परामर्श" },
  { en: "Always free for 60+ and orphaned children", hi: "60+ और अनाथ बच्चों के लिए सदैव नि:शुल्क" },
  { en: "WhatsApp booking - no app needed", hi: "व्हाट्सएप पर आसान बुकिंग" },
  { en: "24x7 emergency support", hi: "24x7 आपातकालीन सहायता" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <p className="text-sm font-semibold text-amber-300 uppercase tracking-widest">About Us · हमारे बारे में</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            Care rooted in our community
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-medium text-amber-200">
            समुदाय की सेवा में समर्पित
          </p>
          <p className="mt-6 max-w-3xl text-lg text-emerald-50/90 leading-relaxed">
            {CLINIC.name} has been serving families across the UP-Bihar border for years -
            offering accessible, ethical, multi-specialty care with the warmth of a neighbour and the standards of a hospital.
          </p>
          <p className="mt-2 max-w-3xl text-base text-emerald-100/80">
            यूपी-बिहार बॉर्डर के परिवारों के लिए भरोसेमंद, सुलभ और किफायती मल्टी-स्पेशियलिटी देखभाल।
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/doctors"
              className="inline-flex items-center rounded-full bg-white text-brand-dark px-6 py-3 font-semibold hover:bg-amber-100 shadow-lg"
            >
              Meet our doctors
            </Link>
            <Link
              href="/book-appointment"
              className="inline-flex items-center rounded-full border-2 border-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-5xl font-extrabold text-brand">{s.num}</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{s.label}</p>
              <p className="text-xs text-slate-500">{s.hindi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION + STORY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light text-brand-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Our Mission · हमारा उद्देश्य
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Quality care, for every family</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              To make quality multi-specialty healthcare accessible, affordable and approachable
              for every family in our region. We believe care begins with listening, and every
              patient deserves a doctor who explains.
            </p>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              हर परिवार के लिए गुणवत्तापूर्ण देखभाल को सुलभ, किफायती और सहज बनाना।
              हमारा मानना है कि अच्छी देखभाल मरीज़ को ध्यान से सुनने से शुरू होती है।
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Our Story · हमारी कहानी
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Built for the border region</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Founded to bring modern, ethical medical care to the under-served UP-Bihar border,
              {" "}{CLINIC.name} has grown into a trusted name in Deoria. We treat patients across
              all age groups and continue to expand our specialties every year.
            </p>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              यूपी-बिहार सीमावर्ती क्षेत्र को आधुनिक चिकित्सा देखभाल देने के लिए स्थापित,
              आज देवरिया में एक भरोसेमंद नाम।
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider">Our Values</p>
            <p className="text-xs text-slate-500 mt-0.5">हमारे मूल्य</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">What we stand for</h2>
            <p className="mt-3 text-slate-600">
              Three principles that shape every consultation, prescription and conversation at our clinic.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-3xl bg-gradient-to-br from-brand-light to-white p-7 border border-emerald-100 hover:border-brand hover:shadow-lg transition"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white group-hover:scale-105 transition">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="text-sm text-brand-dark font-medium">{v.hindi}</p>
                <p className="mt-3 text-slate-700 leading-relaxed">{v.desc}</p>
                <p className="mt-1 text-sm text-slate-500">{v.descHindi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm font-semibold text-brand uppercase tracking-wider">Why Choose Us</p>
            <p className="text-xs text-slate-500 mt-0.5">हमें क्यों चुनें</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Healthcare that actually fits your life
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We've built our clinic around what families in Salempur-Mairwa actually need -
              not what looks good on a brochure. Honest pricing, doctors who listen,
              and on-site facilities for when minutes matter.
            </p>
            <div className="mt-6 rounded-2xl bg-brand text-white p-5">
              <p className="text-sm uppercase tracking-wider opacity-80">On-site Facilities</p>
              <p className="text-lg font-semibold mt-1">
                {CLINIC.facilities.join(" · ")}
              </p>
              <p className="text-sm text-emerald-100 mt-1">नेबुलाइज़र (स्टीम थेरेपी) और ऑक्सीजन सुविधा</p>
            </div>
          </div>

          <ul className="grid gap-3">
            {whyChoose.map((item) => (
              <li
                key={item.en}
                className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-200"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{item.en}</p>
                  <p className="text-sm text-slate-500">{item.hi}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FRIDAY HIGHLIGHT */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700">Friday Promise · शुक्रवार वादा</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            हर शुक्रवार · नि:शुल्क परामर्श
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Every Friday, we keep consultation completely free for all patients.
            Always free for senior citizens above 60 and orphaned children.
          </p>
          <Link
            href="/book-appointment"
            className="mt-7 inline-flex items-center rounded-full bg-slate-900 text-white px-7 py-3.5 font-semibold hover:bg-slate-800 shadow-lg"
          >
            Book Friday Slot
          </Link>
        </div>
      </section>

      {/* REGISTRATION + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-10 md:p-14 text-white text-center shadow-xl">
            <p className="text-xs uppercase tracking-widest text-amber-300">Registered Clinic</p>
            <p className="mt-3 text-2xl md:text-3xl font-bold tracking-wide">
              {CLINIC.registration}
            </p>
            <p className="mt-4 text-emerald-50/90 max-w-2xl mx-auto">{CLINIC.address.full}</p>
            <p className="mt-1 text-sm text-emerald-100/80 max-w-2xl mx-auto">{CLINIC.address.hindi}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white text-brand-dark px-6 py-3 font-semibold hover:bg-amber-100"
              >
                Visit Us
              </Link>
              <a
                href={whatsappLink("Hello, I want to know more about Baba Life Care Clinic.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center rounded-full border-2 border-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
