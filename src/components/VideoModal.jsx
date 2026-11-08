import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

export default function VideoModal({
  isOpen,
  videoData,
  initialTime = 0,
  initialMuted = false,
  onClose,
  onOpenForm,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimeoutRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Sync initial playback time and auto-play on open
  useEffect(() => {
    if (isOpen && videoRef.current) {
      if (initialTime > 0) {
        videoRef.current.currentTime = initialTime;
      }
      videoRef.current.muted = initialMuted;
      setIsMuted(initialMuted);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback for autoplay policy
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        }
      });
      triggerControlsVisibility();
    }
  }, [isOpen, videoData, initialTime, initialMuted]);

  const triggerControlsVisibility = () => {
    setControlsVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setControlsVisible(false);
      }
    }, 2400);
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
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (val / 100) * videoRef.current.duration;
    }
    triggerControlsVisibility();
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    setControlsVisible(true);
  };

  if (!isOpen || !videoData) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn"
    >
      {/* Intentionally Minimal & Glassmorphic Modal Frame */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          triggerControlsVisibility();
        }}
        onMouseMove={triggerControlsVisibility}
        className="relative max-w-[360px] sm:max-w-[400px] w-full aspect-[9/16] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/20 bg-black/75 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex flex-col justify-between group select-none animate-scaleUp"
      >
        {/* Full 9:16 Video Canvas */}
        <video
          ref={videoRef}
          src={videoData.videoUrl}
          poster={videoData.poster}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onClick={handleTogglePlayPause}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        />

        {/* Top Floating Glassmorphic Header */}
        <div
          className={`relative z-30 p-3.5 sm:p-4.5 flex items-center justify-between transition-opacity duration-300 ${
            controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Studio Tag Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl bg-black/50 border border-white/20 text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/95">
              {videoData.studio} • {videoData.location}
            </span>
          </div>

          {/* Minimal Glass Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full backdrop-blur-xl bg-black/50 hover:bg-black/75 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Center Premium Glassmorphic Play/Pause Button */}
        <div
          onClick={handleTogglePlayPause}
          className={`relative z-20 self-center my-auto cursor-pointer transition-all duration-300 ${
            !isPlaying || controlsVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full backdrop-blur-2xl bg-black/40 hover:bg-black/55 border border-white/40 text-white flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all hover:scale-110 active:scale-95">
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            ) : (
              <Play className="w-6 h-6 fill-white text-white translate-x-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            )}
          </div>
        </div>

        {/* Bottom Floating Glassmorphic Control Bar */}
        <div
          className={`relative z-30 p-3.5 sm:p-5 flex flex-col gap-3 transition-opacity duration-300 bg-gradient-to-t from-black/85 via-black/40 to-transparent ${
            controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Interactive Timeline Scrubber (Pulling filler seeks video - No timers) */}
          <div className="relative w-full py-2 flex items-center group/scrubber cursor-pointer">
            {/* Visual Background Track */}
            <div className="w-full h-1 group-hover/scrubber:h-1.5 bg-white/25 rounded-full overflow-hidden backdrop-blur-xs transition-all">
              <div
                className="h-full bg-white rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Glowing Scrubber Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none transition-all duration-75"
              style={{ left: `${progress}%` }}
            />

            {/* Invisible Range Input for Smooth Dragging on Touch and Mouse */}
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
              aria-label="Video timeline scrubber"
            />
          </div>

          {/* Bottom Actions: Mute Toggle + Book Consultation Pill */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleToggleMute}
              className="w-8 h-8 rounded-full backdrop-blur-xl bg-black/50 hover:bg-black/75 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
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
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/95 hover:bg-white text-ink text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
