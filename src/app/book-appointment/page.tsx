import type { Metadata } from "next";
import { CLINIC } from "@/lib/clinic";
import { BookingForm } from "@/components/BookingForm";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book an in-clinic or video consultation at ${CLINIC.name}. WhatsApp confirmation, real-time slot check.`,
};

export default function BookAppointmentPage() {
  return (
    <>
      <section className="relative h-[340px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.services.header}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 brand-hero-overlay" />
        <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col justify-end pb-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Book Appointment</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">See a doctor, online or in-clinic</h1>
          <p className="mt-3 max-w-3xl text-lg opacity-95">
            Fill in your details below. We will confirm your slot on WhatsApp
            within a few minutes during clinic hours.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">How it works</h3>
              <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                <li>Fill the form with your details</li>
                <li>Submit - opens WhatsApp with your request</li>
                <li>Send the message to confirm</li>
                <li>Clinic confirms your slot via WhatsApp</li>
                <li>For video consults, joining link is shared before the slot</li>
              </ol>
            </div>
            <div className="rounded-2xl bg-brand-light border border-brand/20 p-6">
              <h3 className="font-semibold text-brand">Free Friday Consultation</h3>
              <p className="mt-2 text-sm text-slate-700">
                Every {CLINIC.freeConsultDay} we offer Nihshulk Paramarsh - free
                consultation for the community. Book early; slots fill fast.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-6">
              <h3 className="font-semibold">Emergency?</h3>
              <p className="mt-2 text-sm text-slate-300">
                Don't wait for online booking. Call us now.
              </p>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="mt-3 inline-flex items-center rounded-full bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-medium"
              >
                📞 {CLINIC.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
