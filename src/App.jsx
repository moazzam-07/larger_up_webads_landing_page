import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoTestimonials, { videoCaseStudies } from './components/VideoTestimonials';
import ComparisonTable from './components/ComparisonTable';
import SystemMechanism from './components/SystemMechanism';
import ReviewGrid from './components/ReviewGrid';
import LeadCaptureForm from './components/LeadCaptureForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenForm = () => {
    const el = document.getElementById('apply-form');
    if (el) {
      // Calculate offset to account for floating navbar
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

        {/* 3 Clean Video Case Study Placeholders */}
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

      {/* Floating WhatsApp Action Pill (Mobile Optimized) */}
      <a
        href="https://wa.me/919876543210?text=Hi%20LargerUp,%20I%20am%20an%20interior%20designer%20interested%20in%20client%20acquisition."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-ink hover:bg-ink-soft text-white text-xs font-semibold px-3 py-3 sm:px-4 sm:py-3 rounded-full border border-white/10 shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        title="Chat with LargerUp on WhatsApp"
        aria-label="Chat with LargerUp on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-white shrink-0" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
