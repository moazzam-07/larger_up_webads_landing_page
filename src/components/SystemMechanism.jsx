import React from 'react';
import { Target, Filter, CalendarCheck2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Affluent Geofencing & Cinematic Creative Direction',
    subtitle: 'We pinpoint high-net-worth homeowners right when they receive possession.',
    description: 'We run hyper-targeted Meta & Instagram ad campaigns strictly geofenced around premium luxury developments (e.g. DLF, Lodha, Sobha, Prestige) and high-value pincodes. Rather than discount ads, we package your studio portfolio into cinematic case studies that command authority.',
    metric: 'Target: ₹15L–₹1.5Cr+ Residential Tickets',
    icon: Target,
  },
  {
    number: '02',
    title: 'The Proprietary Budget-Filter Qualification Quiz',
    subtitle: 'Eliminating tire-kickers and low-margin shoppers before they can speak to you.',
    description: 'When homeowners click your ad, they land on a studio-branded qualification funnel. They must input their carpet area, possession date, floor plan, and select their minimum budget (₹15L to ₹1Cr+). Any inquiries below your minimum ticket size are automatically disqualified.',
    metric: 'Zero Leads Under ₹15 Lakhs Allowed',
    icon: Filter,
  },
  {
    number: '03',
    title: 'Direct-to-Calendar Booking & WhatsApp Nurture',
    subtitle: 'Pre-sold consultations scheduled directly into your design schedule.',
    description: 'Qualified prospects receive your studio lookbook and schedule a discovery meeting straight into your calendar. Our 2-way WhatsApp automation sends confirmation reminders, reducing no-shows by 88% so you only spend time on qualified design presentations.',
    metric: '88% Show-Up Rate on Site Consults',
    icon: CalendarCheck2,
  },
];

export default function SystemMechanism({ onOpenForm }) {
  return (
    <section id="mechanism" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <span>The Proprietary Framework</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          How we engineer a high-ticket interior pipeline in 14 days.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          No magic tricks. A predictable, mathematically engineered client acquisition system designed specifically for the Indian luxury design market.
        </p>
      </div>

      {/* 3 Step Cards Grid in Mobbin Design Language */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-canvas border border-hairline rounded-3xl p-7 flex flex-col justify-between hover:border-ink transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline-soft">
                  <span className="text-3xl font-extrabold text-ink/20 font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-canvas-soft border border-hairline flex items-center justify-center text-ink squircle">
                    <Icon className="w-5 h-5 text-ink" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-muted uppercase tracking-wider mb-4">
                  {step.subtitle}
                </p>
                <p className="text-sm text-ink/70 font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-hairline-soft">
                <span className="inline-block bg-canvas-soft text-ink text-xs font-semibold px-3 py-1 rounded-full border border-hairline">
                  {step.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Quote Banner */}
      <div className="bg-canvas-soft border border-hairline rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">Guaranteed Territory Exclusivity</p>
          <h4 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
            We partner with a maximum of 3 non-competing studios per city.
          </h4>
          <p className="text-sm text-muted font-light mt-2 leading-relaxed">
            We will never run competing ads in the same micro-market. When you lock in your city territory with LargerUp, your competitors are locked out.
          </p>
        </div>
        <button
          onClick={onOpenForm}
          className="bg-ink hover:bg-ink-soft text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shrink-0 active:scale-95"
        >
          Check Territory Status ↗
        </button>
      </div>
    </section>
  );
}

