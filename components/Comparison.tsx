const ROWS = [
  {
    label: "Prep time",
    coffee: "Brew, wait, queue",
    forged: "Zero — grab & chew",
  },
  { label: "Cleanup", coffee: "Cup, lid, machine", forged: "None" },
  {
    label: "Comes with you",
    coffee: "Spills, needs a mug",
    forged: "Pocket-sized pouch",
  },
  { label: "Sugar", coffee: "Depends on order", forged: "0g, always" },
  {
    label: "The crash",
    coffee: "Often",
    forged: "Formulated to avoid it",
  },
];

export default function Comparison() {
  return (
    <section id="why" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Why Forged
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            2 gummies{" "}
            <span className="text-ember-500">≈</span> 1 coffee
          </h2>
          <p className="mt-4 text-white/60">
            Same lift, without the cup, the queue, or the crash.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03] text-xs font-bold uppercase tracking-wide text-white/50 sm:text-sm">
            <div className="p-4 sm:p-6">&nbsp;</div>
            <div className="p-4 text-center sm:p-6">Coffee</div>
            <div className="p-4 text-center text-gold-400 sm:p-6">
              FORGED
            </div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 text-sm sm:text-base ${
                i !== ROWS.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="p-4 font-semibold text-white/80 sm:p-6">
                {row.label}
              </div>
              <div className="p-4 text-center text-white/40 sm:p-6">
                {row.coffee}
              </div>
              <div className="p-4 text-center font-semibold text-lime-400 sm:p-6">
                {row.forged}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
