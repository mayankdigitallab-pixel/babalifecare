import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    return NextResponse.json(
      { configured: false, message: "Razorpay not configured" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const amount = Number(body.amount);
  if (!Number.isFinite(amount) || amount < 100) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  try {
    const rzp = new Razorpay({ key_id, key_secret });
    const order = await rzp.orders.create({
      amount,
      currency: "INR",
      receipt: `bk_${Date.now()}`,
      notes: {
        name: typeof body.name === "string" ? body.name.slice(0, 200) : "",
        phone: typeof body.phone === "string" ? body.phone.slice(0, 30) : "",
        department:
          typeof body.department === "string" ? body.department.slice(0, 200) : "",
      },
    });

    return NextResponse.json({
      configured: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id,
    });
  } catch (err) {
    console.error("[razorpay/order]", err);
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}
