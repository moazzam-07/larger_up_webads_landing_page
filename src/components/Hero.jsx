import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      {/* Clean Minimalist Eyebrow (Pure Monochrome) */}
      <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3.5 py-1.5 rounded-full text-xs font-semibold text-ink tracking-wide uppercase mb-6">
        <span>Client Acquisition for Interior Studios</span>
      </div>

      {/* Bold, Concise Display Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-ink tracking-tight leading-[1.08] max-w-3xl mb-6">
        Get high-ticket interior clients every month.
      </h1>

      {/* Short, Natural Subtitle */}
      <p className="text-base sm:text-xl text-muted font-light leading-relaxed max-w-2xl mb-10">
        We install a private client acquisition engine that books pre-qualified homeowners directly into your design calendar. No shared lead portals. No window shoppers.
      </p>

      {/* Single Prominent Centered CTA Pill */}
      <div className="flex justify-center w-full mb-16">
        <button
          onClick={onOpenForm}
          className="bg-ink hover:bg-ink-soft text-white text-base sm:text-lg font-semibold px-9 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow"
        >
          <span>Book Free Consultation</span>
          <ArrowUpRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      {/* Realistic, Clean Micro Metrics (Monochrome Mobbin Style) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full text-left">
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft">
          <p className="text-xl sm:text-2xl font-bold text-ink">100%</p>
          <p className="text-xs text-muted font-normal mt-1">Exclusive Studio Leads</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft">
          <p className="text-xl sm:text-2xl font-bold text-ink">14 Days</p>
          <p className="text-xs text-muted font-normal mt-1">Launch to First Consults</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft">
          <p className="text-xl sm:text-2xl font-bold text-ink">Zero</p>
          <p className="text-xs text-muted font-normal mt-1">Shared Portal Porting</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 sm:p-5 border border-hairline-soft">
          <p className="text-xl sm:text-2xl font-bold text-ink">Pre-Vetted</p>
          <p className="text-xs text-muted font-normal mt-1">Budget & Handover Verified</p>
        </div>
      </div>
    </section>
  );
}
