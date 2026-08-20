const ITEMS = [
  "40MG CAFFEINE PER GUMMY",
  "ZERO SUGAR",
  "NO CRASH",
  "100% VEGAN PECTIN",
  "NATURALLY FLAVORED",
  "60 GUMMIES PER POUCH",
  "NO CUP · NO QUEUE",
  "FOUNDING PRICE $18.99 · 500 ONLY",
];

export default function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-gold-500/20 bg-gold-500 py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-ink"
          >
            {item}
            <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
