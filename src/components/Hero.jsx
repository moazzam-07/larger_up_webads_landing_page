import React from 'react';
import { ArrowUpRight, Play, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export default function Hero({ onOpenForm, onOpenVideoModal }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Mobbin Badge-Popular (The single reserved Electric Blue accent) */}
      <div className="inline-flex items-center gap-2 bg-accent text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
        <Flame className="w-3.5 h-3.5 fill-white text-white" />
        <span>India Tier-1 Exclusivity • Max 3 Studios Per Metro</span>
      </div>

      {/* Main Bold Display Headline (Saans/Inter 650 weight, tight line-height 1.05, sentence case with period) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-ink tracking-tight leading-[1.08] max-w-4xl mb-6">
        Add ₹30L–₹1.5Cr in qualified interior projects every single month.
      </h1>

      {/* Subtitle (Airy 300 Light Weight, contrasting against heavy headline) */}
      <p className="text-lg sm:text-xl md:text-2xl text-muted font-light leading-relaxed max-w-3xl mb-10">
        Stop bidding against 8 low-ball contractors on Justdial or burning budget on Instagram boosts that attract college students. We install a private acquisition engine that books pre-vetted, affluent homeowners directly into your design calendar.
      </p>

      {/* Primary & Secondary Pill Action Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95"
        >
          <span>Claim Your City Slot</span>
          <ArrowUpRight className="w-5 h-5 text-white/80" />
        </button>

        <button
          onClick={() => onOpenVideoModal('system-overview')}
          className="w-full sm:w-auto bg-canvas hover:bg-canvas-soft text-ink border border-hairline text-base font-semibold px-7 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-field flex items-center justify-center">
            <Play className="w-3 h-3 text-ink fill-ink ml-0.5" />
          </div>
          <span>Watch 3-Min Mechanism</span>
        </button>
      </div>

      {/* Micro Trust & Metric Badges in Mobbin Style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl text-left">
        <div className="bg-canvas-soft rounded-2xl p-4 border border-hairline-soft">
          <p className="text-2xl sm:text-3xl font-bold text-ink">₹48.6 Cr+</p>
          <p className="text-xs text-muted font-medium mt-1">Verified Pipeline Added</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 border border-hairline-soft">
          <p className="text-2xl sm:text-3xl font-bold text-ink">₹38.5 Lakhs</p>
          <p className="text-xs text-muted font-medium mt-1">Avg Closed Project Size</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 border border-hairline-soft">
          <p className="text-2xl sm:text-3xl font-bold text-ink">100%</p>
          <p className="text-xs text-muted font-medium mt-1">Non-Shared Exclusive Leads</p>
        </div>
        <div className="bg-canvas-soft rounded-2xl p-4 border border-hairline-soft">
          <p className="text-2xl sm:text-3xl font-bold text-ink">14 Days</p>
          <p className="text-xs text-muted font-medium mt-1">To First Qualified Consults</p>
        </div>
      </div>
    </section>
  );
}

