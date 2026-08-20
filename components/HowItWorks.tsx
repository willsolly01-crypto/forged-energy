const STEPS = [
  {
    n: "01",
    title: "Chew two gummies",
    body: "That's it. No brewing, no machine, no barista line. 40mg of caffeine per gummy, so you control the dose.",
  },
  {
    n: "02",
    title: "Let it kick in",
    body: "Clean caffeine, zero sugar. Formulated to bring you up smoothly — not spike you and drop you.",
  },
  {
    n: "03",
    title: "Stay sharp",
    body: "Get through the lecture, the deadline, the deadlift. Then reach for two more whenever you need them.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-panel py-24 sm:py-32">
      <div className="bg-hex absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            How it works
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Energy, forged simply
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="group relative rounded-3xl border border-white/10 bg-ink/60 p-8 transition hover:border-gold-500/40"
            >
              <span className="font-display text-6xl text-white/10 transition group-hover:text-gold-500/20">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
