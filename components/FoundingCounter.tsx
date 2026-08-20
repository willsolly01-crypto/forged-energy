"use client";

import { useEffect, useState } from "react";

export default function FoundingCounter({ className }: { className?: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/inventory", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled && typeof data.remaining === "number") {
          setRemaining(data.remaining);
        }
      } catch {
        // Keep whatever we last had (or the static fallback) — never
        // show a broken counter over a flaky network call.
      }
    }

    load();
    const interval = setInterval(load, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <span className={className}>
      {remaining === null
        ? "Founding Member · First 500 pouches only"
        : remaining > 0
          ? `Founding Member · ${remaining} of 500 left`
          : "Founding batch sold out"}
    </span>
  );
}
