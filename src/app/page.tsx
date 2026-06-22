import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import { HeroSlider } from "@/components/HeroSlider";
import { ConditionsSection } from "@/components/ConditionsSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IMAGES } from "@/lib/images";

const highlights = [
  { num: "10+", label: "Years of Service" },
  { num: "50,000+", label: "Patients Treated" },
  { num: "8+", label: "Specialties" },
  { num: "24/7", label: "Emergency Care" },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

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
            <p className="text-xs text-slate-500 mt-0.5">हमारी सेवाएं</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Complete care under one roof
            </h2>
            <p className="mt-1 text-base md:text-lg font-medium text-slate-700">
              एक छत के नीचे संपूर्ण देखभाल
            </p>
            <p className="mt-4 text-slate-600">
              From routine check-ups to specialist consultation, we provide
              compassionate care for every member of your family.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              नियमित जांच से लेकर विशेषज्ञ परामर्श तक, हम आपके परिवार के हर सदस्य की देखभाल करते हैं।
            </p>
          </div>

          <div className="mt-10">
            <ServicesGrid initialCount={6} showToggle />
          </div>
        </div>
      </section>

      <ConditionsSection background="white" />

      <section className="relative bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 text-center text-slate-900">
          <p className="text-sm font-bold uppercase tracking-wider text-red-700">Friday Special</p>
          <p className="mt-1 text-xs font-medium text-red-700/80">शुक्रवार विशेष</p>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            प्रत्येक शुक्रवार
          </h2>
          <p className="mt-1 text-4xl md:text-6xl font-extrabold text-red-700 leading-tight">
            नि:शुल्क परामर्श
          </p>
          <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Free consultation every Friday for all patients. Book your slot in advance.
          </p>
          <p className="mt-1 text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            हर शुक्रवार सभी मरीजों के लिए नि:शुल्क परामर्श। अपना स्लॉट पहले से बुक करें।
          </p>
          <Link
            href="/book-appointment"
            className="mt-8 inline-flex items-center rounded-full bg-slate-900 text-white px-7 py-3.5 font-semibold hover:bg-slate-800 shadow-lg"
          >
            Book Friday Slot
          </Link>
        </div>
        <div className="h-2 w-full bg-red-600" />
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

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not sure which doctor to see?
          </h2>
          <p className="mt-1 text-sm md:text-base text-white/80">
            किस डॉक्टर से मिलें, यह तय नहीं हो पा रहा?
          </p>
          <p className="mt-5 text-base md:text-lg max-w-2xl mx-auto text-white/90">
            Send us a quick message and we will guide you to the right specialist.
          </p>
          <p className="mt-1 text-sm md:text-base max-w-2xl mx-auto text-white/80">
            हमें एक संदेश भेजें, हम आपको सही विशेषज्ञ के पास भेजेंगे।
          </p>
          <Link
            href="/book-appointment"
            className="mt-8 inline-flex items-center rounded-full bg-white text-brand px-7 py-3.5 font-semibold hover:bg-slate-100 shadow-lg"
          >
            Book a consultation
          </Link>
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
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.about.mission}
              alt="Medical team caring for patients"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-2xl font-bold">Care that listens.</p>
              <p className="text-sm opacity-90">Doctors who explain. Treatment that respects you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.hero.emergency}
              alt="Emergency care"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent" />
          </div>
          <div>
            <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              24x7 Emergency
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Need help now?</h2>
            <p className="mt-3 text-slate-300">
              Our 24x7 line is staffed by clinic personnel ready to guide you to
              the right care. Oxygen and nebulizer available on-site.
            </p>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="mt-5 inline-flex items-center rounded-full bg-red-500 hover:bg-red-600 px-6 py-3 font-semibold text-white shadow-lg"
            >
              📞 {CLINIC.phone}
            </a>
            <p className="mt-3 text-xs text-slate-400">
              For life-threatening emergencies, please also call 108.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
