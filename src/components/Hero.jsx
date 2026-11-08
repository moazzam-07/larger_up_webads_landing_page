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

// Curated constellations across desktop canvas:
// In EVERY iteration, locations and sequence are completely different and dynamic across the canvas.
// Cards appear in floating shoulders, sub-header insets, lower flanks, and outposts—NEVER just 4 fixed corners!
// All coordinates are strictly positioned outside the headline horizontal band to guarantee ZERO text overlap.
const DESKTOP_CONSTELLATIONS = [
  // Constellation 0: High-Left Inward -> Low-Right Inward -> High-Right Edge -> Low-Left Outer
  [
    { style: { top: '19%', left: '15%', transform: 'rotate(-2deg)' } },
    { style: { bottom: '23%', right: '17%', transform: 'rotate(1.5deg)' } },
    { style: { top: '13%', right: '4%', transform: 'rotate(2deg)' } },
    { style: { bottom: '11%', left: '4%', transform: 'rotate(-1.5deg)' } },
  ],

  // Constellation 1: High-Right Inward -> Low-Left Inward -> High-Left Edge -> Low-Right Outer
  [
    { style: { top: '21%', right: '17%', transform: 'rotate(-1.5deg)' } },
    { style: { bottom: '24%', left: '16%', transform: 'rotate(2deg)' } },
    { style: { top: '12%', left: '4%', transform: 'rotate(1.5deg)' } },
    { style: { bottom: '12%', right: '4%', transform: 'rotate(-2deg)' } },
  ],

  // Constellation 2: High-Left Sub-Header -> Low-Left Mid -> High-Right Outer -> Low-Right Inward
  [
    { style: { top: '15%', left: '21%', transform: 'rotate(1deg)' } },
    { style: { bottom: '16%', left: '11%', transform: 'rotate(-2deg)' } },
    { style: { top: '14%', right: '5%', transform: 'rotate(-1deg)' } },
    { style: { bottom: '25%', right: '16%', transform: 'rotate(2deg)' } },
  ],

  // Constellation 3: High-Right Sub-Header -> Low-Right Mid -> High-Left Outer -> Low-Left Inward
  [
    { style: { top: '15%', right: '21%', transform: 'rotate(-1deg)' } },
    { style: { bottom: '16%', right: '11%', transform: 'rotate(2deg)' } },
    { style: { top: '14%', left: '5%', transform: 'rotate(1deg)' } },
    { style: { bottom: '25%', left: '16%', transform: 'rotate(-2deg)' } },
  ],

  // Constellation 4: High-Left Mid -> High-Right Mid -> Low-Left Outer -> Low-Right Inward
  [
    { style: { top: '23%', left: '12%', transform: 'rotate(-2deg)' } },
    { style: { top: '18%', right: '14%', transform: 'rotate(2deg)' } },
    { style: { bottom: '11%', left: '5%', transform: 'rotate(1deg)' } },
    { style: { bottom: '21%', right: '19%', transform: 'rotate(-1.5deg)' } },
  ],

  // Constellation 5: Low-Left Inward -> High-Left Edge -> Low-Right Outer -> High-Right Inward
  [
    { style: { bottom: '22%', left: '20%', transform: 'rotate(1.5deg)' } },
    { style: { top: '12%', left: '6%', transform: 'rotate(-1.5deg)' } },
    { style: { bottom: '12%', right: '5%', transform: 'rotate(2deg)' } },
    { style: { top: '24%', right: '13%', transform: 'rotate(-2deg)' } },
  ],

  // Constellation 6: High-Left Outer -> High-Right Inward -> Low-Left Inward -> Low-Right Outer
  [
    { style: { top: '16%', left: '4%', transform: 'rotate(-1deg)' } },
    { style: { top: '22%', right: '19%', transform: 'rotate(2.5deg)' } },
    { style: { bottom: '19%', left: '14%', transform: 'rotate(-2deg)' } },
    { style: { bottom: '13%', right: '6%', transform: 'rotate(1deg)' } },
  ],

  // Constellation 7: High-Right Outer -> Low-Right Inward -> High-Left Inward -> Low-Left Outer
  [
    { style: { top: '16%', right: '4%', transform: 'rotate(1deg)' } },
    { style: { bottom: '19%', right: '14%', transform: 'rotate(-2.5deg)' } },
    { style: { top: '22%', left: '19%', transform: 'rotate(-2deg)' } },
    { style: { bottom: '13%', left: '6%', transform: 'rotate(1.5deg)' } },
  ],
];

