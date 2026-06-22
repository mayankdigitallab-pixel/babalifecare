import { NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(req: Request) {
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_secret) {
    return NextResponse.json({ verified: false, configured: false }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const order_id = typeof body.razorpay_order_id === "string" ? body.razorpay_order_id : null;
  const payment_id = typeof body.razorpay_payment_id === "string" ? body.razorpay_payment_id : null;
  const signature = typeof body.razorpay_signature === "string" ? body.razorpay_signature : null;

  if (!order_id || !payment_id || !signature) {
    return NextResponse.json({ error: "Missing payment fields" }, { status: 400 });
  }

  const expected = crypto
    .createHmac("sha256", key_secret)
    .update(`${order_id}|${payment_id}`)
    .digest("hex");

  if (expected !== signature) {
    return NextResponse.json({ verified: false }, { status: 400 });
  }

  return NextResponse.json({ verified: true, payment_id });
}
