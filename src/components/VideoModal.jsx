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
      className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-4 lg:p-8 bg-ink/70 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-canvas border border-hairline rounded-[28px] max-w-3xl lg:max-w-4xl w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22)] flex flex-col animate-scaleUp"
      >
        {/* Minimal Mobbin Header Bar */}
        <div className="px-5 py-3.5 border-b border-hairline flex items-center justify-between bg-canvas-soft/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Studio Case Study • {videoData.location}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-ink hover:text-white border border-hairline flex items-center justify-center text-ink transition-colors shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic 16:9 Video Canvas */}
        <div className="relative aspect-video bg-black overflow-hidden">
          <video
            src={videoData.videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Minimal Studio Breakdown Footer */}
        <div className="p-5 sm:p-6 bg-canvas flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-hairline-soft">
          <div className="max-w-xl">
            <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
              {videoData.studio}
            </h3>
            <p className="text-xs text-muted font-normal mt-0.5">
              {videoData.speaker} • {videoData.location}
            </p>
            <p className="text-xs text-ink/75 italic mt-2 leading-relaxed">
              "{videoData.fullQuote}"
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

