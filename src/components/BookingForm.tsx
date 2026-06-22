"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/clinic";
import { DOCTORS } from "@/lib/doctors";

const doctorOptions = [
  ...DOCTORS.map((d) => `${d.name} - ${d.role}`),
  "Not sure / Any available doctor",
];

const timeSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    type: "In-Clinic Visit" as "In-Clinic Visit" | "Video Consultation",
    department: doctorOptions[0],
    date: "",
    slot: timeSlots[0],
    concern: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage() {
    return (
      `Hello Baba Life Care Clinic,\n\n` +
      `I would like to book an appointment.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Age: ${form.age}\n` +
      `Type: ${form.type}\n` +
      `Department: ${form.department}\n` +
      `Preferred Date: ${form.date}\n` +
      `Preferred Slot: ${form.slot}\n` +
      `Concern: ${form.concern}\n\n` +
      `Please confirm. Thank you.`
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = whatsappLink(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
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
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred Date *">
          <input
            required
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </Field>
        <Field label="Preferred Slot *">
          <select
            required
            value={form.slot}
            onChange={(e) => update("slot", e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 bg-white"
          >
            {timeSlots.map((s) => (
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

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
      >
        Send via WhatsApp →
      </button>

      <p className="text-xs text-slate-500 text-center">
        Submitting opens WhatsApp with your details pre-filled. Send the message
        to the clinic; they will confirm your slot.
      </p>
    </form>
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
