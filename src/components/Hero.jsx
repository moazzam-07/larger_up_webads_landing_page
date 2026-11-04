import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  const handleScrollDown = () => {
    const el = document.getElementById('creations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-5xl mx-auto">
      {/* Bold, Responsive Headline with Blurry Incoming Animation */}
      <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-black text-ink tracking-tight leading-[1.08] sm:leading-[1.04] max-w-4xl mb-8 sm:mb-12 md:mb-14 animate-blur-in delay-150">
        Get high-ticket interior clients every month.
      </h1>

      {/* Primary CTA Button with Smooth Entrance */}
      <div className="w-full sm:w-auto flex justify-center animate-blur-in delay-300">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base sm:text-xl font-semibold px-9 sm:px-12 py-4 sm:py-5 rounded-full transition-all inline-flex items-center justify-center gap-2.5 active:scale-95 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
        </button>
      </div>

      {/* Sleek Scroll Affordance at the Base of the Main Frame */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity animate-blur-in delay-500 cursor-pointer group p-2"
        aria-label="Scroll to creations"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-ink group-hover:translate-y-0.5 transition-transform">
          Creations
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-ink animate-bounce" />
      </button>
    </section>
  );
}