// Mobile constellations: 4 popups appearing in safe margins around the headline
// 2 positioned above the headline, 2 positioned below the CTA button
const MOBILE_CONSTELLATIONS = [
  // Constellation 0: Top-Left -> Top-Right -> Bottom-Left -> Bottom-Right
  [
    { style: { top: '74px', left: '14px', transform: 'rotate(-1deg)' } },
    { style: { top: '118px', right: '14px', transform: 'rotate(1.5deg)' } },
    { style: { bottom: '150px', left: '16px', transform: 'rotate(-1.5deg)' } },
    { style: { bottom: '98px', right: '16px', transform: 'rotate(2deg)' } },
  ],

  // Constellation 1: Top-Right -> Top-Left -> Bottom-Right -> Bottom-Left
  [
    { style: { top: '72px', right: '16px', transform: 'rotate(1deg)' } },
    { style: { top: '118px', left: '14px', transform: 'rotate(-2deg)' } },
    { style: { bottom: '150px', right: '16px', transform: 'rotate(1.5deg)' } },
    { style: { bottom: '98px', left: '14px', transform: 'rotate(-1deg)' } },
  ],

  // Constellation 2: Top-Left higher -> Top-Right lower -> Bottom-Right higher -> Bottom-Left lower
  [
    { style: { top: '76px', left: '16px', transform: 'rotate(1.5deg)' } },
    { style: { top: '122px', right: '16px', transform: 'rotate(-1deg)' } },
    { style: { bottom: '154px', right: '18px', transform: 'rotate(-2deg)' } },
    { style: { bottom: '95px', left: '16px', transform: 'rotate(1deg)' } },
  ],

  // Constellation 3: Top-Right higher -> Top-Left lower -> Bottom-Left higher -> Bottom-Right lower
  [
    { style: { top: '70px', right: '18px', transform: 'rotate(-1deg)' } },
    { style: { top: '116px', left: '16px', transform: 'rotate(2deg)' } },
    { style: { bottom: '154px', left: '16px', transform: 'rotate(1.5deg)' } },
    { style: { bottom: '95px', right: '18px', transform: 'rotate(-1.5deg)' } },
  ],
];

const DYNAMIC_TIME_WORDS = ['month.', 'week.', 'day.', 'hour.'];

