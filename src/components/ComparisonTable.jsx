import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

const coreComparisons = [
  {
    painPoint: 'Shared Lead Portals (Justdial / IndiaMART)',
    oldWay: '1 lead sold to 8–10 contractors simultaneously. Instant race to the bottom on price.',
    largerUp: '100% exclusive to your studio. Zero competition or shared leads.',
  },
  {
    painPoint: 'Unqualified Tire-Kickers & Window Shoppers',
    oldWay: 'Wasting 30+ hours on site visits and free 3D models for clients with unrealistic tiny budgets.',
    largerUp: 'Pre-qualification filter ensures only homeowners with approved budgets can book calls.',
  },
  {
    painPoint: 'Unpredictable Word-of-Mouth Pipeline',
    oldWay: 'Feast-or-famine cycles. Great quarters followed by stressful dry spells with zero control.',
    largerUp: 'Predictable client pipeline installed directly into your calendar every single month.',
  },
];

export default function ComparisonTable({ onOpenForm }) {
  return (
    <section id="comparison" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <span>Why LargerUp</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-3 leading-tight">
          Why traditional lead channels fail interior studios.
        </h2>
        <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
          The difference between competing on price versus commanding high-ticket projects comes down to how clients find you.
        </p>
      </div>

      {/* 2-Column Comparison Grid in Mobbin Monochrome */}
      <div className="border border-hairline rounded-3xl overflow-hidden bg-canvas">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: The Old Way */}
          <div className="p-6 sm:p-8 bg-canvas border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase text-muted tracking-wider">The Frustrating Reality</span>
                  <h3 className="text-xl font-bold text-ink mt-0.5">The Old Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-field flex items-center justify-center text-muted">
                  <XCircle className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-ink mb-1">{item.painPoint}</p>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">{item.oldWay}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-hairline-soft text-xs text-muted">
              Result: Endless unpaid hours, margin erosion, and uncertain quarterly cashflow.
            </div>
          </div>

          {/* Right: The LargerUp System */}
          <div className="p-6 sm:p-8 bg-canvas-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase text-ink tracking-wider">Dedicated Engine</span>
                  <h3 className="text-xl font-bold text-ink mt-0.5">The LargerUp Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-ink mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-ink mb-1">{item.painPoint}</p>
                      <p className="text-xs sm:text-sm text-ink/80 font-normal leading-relaxed">{item.largerUp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-hairline">
              <button
                onClick={onOpenForm}
                className="w-full bg-ink hover:bg-ink-soft text-white text-sm font-semibold py-3 px-5 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
