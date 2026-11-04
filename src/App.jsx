import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioCreations from './components/PortfolioCreations';
import VideoTestimonials from './components/VideoTestimonials';
import ComparisonTable from './components/ComparisonTable';
import SystemMechanism from './components/SystemMechanism';
import ReviewGrid from './components/ReviewGrid';
import LeadCaptureForm from './components/LeadCaptureForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenForm = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      const formBox = el.querySelector('form');
      if (formBox) {
        formBox.classList.add('ring-2', 'ring-ink');
        setTimeout(() => {
          formBox.classList.remove('ring-2', 'ring-ink');
        }, 1200);
      }
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-ink selection:text-white relative overflow-x-hidden w-full">
      {/* Floating Stadium Navigation Pill */}
      <Navbar onOpenForm={handleOpenForm} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Clean, High-Converting Hero Section */}
        <Hero onOpenForm={handleOpenForm} />

        {/* Brand New: Creations / Built Websites Portfolio */}
        <PortfolioCreations onOpenForm={handleOpenForm} />

        {/* 3 Clean Video Case Study Full-Overlay Cards */}
        <VideoTestimonials
          onSelectVideo={(video) => setSelectedVideo(video)}
          onOpenForm={handleOpenForm}
        />

        {/* The Old Way vs The LargerUp Way */}
        <ComparisonTable onOpenForm={handleOpenForm} />

        {/* 3-Step Simple Mechanism */}
        <SystemMechanism />

        {/* Authentic Studio Reviews */}
        <ReviewGrid />

        {/* Lead Capture Form */}
        <LeadCaptureForm />

        {/* Top 5 Essential Interior Designer FAQs */}
        <FaqSection />
      </main>

      {/* Minimalist Inverted Footer */}
      <Footer onOpenForm={handleOpenForm} />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={!!selectedVideo}
        videoData={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onOpenForm={handleOpenForm}
      />

      {/* Floating WhatsApp Action Pill (Mobile Optimized with Official SVG) */}
      <a
        href="https://wa.me/919876543210?text=Hi%20LargerUp,%20I%20am%20an%20interior%20designer%20interested%20in%20client%20acquisition."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-ink hover:bg-ink-soft text-white text-xs font-semibold px-3 py-3 sm:px-4 sm:py-3 rounded-full border border-white/10 shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        title="Chat with LargerUp on WhatsApp"
        aria-label="Chat with LargerUp on WhatsApp"
      >
        <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
