import Image from "next/image";

const FLAVORS = [
  {
    name: "Orange",
    status: "Available at launch",
    image: "/pouch-orange.webp",
    live: true,
  },
  {
    name: "Raspberry",
    status: "Coming soon",
    image: "/pouch-raspberry.webp",
    live: false,
  },
  {
    name: "Grape",
    status: "Coming soon",
    image: "/pouch-grape.webp",
    live: false,
  },
];

export default function Flavors() {
  return (
    <section id="flavors" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Flavors
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Pick your forge
          </h2>
          <p className="mt-4 text-white/60">
            Naturally flavored. Same 40mg clean caffeine, zero sugar, every
            batch.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {FLAVORS.map((f) =>
            f.live ? (
              <div
                key={f.name}
                className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center"
              >
                <span className="absolute right-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                  Live
                </span>
                <Image
                  src="/pouch-orange.webp"
                  alt="FORGED Orange caffeine gummies pouch"
                  width={200}
                  height={273}
                  className="w-32 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-40"
                />
                <h3 className="mt-6 font-display text-2xl uppercase tracking-tight">
                  {f.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-lime-400">
                  {f.status}
                </p>
              </div>
            ) : (
              <div
                key={f.name}
                className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center grayscale"
              >
                <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/60">
                  Soon
                </span>
                <Image
                  src={f.image}
                  alt={`FORGED ${f.name} caffeine gummies pouch — coming soon`}
                  width={200}
                  height={200}
                  className="w-32 opacity-60 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-36"
                />
                <h3 className="mt-6 font-display text-2xl uppercase tracking-tight text-white/50">
                  {f.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/40">
                  {f.status}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
