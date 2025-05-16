
import React from 'react';
import { ShoppingCart, Star, Award } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">How It Works</h2>
            <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
              Follow these simple steps to start earning rewards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mb-4">
                <ShoppingCart className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Step 1</h3>
              <p className="text-gray-700">Shop at Origins</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mb-4">
                <Star className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Step 2</h3>
              <p className="text-gray-700">Earn points ($1 pre-tax = 1 point)</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mb-4">
                <Award className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Step 3</h3>
              <p className="text-gray-700">Unlock rewards and level up</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg max-w-4xl border border-amber-100">
            <p className="text-sm text-gray-700 text-center">
              Every purchase earns you points toward exclusive discounts and rewards. The more you shop, the higher your tier and the better your rewards!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
