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

// Curated safe spots across desktop canvas framing the headline:
// 4 corners/shoulders well away from center text & CTA
const DESKTOP_SPOTS = [
  // Spot 0: Top-Left Shoulder
  { style: { top: '13%', left: '3.5%', transform: 'rotate(-1.5deg)' }, isDepth: false },
  // Spot 1: Top-Right Shoulder
  { style: { top: '13%', right: '3.5%', transform: 'rotate(1.5deg)' }, isDepth: false },
  // Spot 2: Bottom-Left Flank
  { style: { bottom: '11%', left: '4%', transform: 'rotate(1deg)' }, isDepth: false },
  // Spot 3: Bottom-Right Flank
  { style: { bottom: '11%', right: '4%', transform: 'rotate(-1deg)' }, isDepth: false },
];

// Alternate subtle variations per batch for organic realism
const DESKTOP_SPOTS_ALT = [
  { style: { top: '17%', left: '5.5%', transform: 'rotate(1deg)' }, isDepth: false },
  { style: { top: '17%', right: '5.5%', transform: 'rotate(-1.2deg)' }, isDepth: false },
  { style: { bottom: '15%', left: '5.5%', transform: 'rotate(-1deg)' }, isDepth: false },
  { style: { bottom: '15%', right: '5.5%', transform: 'rotate(1.2deg)' }, isDepth: false },
];

// Mobile safe zones (alternating dynamically above and below the headline)
const MOBILE_SAFE_SPOTS = [
  { position: 'top', align: 'justify-start pl-2', rotate: 'rotate(-1deg)' },
  { position: 'bottom', align: 'justify-end pr-2', rotate: 'rotate(1deg)' },
  { position: 'top', align: 'justify-end pr-2', rotate: 'rotate(0.5deg)' },
  { position: 'bottom', align: 'justify-start pl-2', rotate: 'rotate(-0.5deg)' },
];

const DYNAMIC_TIME_WORDS = ['month.', 'week.', 'day.', 'hour.'];

