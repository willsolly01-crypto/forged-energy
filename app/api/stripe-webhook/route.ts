import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

// Stripe needs the raw request body to verify the webhook signature, so
// this route reads it with req.text() rather than req.json().
export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig || "",
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const { error } = await getSupabaseAdmin().from("orders").insert({
      stripe_session_id: session.id,
      stripe_payment_intent_id:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : session.payment_intent?.id ?? null,
      email: session.customer_details?.email ?? null,
      quantity: 1,
      amount_total_cents: session.amount_total,
      currency: session.currency ?? "aud",
      status: "paid",
      founding_member: true,
    });

    // Postgres code 23505 = unique_violation on stripe_session_id, which
    // means Stripe redelivered a webhook we already processed — safe to
    // ignore rather than log as a real error.
    if (error && error.code !== "23505") {
      console.error("[stripe-webhook] insert error:", error);
    }
  }

  return NextResponse.json({ received: true });
}
