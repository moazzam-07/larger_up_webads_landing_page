import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

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
          className={`w-full max-w-5xl bg-canvas-soft/95 backdrop-blur-md rounded-full px-3.5 py-2 sm:px-5 sm:py-3 flex items-center justify-between border border-hairline transition-all duration-300 ${
            scrolled ? 'shadow-sm' : ''
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-ink rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base squircle">
              <span>L</span>
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

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Real WhatsApp SVG Logo */}
            <a
              href="https://wa.me/919876543210?text=Hi%20LargerUp,%20I%20am%20an%20interior%20designer%20interested%20in%20client%20acquisition."
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-hairline hover:border-ink flex items-center justify-center text-ink transition-colors group"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-ink group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* CTA Button: "Free Consultation" */}
            <button
              onClick={onOpenForm}
              className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all inline-flex items-center gap-1 active:scale-95 whitespace-nowrap"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white border border-hairline flex items-center justify-center text-ink ml-0.5"
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
            className="absolute top-16 left-3 right-3 bg-canvas border border-hairline rounded-3xl p-5 shadow-2xl flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => handleNavClick('creations')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              Creations
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('comparison')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              Why LargerUp
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              Client Reviews
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-4 py-3 rounded-2xl hover:bg-canvas-soft text-sm font-medium text-ink transition-colors"
            >
              FAQ
            </button>
            <div className="pt-2 border-t border-hairline-soft mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full bg-ink text-white font-semibold py-3 px-4 rounded-full text-center text-sm"
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
