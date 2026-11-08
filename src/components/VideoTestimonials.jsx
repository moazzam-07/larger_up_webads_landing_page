import React, { useState } from 'react';
import { Play, ArrowUpRight, X } from 'lucide-react';

export const videoCaseStudies = [
  {
    id: 'luxihome',
    studio: 'Luxihome',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    duration: '01:38',
    videoUrl: '/videos/luxihome.mp4',
    poster: '/videos/luxihome-poster.jpg',
    fullQuote: 'LargerUp transformed our client acquisition in Kolkata. We stopped chasing portal leads and started closing high-ticket turnkey projects directly.',
    thumbnailBg: 'from-zinc-950 via-zinc-900 to-neutral-900',
  },
  {
    id: 'the-alam-interior',
    studio: 'The Alam Interior',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    duration: '02:12',
    videoUrl: '/videos/the-alam-interior.mp4',
    poster: '/videos/the-alam-interior-poster.jpg',
    fullQuote: 'With LargerUp, every inquiry is exclusive to our studio. Clients already respect our design value and budget expectations before the first call.',
    thumbnailBg: 'from-neutral-950 via-stone-900 to-zinc-900',
  },
  {
    id: 'deco-perfect',
    studio: 'Deco Perfect',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    duration: '01:42',
    videoUrl: '/videos/deco-perfect.mp4',
    poster: '/videos/deco-perfect-poster.jpg',
    fullQuote: 'Consistent, qualified homeowner inquiries every month. LargerUp eliminated the dry spells and gave our studio complete pipeline predictability.',
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

      {/* 3 Vertical 9:16 Video Cards
          Mobile Layout: Triangle formation (Luxihome centered on top, The Alam Interior & Deco Perfect below it side-by-side)
          Desktop Layout: Balanced 3-column row
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto items-start">
        {videoCaseStudies.map((item, idx) => {
          const isPlayingInline = playingId === item.id;
          const isFirst = idx === 0;

          return (
            <div
              key={item.id}
              className={`${
                isFirst
                  ? 'col-span-2 md:col-span-1 flex justify-center w-full'
                  : 'col-span-1 w-full'
              }`}
            >
              <div
                className={`relative aspect-[9/16] bg-black border border-hairline hover:border-ink rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                  isFirst
                    ? 'w-[calc(50%-7px)] sm:w-[calc(50%-12px)] md:w-full'
                    : 'w-full'
                }`}
              >
                {/* Mobile Inline Video (Only triggers on < 768px) */}
                {isPlayingInline ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={item.videoUrl}
                      poster={item.poster}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                      onEnded={() => setPlayingId(null)}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingId(null);
                      }}
                      className="absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 border border-white/20 shadow-md"
                      title="Close video"
                      aria-label="Close video"
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => handleCardClick(item)}
                    className="group w-full h-full cursor-pointer active:scale-[0.99] flex flex-col justify-between p-3.5 sm:p-5 relative select-none"
                  >
                    {/* Real Video Frame Poster */}
                    <img
                      src={item.poster}
                      alt={item.studio}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35 pointer-events-none" />

                    {/* Top Duration Pill */}
                    <div className="relative z-10 self-end">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-white/90 border border-white/10">
                        {item.duration}
                      </span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="relative z-10 self-center my-auto">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform backdrop-blur-sm">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-ink text-ink ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Overlay with Studio Name & Location */}
                    <div className="relative z-10 text-left w-full">
                      <p className="text-[10px] sm:text-xs text-white/70 font-medium leading-none mb-1">
                        {item.location}
                      </p>
                      <h3 className="text-white text-xs sm:text-base font-bold tracking-tight leading-snug line-clamp-1 drop-shadow-sm">
                        {item.studio}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
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
