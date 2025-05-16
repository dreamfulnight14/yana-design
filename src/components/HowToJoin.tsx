
import React from 'react';
import { Check, ShoppingBag } from 'lucide-react';

const HowToJoin = () => {
  return (
    <section id="how-to-join" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              How to Join
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center max-w-md border border-amber-100">
              <div className="p-3 bg-amber-100 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">No sign-up needed!</h3>
              <p className="text-gray-700">
                Every customer is automatically enrolled in Amplify 2.0 when you make a purchase at Origins.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center max-w-md border border-amber-100">
              <div className="p-3 bg-amber-100 rounded-full mb-4">
                <Check className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Track Your Rewards</h3>
              <p className="text-gray-700">
                Track your rewards anytime in the Origins App, on our website, or just ask a team member in-store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
