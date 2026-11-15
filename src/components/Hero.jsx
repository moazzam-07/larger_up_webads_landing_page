import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      {/* Center Stage Hero Content */}
      <div className="max-w-[340px] xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col items-center relative z-20 px-1 sm:px-4 text-center">
        
        {/* Dominant Headline */}
        <h1 className="text-[34px] xs:text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-black text-ink tracking-tight leading-[1.08] sm:leading-[1.08] mb-3.5 sm:mb-5 animate-blur-in delay-150">
          Get a Professional Website for Your Interior Design Business.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted font-normal max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed animate-blur-in delay-200">
          Showcase your projects, build trust, and turn potential clients into enquiries.
        </p>

        {/* Primary CTA Button */}
        <div className="w-full flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-base font-semibold px-6 sm:px-10 py-3 sm:py-3.5 rounded-full transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Get My Website for ₹7,000</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </button>
        </div>

      </div>
    </section>
  );
}
