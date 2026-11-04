import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="pt-28 pb-14 sm:pt-40 sm:pb-20 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Bold, Responsive Headline */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.1] max-w-3xl mb-8 sm:mb-10">
        Get high-ticket interior clients every month.
      </h1>

      {/* Primary CTA Button */}
      <div className="w-full sm:w-auto flex justify-center">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base sm:text-lg font-semibold px-8 py-3.5 sm:py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-5 h-5 text-white/80" />
        </button>
      </div>
    </section>
  );
}
