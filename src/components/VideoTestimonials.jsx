import React from 'react';
import { Play, CheckCircle2, TrendingUp, Building, Clock } from 'lucide-react';

export const videoCaseStudies = [
  {
    id: 'studio-veda',
    studio: 'Studio Veda Architecture & Interiors',
    speaker: 'Ar. Varun Malhotra & Shreya Malhotra',
    location: 'South Delhi & DLF Phase 5, Gurugram',
    city: 'Delhi NCR',
    duration: '02:45',
    title: 'How Studio Veda Closed ₹84L in 60 Days Without Justdial or Contractor Referrals',
    keyMetric: '₹84 Lakhs Closed (3 Turnkey Villas)',
    shortQuote: 'We stopped wasting 40 hours a month doing free 3D models for window shoppers. LargerUp gave us direct access to DLF villa owners with pre-approved budgets.',
    fullQuote: 'Before LargerUp, our studio was trapped on the referral roller coaster. Some months were great, other months we were stressed bidding against 10 contractors on lead portals. In 60 days with LargerUp, we closed 3 turnkey residential villa projects at an average ticket of ₹28 Lakhs each. Every homeowner already knew our design philosophy and accepted our minimum project fees upfront.',
    thumbnailBg: 'from-zinc-900 to-zinc-800',
    tag: 'Turnkey Luxury Residential',
  },
  {
    id: 'atelier-muse',
    studio: 'Atelier Muse Interiors',
    speaker: 'Rhea Sengupta, Principal Designer',
    location: 'Indiranagar & Whitefield, Bangalore',
    city: 'Bangalore',
    duration: '03:12',
    title: 'Scaling from ₹15L Scraps to 5 High-Ticket Villa Projects at ₹45L+ Average Contract',
    keyMetric: '₹1.25 Cr Pipeline • 5 Villas Secured',
    shortQuote: 'The multi-step qualification filter is genius. If a lead does not have a minimum budget of ₹25L and verified possession date, they cannot even book a call with us.',
    fullQuote: 'In Bangalore, every tech founder wants an interior designer, but 90% of agencies send you people who want an entire 3BHK done for ₹4 Lakhs. LargerUp engineered a bespoke qualification funnel that only books clients who have genuine ₹35L+ budgets in Prestige and Sobha developments. It completely changed our studio economics.',
    thumbnailBg: 'from-neutral-900 to-stone-900',
    tag: 'Penthouse & Luxury Villas',
  },
  {
    id: 'designbox',
    studio: 'DesignBox Interiors',
    speaker: 'Kunal Shah, Managing Partner',
    location: 'Bandra West & Juhu, Mumbai',
    city: 'Mumbai',
    duration: '02:20',
    title: 'From 1 Uncertain Referral a Month to 14 Pre-Qualified Site Consultations Like Clockwork',
    keyMetric: '₹1.4 Cr Booked Revenue in Q3',
    shortQuote: 'Our calendar has 12 to 14 high-intent site visits scheduled every single month. We do not do cold outreach or price negotiations anymore.',
    fullQuote: 'In South Mumbai and Bandra, reputation is everything. We were terrified that running web ads would dilute our high-end boutique brand. LargerUp built cinematic, architectural creative campaigns that actually elevated our studio status. We closed ₹1.4 Crore of booked projects in Q3 alone with an 11.4x return on our ad spend.',
    thumbnailBg: 'from-zinc-950 to-neutral-900',
    tag: 'Boutique High-End Residential',
  },
];

export default function VideoTestimonials({ onSelectVideo, onOpenForm }) {
  return (
    <section id="proof" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header (Mobbin Typography) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <span>Client Video Breakdowns</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Real numbers. Real Tier-1 studios. Zero fluff.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          Watch how three established interior studios in Delhi NCR, Bangalore, and Mumbai eliminated tire-kickers and built predictable ₹30L–₹1Cr+ monthly pipelines.
        </p>
      </div>

      {/* 3 Video Placeholder Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {videoCaseStudies.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectVideo(item)}
            className="group bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
          >
            {/* Video Frame / Thumbnail Placeholder */}
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${item.thumbnailBg} p-5 flex flex-col justify-between overflow-hidden`}>
              {/* Architectural grid simulation overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Top metadata tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="text-[11px] font-medium text-white/80 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.duration}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 self-center">
                <div className="w-14 h-14 rounded-full bg-white text-ink flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Client Metric Pill */}
              <div className="relative z-10">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                    <TrendingUp className="w-3.5 h-3.5 text-ink" />
                    <span>{item.keyMetric}</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-muted bg-canvas-soft px-1.5 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Quote Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-muted font-medium mb-1.5">
                  <span>{item.city}</span>
                  <span>{item.location.split('&')[0]}</span>
                </div>
                <h3 className="text-base font-bold text-ink leading-snug mb-3 group-hover:text-ink-soft">
                  {item.studio}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed line-clamp-3 italic">
                  "{item.shortQuote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-hairline-soft flex items-center justify-between">
                <span className="text-xs font-semibold text-ink group-hover:underline inline-flex items-center gap-1">
                  Watch full breakdown ↗
                </span>
                <span className="text-[11px] text-muted">{item.speaker.split(',')[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sub-CTA Callout */}
      <div className="bg-canvas-soft border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-lg font-bold text-ink">Want to see the raw CRM logs & campaign teardowns?</h4>
          <p className="text-sm text-muted font-light mt-0.5">
            We provide 100% transparent live attribution on every consultation call we book.
          </p>
        </div>
        <button
          onClick={onOpenForm}
          className="bg-ink hover:bg-ink-soft text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shrink-0 active:scale-95"
        >
          Check City Territory Availability ↗
        </button>
      </div>
    </section>
  );
}

