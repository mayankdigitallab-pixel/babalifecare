import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services & Treatments",
  description: `Services at ${CLINIC.name}: pediatrics, orthopaedics, neuro medicine, ayurveda, general surgery, nebulization, oxygen facility, and 24x7 emergency care.`,
};

const facilities = [
  { icon: "💨", title: "Nebulization (भाप)", desc: "Steam therapy available on-site for asthma, bronchitis, and respiratory relief." },
  { icon: "🫁", title: "Oxygen Facility", desc: "Oxygen support available for emergency and respiratory care." },
];

const services = [
  { icon: "🩺", title: "General Medicine", desc: "Primary care, fever, infections, lifestyle disorders, diabetes, hypertension." },
  { icon: "👶", title: "Pediatrics & Newborn Care", desc: "Dr. K. D. Patel. Newborn check-ups, vaccinations, growth monitoring, child illnesses." },
  { icon: "🦴", title: "Orthopaedics", desc: "Dr. Ashish Kumar Singh, DNB Ortho. Fractures, joint pain, sports injuries. Sundays." },
  { icon: "🧠", title: "Neuro Medicine", desc: "AIIMS Delhi trained neuro consultation. Headache, vertigo, nerve pain. Sundays." },
  { icon: "🌿", title: "Ayurvedic Medicine", desc: "Dr. Pradeep Singh, MD (Ayu), Jamnagar. Traditional Ayurvedic treatment plans." },
  { icon: "🔪", title: "General Surgery", desc: "Dr. Ajay Maurya. General surgical consultation. Saturdays, 11 AM to 3 PM." },
  { icon: "📹", title: "Video Consultation", desc: "Talk to a doctor via Google Meet or Zoom. Joining link sent before your slot." },
  { icon: "🚑", title: "24x7 Emergency Support", desc: "Round-the-clock emergency contact support. Stabilization and referral when needed." },
  { icon: "💊", title: "Chronic Disease Management", desc: "Long-term care for diabetes, BP, thyroid, asthma, joint disorders." },
  { icon: "🧪", title: "Diagnostic Support", desc: "Blood tests, imaging coordination, second opinions." },
  { icon: "💉", title: "Vaccinations", desc: "Adult and child vaccination schedules." },
];

const conditionGroups = [
  {
    title: "Child & Newborn Care",
    items: [
      "Fever, dengue, seasonal fever",
      "All newborn ailments",
      "Jaundice (पीलिया)",
      "Asthma & pneumonia",
      "Beriberi treatment",
      "Underweight & growth issues",
      "Loss of appetite, vomiting, diarrhea",
      "Dehydration & anemia",
      "Other stomach problems",
    ],
  },
  {
    title: "Adult General Medicine",
    items: [
      "BP (Blood Pressure)",
      "Sugar / Diabetes",
      "Breathlessness & respiratory issues",
      "Stomach-related illnesses",
      "Anemia",
      "Chronic fever & infections",
      "Lifestyle disorders",
    ],
  },
  {
    title: "Orthopaedic & Surgical",
    items: [
      "Piles (बवासीर)",
      "Fistula (भगन्दर)",
      "Fissure (फिशर)",
      "Back pain & body pain",
      "Swelling of hands and feet",
      "Fractures & joint pain",
      "Spine & nerve disorders",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[400px] md:h-[460px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.services.header}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 brand-hero-overlay" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-14 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Services & Treatments</p>
          <p className="text-xs opacity-80">सेवाएं एवं उपचार</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Complete care, every step</h1>
          <p className="mt-1 text-lg opacity-95 font-medium">हर कदम पर संपूर्ण देखभाल</p>
          <p className="mt-4 max-w-3xl text-lg opacity-95">
            From routine check-ups to specialist consultations, we offer a wide
            range of services for patients of all ages.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Available Facilities</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              On-site clinical facilities
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {facilities.map((f) => (
              <div key={f.title} className="rounded-2xl border-2 border-brand bg-brand-light p-6 flex gap-4">
                <div className="text-4xl">{f.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Specialties</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              What we treat
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white border border-slate-200 hover:border-brand p-6 transition hover:shadow-md">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Conditions Treated</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              सभी प्रकार के रोगों का इलाज
            </h2>
            <p className="mt-2 text-slate-600">
              All kinds of conditions are treated at our clinic. Below is a summary of common cases handled across age groups.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {conditionGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-brand">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500 italic">
            हाथ पैर सूजा होना, बवासीर, भगन्दर, फिशर, कमर दर्द, शरीर दर्द इत्यादि सभी प्रकार के रोगों का इलाज किया जाता है।
          </p>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-14 text-center text-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">Friday Special</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">
            प्रत्येक शुक्रवार
          </h2>
          <p className="mt-1 text-3xl md:text-5xl font-extrabold text-red-700">
            नि:शुल्क परामर्श
          </p>
          <p className="mt-3 text-base md:text-lg">
            Free consultation every Friday for all patients. Book your slot in advance.
          </p>
          <Link
            href="/book-appointment"
            className="mt-6 inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800"
          >
            Book Friday Slot
          </Link>
        </div>
      </section>

      <section className="bg-red-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-white text-red-600 font-bold px-4 py-1.5 text-xs uppercase tracking-wider">
            विशेष सूचना · Special Note
          </span>
          <p className="mt-5 text-lg md:text-2xl font-semibold leading-relaxed max-w-4xl mx-auto">
            जिन बच्चों के माता-पिता नहीं हैं एवं 60 वर्ष से अधिक उम्र के लोगों का नि:शुल्क परामर्श।
          </p>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-3xl mx-auto">
            Free consultation always for orphaned children and senior citizens above 60 years of age.
          </p>
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Not sure which doctor to see?</h2>
          <p className="mt-2 opacity-90">Send us a quick message and we will guide you to the right specialist.</p>
          <Link href="/book-appointment" className="mt-6 inline-flex items-center rounded-full bg-white text-brand px-6 py-3 font-medium hover:bg-slate-100">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
