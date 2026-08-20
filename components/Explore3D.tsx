"use client";

import { useState } from "react";
import ModelViewer from "./ModelViewer";

export default function Explore3D() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section id="explore" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            360° view
          </span>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            Explore FORGED
          </h2>
          <p className="mt-4 text-white/60">
            Drag to rotate, scroll or pinch to zoom — see the pouch from every
            angle before it lands on your desk.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <ModelViewer autoRotate={autoRotate} height="520px" />

          <div className="mt-4 flex items-center justify-between text-xs text-white/40">
            <span>Drag to rotate • Scroll to zoom</span>
            <button
              onClick={() => setAutoRotate((v) => !v)}
              className="rounded-full border border-white/15 px-3 py-1.5 font-semibold uppercase tracking-wide text-white/60 transition hover:border-gold-500/40 hover:text-gold-400"
            >
              {autoRotate ? "Pause spin" : "Auto-rotate"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
