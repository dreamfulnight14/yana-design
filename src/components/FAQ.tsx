
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">FAQs – All About Amplify</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our loyalty program
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-amber-200">
                <AccordionTrigger className="text-left text-gray-800">How do I earn rewards?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Every $1 you spend (pre-tax) = 1 point. Visit often and watch your rewards grow!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-amber-200">
                <AccordionTrigger className="text-left text-gray-800">When do my rewards expire?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Smooth & Mellow 20% OFF rewards expire after 90 days. Heavy Hitter and OG discounts last until March 1, 2027.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-amber-200">
                <AccordionTrigger className="text-left text-gray-800">How do I know my tier?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Check the app, website, or ask in-store.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-amber-200">
                <AccordionTrigger className="text-left text-gray-800">What's the benefit of higher tiers?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Heavy Hitters get 20% OFF every purchase, OGs get 30% OFF every purchase—until March 1, 2027!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-amber-200">
                <AccordionTrigger className="text-left text-gray-800">Can I combine rewards with other discounts?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Loyalty rewards cannot be combined with other promotional discounts, but they can be used on sale items.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
