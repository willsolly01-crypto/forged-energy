"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How much caffeine is in each gummy?",
    a: "Each FORGED gummy contains 40mg of caffeine — roughly the same as half a cup of coffee. The exact amount you take is up to you, so you can dose to what works for your body.",
  },
  {
    q: "Is there any sugar?",
    a: "Zero grams. FORGED gummies are naturally flavored and built on a 100% vegan pectin base, with no added sugar.",
  },
  {
    q: "Are they vegan?",
    a: "Yes. FORGED uses a vegan pectin base instead of gelatin, so the whole lineup is vegan-friendly.",
  },
  {
    q: "How many gummies come in a pouch?",
    a: "Each pouch contains 60 gummies.",
  },
  {
    q: "How much does it cost?",
    a: "Founding Member price is $18.99 per pouch (usually $24.99), limited to the first 500 pouches from our first production run. Join the waitlist to lock it in before it opens to everyone.",
  },
  {
    q: "When can I actually buy these?",
    a: "We're finalizing production ahead of launch. Join the waitlist and you'll be the first to know the moment FORGED is available to order — with a founding-member discount.",
  },
  {
    q: "Who shouldn't take FORGED?",
    a: "As with any caffeine product, FORGED isn't recommended for children, or for anyone who is pregnant, nursing, or sensitive to caffeine. Talk to a doctor if you're unsure, and always follow the label when it ships.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 rounded-3xl border border-white/10 bg-ink/50">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-gold-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
