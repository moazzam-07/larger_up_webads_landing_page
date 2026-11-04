import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenForm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center text-white font-bold text-base squircle group-hover:scale-105 transition-transform">
            <span>L</span>
          </div>
          <span className="font-semibold text-ink text-lg tracking-tight">LargerUp</span>
        </a>

        {/* Navigation Anchors */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
          <a href="#case-studies" className="hover:text-muted transition-colors">
            Case Studies
          </a>
          <a href="#how-it-works" className="hover:text-muted transition-colors">
            How It Works
          </a>
          <a href="#comparison" className="hover:text-muted transition-colors">
            Why Us
          </a>
          <a href="#reviews" className="hover:text-muted transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-muted transition-colors">
            FAQ
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick WhatsApp Link */}
          <a
            href="https://wa.me/919876543210?text=Hi%20LargerUp,%20I%20am%20an%20interior%20designer%20interested%20in%20client%20acquisition."
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white border border-hairline hover:border-ink flex items-center justify-center text-ink transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-ink" />
          </a>

          {/* Single Primary Action Button */}
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-1.5 active:scale-95"
          >
            <span>Book Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
          </button>
        </div>
      </nav>
    </header>
  );
}
