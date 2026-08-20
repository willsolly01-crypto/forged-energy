import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { FOUNDING_BATCH_SIZE } from "@/lib/constants";

export async function GET() {
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("orders")
      .select("quantity")
      .eq("status", "paid");

    if (error) throw error;

    const sold = (data ?? []).reduce((sum, o) => sum + o.quantity, 0);
    const remaining = Math.max(FOUNDING_BATCH_SIZE - sold, 0);

    return NextResponse.json({ total: FOUNDING_BATCH_SIZE, sold, remaining });
  } catch (err) {
    console.error("[inventory] error:", err);
    // Fail open with the full batch size so the site never shows a broken
    // or misleadingly-low count if the database call fails.
    return NextResponse.json({
      total: FOUNDING_BATCH_SIZE,
      sold: 0,
      remaining: FOUNDING_BATCH_SIZE,
    });
  }
}
