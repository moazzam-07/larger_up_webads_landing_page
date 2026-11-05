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
    title: 'New Architectural Inquiry',
    message: 'Penthouse Renovation • ₹65L budget',
  },
];

// Curated safe spots across desktop canvas:
// Cards pop into different random safe spots, never in a single static place, never awkwardly overlapping text
const TOP_LEFT_SPOTS = [
  { style: { top: '13%', left: '3%', transform: 'rotate(-2deg)' }, isDepth: false },
  { style: { top: '18%', left: '6%', transform: 'rotate(1deg)' }, isDepth: false },
  { style: { top: '22%', left: '16%', transform: 'rotate(-2.5deg)' }, isDepth: true },
];

const TOP_RIGHT_SPOTS = [
  { style: { top: '13%', right: '3%', transform: 'rotate(2deg)' }, isDepth: false },
  { style: { top: '18%', right: '6%', transform: 'rotate(-1deg)' }, isDepth: false },
  { style: { top: '22%', right: '16%', transform: 'rotate(2.5deg)' }, isDepth: true },
];

const BOTTOM_LEFT_SPOTS = [
  { style: { bottom: '11%', left: '3%', transform: 'rotate(-1deg)' }, isDepth: false },
  { style: { bottom: '18%', left: '6%', transform: 'rotate(1.5deg)' }, isDepth: false },
];

const BOTTOM_RIGHT_SPOTS = [
  { style: { bottom: '11%', right: '3%', transform: 'rotate(1deg)' }, isDepth: false },
  { style: { bottom: '18%', right: '6%', transform: 'rotate(-1.5deg)' }, isDepth: false },
];

// Mobile safe zones (alternating dynamically above and below the headline)
const MOBILE_SAFE_SPOTS = [
  { position: 'top', align: 'justify-start pl-1 sm:pl-2', rotate: 'rotate(-1deg)' },
  { position: 'bottom', align: 'justify-end pr-1 sm:pr-2', rotate: 'rotate(1deg)' },
  { position: 'top', align: 'justify-end pr-1 sm:pr-2', rotate: 'rotate(0.5deg)' },
  { position: 'bottom', align: 'justify-start pl-1 sm:pl-2', rotate: 'rotate(-0.5deg)' },
];

