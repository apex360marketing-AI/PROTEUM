import { Hero } from "@/components/marketing/Hero";
import { ThesisSection } from "@/components/marketing/ThesisSection";
import { PillarsSection } from "@/components/marketing/PillarsSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { BuiltForSection } from "@/components/marketing/BuiltForSection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { FinalCtaSection } from "@/components/marketing/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThesisSection />
      <PillarsSection />
      <HowItWorksSection />
      <BuiltForSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
