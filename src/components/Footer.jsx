import React from 'react';
import { ArrowUp, ArrowUpRight, Shield, MapPin } from 'lucide-react';

export default function Footer({ onOpenForm }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-white rounded-t-[28px] sm:rounded-t-[36px] pt-16 pb-12 px-6 sm:px-10 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Lockup: Display Wordmark & Brief Pitch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white text-ink font-bold text-lg flex items-center justify-center squircle">
                <span>L</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">LargerUp</span>
            </div>
            <p className="text-white/60 text-base max-w-md font-light leading-relaxed">
              The high-ticket client acquisition engine engineered exclusively for elite interior design studios & principal architects in India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="bg-white hover:bg-neutral-200 text-ink text-sm font-semibold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 active:scale-95"
            >
              <span>Apply For Territory</span>
              <ArrowUpRight className="w-4 h-4 text-ink" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Metros Presence & Navigation */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10 text-sm">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
              Active Tier-1 Hubs
            </p>
            <ul className="space-y-2 text-white/70 font-light">
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Mumbai (Worli, Bandra, Juhu)</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Delhi NCR (South Delhi, Gurugram)</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Bangalore (Indiranagar, Lavelle)</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Hyderabad (Jubilee Hills)</li>
              <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Pune (Koregaon Park)</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
              Framework & System
            </p>
            <ul className="space-y-2 text-white/70 font-light">
              <li><a href="#mechanism" className="hover:text-white transition-colors">Affluent Geofencing</a></li>
              <li><a href="#mechanism" className="hover:text-white transition-colors">Budget-Filter Quiz</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Hormozi ROI Math</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">3-Studio Case Studies</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
              Exclusivity Policy
            </p>
            <p className="text-white/60 text-xs font-light leading-relaxed">
              Strict limit of 3 studios per metropolitan jurisdiction. Once city quota is fulfilled, interested studios are placed on a waitlist pending quarterly review.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
              Contact & Support
            </p>
            <p className="text-white/80 font-medium">partners@largerup.com</p>
            <p className="text-white/50 text-xs mt-1">Direct escalation: Mumbai • Bengaluru</p>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-light gap-4">
          <p>© {new Date().getFullYear()} LargerUp Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/70 cursor-pointer">Confidentiality Protocol</span>
            <span className="hover:text-white/70 cursor-pointer">Territory Agreement</span>
            <span className="hover:text-white/70 cursor-pointer">Privacy Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

