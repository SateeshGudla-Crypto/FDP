import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ProblemSection from '@/sections/ProblemSection';
import SolutionSection from '@/sections/SolutionSection';
import FeaturesSection from '@/sections/FeaturesSection';
import ProductDemoSection from '@/sections/ProductDemoSection';
import UseCasesSection from '@/sections/UseCasesSection';
import YCCredibilitySection from '@/sections/YCCredibilitySection';
import MetricsSection from '@/sections/MetricsSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import PricingSection from '@/sections/PricingSection';
import FAQSection from '@/sections/FAQSection';
import FinalCTASection from '@/sections/FinalCTASection';

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <NavigationBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ProductDemoSection />
        <UseCasesSection />
        <YCCredibilitySection />
        <MetricsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
