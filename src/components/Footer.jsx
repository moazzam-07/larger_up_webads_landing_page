import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import LargerUpLogo from './LargerUpLogo';

export default function Footer({ onOpenForm }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-white rounded-t-[24px] sm:rounded-t-[36px] pt-10 sm:pt-14 pb-10 sm:pb-12 px-5 sm:px-10 mt-8 sm:mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white text-ink flex items-center justify-center p-1.5 squircle shadow-sm">
                <LargerUpLogo className="w-full h-full text-ink" />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">LargerUp</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onOpenForm}
              className="flex-1 sm:flex-none bg-white hover:bg-neutral-200 text-ink text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all inline-flex items-center justify-center gap-1.5 active:scale-95 text-center"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors shrink-0"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links & Inquiries */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 text-xs text-white/60 font-light">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#creations" className="hover:text-white transition-colors">Creations</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#comparison" className="hover:text-white transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div>
            <span>Email inquiries: </span>
            <a href="mailto:thelargerup@gmail.com" className="text-white hover:underline font-medium">
              thelargerup@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/40 font-light gap-2.5">
          <p>© {new Date().getFullYear()} LargerUp. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="hover:text-white/60 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white/60 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
