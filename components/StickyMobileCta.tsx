export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-5 py-3 backdrop-blur-md sm:hidden">
      <a
        href="#join"
        className="flex w-full items-center justify-center rounded-full bg-gold-500 py-3.5 text-sm font-bold uppercase tracking-wide text-ink"
      >
        Join the Waitlist
      </a>
    </div>
  );
}
