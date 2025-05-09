
import React from 'react';
import Footer from "@/components/Footer";
import RetroBackground from "@/components/RetroBackground";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ScreenshotSection from "@/components/sections/ScreenshotSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="font-pressstart min-h-screen w-full bg-black flex flex-col relative overflow-hidden">
      <RetroBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Grid */}
      <FeaturesSection />

      {/* How it Works */}
      <HowItWorksSection />

      {/* Instructional Image */}
      <ScreenshotSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
