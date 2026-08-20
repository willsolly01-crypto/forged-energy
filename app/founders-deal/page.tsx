import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";
import FoundingCounter from "@/components/FoundingCounter";

export default function FoundersDealPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="bg-hex absolute inset-0 opacity-60" />
      <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-white"
        >
          ← Back to FORGED
        </Link>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
              Founder&rsquo;s Deal
            </span>

            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Lock in the
              <span className="block text-gold-400 [text-shadow:0_0_40px_rgba(242,183,5,0.35)]">
                launch price
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-white/70">
              The first 500 pouches ever made ship at the Founder&rsquo;s
              price. Same 40mg clean caffeine, zero sugar, vegan pectin —
              locked in before FORGED opens to everyone else.
            </p>

            <div className="mt-8 flex flex-wrap items-end gap-3">
              <span className="font-display text-6xl text-gold-400 sm:text-7xl">
                $18.99
              </span>
              <span className="pb-2 text-xl text-white/40 line-through">
                $24.99
              </span>
            </div>
            <FoundingCounter className="mt-3 inline-block rounded-full bg-lime-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-lime-400 ring-1 ring-lime-400/30" />

            <div className="mt-8">
              <BuyButton
                className="group relative w-full max-w-md overflow-hidden rounded-full bg-gold-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
                label="Claim the Founder's Deal — $18.99"
              />
              <p className="mt-4 max-w-md text-xs text-white/40">
                One-time Founder&rsquo;s pricing on the Orange 60ct pouch.
                Once the first 500 are gone, price returns to $24.99 for
                everyone after.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-md">
              {[
                ["40mg", "Caffeine / gummy"],
                ["0g", "Sugar"],
                ["60ct", "Per pouch"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-white sm:text-3xl">
                    {stat}
                  </dt>
                  <dd className="text-[11px] uppercase tracking-wide text-white/50">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold-500/20 blur-[100px]" />
            <Image
              src="/pouch-orange-lifestyle.webp"
              alt="FORGED Orange caffeine gummies pouch — Founder's Deal, 40mg caffeine, zero sugar, 60 gummies"
              width={1200}
              height={1200}
              priority
              className="w-full max-w-md rounded-3xl drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
