import React from 'react';
import { Target, Filter, CalendarCheck2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Targeting Verified Homeowners',
    description: 'We run targeted campaigns reaching homeowners who recently purchased premium apartments, duplexes, or standalone villas in your city.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Pre-Screening Budgets & Floor Plans',
    description: 'Homeowners complete a qualification filter and assessment where they submit their property location, handover timeline, and project budget.',
    icon: Filter,
  },
  {
    number: '03',
    title: 'Direct Calendar & WhatsApp Booking',
    description: 'Qualified homeowners choose a consultation time that syncs directly into your calendar, backed by automated WhatsApp reminders.',
    icon: CalendarCheck2,
  },
];

export default function SystemMechanism() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-2.5 sm:mb-3 leading-tight">
          How we bring qualified interior clients in 14 days.
        </h2>
        <p className="text-xs sm:text-base text-muted font-light leading-relaxed">
          A clear, straightforward system designed to consistently bring serious homeowners to your studio.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-canvas border border-hairline rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:border-ink transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-hairline-soft">
                  <span className="text-xl sm:text-2xl font-bold text-ink/30 font-mono">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-canvas-soft border border-hairline flex items-center justify-center text-ink squircle">
                    <Icon className="w-4 h-4 text-ink" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-ink leading-snug mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
