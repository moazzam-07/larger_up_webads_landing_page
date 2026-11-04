import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

export const videoCaseStudies = [
  {
    id: 'studio-veda',
    studio: 'Studio Veda Interiors',
    speaker: 'Ar. Varun & Shreya Mukherjee',
    location: 'Alipore & Ballygunge, Kolkata',
    duration: '02:15',
    title: 'How Studio Veda Replaced Referrals with Consistent High-Ticket Projects',
    shortQuote: 'We stopped wasting 30+ hours a month making free 3D models for window shoppers. The homeowners who book through LargerUp arrive with clear budgets and genuine intent.',
    fullQuote: 'Before LargerUp, our studio was entirely reliant on unpredictable word-of-mouth. With LargerUp, we closed 3 major turnkey residential mandates in South Kolkata within 60 days. Every client was already familiar with our design language.',
    thumbnailBg: 'from-zinc-900 to-zinc-800',
  },
  {
    id: 'atelier-muse',
    studio: 'Atelier Muse Design',
    speaker: 'Rhea Sengupta, Principal Architect',
    location: 'Salt Lake & New Town, Kolkata',
    duration: '02:45',
    title: 'Securing High-Value Apartment & Duplex Clients in Kolkata',
    shortQuote: 'The pre-qualification filter eliminated the endless requests for discount carpentry. Now our calendar is booked with clients who respect bespoke design work.',
    fullQuote: 'In Kolkata, many homeowners look for cheap local carpenters unless you position yourself properly. LargerUp created an acquisition system that brings us serious apartment and villa owners in New Town and Salt Lake who value premium architectural finish.',
    thumbnailBg: 'from-neutral-900 to-stone-900',
  },
  {
    id: 'designbox',
    studio: 'DesignBox Spaces',
    speaker: 'Kunal Sen, Managing Partner',
    location: 'Park Street, Kolkata',
    duration: '01:50',
    title: 'From Feast-and-Famine to 12 Qualified Site Consultations Every Month',
    shortQuote: 'We now have consistent consultations every month. No cold calling, no shared leads, and no price wars against 10 contractors.',
    fullQuote: 'We were skeptical about running online ads because we did not want cheap inquiries. LargerUp built a curated system that preserves our studio brand while delivering pre-screened homeowners directly to our discovery meetings.',
    thumbnailBg: 'from-zinc-950 to-neutral-900',
  },
];

export default function VideoTestimonials({ onSelectVideo, onOpenForm }) {
  return (
    <section id="case-studies" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-3.5">
          <span>Real Studio Reviews</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-2.5 sm:mb-3 leading-tight">
          How interior studios scale their client pipeline.
        </h2>
        <p className="text-xs sm:text-base text-muted font-light leading-relaxed">
          Hear directly from studio founders on how they stopped chasing low-intent inquiries and built predictable client pipelines.
        </p>
      </div>

      {/* 3 Clean Video Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
        {videoCaseStudies.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectVideo(item)}
            className="group bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99]"
          >
            {/* Video Frame */}
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${item.thumbnailBg} p-4 sm:p-5 flex flex-col justify-between overflow-hidden`}>
              <div className="flex justify-end">
                <span className="text-[10px] sm:text-[11px] font-medium text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
                  {item.duration}
                </span>
              </div>

              {/* Play Button Overlay */}
              <div className="self-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-ink flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-ink ml-0.5" />
                </div>
              </div>

              <div className="text-left">
                <p className="text-white text-xs font-semibold">{item.speaker}</p>
                <p className="text-white/60 text-[10px] sm:text-[11px]">{item.location}</p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-ink leading-snug mb-2">
                  {item.studio}
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed italic">
                  "{item.shortQuote}"
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-hairline-soft flex items-center justify-between text-xs font-semibold text-ink">
                <span className="group-hover:underline inline-flex items-center gap-1">
                  Watch story ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft, Non-Salesy Pitch Banner */}
      <div className="bg-canvas-soft border border-hairline rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-ink">Want to grow your interior design business?</h4>
          <p className="text-xs sm:text-sm text-muted font-light mt-0.5">
            Let's discuss how a dedicated client acquisition funnel can work for your studio.
          </p>
        </div>
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shrink-0 active:scale-95 inline-flex items-center justify-center gap-1.5"
        >
          <span>Book Free Consultation</span>
          <ArrowUpRight className="w-4 h-4 text-white/80" />
        </button>
      </div>
    </section>
  );
}
