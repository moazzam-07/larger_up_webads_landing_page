import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Are these leads genuinely affluent homeowners, or just tire-kickers asking for cheap ₹1L modular carpentry?',
    answer: 'They are strictly pre-qualified high-net-worth homeowners. We never run generic "get a free quote" ads that attract bargain hunters. Instead, our campaigns target verified buyers in premier Tier-1 developments (e.g. DLF, Lodha, Prestige, Sobha). Before an appointment is scheduled on your calendar, the prospect must complete our multi-step qualification quiz where they declare a minimum project budget of ₹15L–₹50L+, property possession timeline, and floor plan. Anyone seeking discount modular carpentry is automatically filtered out.',
  },
  {
    question: 'How is LargerUp fundamentally different from Justdial, Sulekha, IndiaMART, or generic digital agencies?',
    answer: 'Three non-negotiable differences: (1) Exclusivity: Justdial sells a single shared lead via SMS to 8–10 contractors simultaneously, triggering an instant price war. LargerUp builds a private acquisition engine where 100% of the leads belong exclusively to your studio. (2) Pre-Qualification: Generic agencies charge retainers to bring you empty Instagram "likes" and student followers. We focus entirely on pre-scheduled design consultations with verified homeowners. (3) Territory Caps: We lock out your competitors by partnering with a maximum of 3 studios per metro.',
  },
  {
    question: 'What ad spend budget is required for Tier-1 cities like Mumbai, Delhi NCR, and Bangalore?',
    answer: 'In Tier-1 Indian metros, we recommend allocating ₹25,000 to ₹45,000 per month in Meta/Instagram ad spend. Because our qualification engine operates with high intent, this budget typically yields between 14 to 22 pre-qualified consultations every month. Since your average closed turnkey project is ₹25 Lakhs to ₹60 Lakhs, closing even a single client from that pipeline pays for your entire ad spend and fee for the year several times over.',
  },
  {
    question: 'Our studio specializes in bespoke luxury interiors. Will running ads cheapen our architectural brand?',
    answer: 'Not the way we do it. We do not use loud, flashing "SALE 20% OFF" banners. Instead, our creative team acts as architectural curators: we take your high-resolution site photography, walkthrough videos, and material palettes, packaging them into editorial, magazine-grade case studies that look at home in Architectural Digest. This actually elevates your studio as the undisputed luxury authority in your city.',
  },
  {
    question: 'How much time do I or my team have to commit? We are on active construction sites all day.',
    answer: 'Less than 30 minutes a week. LargerUp is a completely done-for-you client acquisition engine. We handle the campaign architecture, targeting, copy, interactive qualification funnel, and 2-way WhatsApp appointment reminders. Your only job is to open your calendar, show up to the pre-scheduled site visits and discovery calls, and do what you do best: design and close high-ticket projects.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open for Hormozi style immediate proof

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Top 5 Questions Answered</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Frequently asked questions.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          Everything you need to know about partnering with LargerUp, territory locks, and our qualification mechanics.
        </p>
      </div>

      {/* Accordion List in Mobbin faq-row style */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-canvas-soft border border-hairline-soft rounded-2xl overflow-hidden transition-all duration-200 hover:border-hairline"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-semibold text-ink text-base sm:text-lg transition-colors focus:outline-none"
              >
                <span className="leading-snug">{faq.question}</span>
                <div
                  className={`w-7 h-7 rounded-full bg-white border border-hairline flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-ink text-white' : 'text-ink'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-ink/80 font-light leading-relaxed animate-fadeIn border-t border-hairline-soft/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

