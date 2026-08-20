import Image from "next/image";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 py-24 text-center">
      <Image
        src="/logo.webp"
        alt="FORGED"
        width={96}
        height={96}
        className="mb-8 h-16 w-auto animate-sparkle"
      />
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-400">
        Order confirmed
      </span>
      <h1 className="font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
        You&rsquo;re officially <span className="text-gold-400">forged</span>
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Thanks for locking in a founding-member pouch. We&rsquo;ll email your
        receipt and shipping updates as soon as your batch is on the way.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400"
      >
        Back to FORGED
      </Link>
    </main>
  );
}
