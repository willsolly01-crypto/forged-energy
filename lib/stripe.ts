import Stripe from "stripe";

// STRIPE_SECRET_KEY must be set in Vercel project environment variables.
// Use a test-mode key (sk_test_...) until real payments are ready to go live.
//
// This is built lazily (not at module scope) because the Stripe SDK throws
// immediately if constructed with an empty key, which would crash the
// Next.js build's page-data collection step before any env vars are set.
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-02-24.acacia",
    });
  }
  return _stripe;
}
