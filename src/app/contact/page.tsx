import type { Metadata } from "next";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { IMAGES } from "@/lib/images";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit, call, or message ${CLINIC.name}. Located on Salempur-Mairwa Main Road, UP-Bihar Border, Deoria. 24x7 emergency support.`,
};

const CARD_BG = "bg-slate-50 border border-slate-200";

export default function ContactPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand-dark/80 to-slate-900/55" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Contact</p>
          <p className="text-xs opacity-80">संपर्क करें</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Get in touch</h1>
          <p className="mt-3 max-w-3xl text-lg opacity-95">
            We would love to hear from you. Reach us by phone, WhatsApp, or
            simply walk into our clinic.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className={`rounded-2xl ${CARD_BG} p-6`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="text-xs text-slate-500 mb-2">पता</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {CLINIC.address.line1}<br />
                    {CLINIC.address.line2}<br />
                    {CLINIC.address.line3}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 italic leading-relaxed">
                    {CLINIC.address.hindi}
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl ${CARD_BG} p-6`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Call</h3>
                  <p className="text-xs text-slate-500 mb-1">कॉल करें</p>
                  <p className="text-sm text-slate-700">{CLINIC.phone}</p>
                  <p className="text-sm text-slate-700">{CLINIC.phoneAlt}</p>
                  <p className="text-sm text-slate-600 mt-1">Emergency: 24x7</p>
                  <a href={`tel:${CLINIC.phoneRaw}`} className="mt-2 inline-block text-sm font-medium text-brand hover:underline">
                    Call primary number →
                  </a>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl ${CARD_BG} p-6`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <p className="text-xs text-slate-500 mb-1">व्हाट्सएप</p>
                  <p className="text-sm text-slate-700">{CLINIC.phone}</p>
                  <p className="text-sm text-slate-600">Quick responses during clinic hours</p>
                  <a
                    href={whatsappLink("Hello Baba Life Care Clinic, I have a question.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl ${CARD_BG} p-6`}>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕒</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Clinic Hours</h3>
                  <p className="text-xs text-slate-500 mb-2">क्लिनिक के समय</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>Mon to Sat: {CLINIC.hours.weekdays}</li>
                    <li>Sunday: {CLINIC.hours.sunday}</li>
                    <li>Emergency: {CLINIC.hours.emergency}</li>
                    <li className="text-accent font-medium">
                      {CLINIC.freeConsultDay}: Free Consultation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-sm font-semibold text-brand uppercase tracking-wider">Book an Appointment</p>
              <p className="text-xs text-slate-500">अपॉइंटमेंट बुक करें</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
                Send us a request
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Fill the form, we will confirm your slot on WhatsApp.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider">Find Us</p>
            <p className="text-xs text-slate-500">हमें खोजें</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Clinic location
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Salempur-Mairwa Main Road, North Side, UP-Bihar Border, Deoria.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <iframe
              src={CLINIC.mapsEmbed}
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
