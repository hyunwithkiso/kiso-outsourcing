import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import OutsourcingSection from "@/components/sections/outsourcing-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ClosingSection from "@/components/sections/closing-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <OutsourcingSection />
      <PortfolioSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
