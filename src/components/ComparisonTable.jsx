import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

const coreComparisons = [
  {
    oldTitle: 'Shared Portal Leads',
    oldDesc: 'Portals like Justdial and Sulekha sell the exact same lead to 8–10 contractors at once. Clients get flooded with calls and only bargain for the lowest quote.',
    largerUpTitle: '100% Exclusive Studio Leads',
    largerUpDesc: 'Every inquiry is private and sent strictly to your studio. Zero shared contacts and zero bidding wars. You control your pricing and design value.',
  },
  {
    oldTitle: 'Unqualified Leads',
    oldDesc: 'Full days wasted travelling for site visits and making free 3D layouts, only to find the client has a tiny budget or just wants cheap labour.',
    largerUpTitle: 'Qualified Leads',
    largerUpDesc: 'Every homeowner is verified for ₹25L–₹60L+ project scope before booking. You only speak with serious clients ready for premium turnkey interiors.',
  },
  {
    oldTitle: 'Uncertain Referrals',
    oldDesc: 'Some months you get inquiries, and some months you get zero inquiries—while you still have to pay studio rent and staff salaries.',
    largerUpTitle: 'Certain Referrals',
    largerUpDesc: 'Consistent design consultations booked directly into your calendar every month. Your project inquiries stay steady and reliable all year round.',
  },
];

export default function ComparisonTable({ onOpenForm }) {
  return (
    <section id="comparison" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-hairline">
      {/* Header - Subtitle removed as directed */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          Why traditional lead channels fail interior studios.
        </h2>
      </div>

      {/* 2-Column Comparison Grid */}
      <div className="border border-hairline rounded-3xl overflow-hidden bg-canvas shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: The Old Way */}
          <div className="p-5 sm:p-8 bg-canvas border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between">
            <div>
              {/* Header - Subtitle removed as directed */}
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The Old Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-field flex items-center justify-center text-muted shrink-0">
                  <XCircle className="w-4 h-4 text-muted" />
                </div>
              </div>

              {/* 3 Points */}
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
            {/* Result text removed as directed */}
          </div>

          {/* Right: The LargerUp Way */}
          <div className="p-5 sm:p-8 bg-canvas-soft flex flex-col justify-between">
            <div>
              {/* Header - Subtitle removed as directed */}
              <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-5 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink">The LargerUp Way</h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* 3 Points */}
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

            {/* Bottom: Result text removed as directed; clean CTA retained */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-hairline">
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
