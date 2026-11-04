import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CityMarquee from './components/CityMarquee';
import VideoTestimonials, { videoCaseStudies } from './components/VideoTestimonials';
import ComparisonTable from './components/ComparisonTable';
import SystemMechanism from './components/SystemMechanism';
import RoiCalculator from './components/RoiCalculator';
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
      el.scrollIntoView({ behavior: 'smooth' });
      // Add subtle temporary ring effect to highlight the form
      const formBox = el.querySelector('form');
      if (formBox) {
        formBox.classList.add('ring-2', 'ring-ink');
        setTimeout(() => {
          formBox.classList.remove('ring-2', 'ring-ink');
        }, 1200);
      }
    }
  };

  const handleOpenVideoModal = (videoId) => {
    if (videoId === 'system-overview') {
      // Default to the first case study or system overview
      setSelectedVideo(videoCaseStudies[0]);
    } else {
      const found = videoCaseStudies.find((v) => v.id === videoId);
      if (found) setSelectedVideo(found);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-ink selection:text-white">
      {/* Floating Stadium Navigation Pill */}
      <Navbar onOpenForm={handleOpenForm} />

      {/* Main Content Layout */}
      <main className="flex-1 w-full">
        {/* High Converting Hero Section */}
        <Hero
          onOpenForm={handleOpenForm}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* Tier-1 Developments & Pincodes Marquee */}
        <CityMarquee />

        {/* The 3 Video Placeholders & Case Studies */}
        <VideoTestimonials
          onSelectVideo={(video) => setSelectedVideo(video)}
          onOpenForm={handleOpenForm}
        />

        {/* Hormozi Contrast: Old Way vs LargerUp Acquisition Engine */}
        <ComparisonTable onOpenForm={handleOpenForm} />

        {/* The 3-Step Proprietary Mechanism */}
        <SystemMechanism onOpenForm={handleOpenForm} />

        {/* Interactive Hormozi ROI Math & Pipeline Calculator */}
        <RoiCalculator onOpenForm={handleOpenForm} />

        {/* Verified Studio Proof & Reviews */}
        <ReviewGrid />

        {/* Lead Capture Form (Positioned strictly right before Q&A as requested) */}
        <LeadCaptureForm />

        {/* Top 5 Critical Interior Designer FAQs */}
        <FaqSection />
      </main>

      {/* Polarity-Inverted Minimalist Mobbin Footer */}
      <Footer onOpenForm={handleOpenForm} />

      {/* Interactive Video Breakdown Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        videoData={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onOpenForm={handleOpenForm}
      />
    </div>
  );
}

