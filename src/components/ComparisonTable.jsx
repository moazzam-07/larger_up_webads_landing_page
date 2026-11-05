import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

const coreComparisons = [
  {
    oldTitle: 'Shared Portal Leads',
    oldDesc: 'Portals sell the exact same contact to 8–10 contractors at once. Homeowners get flooded with calls and only bargain for the lowest quote.',
    largerUpTitle: '100% Exclusive Studio Leads',
    largerUpDesc: 'Every inquiry is private and sent strictly to your studio. Zero shared contacts and zero bidding wars. You control your pricing and design value.',
  },
  {
    oldTitle: 'Unqualified Tiny Budgets',
    oldDesc: 'Full days wasted travelling for site visits and making free 3D layouts, only to find the client has a tiny budget or just wants cheap labour.',
    largerUpTitle: 'Pre-Screened High Budgets (₹25L+)',
    largerUpDesc: 'Every homeowner is verified for ₹25L–₹60L+ project scope before booking. You only speak with serious clients ready for premium turnkey interiors.',
  },
  {
    oldTitle: 'Uncertain Word-of-Mouth',
    oldDesc: 'Depending only on referrals leads to sudden dry spells. Some months are packed, while other months studio rent and staff salaries keep running.',
    largerUpTitle: 'Predictable Monthly Pipeline',
    largerUpDesc: 'Qualified design consultations booked automatically into your calendar every month. Your studio pipeline stays active and steady all year round.',
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
        <p className="text-xs sm:text-base text-muted font-light mt-2 sm:mt-3">
          How typical lead portals and unpredictable referrals hurt design practices—and how LargerUp solves it.
        </p>
      </div>

      {/* 2-Column Comparison Grid */}
      <div className="border border-hairline rounded-3xl overflow-hidden bg-canvas shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: The Old Way */}
          <div className="p-5 sm:p-8 bg-canvas border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The Old Way</h3>
                  <p className="text-[11px] text-muted font-normal mt-0.5">How most local studios struggle</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-field flex items-center justify-center text-muted shrink-0">
                  <XCircle className="w-4 h-4 text-muted" />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-ink mb-0.5 sm:mb-1">{item.oldTitle}</p>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">{item.oldDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-hairline-soft text-[11px] sm:text-xs text-muted leading-relaxed">
              <span className="font-semibold text-ink/80">Result:</span> Wasted days on bargain hunters, unpaid 3D design work, and unpredictable monthly income.
            </div>
          </div>

          {/* Right: The LargerUp Way */}
          <div className="p-5 sm:p-8 bg-canvas-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The LargerUp Way</h3>
                  <p className="text-[11px] text-ink/60 font-normal mt-0.5">Automated high-ticket pipeline</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {coreComparisons.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-ink mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-ink mb-0.5 sm:mb-1">{item.largerUpTitle}</p>
                      <p className="text-xs sm:text-sm text-ink/80 font-normal leading-relaxed">{item.largerUpDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-hairline flex flex-col gap-3">
              <p className="text-[11px] sm:text-xs text-ink/80 font-medium leading-relaxed">
                <span className="font-bold text-ink">Result:</span> High-budget turnkey projects, protected design fees, and steady studio growth.
              </p>
              <button
                onClick={onOpenForm}
                className="w-full bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold py-3 sm:py-3.5 px-5 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm"
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
