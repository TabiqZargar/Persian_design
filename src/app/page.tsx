import { BackgroundLayers } from "@/components/background-layers";
import { DecorativeFrame } from "@/components/decorative-frame";
import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { PatternsSection } from "@/components/patterns-section";
import { GallerySection } from "@/components/gallery-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <BackgroundLayers />
      <DecorativeFrame />
      <Nav />
      <main className="relative z-10">
        <HeroSection />
        <PatternsSection />
        <GallerySection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
