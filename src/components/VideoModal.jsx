import React from 'react';
import { X, Play, Volume2 } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoData, onOpenForm }) {
  if (!isOpen || !videoData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-canvas border border-hairline w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-hairline flex items-center justify-between bg-canvas-soft sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink">
              Studio Breakdown • {videoData.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-canvas border border-hairline hover:bg-canvas-soft flex items-center justify-center text-ink transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas */}
        <div className="relative aspect-video bg-ink flex items-center justify-center overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800" />
          
          <div className="relative z-10 text-center p-4 flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-ink flex items-center justify-center shadow mb-2.5">
              <Play className="w-5 h-5 fill-ink text-ink ml-0.5" />
            </div>
            <p className="text-white text-sm sm:text-base font-semibold tracking-tight px-2">{videoData.studio}</p>
            <p className="text-white/70 text-[11px] sm:text-xs mt-0.5">{videoData.speaker} • {videoData.location}</p>
          </div>

          {/* Bottom Progress Simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white/80 text-xs">
            <span className="font-mono text-[10px] sm:text-[11px]">01:14 / {videoData.duration}</span>
            <div className="flex-1 mx-2.5 sm:mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-2/5 h-full bg-white" />
            </div>
            <div className="flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5" />
              <span className="bg-white/20 px-1 py-0.5 rounded text-[9px] sm:text-[10px]">HD</span>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="p-4 sm:p-6 bg-canvas flex flex-col gap-3">
          <div className="pb-2 border-b border-hairline-soft">
            <h3 className="text-base sm:text-lg font-bold text-ink">{videoData.studio}</h3>
            <p className="text-xs text-muted">{videoData.speaker} • {videoData.location}</p>
          </div>

          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed italic">
            "{videoData.fullQuote}"
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-end gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all text-center"
            >
              Book Free Consultation ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