export default function Hero({ onOpenForm }) {
  // Dynamic headline flipping word index (month -> week -> day -> hour -> month)
  const [wordIdx, setWordIdx] = useState(0);

  // 4 Notifications sequence state (Unified for both Desktop & Mobile):
  // Step 1: Card 1 enters in its unique location
  // Step 2: Card 2 enters in its unique location
  // Step 3: Card 3 enters in its unique location
  // Step 4: Card 4 enters in its unique location (All 4 cards visible, hold)
  // Step 5: All 4 cards disappear SIMULTANEOUSLY (isExiting = true)
  // Reset: batchCycle increments -> spawns a brand new constellation of locations!
  const [notifStep, setNotifStep] = useState(1);
  const [batchOffset, setBatchOffset] = useState(0);
  const [batchCycle, setBatchCycle] = useState(0);

  // 4 Popups Sequence Timer (One-by-one entry, simultaneous exit)
  useEffect(() => {
    let timerId;

    if (notifStep === 1) {
      timerId = setTimeout(() => {
        setNotifStep(2);
      }, 850);
    } else if (notifStep === 2) {
      timerId = setTimeout(() => {
        setNotifStep(3);
      }, 850);
    } else if (notifStep === 3) {
      timerId = setTimeout(() => {
        setNotifStep(4);
      }, 850);
    } else if (notifStep === 4) {
      // All 4 cards are now visible on screen together!
      // Hold briefly (~1.1s) so user sees the complete constellation without lingering too long
      timerId = setTimeout(() => {
        setNotifStep(5); // Trigger simultaneous exit
      }, 1100);
    } else if (notifStep === 5) {
      // Fast, smooth simultaneous exit (450ms)
      timerId = setTimeout(() => {
        setBatchOffset((prev) => (prev + 4) % allAppleNotifications.length);
        setBatchCycle((prev) => prev + 1);
        setNotifStep(1); // Restart with a brand new constellation of positions!
      }, 450);
    }

    return () => clearTimeout(timerId);
  }, [notifStep]);

  // Headline Word Flip Interval
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % DYNAMIC_TIME_WORDS.length);
    }, 2600);

    return () => clearInterval(wordInterval);
  }, []);

  const renderAppIcon = (app, isMobile = false) => {
    const containerClass = isMobile
      ? 'w-5 h-5 rounded-[6px] bg-ink text-white p-1 flex items-center justify-center shrink-0 shadow-xs'
      : 'w-8 h-8 rounded-xl bg-ink text-white p-1.5 flex items-center justify-center shrink-0 shadow-sm';
    const iconClass = isMobile ? 'w-2.5 h-2.5 text-white' : 'w-4 h-4 text-white';

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

  // Card component:
  // On Mobile: Ultra-compact, single-line pill (just Icon + Title) as requested, cutting out description & timestamps
  // On Desktop: Full rich notification card
  const renderCard = (item, extraClasses = '', isMobile = false, isExiting = false) => {
    if (isMobile) {
      return (
        <div
          className={`bg-white/95 backdrop-blur-2xl border border-black/[0.08] rounded-xl py-1.5 px-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center gap-1.5 text-left pointer-events-auto transition-all select-none max-w-[210px] ${
            isExiting ? 'animate-apple-exit-all' : 'animate-apple-pop'
          } ${extraClasses}`}
        >
          {renderAppIcon(item.app, true)}
          <p className="text-[11px] font-bold text-ink leading-none tracking-tight truncate">
            {item.title}
          </p>
        </div>
      );
    }

    return (
      <div
        className={`w-[250px] lg:w-[265px] bg-white/85 backdrop-blur-2xl border border-black/[0.08] rounded-[20px] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex items-start gap-2.5 text-left pointer-events-auto transition-all opacity-100 scale-100 z-10 hover:scale-[1.02] ${
          isExiting ? 'animate-apple-exit-all' : 'animate-apple-pop'
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

  const isExiting = notifStep === 5;
  const currentDesktopConstellation = DESKTOP_CONSTELLATIONS[batchCycle % DESKTOP_CONSTELLATIONS.length];
  const currentMobileConstellation = MOBILE_CONSTELLATIONS[batchCycle % MOBILE_CONSTELLATIONS.length];

  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden">
      
      {/* =========================================================================
          DESKTOP 4 POPUPS:
          - Appear One-by-One in random, varied locations across the canvas (never just 4 corners!)
          - Disappear All Together Simultaneously
          - In every cycle, a completely new constellation of coordinates is used
          ========================================================================= */}
      
      {/* Desktop Popup 1 */}
      {notifStep >= 1 && (
        <div
          key={`batch-${batchCycle}-c1`}
          style={currentDesktopConstellation[0].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 0) % allAppleNotifications.length],
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Desktop Popup 2 */}
      {notifStep >= 2 && (
        <div
          key={`batch-${batchCycle}-c2`}
          style={currentDesktopConstellation[1].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 1) % allAppleNotifications.length],
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Desktop Popup 3 */}
      {notifStep >= 3 && (
        <div
          key={`batch-${batchCycle}-c3`}
          style={currentDesktopConstellation[2].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 2) % allAppleNotifications.length],
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* Desktop Popup 4 */}
      {notifStep >= 4 && (
        <div
          key={`batch-${batchCycle}-c4`}
          style={currentDesktopConstellation[3].style}
          className="hidden md:flex absolute select-none pointer-events-none transition-all duration-500 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 3) % allAppleNotifications.length],
            '',
            false,
            isExiting
          )}
        </div>
      )}

      {/* =========================================================================
          MOBILE 4 POPUPS:
          - Appear One-by-One just like PC, floating in safe margins around the headline!
          - Shorter & ultra-compact pills (Icon + Title only, description/timestamps removed)
          - All 4 visible on screen, then disappear together simultaneously
          ========================================================================= */}
      
      {/* Mobile Popup 1 (Top Upper Margin) */}
      {notifStep >= 1 && (
        <div
          key={`m-batch-${batchCycle}-c1`}
          style={currentMobileConstellation[0].style}
          className="md:hidden absolute select-none pointer-events-none transition-all duration-300 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 0) % allAppleNotifications.length],
            '',
            true,
            isExiting
          )}
        </div>
      )}

      {/* Mobile Popup 2 (Top Lower Margin) */}
      {notifStep >= 2 && (
        <div
          key={`m-batch-${batchCycle}-c2`}
          style={currentMobileConstellation[1].style}
          className="md:hidden absolute select-none pointer-events-none transition-all duration-300 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 1) % allAppleNotifications.length],
            '',
            true,
            isExiting
          )}
        </div>
      )}

      {/* Mobile Popup 3 (Bottom Upper Margin) */}
      {notifStep >= 3 && (
        <div
          key={`m-batch-${batchCycle}-c3`}
          style={currentMobileConstellation[2].style}
          className="md:hidden absolute select-none pointer-events-none transition-all duration-300 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 2) % allAppleNotifications.length],
            '',
            true,
            isExiting
          )}
        </div>
      )}

      {/* Mobile Popup 4 (Bottom Lower Margin) */}
      {notifStep >= 4 && (
        <div
          key={`m-batch-${batchCycle}-c4`}
          style={currentMobileConstellation[3].style}
          className="md:hidden absolute select-none pointer-events-none transition-all duration-300 z-10"
        >
          {renderCard(
            allAppleNotifications[(batchOffset + 3) % allAppleNotifications.length],
            '',
            true,
            isExiting
          )}
        </div>
      )}

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
