"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm({
  variant = "light",
  source,
}: {
  variant?: "light" | "dark";
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You're on the list. We'll email you the moment we drop.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  if (status === "ok") {
    return (
      <div
        className={`flex items-center gap-2 rounded-full px-5 py-4 text-sm font-semibold ${
          variant === "dark"
            ? "bg-white/10 text-lime-400 ring-1 ring-lime-400/40"
            : "bg-ink text-lime-400 ring-1 ring-lime-400/40"
        }`}
      >
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
            clipRule="evenodd"
          />
        </svg>
        {message}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
      noValidate
    >
      <div className="flex-1">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          placeholder="you@university.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-gold-500 focus:bg-white/10"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative shrink-0 overflow-hidden rounded-full bg-gold-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400 disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-xs font-medium text-ember-400 sm:absolute sm:mt-14">
          {message}
        </p>
      )}
    </form>
  );
}
