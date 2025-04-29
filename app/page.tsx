import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import OutsourcingSection from "@/components/sections/outsourcing-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ClosingSection from "@/components/sections/closing-section";
import SectionWrapper from "@/components/section-wrapper";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <SectionWrapper delay={0.1}>
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <PhilosophySection />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <OutsourcingSection />
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <PortfolioSection />
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <ClosingSection />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
