import Link from "next/link";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const services = [
  { icon: "🩺", title: "General Medicine", desc: "Comprehensive primary care for all age groups." },
  { icon: "👶", title: "Pediatric Care", desc: "Newborn and child specialist care by Dr. K. D. Patel." },
  { icon: "🦴", title: "Orthopaedics & Spine", desc: "Bone, joint and spine specialist Dr. Ashish Kumar Singh." },
  { icon: "🧠", title: "Neuro Medicine", desc: "AIIMS Delhi trained neuro consultation, every Sunday." },
  { icon: "🌿", title: "Ayurvedic Care", desc: "Traditional Ayurveda by MD (Ayu) Dr. Pradeep Singh." },
  { icon: "📹", title: "Video Consultation", desc: "Talk to a doctor from anywhere, on your phone." },
];

const highlights = [
  { num: "10+", label: "Years of Service" },
  { num: "50,000+", label: "Patients Treated" },
  { num: "8+", label: "Specialties" },
  { num: "24/7", label: "Emergency Care" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-light to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium">
              Reg. No. {CLINIC.registration}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {CLINIC.tagline}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              {CLINIC.name} in Salempur-Mairwa, Deoria offers expert in-clinic
              and video consultations, 24x7 emergency care, nebulizer and
              oxygen facility, and free Friday consultation for the community.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-base font-medium text-white hover:bg-brand-dark transition-colors"
              >
                Book an Appointment
              </Link>
              <a
                href={whatsappLink("Hello Baba Life Care Clinic, I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white border border-slate-300 px-6 py-3 text-base font-medium text-slate-800 hover:border-brand hover:text-brand transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open Now · {CLINIC.hours.weekdays}
              </span>
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {CLINIC.freeConsultDay}: Free Consultation
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand to-brand-dark relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="text-6xl">🏥</div>
                <p className="mt-4 text-xl font-medium leading-snug">
                  Care that listens. <br />Doctors who explain.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">✓</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Trusted Clinic</p>
                <p className="text-xs text-slate-500">UP-Bihar border region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-7 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center md:text-left">
          <span className="text-sm font-bold uppercase tracking-wider text-red-700 px-3 py-1 rounded-full bg-white">
            Friday Special
          </span>
          <p className="text-2xl md:text-3xl font-extrabold text-slate-900">
            प्रत्येक शुक्रवार <span className="text-red-700">नि:शुल्क परामर्श</span>
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
          >
            Book Now
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand">{h.num}</p>
              <p className="mt-1 text-sm text-slate-600">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Complete care under one roof
            </h2>
            <p className="mt-3 text-slate-600">
              From routine check-ups to specialist consultation, we provide
              compassionate care for every member of your family.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 border border-slate-200 hover:border-brand hover:shadow-md transition">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="text-brand font-medium hover:underline">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-white text-red-600 font-bold px-4 py-1.5 text-xs uppercase tracking-wider shrink-0">
              विशेष सूचना · Special Note
            </span>
            <div className="flex-1">
              <p className="text-base md:text-lg font-semibold leading-relaxed">
                जिन बच्चों के माता-पिता नहीं हैं एवं 60 वर्ष से अधिक उम्र के लोगों का नि:शुल्क परामर्श।
              </p>
              <p className="mt-1 text-sm text-white/90">
                Free consultation always for orphaned children and senior citizens above 60 years of age.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to see a doctor?</h2>
            <p className="mt-2 text-white/85">
              Book an in-clinic visit or video consultation in minutes. Slot
              confirmation via WhatsApp.
            </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center rounded-full bg-white text-brand px-6 py-3 font-medium hover:bg-slate-100"
            >
              Book Now
            </Link>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="inline-flex items-center rounded-full border border-white/40 text-white px-6 py-3 font-medium hover:bg-white/10"
            >
              Call
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Trusted by thousands across UP and Bihar
            </h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Registered multi-specialty clinic with experienced doctors",
                "Real-time appointment booking with WhatsApp confirmation",
                "Video consultation for patients far from the clinic",
                "Nebulizer (steam therapy) and oxygen facility on-site",
                "Free Friday consultation (Nishulk Paramarsh)",
                "Free consultation always for orphans and seniors 60+",
                "24x7 emergency contact support",
                "Affordable pricing with transparent fees",
              ].map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-brand">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h3 className="text-2xl font-bold">Emergency? Call us now.</h3>
            <p className="mt-2 text-slate-300">
              Our 24x7 line is staffed by clinic personnel ready to guide you.
            </p>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="mt-5 inline-flex items-center rounded-full bg-red-500 hover:bg-red-600 px-6 py-3 font-semibold text-white"
            >
              📞 {CLINIC.phone}
            </a>
            <p className="mt-4 text-xs text-slate-400">
              For life-threatening emergencies, please also call 108.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
