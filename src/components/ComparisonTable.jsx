import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

const coreComparisons = [
  {
    painPoint: 'Shared Lead Portals',
    oldWay: '1 lead sold to 8–10 contractors simultaneously. Instant race to the bottom on price.',
    largerUp: '100% exclusive leads dedicated strictly to your studio. Zero competition or bidding wars.',
  },
  {
    painPoint: 'Unqualified Inquiries',
    oldWay: 'Wasting 30+ hours on site visits and free 3D models for clients with unrealistic tiny budgets.',
    largerUp: 'Pre-screened budgets. Only homeowners with verified ₹25L+ project scope can book calls.',
  },
  {
    painPoint: 'Unpredictable Referrals',
    oldWay: 'Feast-or-famine cycles. Great quarters followed by stressful dry spells with zero control.',
    largerUp: 'Predictable booked consultations synced directly into your design calendar every month.',
  },
];

export default function ComparisonTable({ onOpenForm }) {
  return (
    <section id="comparison" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          Why traditional lead channels fail interior studios.
        </h2>
      </div>

      {/* 2-Column Comparison Grid */}
      <div className="border border-hairline rounded-3xl overflow-hidden bg-canvas">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: The Old Way */}
          <div className="p-5 sm:p-8 bg-canvas border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The Old Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-field flex items-center justify-center text-muted shrink-0">
                  <XCircle className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-ink mb-0.5 sm:mb-1">{item.painPoint}</p>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">{item.oldWay}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-hairline-soft text-[11px] sm:text-xs text-muted">
              Result: Endless unpaid hours, margin erosion, and uncertain quarterly cashflow.
            </div>
          </div>

          {/* Right: The LargerUp System */}
          <div className="p-5 sm:p-8 bg-canvas-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The LargerUp Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-ink mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-ink mb-0.5 sm:mb-1">{item.painPoint}</p>
                      <p className="text-xs sm:text-sm text-ink/80 font-normal leading-relaxed">{item.largerUp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-hairline">
              <button
                onClick={onOpenForm}
                className="w-full bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold py-3 sm:py-3.5 px-5 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
