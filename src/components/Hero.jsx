import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, MessageSquare } from 'lucide-react';
import LargerUpLogo from './LargerUpLogo';

const allAppleNotifications = [
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
    time: '1m ago',
    title: 'Lead Pre-Qualified',
    message: 'Verified ₹40L+ scope • Handover in 60 days',
  },
  {
    id: 4,
    app: 'MESSAGES',
    time: '2m ago',
    title: 'Site Visit Confirmed',
    message: 'Homeowner confirmed design consultation',
  },
  {
    id: 5,
    app: 'CALENDAR',
    time: 'now',
    title: 'Design Consultation Synced',
    message: 'Added directly to your studio calendar',
  },
  {
    id: 6,
    app: 'LARGERUP',
    time: 'now',
    title: 'Turnkey Mandate Closed',
    message: '₹48L residential contract confirmed',
  },
  {
    id: 7,
    app: 'LARGERUP',
    time: '1m ago',
    title: '100% Exclusive Lead',
    message: 'Private mandate • Zero shared bidding',
  },
  {
    id: 8,
    app: 'MESSAGES',
    time: '3m ago',
    title: 'New Consultation Request',
    message: 'Penthouse Renovation • ₹65L budget',
  },
];

export default function Hero({ onOpenForm }) {
  // 4 distinct dynamic spots on desktop
  const [spots, setSpots] = useState({
    topLeft: 0,
    topRight: 1,
    bottomLeft: 2,
    bottomRight: 3,
  });

  // Dynamic alternating spots on mobile
  const [mobileTopIndex, setMobileTopIndex] = useState(0);
  const [mobileBottomIndex, setMobileBottomIndex] = useState(1);

  useEffect(() => {
    let tick = 4;
    const spotKeys = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];

    const interval = setInterval(() => {
      const targetSpot = spotKeys[tick % spotKeys.length];
      const nextIndex = tick % allAppleNotifications.length;

      setSpots((prev) => ({
        ...prev,
        [targetSpot]: nextIndex,
      }));

      // Alternate mobile updates between top and bottom
      if (tick % 2 === 0) {
        setMobileTopIndex(nextIndex);
      } else {
        setMobileBottomIndex(nextIndex);
      }

      tick++;
    }, 2800);

    return () => clearInterval(interval);
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

  const renderCard = (item, key) => (
    <div
      key={key}
      className="w-[260px] sm:w-[275px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left animate-apple-flip pointer-events-auto transition-transform hover:scale-[1.02]"
    >
      {renderAppIcon(item.app)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 leading-none mb-1">
          <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
            {item.app}
          </span>
          <span className="text-[10px] text-muted/60 font-normal">
            {item.time}
          </span>
        </div>
        <p className="text-xs font-bold text-ink leading-snug tracking-tight truncate">
          {item.title}
        </p>
        <p className="text-[11px] text-muted font-normal leading-snug mt-0.5 truncate">
          {item.message}
        </p>
      </div>
    </div>
  );

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      {/* 4 DYNAMIC PERIPHERAL CORNERS (Desktop: Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
      
      {/* Spot 1: Top-Left */}
      <div className="hidden md:flex absolute top-16 sm:top-20 left-4 xl:left-10 2xl:left-16 z-0 pointer-events-none select-none">
        {renderCard(allAppleNotifications[spots.topLeft], `top-left-${spots.topLeft}`)}
      </div>

      {/* Spot 2: Top-Right */}
      <div className="hidden md:flex absolute top-16 sm:top-20 right-4 xl:right-10 2xl:right-16 z-0 pointer-events-none select-none">
        {renderCard(allAppleNotifications[spots.topRight], `top-right-${spots.topRight}`)}
      </div>

      {/* Spot 3: Bottom-Left */}
      <div className="hidden md:flex absolute bottom-14 sm:bottom-18 left-4 xl:left-10 2xl:left-16 z-0 pointer-events-none select-none">
        {renderCard(allAppleNotifications[spots.bottomLeft], `bottom-left-${spots.bottomLeft}`)}
      </div>

      {/* Spot 4: Bottom-Right */}
      <div className="hidden md:flex absolute bottom-14 sm:bottom-18 right-4 xl:right-10 2xl:right-16 z-0 pointer-events-none select-none">
        {renderCard(allAppleNotifications[spots.bottomRight], `bottom-right-${spots.bottomRight}`)}
      </div>

      {/* CENTER STAGE CONTENT */}
      <div className="max-w-xs xs:max-w-md sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col items-center z-10 px-2 sm:px-4">
        {/* Mobile Top Notification Banner (Dynamic Flipping) */}
        <div className="md:hidden w-full flex justify-start pl-1 mb-4">
          {renderCard(allAppleNotifications[mobileTopIndex], `mobile-top-${mobileTopIndex}`)}
        </div>

        {/* Headline: Grand & Bold on Mobile, Massive on Desktop */}
        <h1 className="text-[36px] xs:text-[44px] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-ink tracking-tight leading-[1.06] mb-5 sm:mb-8 animate-blur-in delay-150">
          Get high-ticket interior clients every month.
        </h1>

        {/* Primary CTA Button: Small & Sleek on Mobile, Understated Secondary Focus */}
        <div className="w-full flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-base font-semibold px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
          </button>
        </div>

        {/* Mobile Bottom Notification Banner (Dynamic Flipping) */}
        <div className="md:hidden w-full flex justify-end pr-1 mt-5">
          {renderCard(allAppleNotifications[mobileBottomIndex], `mobile-bottom-${mobileBottomIndex}`)}
        </div>
      </div>
    </section>
  );
}
