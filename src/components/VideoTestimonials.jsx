import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X, ArrowUpRight } from 'lucide-react';

export const videoCaseStudies = [
  {
    id: 'luxihome',
    studio: 'Luxihome',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    videoUrl: '/videos/luxihome.mp4',
    poster: '/videos/luxihome-poster.jpg',
    fullQuote: 'LargerUp transformed our client acquisition in Kolkata. We stopped chasing portal leads and started closing high-ticket turnkey projects directly.',
  },
  {
    id: 'the-alam-interior',
    studio: 'The Alam Interior',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    videoUrl: '/videos/the-alam-interior.mp4',
    poster: '/videos/the-alam-interior-poster.jpg',
    fullQuote: 'With LargerUp, every inquiry is exclusive to our studio. Clients already respect our design value and budget expectations before the first call.',
  },
  {
    id: 'deco-perfect',
    studio: 'Deco Perfect',
    speaker: 'Interior Studio',
    location: 'Kolkata',
    videoUrl: '/videos/deco-perfect.mp4',
    poster: '/videos/deco-perfect-poster.jpg',
    fullQuote: 'Consistent, qualified homeowner inquiries every month. LargerUp eliminated the dry spells and gave our studio complete pipeline predictability.',
  },
];

function VideoCard({ item, isFirst, activeVideoId, onPlay, onStop }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const isActive = activeVideoId === item.id;

  // Stop video and reset if another card becomes active
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  }, [isActive]);

  const handleStartPlay = () => {
    onPlay(item.id);
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback for strict browser autoplay policies
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          });
        }
      });
    }
  };

  const handleTogglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    onStop();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    onStop();
  };

  return (
    <div
      className={`${
        isFirst
          ? 'col-span-2 md:col-span-1 flex justify-center w-full'
          : 'col-span-1 w-full'
      }`}
    >
      <div
        className={`relative aspect-[9/16] bg-black border border-hairline hover:border-ink/40 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl group select-none ${
          isFirst
            ? 'w-[calc(50%-7px)] sm:w-[calc(50%-12px)] md:w-full'
            : 'w-full'
        }`}
      >
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.poster}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onClick={isActive ? handleTogglePlayPause : handleStartPlay}
          className={`w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
            isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
          }`}
        />

        {/* Cover / Poster State (Shown when not playing) */}
        {!isActive && (
          <div
            onClick={handleStartPlay}
            className="absolute inset-0 cursor-pointer flex flex-col justify-between p-3.5 sm:p-5 z-10"
          >
            {/* Real Video Frame Poster */}
            <img
              src={item.poster}
              alt={item.studio}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Clean top space - timers removed as requested */}
            <div className="relative z-10 h-4" />

            {/* Center Premium Glassmorphic Play Button */}
            <div className="relative z-10 self-center my-auto">
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full backdrop-blur-xl bg-white/25 hover:bg-white/35 border border-white/40 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.37)] group-hover:scale-110 active:scale-95 transition-all duration-300">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 drop-shadow" />
              </div>
            </div>

            {/* Bottom Studio Info */}
            <div className="relative z-10 text-left w-full">
              <p className="text-[10px] sm:text-xs text-white/75 font-medium leading-none mb-1 drop-shadow-sm">
                {item.location}
              </p>
              <h3 className="text-white text-xs sm:text-base font-bold tracking-tight leading-snug line-clamp-1 drop-shadow-sm">
                {item.studio}
              </h3>
            </div>
          </div>
        )}

        {/* Active Playing Custom Glassmorphic Controls */}
        {isActive && (
          <div
            onClick={handleTogglePlayPause}
            className="absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-4 cursor-pointer"
          >
            {/* Top Control Bar: Mute Toggle & Close Button */}
            <div className="flex items-center justify-between w-full relative z-30">
              <button
                onClick={handleToggleMute}
                className="w-8 h-8 rounded-full backdrop-blur-xl bg-black/45 hover:bg-black/65 border border-white/25 text-white flex items-center justify-center transition-all active:scale-90 shadow-md"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full backdrop-blur-xl bg-black/45 hover:bg-black/65 border border-white/25 text-white flex items-center justify-center transition-all active:scale-90 shadow-md"
                title="Close video"
                aria-label="Close video"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Center Premium Glassmorphic Play/Pause Button (Shows on hover or when paused) */}
            <div
              className={`self-center my-auto transition-all duration-300 ${
                isPlaying
                  ? 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none'
                  : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full backdrop-blur-xl bg-white/25 hover:bg-white/35 border border-white/40 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform">
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white drop-shadow" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 drop-shadow" />
                )}
              </div>
            </div>

            {/* Bottom Progress Bar & Subtle Info */}
            <div className="relative z-30 w-full pt-2">
              <div className="flex items-center justify-between text-white/90 text-[10px] sm:text-xs mb-1.5 font-medium px-0.5 drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{item.studio}</span>
                <span>{item.location}</span>
              </div>
              {/* Minimal Progress Line */}
              <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden backdrop-blur-xs">
                <div
                  className="h-full bg-white transition-[width] duration-150 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoTestimonials({ onOpenForm }) {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handlePlay = (id) => {
    setActiveVideoId(id);
  };

  const handleStop = () => {
    setActiveVideoId(null);
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
          Playback: Direct inline playback with premium glassmorphic controls on all devices
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto items-start">
        {videoCaseStudies.map((item, idx) => (
          <VideoCard
            key={item.id}
            item={item}
            isFirst={idx === 0}
            activeVideoId={activeVideoId}
            onPlay={handlePlay}
            onStop={handleStop}
          />
        ))}
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
