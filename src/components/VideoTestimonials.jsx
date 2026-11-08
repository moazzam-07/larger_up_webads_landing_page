import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight } from 'lucide-react';

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

function VideoCard({ item, isFirst, activeVideoId, onPlay, onStop, onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimeoutRef = useRef(null);

  const isActive = activeVideoId === item.id;

  // Stop video and reset if another card becomes active
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
      setControlsVisible(true);
    }
  }, [isActive]);

  const triggerControlsVisibility = () => {
    setControlsVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setControlsVisible(false);
      }
    }, 2200);
  };

  const handleStartPlay = () => {
    onPlay(item.id);
    setIsPlaying(true);
    triggerControlsVisibility();
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback for strict browser autoplay policies
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          }
        });
      }
    }
  };

  const handleTogglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      triggerControlsVisibility();
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setControlsVisible(true);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    triggerControlsVisibility();
  };

  const handleTimeUpdate = () => {
    if (!isSeeking && videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const handleScrubberChange = (e) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (val / 100) * videoRef.current.duration;
    }
    triggerControlsVisibility();
  };

  const handleOpenFullscreenModal = (e) => {
    e.stopPropagation();
    const curTime = videoRef.current ? videoRef.current.currentTime : 0;
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    onOpenModal(item, curTime, isMuted);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setControlsVisible(true);
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
          preload="auto"
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

            {/* Clean top space */}
            <div className="relative z-10 h-4" />

            {/* Center Premium Glassmorphic Play Button (Refined for Mobile & PC) */}
            <div className="relative z-10 self-center my-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-2xl bg-black/45 hover:bg-black/60 border border-white/40 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:scale-110 active:scale-95 transition-all duration-300">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
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
            onMouseMove={triggerControlsVisibility}
            className="absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-4 cursor-pointer"
          >
            {/* Top Control Bar: Mute Toggle (Left) & Full Screen Button (Right - Replaced Cross Button) */}
            <div
              className={`flex items-center justify-between w-full relative z-30 transition-opacity duration-300 ${
                controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <button
                onClick={handleToggleMute}
                className="w-8 h-8 rounded-full backdrop-blur-xl bg-black/50 hover:bg-black/75 border border-white/25 text-white flex items-center justify-center transition-all active:scale-90 shadow-md"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>

              {/* Fullscreen Button replacing Cross Button */}
              <button
                onClick={handleOpenFullscreenModal}
                className="w-8 h-8 rounded-full backdrop-blur-xl bg-black/50 hover:bg-black/75 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-90 shadow-md"
                title="Open fullscreen player"
                aria-label="Open fullscreen player"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Center Premium Glassmorphic Play/Pause Button (Shows on pause or tap/hover, fades out while playing) */}
            <div
              onClick={handleTogglePlayPause}
              className={`self-center my-auto transition-all duration-300 ${
                !isPlaying || controlsVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-2xl bg-black/45 hover:bg-black/60 border border-white/40 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-transform hover:scale-110 active:scale-95">
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                )}
              </div>
            </div>

            {/* Bottom Floating Area: Interactive Timeline Scrubber (Pulling filler seeks video - No timers) */}
            <div
              className={`relative z-30 w-full pt-2 transition-opacity duration-300 ${
                controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between text-white/90 text-[10px] sm:text-xs mb-1 font-medium px-0.5 drop-shadow-sm">
                <span>{item.studio}</span>
                <span>{item.location}</span>
              </div>

              {/* Interactive Scrubber Container */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full py-2 flex items-center group/scrubber cursor-pointer"
              >
                {/* Visual Track */}
                <div className="w-full h-1 group-hover/scrubber:h-1.5 bg-white/25 rounded-full overflow-hidden backdrop-blur-xs transition-all">
                  <div
                    className="h-full bg-white rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Glowing Thumb that follows progress */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] pointer-events-none transition-all duration-75"
                  style={{ left: `${progress}%` }}
                />

                {/* Range Input for Smooth Dragging & Seeking on Touch + Mouse */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onMouseDown={() => setIsSeeking(true)}
                  onMouseUp={() => setIsSeeking(false)}
                  onTouchStart={() => setIsSeeking(true)}
                  onTouchEnd={() => setIsSeeking(false)}
                  onChange={handleScrubberChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  aria-label="Seek timeline"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoTestimonials({ onOpenModal, onOpenForm }) {
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
          Controls: Direct inline playback with interactive scrubber and fullscreen modal trigger
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
            onOpenModal={onOpenModal}
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
