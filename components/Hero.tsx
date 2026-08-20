import WaitlistForm from "./WaitlistForm";
import BuyButton from "./BuyButton";
import FoundingCounter from "./FoundingCounter";
import PouchIllustration from "./PouchIllustration";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="bg-hex absolute inset-0" />
      <div className="bg-grid-fade absolute inset-0" />
      <div className="bg-noise absolute inset-0" />

      {/* ambient glows */}
      <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-lime-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Copy column */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Launching Soon — Founding Member Pricing
          </div>

          <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-white">Forged</span>
            <span className="block text-lime-400 [text-shadow:0_0_40px_rgba(198,255,61,0.35)]">
              Stay
            </span>
            <span className="block text-ember-500 [text-shadow:0_0_40px_rgba(255,122,26,0.35)]">
              Sharp
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/70">
            40mg of clean caffeine in every gummy. Zero sugar. No crash. Built
            for late library nights, 8am labs, and everything in between.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-display text-4xl text-gold-400 sm:text-5xl">
              $18.99
            </span>
            <span className="text-lg text-white/40 line-through">$24.99</span>
            <FoundingCounter className="rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-lime-400 ring-1 ring-lime-400/30" />
          </div>
          <a
            href="/founders-deal"
            className="mt-2 inline-block text-xs font-bold uppercase tracking-wide text-gold-400 underline decoration-gold-400/40 underline-offset-4 transition hover:text-gold-300"
          >
            See the full Founder&rsquo;s Deal →
          </a>

          <div className="mt-8" id="join">
            <BuyButton
              className="group relative w-full max-w-md overflow-hidden rounded-full bg-gold-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
              label="Buy Now — $18.99"
            />
            <p className="mt-4 text-xs text-white/40">
              Not ready to buy? Join the waitlist for new flavours and
              restock alerts instead.
            </p>
            <div className="mt-3 max-w-md">
              <WaitlistForm source="hero" />
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["40mg", "Caffeine / gummy"],
              ["0g", "Sugar"],
              ["60ct", "Per pouch"],
              ["Vegan", "Pectin base"],
            ].map(([stat, label]) => (
              <div key={label} className="border-l-2 border-gold-500/40 pl-3">
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

        {/* Product column */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold-500/25 blur-[90px]" />
            <PouchIllustration
              flavor="orange"
              className="w-[260px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] sm:w-[340px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
