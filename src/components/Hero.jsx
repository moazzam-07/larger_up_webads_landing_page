import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import LargerUpLogo from './LargerUpLogo';

const leftAppleNotifications = [
  {
    id: 1,
    app: 'LARGERUP',
    time: 'now',
    title: 'New Lead Assigned',
    message: '4 BHK Villa in Alipore • ₹55L budget',
  },
  {
    id: 2,
    app: 'CALENDAR',
    time: 'now',
    title: 'Consultation Booked',
    message: 'Discovery Meeting • Tomorrow 4:30 PM',
  },
  {
    id: 3,
    app: 'LARGERUP',
    time: '2m ago',
    title: 'Lead Pre-Qualified',
    message: 'Verified ₹40L+ scope • Handover in 60 days',
  },
  {
    id: 4,
    app: 'MESSAGES',
    time: '4m ago',
    title: 'Site Visit Confirmed',
    message: 'Homeowner confirmed design consultation',
  },
];

const rightAppleNotifications = [
  {
    id: 1,
    app: 'CALENDAR',
    time: 'now',
    title: 'Design Consultation Synced',
    message: 'Added directly to your design calendar',
  },
  {
    id: 2,
    app: 'LARGERUP',
    time: 'now',
    title: 'Turnkey Mandate Closed',
    message: '₹48L residential contract confirmed',
  },
  {
    id: 3,
    app: 'LARGERUP',
    time: '1m ago',
    title: '100% Exclusive Lead',
    message: 'Private mandate • Zero shared bidding',
  },
  {
    id: 4,
    app: 'MESSAGES',
    time: '3m ago',
    title: 'New Consultation Request',
    message: 'Penthouse Renovation • ₹65L budget',
  },
];

export default function Hero({ onOpenForm }) {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    // Cycle left notifications every 3.6s
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftAppleNotifications.length);
    }, 3600);

    // Stagger right notifications by 1.8s, then cycle every 3.9s
    let rightInterval;
    const timeout = setTimeout(() => {
      rightInterval = setInterval(() => {
        setRightIndex((prev) => (prev + 1) % rightAppleNotifications.length);
      }, 3900);
    }, 1800);

    return () => {
      clearInterval(leftInterval);
      clearTimeout(timeout);
      if (rightInterval) clearInterval(rightInterval);
    };
  }, []);

  const renderAppIcon = (app) => {
    if (app === 'CALENDAR') {
      return (
        <div className="w-8 h-8 rounded-xl bg-ink text-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
          <Calendar className="w-4 h-4 text-white" />
        </div>
      );
    }
    if (app === 'MESSAGES') {
      return (
        <div className="w-8 h-8 rounded-xl bg-ink text-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-xl bg-ink text-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
        <LargerUpLogo className="w-full h-full text-white" />
      </div>
    );
  };

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      {/* Mobile/Tablet Apple Notification Banner (Centered Above Headline) */}
      <div
        key={`apple-mobile-${leftIndex}`}
        className="xl:hidden mb-6 sm:mb-8 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-sm text-left animate-apple-flip max-w-[92vw]"
      >
        <div className="w-6 h-6 rounded-lg bg-ink text-white p-1 flex items-center justify-center shrink-0 shadow-sm">
          <LargerUpLogo className="w-full h-full text-white" />
        </div>
        <div className="min-w-0 pr-1">
          <div className="flex items-center gap-2 leading-none">
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted">
              {leftAppleNotifications[leftIndex].app}
            </span>
            <span className="text-[9px] text-muted/60">
              {leftAppleNotifications[leftIndex].time}
            </span>
          </div>
          <p className="text-xs font-bold text-ink leading-tight truncate mt-0.5">
            {leftAppleNotifications[leftIndex].title}: <span className="font-normal text-muted">{leftAppleNotifications[leftIndex].message}</span>
          </p>
        </div>
      </div>

      {/* Left Peripheral Apple Push Notification (Desktop) */}
      <div className="hidden xl:flex absolute left-4 2xl:left-12 top-[52%] -translate-y-1/2 z-0 pointer-events-none select-none">
        <div
          key={`apple-left-${leftIndex}`}
          className="w-[270px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left animate-apple-flip pointer-events-auto transition-transform hover:scale-[1.02]"
        >
          {renderAppIcon(leftAppleNotifications[leftIndex].app)}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 leading-none mb-1">
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                {leftAppleNotifications[leftIndex].app}
              </span>
              <span className="text-[10px] text-muted/60 font-normal">
                {leftAppleNotifications[leftIndex].time}
              </span>
            </div>
            <p className="text-xs font-bold text-ink leading-snug tracking-tight truncate">
              {leftAppleNotifications[leftIndex].title}
            </p>
            <p className="text-[11px] text-muted font-normal leading-snug mt-0.5 truncate">
              {leftAppleNotifications[leftIndex].message}
            </p>
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

      {/* Right Peripheral Apple Push Notification (Desktop) */}
      <div className="hidden xl:flex absolute right-4 2xl:right-12 top-[48%] -translate-y-1/2 z-0 pointer-events-none select-none">
        <div
          key={`apple-right-${rightIndex}`}
          className="w-[270px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left animate-apple-flip pointer-events-auto transition-transform hover:scale-[1.02]"
        >
          {renderAppIcon(rightAppleNotifications[rightIndex].app)}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 leading-none mb-1">
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                {rightAppleNotifications[rightIndex].app}
              </span>
              <span className="text-[10px] text-muted/60 font-normal">
                {rightAppleNotifications[rightIndex].time}
              </span>
            </div>
            <p className="text-xs font-bold text-ink leading-snug tracking-tight truncate">
              {rightAppleNotifications[rightIndex].title}
            </p>
            <p className="text-[11px] text-muted font-normal leading-snug mt-0.5 truncate">
              {rightAppleNotifications[rightIndex].message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
