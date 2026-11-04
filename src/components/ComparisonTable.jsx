import React from 'react';
import { XCircle, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Lead Exclusivity',
    oldWay: 'Shared with 6–10 competing contractors simultaneously on Justdial/IndiaMART.',
    largerUp: '100% exclusive to your studio. Zero territory or competitor overlap.',
  },
  {
    feature: 'Budget Pre-Qualification',
    oldWay: 'Zero filter. You spend 4 hours visiting sites only to hear their budget is ₹2 Lakhs.',
    largerUp: 'Multi-step qualification quiz. Mandatory declared budget ≥ ₹15L–₹50L+.',
  },
  {
    feature: 'Consultation Intent',
    oldWay: 'Price-shoppers hunting for the cheapest quotation to bargain with their local carpenter.',
    largerUp: 'Pre-framed homeowners who respect your design aesthetics and contract terms.',
  },
  {
    feature: 'Time Required from Principal',
    oldWay: 'Chasing cold leads, typing quotes manually, and dealing with tire-kickers 15 hrs/wk.',
    largerUp: 'Zero prospecting. Qualified consultations appear directly on your calendar/WhatsApp.',
  },
  {
    feature: 'Pipeline Predictability',
    oldWay: 'Erratic feast-or-famine referral cycles. Zero control over next month’s revenue.',
    largerUp: 'Engineered pipeline. Dial ad spend up or down based on your site execution bandwidth.',
  },
  {
    feature: 'Brand Positioning',
    oldWay: 'Treated like a generic contractor or vendor competing on lowest square-foot rate.',
    largerUp: 'Positioned as an elite, high-craft architectural & interior design authority.',
  },
];

export default function ComparisonTable({ onOpenForm }) {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <span>The New Client Acquisition Vehicle</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Why traditional lead channels are bleeding your studio dry.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          The difference between being treated as a low-margin contractor vs. an elite design studio comes down to how your clients enter your world.
        </p>
      </div>

      {/* Comparison Grid in Mobbin Style */}
      <div className="border border-hairline rounded-3xl overflow-hidden bg-canvas">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: The Old Way */}
          <div className="p-6 sm:p-10 bg-canvas border-b md:border-b-0 md:border-r border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline-soft mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase text-muted tracking-wider">The Exhausting Reality</span>
                  <h3 className="text-xl font-bold text-ink mt-0.5">The Old Way</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-field flex items-center justify-center text-muted">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-muted font-light mb-8">
                Relying on Justdial scraps, Sulekha leads, random Instagram boost likes, or waiting for erratic client referrals.
              </p>

              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-field flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">{row.feature}</p>
                      <p className="text-sm text-ink/80 font-light leading-relaxed">{row.oldWay}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline-soft bg-canvas-soft/60 rounded-2xl p-4 text-xs text-muted">
              Result: 70% of design time wasted on unclosed quotes, severe margin compression, and unpredictable quarterly cashflow.
            </div>
          </div>

          {/* Right Column: The LargerUp Way (Highlighted Mobbin Style Surface) */}
          <div className="p-6 sm:p-10 bg-canvas-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-hairline-soft mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider">
                    <span>The Growth Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mt-0.5">The LargerUp System</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-muted font-light mb-8">
                A private, proprietary client acquisition engine installed directly inside your interior studio within 14 days.
              </p>

              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-ink text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink uppercase tracking-wider mb-0.5">{row.feature}</p>
                      <p className="text-sm text-ink font-normal leading-relaxed">{row.largerUp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline">
              <button
                onClick={onOpenForm}
                className="w-full bg-ink hover:bg-ink-soft text-white text-sm font-semibold py-3.5 px-6 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Upgrade Your Acquisition Engine</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

