import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Flavors from "@/components/Flavors";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustMarquee />
      <Comparison />
      <HowItWorks />
      <Flavors />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
