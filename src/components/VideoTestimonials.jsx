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
    thumbnailBg: 'from-zinc-950 via-zinc-900 to-neutral-900',
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
    thumbnailBg: 'from-neutral-950 via-stone-900 to-zinc-900',
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
    thumbnailBg: 'from-zinc-900 via-neutral-900 to-zinc-950',
  },
];

export default function VideoTestimonials({ onSelectVideo, onOpenForm }) {
  return (
    <section id="case-studies" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          How interior studios scale their client pipeline.
        </h2>
      </div>

      {/* 3 Full-Thumbnail Video Cards (No bottom text boxes, full overlay) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
        {videoCaseStudies.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectVideo(item)}
            className="group relative aspect-[16/11] bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer active:scale-[0.99] shadow-sm hover:shadow-md flex flex-col justify-between p-5"
          >
            {/* Background Gradient & Dark Atmosphere */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.thumbnailBg} transition-transform duration-500 group-hover:scale-105`} />
            
            {/* Subtle Grid Accent Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Top Bar Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-semibold text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                Case Study
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                {item.duration}
              </span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="relative z-10 self-center my-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-ink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-ink text-ink ml-0.5" />
              </div>
            </div>

            {/* Bottom Overlay with Studio Name & Location */}
            <div className="relative z-10 text-left pt-2">
              <h3 className="text-white text-base sm:text-lg font-bold tracking-tight leading-snug">
                {item.studio}
              </h3>
              <p className="text-white/70 text-xs mt-0.5 font-light">
                {item.speaker} • {item.location}
              </p>
            </div>
          </div>
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
