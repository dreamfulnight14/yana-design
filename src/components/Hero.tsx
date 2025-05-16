
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium tracking-wider uppercase">
            New Loyalty Program
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-700 via-amber-600 to-purple-700 bg-clip-text text-transparent">
              Welcome to Amplify 2.0
            </h1>
            <p className="text-xl text-gray-700 md:text-2xl/relaxed lg:text-2xl/relaxed xl:text-2xl/relaxed mx-auto max-w-3xl">
              Earn exclusive savings and perks every time you shop. Three tiers, more rewards, and the easiest way to save at Origins.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button className="bg-purple-700 hover:bg-purple-800 text-base font-medium px-8 py-2.5 h-auto">
              Get Started
            </Button>
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50 text-base font-medium px-8 py-2.5 h-auto">
              Learn More
            </Button>
          </div>
          <div className="pt-8 pb-4">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-700">
                    <path d="M12 21V12M12 8V3M5 12H3M5 4.22l2 2M19 12h2M19 19.78l-2-2M19 4.22l-2 2M5 19.78l2-2M12.71 7.29a1 1 0 11-1.42 1.42 1 1 0 011.42-1.42z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">Automatic</p>
                  <p className="text-xs text-gray-600">No sign-up needed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amber-700">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 4v16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">Three Tiers</p>
                  <p className="text-xs text-gray-600">More spending, more rewards</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-700">
                    <path d="M19 14c1.49-.7 2.5-2.27 2.5-4 0-2.21-1.79-4-4-4-.95 0-1.81.35-2.5.9M14.5 10a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM16.5 2h5v5M12 20H4v-1c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v1z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">Track Anywhere</p>
                  <p className="text-xs text-gray-600">App, web, or in-store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
