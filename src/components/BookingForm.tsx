"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { whatsappLink, CLINIC } from "@/lib/clinic";
import {
  DOCTORS,
  getDoctorBySelection,
  isDateAvailable,
  availableDayNames,
  getSlotsForDoctor,
  DEFAULT_SLOTS,
} from "@/lib/doctors";
import {
  VIDEO_CONSULTATION_FEE_INR,
  VIDEO_CONSULTATION_FEE_PAISE,
  generateJitsiLink,
} from "@/lib/consultation";

const doctorOptions = [
  ...DOCTORS.map((d) => `${d.name} - ${d.role}`),
  "Not sure / Any available doctor",
];

type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    type: "In-Clinic Visit" as "In-Clinic Visit" | "Video Consultation",
    department: doctorOptions[0],
    date: "",
    slot: DEFAULT_SLOTS[0],
    concern: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  const selectedDoctor = useMemo(
    () => getDoctorBySelection(form.department),
    [form.department]
  );
  const slotOptions = useMemo(() => getSlotsForDoctor(selectedDoctor), [selectedDoctor]);
  const dateValid = isDateAvailable(form.date, selectedDoctor);

  useEffect(() => {
    if (!slotOptions.includes(form.slot)) {
      setForm((f) => ({ ...f, slot: slotOptions[0] }));
    }
  }, [slotOptions, form.slot]);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage(extras: { meet_link?: string; payment_id?: string }) {
    const lines = [
      `Hello Baba Life Care Clinic,`,
      ``,
      `I would like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Age: ${form.age}`,
      `Type: ${form.type}`,
      `Department: ${form.department}`,
      `Preferred Date: ${form.date}`,
      `Preferred Slot: ${form.slot}`,
      `Concern: ${form.concern}`,
    ];
    if (extras.meet_link) {
      lines.push(``, `Video Meet Link: ${extras.meet_link}`);
    }
    if (extras.payment_id) {
      lines.push(`Payment ID: ${extras.payment_id} (₹${VIDEO_CONSULTATION_FEE_INR})`);
    }
    lines.push(``, `Please confirm. Thank you.`);
    return lines.join("\n");
  }

  async function logToSheet(extras: {
    meet_link?: string;
    payment_id?: string;
    payment_amount?: string;
  }) {
    try {
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          age: form.age,
          consultation_type: form.type,
          department: form.department,
          preferred_date: form.date,
          preferred_slot: form.slot,
          concern: form.concern,
          meet_link: extras.meet_link ?? "",
          payment_id: extras.payment_id ?? "",
          payment_amount: extras.payment_amount ?? "",
        }),
      });
    } catch (err) {
      console.error("Booking log failed", err);
    }
  }

  function finish(extras: { meet_link?: string; payment_id?: string; payment_amount?: string }) {
    logToSheet(extras);
    const url = whatsappLink(buildMessage(extras));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!dateValid && selectedDoctor) {
      setInfo(
        `${selectedDoctor.name} is only available on ${availableDayNames(selectedDoctor)}. Please pick a matching date.`
      );
      return;
    }

    setSubmitting(true);
    setInfo(null);

    const isVideo = form.type === "Video Consultation";
    const meet_link = isVideo ? generateJitsiLink() : undefined;

    if (!isVideo) {
      finish({ meet_link: undefined });
      return;
    }

    let orderRes: Response;
    try {
      orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: VIDEO_CONSULTATION_FEE_PAISE,
          name: form.name,
          phone: form.phone,
          department: form.department,
        }),
      });
    } catch {
      setInfo("Online payment is currently unavailable. Continuing with WhatsApp booking.");
      finish({ meet_link });
      return;
    }

    if (orderRes.status === 503) {
      setInfo(
        "Online payment is being set up. Your booking will go via WhatsApp; the clinic will collect the fee at consultation time."
      );
      finish({ meet_link });
      return;
    }

    if (!orderRes.ok) {
      setInfo("Could not start payment. Continuing with WhatsApp booking.");
      finish({ meet_link });
      return;
    }

    const order = await orderRes.json();
    const Razorpay = window.Razorpay;
    if (!Razorpay) {
      setInfo("Payment library is still loading. Continuing with WhatsApp booking.");
      finish({ meet_link });
      return;
    }

    const rzp = new Razorpay({
      key: order.key_id,
      amount: order.amount,
      currency: order.currency,
      name: CLINIC.name,
      description: `Video Consultation - ${form.department}`,
      order_id: order.order_id,
      prefill: { name: form.name, contact: form.phone },
      theme: { color: "#0e7c66" },
      handler: async (response: RazorpayResponse) => {
        try {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verify = await verifyRes.json();
          if (verify.verified) {
            finish({
              meet_link,
              payment_id: response.razorpay_payment_id,
              payment_amount: `INR ${VIDEO_CONSULTATION_FEE_INR}`,
            });
          } else {
            setInfo("Payment received but verification failed. WhatsApp the clinic with your payment ID.");
            finish({ meet_link, payment_id: response.razorpay_payment_id });
          }
        } catch (err) {
          console.error(err);
          setInfo("Payment received. WhatsApp opened to confirm with the clinic.");
          finish({ meet_link, payment_id: response.razorpay_payment_id });
        }
      },
      modal: {
        ondismiss: () => {
          setSubmitting(false);
          setInfo("Payment cancelled. Your booking was not submitted.");
        },
      },
    });
    rzp.open();
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name *">
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="Your name"
            />
          </Field>
          <Field label="Phone Number *">
            <input
              required
              type="tel"
              pattern="[0-9+\s-]{10,}"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="+91 9XXXX XXXXX"
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Age">
            <input
              type="number"
              min="0"
              max="120"
              value={form.age}
              onChange={(e) => update("age", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="Age in years"
            />
          </Field>
          <Field label="Consultation Type *">
            <div className="flex gap-3">
              {(["In-Clinic Visit", "Video Consultation"] as const).map((t) => (
                <label key={t} className={`flex-1 cursor-pointer rounded-lg border px-3 py-2.5 text-sm text-center transition ${form.type === t ? "border-brand bg-brand-light text-brand font-medium" : "border-slate-300 bg-white text-slate-700"}`}>
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    checked={form.type === t}
                    onChange={() => update("type", t)}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </Field>
        </div>

        {form.type === "Video Consultation" && (
          <div className="rounded-lg border border-brand/30 bg-brand-light p-3 text-sm text-slate-700">
            <p className="font-medium text-brand">
              Video consultation fee: ₹{VIDEO_CONSULTATION_FEE_INR}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Payment via Razorpay (UPI, card, net banking). A unique Jitsi meet link will be sent to you on WhatsApp after booking.
            </p>
          </div>
        )}

        <Field label="Department / Doctor *">
          <select
            required
            value={form.department}
            onChange={(e) => update("department", e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 bg-white"
          >
            {doctorOptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          {selectedDoctor?.availability && (
            <p className="mt-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1">
              {selectedDoctor.availability}
            </p>
          )}
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred Date *">
            <input
              required
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={`w-full rounded-lg border px-3 py-2.5 focus:outline-none focus:ring-2 ${dateValid ? "border-slate-300 focus:border-brand focus:ring-brand/20" : "border-rose-400 focus:border-rose-500 focus:ring-rose-200"}`}
            />
            {!dateValid && selectedDoctor && (
              <p className="mt-1.5 text-xs text-rose-700">
                {selectedDoctor.name} sees patients on {availableDayNames(selectedDoctor)} only.
              </p>
            )}
          </Field>
          <Field label="Preferred Slot *">
            <select
              required
              value={form.slot}
              onChange={(e) => update("slot", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 bg-white"
            >
              {slotOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Medical Concern / Symptoms">
          <textarea
            rows={3}
            value={form.concern}
            onChange={(e) => update("concern", e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="Briefly describe what you'd like to consult about (optional)"
          />
        </Field>

        {info && (
          <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
            {info}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !dateValid}
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors disabled:opacity-60"
        >
          {submitting
            ? "Processing..."
            : form.type === "Video Consultation"
              ? `Pay ₹${VIDEO_CONSULTATION_FEE_INR} & Book →`
              : "Send via WhatsApp →"}
        </button>

        <p className="text-xs text-slate-500 text-center">
          {form.type === "Video Consultation"
            ? "Pay first, then WhatsApp opens with your booking + meet link."
            : "Submitting opens WhatsApp with your details pre-filled."}
        </p>
      </form>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      {children}
    </label>
  );
}
