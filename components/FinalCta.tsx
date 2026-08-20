import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import BuyButton from "./BuyButton";
import FoundingCounter from "./FoundingCounter";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[140px]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Image
          src="/logo.webp"
          alt="FORGED"
          width={72}
          height={72}
          className="mb-6 h-14 w-auto animate-sparkle"
        />
        <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">
          Be first to get{" "}
          <span className="text-gold-400">forged</span>
        </h2>
        <p className="mt-4 max-w-md text-white/60">
          Join the waitlist for founding-member pricing and a text the second
          we open orders.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="font-display text-3xl text-gold-400">$18.99</span>
          <span className="text-white/40 line-through">$24.99</span>
          <FoundingCounter className="rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-lime-400 ring-1 ring-lime-400/30" />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <BuyButton
            className="group relative overflow-hidden rounded-full bg-gold-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400 disabled:opacity-60"
            label="Buy Now — $18.99"
          />
          <WaitlistForm source="final-cta" />
        </div>
      </div>
    </section>
  );
}
