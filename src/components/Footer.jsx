import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenForm }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-white rounded-t-[28px] sm:rounded-t-[36px] pt-14 pb-12 px-6 sm:px-10 mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-white text-ink font-bold text-base flex items-center justify-center squircle">
                <span>L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">LargerUp</span>
            </div>
            <p className="text-white/60 text-sm max-w-sm font-light leading-relaxed">
              Client acquisition systems built specifically for interior design studios and architects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="bg-white hover:bg-neutral-200 text-ink text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-1.5 active:scale-95"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-ink" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links & Inquiries */}
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 text-xs text-white/60 font-light">
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#comparison" className="hover:text-white transition-colors">Why Us</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div>
            <span>Email inquiries: </span>
            <a href="mailto:partners@largerup.com" className="text-white hover:underline font-medium">
              partners@largerup.com
            </a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-light gap-3">
          <p>© {new Date().getFullYear()} LargerUp Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white/60 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white/60 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
