import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { Personas } from './components/Personas';
import { Testimonials } from './components/Testimonials';
import { RoiCalculator } from './components/RoiCalculator';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  const handleOpenTrial = () => {
    setIsTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialOpen(false);
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#171e19] text-black font-satoshi flex flex-col selection:bg-[#ffe17c] selection:text-black">
      {/* Fixed Navigation Header */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenTrial={handleOpenTrial} 
          onScrollToDemo={handleScrollToDemo} 
        />

        {/* Social Proof Marquee */}
        <SocialProofMarquee />

        {/* Problem vs Solution */}
        <ProblemSolution onOpenTrial={handleOpenTrial} />

        {/* Feature Grid */}
        <FeatureGrid onOpenTrial={handleOpenTrial} />

        {/* How It Works (Dark Mode Flow) */}
        <HowItWorks onOpenTrial={handleOpenTrial} />

        {/* Use Case Personas (Bento Grid) */}
        <Personas onOpenTrial={handleOpenTrial} />

        {/* Testimonials (Asymmetric Corners & 5 Stars) */}
        <Testimonials />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenTrial={handleOpenTrial} />

        {/* Final CTA */}
        <FinalCta onOpenTrial={handleOpenTrial} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Free Trial Sandbox Modal */}
      <TrialModal 
        isOpen={isTrialOpen} 
        onClose={handleCloseTrial} 
      />
    </div>
  );
}
