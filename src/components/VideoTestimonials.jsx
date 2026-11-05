import React, { useState } from 'react';
import { Play, ArrowUpRight, X } from 'lucide-react';

export const videoCaseStudies = [
  {
    id: 'studio-veda',
    studio: 'Studio Veda Interiors',
    speaker: 'Ar. Varun & Shreya Mukherjee',
    location: 'Alipore & Ballygunge, Kolkata',
    duration: '02:15',
    videoUrl: '/videos/case-study-1.mp4',
    fullQuote: 'Before LargerUp, our studio was entirely reliant on unpredictable word-of-mouth. With LargerUp, we closed 3 major turnkey residential mandates in South Kolkata within 60 days. Every client was already familiar with our design language.',
    thumbnailBg: 'from-zinc-950 via-zinc-900 to-neutral-900',
  },
  {
    id: 'atelier-muse',
    studio: 'Atelier Muse Design',
    speaker: 'Rhea Sengupta, Principal Architect',
    location: 'Salt Lake & New Town, Kolkata',
    duration: '02:45',
    videoUrl: '/videos/case-study-2.mp4',
    fullQuote: 'In Kolkata, many homeowners look for cheap local carpenters unless you position yourself properly. LargerUp created an acquisition system that brings us serious apartment and villa owners in New Town and Salt Lake who value premium architectural finish.',
    thumbnailBg: 'from-neutral-950 via-stone-900 to-zinc-900',
  },
  {
    id: 'designbox',
    studio: 'DesignBox Spaces',
    speaker: 'Kunal Sen, Managing Partner',
    location: 'Park Street, Kolkata',
    duration: '01:50',
    videoUrl: '/videos/case-study-3.mp4',
    fullQuote: 'We were skeptical about running online ads because we did not want cheap inquiries. LargerUp built a curated system that preserves our studio brand while delivering pre-screened homeowners directly to our discovery meetings.',
    thumbnailBg: 'from-zinc-900 via-neutral-900 to-zinc-950',
  },
];

export default function VideoTestimonials({ onSelectVideo, onOpenForm }) {
  // Mobile inline video playback state
  const [playingId, setPlayingId] = useState(null);

  const handleCardClick = (item) => {
    // Desktop/Laptop: Open minimal Mobbin modal.
    // Mobile (< 768px): Direct inline playback inside the card.
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      if (onSelectVideo) onSelectVideo(item);
    } else {
      setPlayingId((prev) => (prev === item.id ? null : item.id));
    }
  };

  return (
    <section id="case-studies" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          How interior studios scale their client pipeline.
        </h2>
      </div>

      {/* 3 Full-Thumbnail Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
        {videoCaseStudies.map((item) => {
          const isPlayingInline = playingId === item.id;

          return (
            <div
              key={item.id}
              className="relative aspect-[16/11] bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Mobile Inline Video (Only triggers on < 768px) */}
              {isPlayingInline ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={item.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover rounded-3xl"
                    onEnded={() => setPlayingId(null)}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingId(null);
                    }}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 border border-white/20"
                    title="Close video"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => handleCardClick(item)}
                  className="group w-full h-full cursor-pointer active:scale-[0.99] flex flex-col justify-between p-5 relative select-none"
                >
                  {/* Background Gradient & Dark Atmosphere */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.thumbnailBg} transition-transform duration-500 group-hover:scale-105`} />
                  
                  {/* Subtle Grid Accent Pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Center Play Button Overlay */}
                  <div className="relative z-10 self-center my-auto">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-ink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-ink text-ink ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Overlay with Studio Name */}
                  <div className="relative z-10 text-left pt-2">
                    <h3 className="text-white text-base sm:text-lg font-bold tracking-tight leading-snug">
                      {item.studio}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Soft, High-Converting Pitch Banner */}
      <div className="bg-canvas-soft border border-hairline rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base sm:text-xl font-bold text-ink">
            Want to grow your interior business?
          </h4>
          <p className="text-xs sm:text-sm text-muted font-light mt-0.5">
            Let's discuss how a dedicated client acquisition funnel can scale your studio.
          </p>
        </div>
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shrink-0 active:scale-95 inline-flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-4 h-4 text-white/80" />
        </button>
      </div>
    </section>
  );
}
