import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LargerUpLogo from './LargerUpLogo';

export default function Navbar({ onOpenForm }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-2.5 sm:pt-4 transition-all duration-300">
        <nav
          className={`w-full max-w-5xl bg-canvas-soft/95 backdrop-blur-md rounded-full px-3.5 py-2 sm:px-5 sm:py-3 flex items-center justify-between border border-hairline transition-all duration-300 animate-blur-in delay-75 ${
            scrolled ? 'shadow-sm' : ''
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink rounded-xl flex items-center justify-center text-white p-1.5 transition-transform group-hover:scale-105 squircle shadow-sm">
              <LargerUpLogo className="w-full h-full text-white" />
            </div>
            <span className="font-semibold text-ink text-base sm:text-lg tracking-tight">LargerUp</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
            <a href="#creations" className="hover:text-muted transition-colors">
              Creations
            </a>
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

          {/* Actions - CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* CTA Button: "Free Consultation" - Hidden on mobile, visible on desktop */}
            <button
              onClick={onOpenForm}
              className="hidden md:inline-flex bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all items-center gap-1 active:scale-95 whitespace-nowrap shadow-sm"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </button>

            {/* Mobile Hamburger Toggle (only on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white border border-hairline flex items-center justify-center text-ink active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-3 right-3 bg-canvas border border-hairline rounded-3xl p-5 shadow-2xl flex flex-col gap-2 animate-mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => handleNavClick('creations')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-1"
            >
              Creations
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-2"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-3"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('comparison')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-4"
            >
              Why LargerUp
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-5"
            >
              Client Reviews
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors animate-mobile-item delay-item-6"
            >
              FAQ
            </button>
            <div className="pt-2 border-t border-hairline-soft mt-1 animate-mobile-item delay-item-7">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full bg-ink text-white font-semibold py-3 px-4 rounded-full text-center text-sm shadow-sm active:scale-95 transition-transform"
              >
                Free Consultation ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
