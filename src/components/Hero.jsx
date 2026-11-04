import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const leftNotifications = [
  {
    type: 'Lead Closed',
    badge: '₹48L Mandate',
    title: 'Wizspace Interior',
    desc: '4 BHK Turnkey Penthouse • Alipore',
    time: '2m ago',
  },
  {
    type: 'Meeting Booked',
    badge: 'Calendar Synced',
    title: 'DA Interiors',
    desc: 'Discovery Visit • Ballygunge Circular',
    time: '5m ago',
  },
  {
    type: 'New Pre-Qualified Lead',
    badge: 'Verified ₹60L+',
    title: 'Luxury Villa Mandate',
    desc: 'Handover timelines confirmed',
    time: '11m ago',
  },
  {
    type: 'Pipeline Growth',
    badge: '+₹1.4Cr Added',
    title: 'Deco Perfect',
    desc: '3 Consultations scheduled this week',
    time: 'Just now',
  },
];

const rightNotifications = [
  {
    type: 'Consultation Scheduled',
    badge: 'Today 4:30 PM',
    title: 'LUXHOME Pvt. Ltd.',
    desc: 'Architectural duplex conversion',
    time: '4m ago',
  },
  {
    type: 'Lead Closed',
    badge: '₹35L Mandate',
    title: 'Atelier Muse Design',
    desc: 'Turnkey interior execution confirmed',
    time: '8m ago',
  },
  {
    type: 'Exclusive Lead',
    badge: 'Zero Competitors',
    title: 'High-Ticket Inquiry',
    desc: 'Direct booking • No shared bidding',
    time: '19m ago',
  },
  {
    type: 'Site Visit Confirmed',
    badge: 'Pre-Screened Budget',
    title: 'Studio Veda Interiors',
    desc: 'Villa project scope approved',
    time: '28m ago',
  },
];

export default function Hero({ onOpenForm }) {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    // Cycle left notifications every 3.8s
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftNotifications.length);
    }, 3800);

    // Stagger right notifications by 1.9s, then cycle every 4.1s
    let rightInterval;
    const timeout = setTimeout(() => {
      rightInterval = setInterval(() => {
        setRightIndex((prev) => (prev + 1) % rightNotifications.length);
      }, 4100);
    }, 1900);

    return () => {
      clearInterval(leftInterval);
      clearTimeout(timeout);
      if (rightInterval) clearInterval(rightInterval);
    };
  }, []);

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-3 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      {/* Mobile Live Notification Pill (Centrally Positioned Above Headline) */}
      <div
        key={`mobile-${leftIndex}`}
        className="lg:hidden mb-6 sm:mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-soft/90 backdrop-blur-md border border-hairline shadow-sm text-xs text-ink animate-card-flip max-w-[90vw]"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-bold text-ink shrink-0">{leftNotifications[leftIndex].type}:</span>
        <span className="text-muted font-light truncate">{leftNotifications[leftIndex].desc}</span>
      </div>

      {/* Left Peripheral Floating Flip Card (Desktop) */}
      <div className="hidden lg:flex absolute left-3 sm:left-5 xl:left-8 2xl:left-14 top-[54%] -translate-y-1/2 z-0 pointer-events-none select-none">
        <div
          key={`left-${leftIndex}`}
          className="w-60 xl:w-72 bg-white/95 backdrop-blur-xl border border-hairline rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] text-left animate-card-flip pointer-events-auto transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                {leftNotifications[leftIndex].type}
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted/60">
              {leftNotifications[leftIndex].time}
            </span>
          </div>

          <p className="text-sm font-bold text-ink tracking-tight mb-0.5">
            {leftNotifications[leftIndex].title}
          </p>
          <p className="text-xs text-muted font-light leading-relaxed mb-3">
            {leftNotifications[leftIndex].desc}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-hairline-soft/80 text-[10px]">
            <span className="font-semibold text-ink bg-canvas-soft px-2 py-0.5 rounded-full border border-hairline-soft">
              {leftNotifications[leftIndex].badge}
            </span>
            <span className="text-muted/60 font-light">Verified Engine</span>
          </div>
        </div>
      </div>

      {/* Center Main Stage Content */}
      <div className="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto flex flex-col items-center z-10 px-4">
        {/* Bold, Responsive Headline with Blurry Incoming Animation */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-[62px] xl:text-[74px] 2xl:text-[82px] font-black text-ink tracking-tight leading-[1.08] sm:leading-[1.05] mb-8 sm:mb-12 md:mb-14 animate-blur-in delay-150">
          Get high-ticket interior clients every month.
        </h1>

        {/* Primary CTA Button with Smooth Entrance */}
        <div className="w-full sm:w-auto flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-base sm:text-xl font-semibold px-9 sm:px-12 py-4 sm:py-5 rounded-full transition-all inline-flex items-center justify-center gap-2.5 active:scale-95 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
          </button>
        </div>
      </div>

      {/* Right Peripheral Floating Flip Card (Desktop) */}
      <div className="hidden lg:flex absolute right-3 sm:right-5 xl:right-8 2xl:right-14 top-[48%] -translate-y-1/2 z-0 pointer-events-none select-none">
        <div
          key={`right-${rightIndex}`}
          className="w-60 xl:w-72 bg-white/95 backdrop-blur-xl border border-hairline rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] text-left animate-card-flip pointer-events-auto transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                {rightNotifications[rightIndex].type}
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted/60">
              {rightNotifications[rightIndex].time}
            </span>
          </div>

          <p className="text-sm font-bold text-ink tracking-tight mb-0.5">
            {rightNotifications[rightIndex].title}
          </p>
          <p className="text-xs text-muted font-light leading-relaxed mb-3">
            {rightNotifications[rightIndex].desc}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-hairline-soft/80 text-[10px]">
            <span className="font-semibold text-ink bg-canvas-soft px-2 py-0.5 rounded-full border border-hairline-soft">
              {rightNotifications[rightIndex].badge}
            </span>
            <span className="text-muted/60 font-light">100% Exclusive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