export default function Hero({ onOpenForm }) {
  // Desktop dynamic notification cards: appear spontaneously in changing safe spots
  const [activeCards, setActiveCards] = useState({
    cardA: { notifIdx: 0, spotIdx: 0, key: 'card-a-0' },
    cardB: { notifIdx: 1, spotIdx: 0, key: 'card-b-0' },
    cardC: { notifIdx: 2, spotIdx: 0, isLeft: true, key: 'card-c-0' },
  });

  // Mobile dynamic notification state
  const [mobileState, setMobileState] = useState({
    notifIdx: 0,
    spotIdx: 0,
    key: 'mobile-0',
  });

  useEffect(() => {
    let tick = 0;

    const interval = setInterval(() => {
      tick++;

      // Mobile cycles every tick (~2.8s) through notifications and alternating positions
      setMobileState({
        notifIdx: tick % allAppleNotifications.length,
        spotIdx: tick % MOBILE_SAFE_SPOTS.length,
        key: `mobile-${tick}`,
      });

      // Desktop cycles one card at a time in a staggered round-robin
      const phase = tick % 3;

      if (phase === 0) {
        // Card A: Spawns in a new random Top-Left / Shoulder spot
        setActiveCards((prev) => ({
          ...prev,
          cardA: {
            notifIdx: (tick + 1) % allAppleNotifications.length,
            spotIdx: (prev.cardA.spotIdx + 1) % TOP_LEFT_SPOTS.length,
            key: `card-a-${tick}`,
          },
        }));
      } else if (phase === 1) {
        // Card B: Spawns in a new random Top-Right / Shoulder spot
        setActiveCards((prev) => ({
          ...prev,
          cardB: {
            notifIdx: (tick + 3) % allAppleNotifications.length,
            spotIdx: (prev.cardB.spotIdx + 1) % TOP_RIGHT_SPOTS.length,
            key: `card-b-${tick}`,
          },
        }));
      } else {
        // Card C: Alternates between Bottom-Left and Bottom-Right safe spots
        setActiveCards((prev) => {
          const isLeft = tick % 2 === 0;
          const pool = isLeft ? BOTTOM_LEFT_SPOTS : BOTTOM_RIGHT_SPOTS;
          return {
            ...prev,
            cardC: {
              notifIdx: (tick + 5) % allAppleNotifications.length,
              spotIdx: (prev.cardC.spotIdx + 1) % pool.length,
              isLeft,
              key: `card-c-${tick}`,
            },
          };
        });
      }
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

  const renderCard = (item, isDepth = false, extraClasses = '') => (
    <div
      className={`w-[250px] sm:w-[270px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left pointer-events-auto transition-all animate-apple-pop ${
        isDepth
          ? 'opacity-40 blur-[1px] scale-90 -z-10'
          : 'opacity-100 scale-100 z-10 hover:scale-[1.02]'
      } ${extraClasses}`}
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

  const spotA = TOP_LEFT_SPOTS[activeCards.cardA.spotIdx];
  const spotB = TOP_RIGHT_SPOTS[activeCards.cardB.spotIdx];
  const spotC = (activeCards.cardC.isLeft ? BOTTOM_LEFT_SPOTS : BOTTOM_RIGHT_SPOTS)[activeCards.cardC.spotIdx];
  const currentMobileSpot = MOBILE_SAFE_SPOTS[mobileState.spotIdx];

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      
      {/* DESKTOP SPONTANEOUS NOTIFICATIONS (Appear dynamically in random safe spots, never in a single static place) */}
      
      {/* Dynamic Card A: Upper Left / Shoulder */}
      <div
        key={activeCards.cardA.key}
        style={spotA.style}
        className={`hidden md:flex absolute select-none pointer-events-none transition-all duration-700 ${
          spotA.isDepth ? 'z-0' : 'z-10'
        }`}
      >
        {renderCard(allAppleNotifications[activeCards.cardA.notifIdx], spotA.isDepth)}
      </div>

      {/* Dynamic Card B: Upper Right / Shoulder */}
      <div
        key={activeCards.cardB.key}
        style={spotB.style}
        className={`hidden md:flex absolute select-none pointer-events-none transition-all duration-700 ${
          spotB.isDepth ? 'z-0' : 'z-10'
        }`}
      >
        {renderCard(allAppleNotifications[activeCards.cardB.notifIdx], spotB.isDepth)}
      </div>

      {/* Dynamic Card C: Alternating Lower Left / Lower Right */}
      <div
        key={activeCards.cardC.key}
        style={spotC.style}
        className={`hidden md:flex absolute select-none pointer-events-none transition-all duration-700 ${
          spotC.isDepth ? 'z-0' : 'z-10'
        }`}
      >
        {renderCard(allAppleNotifications[activeCards.cardC.notifIdx], spotC.isDepth)}
      </div>

      {/* CENTER STAGE HERO CONTENT */}
      <div className="max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col items-center relative z-20 px-2 sm:px-4">
        
        {/* MOBILE POPUP: Shows above headline when spot is 'top' */}
        {currentMobileSpot.position === 'top' && (
          <div
            key={mobileState.key}
            className={`md:hidden w-full flex ${currentMobileSpot.align} mb-4 sm:mb-6 animate-apple-pop select-none`}
          >
            {renderCard(
              allAppleNotifications[mobileState.notifIdx],
              false,
              currentMobileSpot.rotate
            )}
          </div>
        )}

        {/* Headline: Grand & Bold on Mobile, Massive on Desktop */}
        <h1 className="text-[36px] xs:text-[44px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black text-ink tracking-tight leading-[1.06] mb-5 sm:mb-8 animate-blur-in delay-150">
          Get high-ticket interior clients every month.
        </h1>

        {/* Primary CTA Button: Small & Sleek on Mobile */}
        <div className="w-full flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-base font-semibold px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
          </button>
        </div>

        {/* MOBILE POPUP: Shows below CTA button when spot is 'bottom' */}
        {currentMobileSpot.position === 'bottom' && (
          <div
            key={mobileState.key}
            className={`md:hidden w-full flex ${currentMobileSpot.align} mt-5 sm:mt-7 animate-apple-pop select-none`}
          >
            {renderCard(
              allAppleNotifications[mobileState.notifIdx],
              false,
              currentMobileSpot.rotate
            )}
          </div>
        )}

      </div>
    </section>
  );
}
