import React from 'react';
import { X, Play, CheckCircle2, Volume2 } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoData, onOpenForm }) {
  if (!isOpen || !videoData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-canvas border border-hairline w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3.5 border-b border-hairline flex items-center justify-between bg-canvas-soft">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink">
              Studio Breakdown • {videoData.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-canvas border border-hairline hover:bg-canvas-soft flex items-center justify-center text-ink transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Video Canvas / Clean Player Simulation */}
        <div className="relative aspect-video bg-ink flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800" />
          
          <div className="relative z-10 text-center p-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white text-ink flex items-center justify-center shadow group-hover:scale-105 transition-transform mb-3">
              <Play className="w-5 h-5 fill-ink text-ink ml-0.5" />
            </div>
            <p className="text-white text-base font-semibold tracking-tight">{videoData.studio}</p>
            <p className="text-white/70 text-xs mt-1">{videoData.speaker} • {videoData.location}</p>
          </div>

          {/* Bottom Progress Simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white/80 text-xs">
            <span className="font-mono text-[11px]">01:14 / {videoData.duration}</span>
            <div className="flex-1 mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-2/5 h-full bg-white" />
            </div>
            <div className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">HD</span>
            </div>
          </div>
        </div>

        {/* Simple Breakdown Summary */}
        <div className="p-6 bg-canvas flex flex-col gap-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-hairline-soft">
            <div>
              <h3 className="text-lg font-bold text-ink">{videoData.studio}</h3>
              <p className="text-xs text-muted">{videoData.speaker} • {videoData.location}</p>
            </div>
          </div>

          <p className="text-sm text-ink/80 leading-relaxed italic">
            "{videoData.fullQuote}"
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="bg-ink hover:bg-ink-soft text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              Book Free Consultation ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