export default function Hero({ onOpenForm }) {
  // Dynamic headline flipping word index (month -> week -> day -> hour -> month)
  const [wordIdx, setWordIdx] = useState(0);

  // Desktop 4 notifications sequence state:
  // Step 1: Card 1 enters
  // Step 2: Card 2 enters (Cards 1 & 2 visible)
  // Step 3: Card 3 enters (Cards 1, 2, 3 visible)
  // Step 4: Card 4 enters (All 4 cards visible, hold)
  // Step 5: All 4 cards disappear SIMULTANEOUSLY (isExiting = true)
  // Reset: batchOffset += 4, step = 1
  const [desktopStep, setDesktopStep] = useState(1);
  const [batchOffset, setBatchOffset] = useState(0);
  const [batchCycle, setBatchCycle] = useState(0);

  // Mobile dynamic notification state
  const [mobileState, setMobileState] = useState({
    notifIdx: 0,
    spotIdx: 0,
    key: 'mobile-0',
  });

  // Desktop Sequence Timer
  useEffect(() => {
    let timerId;

    if (desktopStep === 1) {
      // Card 1 has appeared, wait 950ms then show Card 2
      timerId = setTimeout(() => {
        setDesktopStep(2);
      }, 950);
    } else if (desktopStep === 2) {
      // Card 2 has appeared, wait 950ms then show Card 3
      timerId = setTimeout(() => {
        setDesktopStep(3);
      }, 950);
    } else if (desktopStep === 3) {
      // Card 3 has appeared, wait 950ms then show Card 4
      timerId = setTimeout(() => {
        setDesktopStep(4);
      }, 950);
    } else if (desktopStep === 4) {
      // All 4 cards are now visible on screen together!
      // Keep them visible together for 2.6 seconds so the viewer can read them comfortably
      timerId = setTimeout(() => {
        setDesktopStep(5); // Trigger simultaneous exit
      }, 2600);
    } else if (desktopStep === 5) {
      // Exit animation duration (550ms) - all 4 cards fade & blur out together
      timerId = setTimeout(() => {
        setBatchOffset((prev) => (prev + 4) % allAppleNotifications.length);
        setBatchCycle((prev) => prev + 1);
        setDesktopStep(1); // Restart with Card 1 of next batch
      }, 550);
    }

    return () => clearTimeout(timerId);
  }, [desktopStep]);

  // Mobile Loop & Headline Word Flip
  useEffect(() => {
    let tick = 0;

    const mobileInterval = setInterval(() => {
      tick++;
      setMobileState({
        notifIdx: tick % allAppleNotifications.length,
        spotIdx: tick % MOBILE_SAFE_SPOTS.length,
        key: `mobile-${tick}`,
      });
    }, 2800);

    // Headline dynamic word rotation: month -> week -> day -> hour -> month
    const wordInterval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % DYNAMIC_TIME_WORDS.length);
    }, 2600);

    return () => {
      clearInterval(mobileInterval);
      clearInterval(wordInterval);
    };
  }, []);

  const renderAppIcon = (app, isMobile = false) => {
    const containerClass = isMobile
      ? 'w-6 h-6 rounded-[8px] bg-ink text-white p-1 flex items-center justify-center shrink-0 shadow-xs'
      : 'w-8 h-8 rounded-xl bg-ink text-white p-1.5 flex items-center justify-center shrink-0 shadow-sm';
    const iconClass = isMobile ? 'w-3 h-3 text-white' : 'w-4 h-4 text-white';

    if (app === 'CALENDAR') {
      return (
        <div className={containerClass}>
          <Calendar className={iconClass} />
        </div>
      );
    }
    if (app === 'MESSAGES') {
      return (
        <div className={containerClass}>
          <MessageSquare className={iconClass} />
        </div>
      );
    }
    return (
      <div className={containerClass}>
        <LargerUpLogo className="w-full h-full text-white" />
      </div>
    );
  };

  // Card component supporting desktop staggered/simultaneous exit & compact mobile sizing
  const renderCard = (item, isDepth = false, extraClasses = '', isMobile = false, isExiting = false) => {
    if (isMobile) {
      return (
        <div
          className={`w-[210px] xs:w-[225px] bg-white/90 backdrop-blur-2xl border border-black/[0.08] rounded-[15px] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-start gap-2 text-left pointer-events-auto transition-all animate-apple-pop ${extraClasses}`}
        >
          {renderAppIcon(item.app, true)}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 leading-none mb-0.5">
              <span className="text-[8.5px] font-bold text-muted uppercase tracking-wider">
                {item.app}
              </span>
              <span className="text-[8.5px] text-muted/60 font-normal">
                {item.time}
              </span>
            </div>
            <p className="text-[11px] font-bold text-ink leading-tight tracking-tight truncate">
              {item.title}
            </p>
            <p className="text-[9.5px] text-muted font-normal leading-tight mt-0.5 truncate">
              {item.message}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`w-[260px] lg:w-[275px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left pointer-events-auto transition-all ${
          isExiting ? 'animate-apple-exit-all' : 'animate-apple-pop'
        } ${
          isDepth
            ? 'opacity-40 blur-[1px] scale-90 -z-10'
            : 'opacity-100 scale-100 z-10 hover:scale-[1.02]'
        } ${extraClasses}`}
      >
        {renderAppIcon(item.app, false)}
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
  };

  const isExiting = desktopStep === 5;
  const spotsPool = batchCycle % 2 === 0 ? DESKTOP_SPOTS : DESKTOP_SPOTS_ALT;
  const currentMobileSpot = MOBILE_SAFE_SPOTS[mobileState.spotIdx];

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      
      {/* =========================================================================
          DESKTOP 4 POPUPS: Appear One-by-One, Disappear All Together Simultaneously
          ========================================================================= */}
      
      {/* Popup 1: Top-Left (Visible in Steps 1, 2, 3, 4, 5) */}
      {desktopStep >= 1 && (
        <div
          key={`batch-${batchOffset}-c1`}
          style={spotsPool[0].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 0) % allAppleNotifications.length],
            spotsPool[0].isDepth,
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Popup 2: Top-Right (Visible in Steps 2, 3, 4, 5) */}
      {desktopStep >= 2 && (
        <div
          key={`batch-${batchOffset}-c2`}
          style={spotsPool[1].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 1) % allAppleNotifications.length],
            spotsPool[1].isDepth,
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Popup 3: Bottom-Left (Visible in Steps 3, 4, 5) */}
      {desktopStep >= 3 && (
        <div
          key={`batch-${batchOffset}-c3`}
          style={spotsPool[2].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 2) % allAppleNotifications.length],
            spotsPool[2].isDepth,
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Popup 4: Bottom-Right (Visible in Steps 4, 5) */}
      {desktopStep >= 4 && (
        <div
          key={`batch-${batchOffset}-c4`}
          style={spotsPool[3].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 3) % allAppleNotifications.length],
            spotsPool[3].isDepth,
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* =========================================================================
          MOBILE NOTIFICATION: Subtle, Compact Apple Pill (Never overpowers headline)
          ========================================================================= */}
      <div
        key={mobileState.key}
        className={`md:hidden absolute ${
          currentMobileSpot.position === 'top' ? 'top-20 sm:top-24' : 'bottom-10 sm:bottom-14'
        } left-0 right-0 px-4 flex ${currentMobileSpot.align} animate-apple-pop select-none z-10 pointer-events-none`}
      >
        {renderCard(
          allAppleNotifications[mobileState.notifIdx],
          false,
          currentMobileSpot.rotate,
          true,
          false
        )}
      </div>

      {/* =========================================================================
          CENTER STAGE HERO CONTENT
          - Headline: Massive & Bold on Mobile, Commanding on Desktop
          - Dynamic word ("month.") perfectly aligned to straight text baseline
          ========================================================================= */}
      <div className="max-w-[340px] xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex flex-col items-center relative z-20 px-1 sm:px-4">
        
        {/* Dominant Headline: Clear Primary Focus */}
        <h1 className="text-[42px] xs:text-[48px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black text-ink tracking-tight leading-[1.03] sm:leading-[1.06] mb-5 sm:mb-8 animate-blur-in delay-150">
          Get high-ticket interior clients every{' '}
          <span className="word-flip-container">
            {/* Invisible sizer anchor frozen to widest word ('month.') guaranteeing 0px line movement */}
            <span className="word-flip-sizer" aria-hidden="true">
              month.
            </span>
            {/* Active dynamic flipping word */}
            <span
              key={`headline-word-${wordIdx}`}
              className="word-flip-item animate-word-flip text-ink"
            >
              {DYNAMIC_TIME_WORDS[wordIdx]}
            </span>
          </span>
        </h1>

        {/* Primary CTA Button */}
        <div className="w-full flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-base font-semibold px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
          </button>
        </div>

      </div>
    </section>
  );
}
