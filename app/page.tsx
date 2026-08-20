import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Explore3D from "@/components/Explore3D";
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
      <Explore3D />
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
