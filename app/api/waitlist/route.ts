import { NextRequest, NextResponse } from "next/server";

// NOTE: This is a placeholder endpoint so the waitlist form on the landing
// page is fully wired up end-to-end. It validates the email and returns
// success, but does not yet persist signups anywhere durable.
//
// Before real launch, connect this to an email/CRM provider — e.g. swap the
// block below for a Supabase insert, a Klaviyo/Mailchimp/ConvertKit API
// call, or a simple Vercel Postgres table — so signups aren't lost.
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    // TODO: persist `email` to your ESP/CRM/database of choice.
    console.log("[waitlist] new signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
