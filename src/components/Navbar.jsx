import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenForm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl bg-canvas-soft/95 backdrop-blur-md rounded-full px-5 py-3 flex items-center justify-between border border-hairline transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* Brand Logo & Squircle Icon */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center text-white font-bold text-base squircle group-hover:scale-105 transition-transform">
            <span>L</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-semibold text-ink text-lg tracking-tight">LargerUp</span>
            <span className="text-[10px] uppercase font-semibold text-muted bg-white px-2 py-0.5 rounded-full border border-hairline hidden sm:inline-block">
              Tier-1 Interiors
            </span>
          </div>
        </a>

        {/* Navigation Anchors (Mobbin style links) */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
          <a href="#proof" className="hover:text-muted transition-colors">
            Case Studies
          </a>
          <a href="#mechanism" className="hover:text-muted transition-colors">
            Mechanism
          </a>
          <a href="#calculator" className="hover:text-muted transition-colors">
            ROI Math
          </a>
          <a href="#faq" className="hover:text-muted transition-colors">
            FAQ
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-1.5 active:scale-95"
          >
            <span>Claim City Slot</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </button>
        </div>
      </nav>
    </header>
  );
}

