import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="pt-24 pb-12 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Clean Eyebrow */}
      <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-ink tracking-wide uppercase mb-5 sm:mb-6">
        <span>Client Acquisition for Interior Studios</span>
      </div>

      {/* Bold, Responsive Headline */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.1] max-w-3xl mb-4 sm:mb-6">
        Get high-ticket interior clients every month.
      </h1>

      {/* Natural Subtitle */}
      <p className="text-sm sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 px-1 sm:px-0">
        We install a private client acquisition engine that books pre-qualified homeowners directly into your design calendar. No shared lead portals. No window shoppers.
      </p>

      {/* Primary CTA Button (Full width on small screens for easy thumb tapping) */}
      <div className="w-full sm:w-auto flex justify-center mb-10 sm:mb-16">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base sm:text-lg font-semibold px-8 py-3.5 sm:py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow"
        >
          <span>Book Free Consultation</span>
          <ArrowUpRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      {/* Responsive Micro Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 w-full text-left">
        <div className="bg-canvas-soft rounded-2xl p-3.5 sm:p-5 border border-hairline-soft">
          <p className="text-lg sm:text-2xl font-bold text-ink">100%</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1">Exclusive Studio Leads</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-3.5 sm:p-5 border border-hairline-soft">
          <p className="text-lg sm:text-2xl font-bold text-ink">14 Days</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1">Launch to First Consults</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-3.5 sm:p-5 border border-hairline-soft">
          <p className="text-lg sm:text-2xl font-bold text-ink">Zero</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1">Shared Portals</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-3.5 sm:p-5 border border-hairline-soft">
          <p className="text-lg sm:text-2xl font-bold text-ink">Pre-Vetted</p>
          <p className="text-[11px] sm:text-xs text-muted font-normal mt-0.5 sm:mt-1">Budget & Handover Date</p>
        </div>
      </div>
    </section>
  );
}
