import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function VideoModal({ isOpen, videoData, onClose, onOpenForm }) {
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

  if (!isOpen || !videoData) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4 lg:p-6 bg-ink/75 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-canvas border border-hairline rounded-[28px] max-w-sm sm:max-w-md w-full max-h-[92vh] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.3)] flex flex-col animate-scaleUp"
      >
        {/* Minimal Mobbin Header Bar */}
        <div className="px-4 sm:px-5 py-3 border-b border-hairline flex items-center justify-between bg-canvas-soft/80 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Studio Breakdown • {videoData.location}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-ink hover:text-white border border-hairline flex items-center justify-center text-ink transition-colors shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal 9:16 Vertical Video Canvas */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden max-h-[58vh]">
          <video
            src={videoData.videoUrl}
            poster={videoData.poster}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[58vh] aspect-[9/16] object-contain mx-auto"
          />
        </div>

        {/* Minimal Studio Breakdown Footer */}
        <div className="p-4 sm:p-5 bg-canvas flex flex-col justify-between gap-3 border-t border-hairline-soft shrink-0">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink tracking-tight">
                {videoData.studio}
              </h3>
              <span className="text-[11px] text-muted font-mono font-medium">
                {videoData.duration}
              </span>
            </div>
            <p className="text-xs text-muted font-normal mt-0.5">
              {videoData.speaker} • {videoData.location}
            </p>
            <p className="text-xs text-ink/75 italic mt-1.5 leading-relaxed line-clamp-3">
              "{videoData.fullQuote}"
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenForm();
            }}
            className="w-full bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:py-3 rounded-full transition-all inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span>Book Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </button>
        </div>
      </div>
    </div>
  );
}

