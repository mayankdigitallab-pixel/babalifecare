import type { Metadata } from "next";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit, call, or message ${CLINIC.name}. Located on Salempur-Mairwa Main Road, UP-Bihar Border, Deoria. 24x7 emergency support.`,
};

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
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Get in touch</h1>
          <p className="mt-3 max-w-3xl text-lg opacity-95">
            We would love to hear from you. Reach us by phone, WhatsApp, or
            simply walk into our clinic.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {CLINIC.address.line1}<br />
                    {CLINIC.address.line2}<br />
                    {CLINIC.address.line3}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 italic leading-relaxed">
                    पता: {CLINIC.address.hindi}
                  </p>
                </div>
              </div>
            </div>

            <ContactCard
              icon="📞"
              title="Call"
              lines={[`${CLINIC.phone}`, `${CLINIC.phoneAlt}`, "Emergency: 24x7"]}
              href={`tel:${CLINIC.phoneRaw}`}
              cta="Call primary number"
            />
            <ContactCard
              icon="💬"
              title="WhatsApp"
              lines={[CLINIC.phone, "Quick responses during clinic hours"]}
              href={whatsappLink("Hello Baba Life Care Clinic, I have a question.")}
              cta="Chat on WhatsApp"
            />
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Clinic Hours</h3>
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

          <div className="rounded-3xl overflow-hidden border border-slate-200 min-h-[500px]">
            <iframe
              src={CLINIC.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
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

function ContactCard({
  icon,
  title,
  lines,
  href,
  cta,
}: {
  icon: string;
  title: string;
  lines: string[];
  href?: string;
  cta?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 flex gap-4">
      <div className="text-3xl">{icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-slate-600">{l}</p>
        ))}
        {href && cta && (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  );
}
