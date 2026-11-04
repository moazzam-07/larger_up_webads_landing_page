import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Will digital campaigns actually work for an interior design studio?',
    answer: 'Yes, when done properly. Most agencies fail because they run generic discount ads that attract bargain hunters and students. We focus exclusively on homeowners who recently bought apartments or villas in your city. Our qualification process filters out anyone without an approved budget before they can book a call with your studio.',
  },
  {
    question: 'How much do you charge for your services?',
    answer: 'We do not offer generic cookie-cutter pricing because every interior studio has different project capacity and target ticket sizes. We customize our system based on your goals. Book a free consultation call with us to discuss your studio, and we will outline the exact roadmap and investment.',
  },
  {
    question: 'How is LargerUp different from Justdial, Sulekha, or generic marketing agencies?',
    answer: 'Justdial sells the exact same inquiry to 8–10 contractors at once, creating an immediate price race to the bottom. Generic digital agencies charge retainers for useless vanity metrics like Instagram likes and followers. LargerUp builds a 100% private acquisition engine where leads are exclusive to your studio and pre-qualified for budget and handover date.',
  },
  {
    question: 'How soon will we start getting qualified leads?',
    answer: 'Our onboarding and campaign setup takes approximately 7 days. Once live, pre-qualified homeowner consultations typically begin appearing on your calendar within 14 days of launch.',
  },
  {
    question: 'Do I or my team have to spend hours managing this?',
    answer: 'No. LargerUp handles the entire acquisition engine end-to-end — from ad strategy and targeting to qualification funnels and WhatsApp appointment reminders. Your studio only focuses on attending the pre-scheduled site visits and closing projects.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          Frequently asked questions.
        </h2>
      </div>

      {/* Accordion Rows */}
      <div className="space-y-2.5 sm:space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-canvas-soft border border-hairline-soft rounded-2xl overflow-hidden transition-all duration-200 hover:border-hairline"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 font-semibold text-ink text-sm sm:text-base transition-colors focus:outline-none"
              >
                <span className="leading-snug pr-2">{faq.question}</span>
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-hairline flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-ink text-white border-ink' : 'text-ink'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink/80 font-light leading-relaxed border-t border-hairline-soft/60 pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
