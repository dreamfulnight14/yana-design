
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowToJoin from '@/components/HowToJoin';
import HowItWorks from '@/components/HowItWorks';
import TierBreakdown from '@/components/TierBreakdown';
import TrackRewards from '@/components/TrackRewards';
import FAQ from '@/components/FAQ';
import StayConnected from '@/components/StayConnected';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowToJoin />
        <HowItWorks />
        <TierBreakdown />
        <TrackRewards />
        <FAQ />
        <StayConnected />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
