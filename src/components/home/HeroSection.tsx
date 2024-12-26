import React from "react";
import { Button } from "@/components/ui/button";
import PriceGraph from "./PriceGraph";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "The Next Generation of Stablecoin",
  subtitle = "Experience unparalleled stability and transparency in the digital asset space",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="min-h-[680px] w-full bg-gradient-to-b from-slate-50 to-white px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl pt-20 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="text-xl text-slate-600">{subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                {ctaText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Fully Backed</p>
                  <p className="text-sm text-slate-600">1:1 USD Reserve</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Secure</p>
                  <p className="text-sm text-slate-600">Bank-grade Security</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[800px]">
              <PriceGraph />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
