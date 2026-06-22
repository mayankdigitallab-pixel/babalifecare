import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const required = [
    "name",
    "phone",
    "consultation_type",
    "department",
    "preferred_date",
    "preferred_slot",
  ];
  for (const key of required) {
    const v = body[key];
    if (typeof v !== "string" || v.trim().length === 0) {
      return NextResponse.json(
        { error: `Missing required field: ${key}` },
        { status: 400 }
      );
    }
  }

  const payload = {
    name: String(body.name).trim().slice(0, 200),
    phone: String(body.phone).trim().slice(0, 30),
    age: typeof body.age === "string" ? body.age.trim().slice(0, 10) : "",
    consultation_type: String(body.consultation_type),
    department: String(body.department).trim().slice(0, 200),
    preferred_date: String(body.preferred_date).trim(),
    preferred_slot: String(body.preferred_slot).trim().slice(0, 100),
    concern:
      typeof body.concern === "string" ? body.concern.trim().slice(0, 2000) : "",
    meet_link: typeof body.meet_link === "string" ? body.meet_link.slice(0, 300) : "",
    payment_id: typeof body.payment_id === "string" ? body.payment_id.slice(0, 100) : "",
    payment_amount:
      typeof body.payment_amount === "string" ? body.payment_amount.slice(0, 20) : "",
    submitted_at: new Date().toISOString(),
  };

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[bookings] GOOGLE_SHEETS_WEBHOOK_URL not set; skipping persistence");
    return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[bookings] Sheets webhook failed", res.status, text);
      return NextResponse.json(
        { ok: false, persisted: false, error: "Sheets webhook rejected" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[bookings] Sheets webhook error", err);
    return NextResponse.json(
      { ok: false, persisted: false, error: "Sheets webhook unreachable" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, persisted: true }, { status: 201 });
}
