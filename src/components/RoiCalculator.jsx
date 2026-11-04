import React, { useState } from 'react';
import { Calculator, ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onOpenForm }) {
  // Average project value in Lakhs (default 35L)
  const [ticketSizeLakhs, setTicketSizeLakhs] = useState(35);
  // Target clients per quarter (default 3)
  const [clientsPerQuarter, setClientsPerQuarter] = useState(3);

  // Calculations
  const quarterlyRevenue = ticketSizeLakhs * clientsPerQuarter; // in Lakhs
  const monthlyPipeline = Math.round((quarterlyRevenue / 3) * 10) / 10;
  const estimatedQuarterlyAdSpendLakhs = 1.05; // ~35,000 INR/month = 1.05L for 3 months
  const estimatedRoiMultiple = Math.round((quarterlyRevenue / estimatedQuarterlyAdSpendLakhs) * 10) / 10;

  // Format INR nicely
  const formatLakhs = (val) => {
    if (val >= 100) {
      return `₹${(val / 100).toFixed(2)} Cr`;
    }
    return `₹${val} Lakhs`;
  };

  return (
    <section id="calculator" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Unit Economics</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Calculate your studio's projected pipeline.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          See the mathematical upside when you transition from passive word-of-mouth to a high-converting client acquisition engine.
        </p>
      </div>

      <div className="bg-canvas border border-hairline rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sliders Input Column */}
          <div className="space-y-8">
            {/* Slider 1: Average Project Ticket */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-ink">
                  Average Project Contract Size
                </label>
                <span className="text-base font-bold text-ink bg-canvas-soft px-3 py-1 rounded-full border border-hairline">
                  {formatLakhs(ticketSizeLakhs)}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                step="5"
                value={ticketSizeLakhs}
                onChange={(e) => setTicketSizeLakhs(Number(e.target.value))}
                className="w-full h-2 bg-field rounded-lg appearance-none cursor-pointer accent-ink"
              />
              <div className="flex justify-between text-[11px] text-muted mt-1.5 font-medium">
                <span>₹15 Lakhs (3BHK Standard)</span>
                <span>₹1.5 Crore (Bespoke Villa)</span>
              </div>
            </div>

            {/* Slider 2: Target Clients per Quarter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-ink">
                  Target New High-Ticket Clients / Quarter
                </label>
                <span className="text-base font-bold text-ink bg-canvas-soft px-3 py-1 rounded-full border border-hairline">
                  {clientsPerQuarter} Projects
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={clientsPerQuarter}
                onChange={(e) => setClientsPerQuarter(Number(e.target.value))}
                className="w-full h-2 bg-field rounded-lg appearance-none cursor-pointer accent-ink"
              />
              <div className="flex justify-between text-[11px] text-muted mt-1.5 font-medium">
                <span>1 Project / Qtr</span>
                <span>8 Projects / Qtr (Capacity Limit)</span>
              </div>
            </div>

            <div className="bg-canvas-soft rounded-2xl p-4 text-xs text-muted leading-relaxed border border-hairline-soft">
              *Assumes our standard Tier-1 conversion metric: ~18 qualified consultations booked per month, yielding 1 to 2 closed contracts per 30-day cohort.
            </div>
          </div>

          {/* Output Card in Mobbin Highlight Surface */}
          <div className="bg-canvas-soft border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="text-xs font-semibold uppercase text-muted tracking-wider">
                  Quarterly Pipeline Added
                </span>
                <span className="text-[11px] font-bold text-accent bg-white px-2 py-0.5 rounded-full border border-hairline">
                  Estimated {estimatedRoiMultiple}x Return
                </span>
              </div>

              <div className="mt-4">
                <p className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
                  {formatLakhs(quarterlyRevenue)}
                </p>
                <p className="text-xs text-muted mt-1 font-medium">
                  Equivalent to ~{formatLakhs(monthlyPipeline)} / month in gross booked contracts
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-hairline-soft">
                <div>
                  <p className="text-[11px] text-muted uppercase font-semibold">Estimated Ad Spend</p>
                  <p className="text-base font-bold text-ink mt-0.5">~₹35,000 / mo</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted uppercase font-semibold">Payback Point</p>
                  <p className="text-base font-bold text-ink mt-0.5">1st Closed Deal</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenForm}
              className="w-full bg-ink hover:bg-ink-soft text-white text-sm font-semibold py-3.5 px-6 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-sm"
            >
              <span>Build This Pipeline For Your Studio</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

