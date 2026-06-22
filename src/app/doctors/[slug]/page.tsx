import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLINIC } from "@/lib/clinic";
import { DOCTORS } from "@/lib/doctors";
import { IMAGES } from "@/lib/images";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);
  if (!doctor) return { title: "Doctor not found" };
  return {
    title: `${doctor.name} - ${doctor.role}`,
    description: `${doctor.name} at ${CLINIC.name}. ${doctor.role}. ${doctor.qualifications}.`,
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);
  if (!doctor) notFound();

  const photo = IMAGES.doctors[doctor.slug as keyof typeof IMAGES.doctors];

  return (
    <>
      <section className="relative h-[400px] md:h-[480px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={doctor.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 brand-hero-overlay" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-12 text-white">
          <Link
            href="/doctors"
            className="inline-flex items-center text-sm font-medium opacity-90 hover:opacity-100 mb-3"
          >
            ← Back to Doctors
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">{doctor.role}</p>
          <p className="text-xs opacity-80">{doctor.roleHindi}</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">{doctor.name}</h1>
          <p className="mt-2 text-lg opacity-95 font-medium">{doctor.qualifications}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
              <p className="text-sm text-slate-500 mt-0.5">अनुभव</p>
              <ul className="mt-4 space-y-3">
                {doctor.experience.map((e) => (
                  <li key={e} className="flex gap-3 text-slate-700">
                    <span className="text-brand mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Department</h2>
              <p className="text-sm text-slate-500 mt-0.5">विभाग</p>
              <p className="mt-3 text-slate-700">{doctor.department}</p>
            </div>

            {doctor.availability && (
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                <h3 className="font-semibold text-amber-900">Availability</h3>
                <p className="text-sm text-amber-700 mt-0.5">उपलब्धता</p>
                <p className="mt-2 text-amber-900 font-medium">{doctor.availability}</p>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border-2 border-brand bg-brand-light p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-brand font-semibold">Consultation</p>
              <p className="text-xs text-brand/70">परामर्श</p>
              <p className="mt-3 text-slate-900 font-semibold">{doctor.name}</p>
              <Link
                href="/book-appointment"
                className="mt-4 inline-flex items-center rounded-full bg-brand text-white px-6 py-3 font-medium hover:bg-brand-dark"
              >
                Book Appointment
              </Link>
              <p className="mt-2 text-xs text-slate-500">अपॉइंटमेंट बुक करें</p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Need to call?</h3>
              <p className="text-xs text-slate-500">कॉल करें</p>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="mt-3 inline-flex items-center text-brand font-semibold hover:underline"
              >
                📞 {CLINIC.phone}
              </a>
              <p className="mt-1 text-sm text-slate-600">{CLINIC.phoneAlt}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
