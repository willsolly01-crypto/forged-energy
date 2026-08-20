import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="FORGED"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            <a href="#why" className="transition hover:text-white">
              Why Forged
            </a>
            <a href="#flavors" className="transition hover:text-white">
              Flavors
            </a>
            <a href="#how" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="/founders-deal" className="text-gold-400 transition hover:text-gold-300">
              Founder&rsquo;s Deal
            </a>
          </nav>

          <a
            href="/founders-deal"
            className="rounded-full bg-gold-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink transition hover:bg-gold-400 sm:px-5 sm:text-sm"
          >
            Founder&rsquo;s Deal
          </a>
        </div>
      </div>
    </header>
  );
}
