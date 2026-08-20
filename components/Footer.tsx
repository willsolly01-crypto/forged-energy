import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-28 pt-14 sm:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/logo.webp"
            alt="FORGED"
            width={110}
            height={36}
            className="h-8 w-auto"
          />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wide text-white/60">
            <a href="#why" className="hover:text-white">
              Why Forged
            </a>
            <a href="#flavors" className="hover:text-white">
              Flavors
            </a>
            <a href="#how" className="hover:text-white">
              How It Works
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#join" className="hover:text-white">
              Join Waitlist
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/35">
          <p>
            These statements have not been evaluated by the Therapeutic
            Goods Administration or FDA. This product is not intended to
            diagnose, treat, cure, or prevent any disease. Not recommended
            for children, or for individuals who are pregnant, nursing, or
            sensitive to caffeine. Consult a physician before use if you
            have a medical condition.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} FORGED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
