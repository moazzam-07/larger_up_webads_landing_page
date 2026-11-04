import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="pt-24 pb-10 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Bold, Responsive Headline */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.1] max-w-3xl mb-4 sm:mb-6">
        Get high-ticket interior clients every month.
      </h1>

      {/* Natural, Minimal Subtitle */}
      <p className="text-sm sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 px-1 sm:px-0">
        We install a private client acquisition engine that books pre-qualified homeowners directly into your design calendar. No shared lead portals. No window shoppers.
      </p>

      {/* Primary CTA Button */}
      <div className="w-full sm:w-auto flex justify-center mb-10 sm:mb-16">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base sm:text-lg font-semibold px-8 py-3.5 sm:py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      {/* 4 Realistic Micro Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 w-full text-left">
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft hover:border-hairline transition-colors">
          <p className="text-lg sm:text-2xl font-bold text-ink">100% Exclusive</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1 leading-snug">
            Leads never shared with competitors
          </p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft hover:border-hairline transition-colors">
          <p className="text-lg sm:text-2xl font-bold text-ink">Pre-Qualified</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1 leading-snug">
            Verified budget & handover timelines
          </p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft hover:border-hairline transition-colors">
          <p className="text-lg sm:text-2xl font-bold text-ink">14-Day Launch</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1 leading-snug">
            Full pipeline running in two weeks
          </p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft hover:border-hairline transition-colors">
          <p className="text-lg sm:text-2xl font-bold text-ink">Direct Calendar</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1 leading-snug">
            Pre-scheduled site visits & calls
          </p>
        </div>
      </div>
    </section>
  );
}
