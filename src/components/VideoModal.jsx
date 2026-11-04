import React from 'react';
import { X, Play, CheckCircle2, ShieldCheck, Volume2, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoData, onOpenForm }) {
  if (!isOpen || !videoData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-canvas border border-hairline w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-hairline flex items-center justify-between bg-canvas-soft">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink">
              Verified Case Breakdown • {videoData.city}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-canvas border border-hairline hover:bg-canvas-soft flex items-center justify-center text-ink transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas / Interactive Player Screen */}
        <div className="relative aspect-video bg-ink flex items-center justify-center overflow-hidden group">
          {/* Subtle stylized background architectural render simulation */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800" />
          
          {/* Simulated wave / audio bars */}
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-20">
            {[40, 65, 80, 50, 95, 70, 45, 90, 60, 85, 40, 75, 55, 90, 65, 45].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-white rounded-full animate-pulse"
                style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white text-ink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
              <Play className="w-6 h-6 fill-ink text-ink ml-1" />
            </div>
            <p className="text-white text-lg font-semibold tracking-tight">{videoData.title}</p>
            <p className="text-white/70 text-xs mt-1">Client Case Study • Duration {videoData.duration}</p>
          </div>

          {/* Bottom Video Progress Simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white/80 text-xs">
            <span className="font-mono">01:14 / {videoData.duration}</span>
            <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-2/5 h-full bg-accent" />
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">HD 1080p</span>
            </div>
          </div>
        </div>

        {/* Breakdown Summary & Metrics */}
        <div className="p-6 bg-canvas flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline-soft">
            <div>
              <h3 className="text-xl font-bold text-ink">{videoData.studio}</h3>
              <p className="text-sm text-muted">{videoData.speaker} • {videoData.location}</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3.5 py-1.5 rounded-full self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4 text-ink" />
              <span className="text-xs font-semibold text-ink">{videoData.keyMetric}</span>
            </div>
          </div>

          <p className="text-sm text-ink/80 leading-relaxed italic">
            "{videoData.fullQuote}"
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
              <ShieldCheck className="w-4 h-4 text-ink" />
              <span>Full commercial verification & CRM logs verified by LargerUp.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenForm();
              }}
              className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              Get This System For Your Studio ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

