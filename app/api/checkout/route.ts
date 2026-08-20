import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { FOUNDING_BATCH_SIZE, FOUNDING_PRICE_CENTS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("orders")
      .select("quantity")
      .eq("status", "paid");

    if (error) throw error;

    const sold = (data ?? []).reduce((sum, o) => sum + o.quantity, 0);
    if (sold >= FOUNDING_BATCH_SIZE) {
      return NextResponse.json(
        { error: "The founding batch is sold out." },
        { status: 409 }
      );
    }

    const origin =
      req.headers.get("origin") || "https://forged-energy.vercel.app";

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "aud",
            unit_amount: FOUNDING_PRICE_CENTS,
            product_data: {
              name: "FORGED Founding Member Pouch — Orange (60ct)",
              description:
                "40mg caffeine per gummy, zero sugar, vegan pectin. Limited to the first 500 pouches from our first production run.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#join`,
      metadata: { founding_member: "true" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] error:", err);
    return NextResponse.json(
      { error: "Checkout isn't set up yet — check back soon." },
      { status: 500 }
    );
  }
}
