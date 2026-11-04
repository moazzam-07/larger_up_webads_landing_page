import React from 'react';
import { Star, ShieldCheck, MapPin, Building2 } from 'lucide-react';

const studioReviews = [
  {
    author: 'Ar. Ananya Deshmukh',
    role: 'Founder & Principal Architect',
    studio: 'Deshmukh & Associates',
    location: 'Koregaon Park, Pune',
    ticket: '₹55L Avg Contract',
    result: '4 Luxury Penthouse Projects Closed',
    review: 'The quality of leads is night-and-day compared to anything else in India. Every homeowner that walks into our studio has already reviewed our portfolio and knows our minimum project fee. We closed a 4,200 sq.ft duplex in Kalyani Nagar within 3 weeks of onboarding.',
    verified: true,
  },
  {
    author: 'Vikram & Natasha Reddy',
    role: 'Co-Founders',
    studio: 'UrbanLinea Architecture',
    location: 'Jubilee Hills, Hyderabad',
    ticket: '₹75L Avg Contract',
    result: '₹1.8 Cr Pipeline Added in Q2',
    review: 'Before LargerUp, we were sceptical about digital ads for high-end architecture. But their creative curation is genuinely world-class. It protects our design prestige while consistently feeding our calendar with high-net-worth NRI and business family consultations.',
    verified: true,
  },
  {
    author: 'Tanvi Mehra',
    role: 'Creative Director',
    studio: 'The Minimalist Room',
    location: 'GK-1, South Delhi',
    ticket: '₹40L Avg Contract',
    result: '100% Elimination of Tire-Kickers',
    review: 'The qualification quiz filters out everyone looking for discount modular carpentry. If a client does not have the budget, they are politely diverted. My design team now only spends time on genuine bespoke residential mandates.',
    verified: true,
  },
  {
    author: 'Siddharth Nambiar',
    role: 'Managing Director',
    studio: 'Studio Nambiar Spaces',
    location: 'Lavelle Road, Bangalore',
    ticket: '₹60L Avg Contract',
    result: '6 Exclusive Villas in 90 Days',
    review: 'LargerUp’s territory exclusivity was the clincher for us. Knowing that our competing studios in Bangalore cannot run the exact same campaign gave us unfair leverage. The ROI has exceeded 14x our investment.',
    verified: true,
  },
];

export default function ReviewGrid() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-4">
          <span>Studio Partner Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 leading-tight">
          Trusted by leading interior architects across India.
        </h2>
        <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
          From boutique ateliers to established turnkey studios, here is how founders describe the shift to LargerUp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studioReviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-canvas border border-hairline rounded-3xl p-7 flex flex-col justify-between hover:border-ink transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-hairline-soft mb-5">
                <div>
                  <h4 className="text-base font-bold text-ink">{rev.author}</h4>
                  <p className="text-xs text-muted font-medium">{rev.role} • {rev.studio}</p>
                  <p className="text-[11px] text-muted flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-ink" />
                    <span>{rev.location}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-[11px] font-bold text-ink bg-canvas-soft border border-hairline px-2.5 py-1 rounded-full">
                    {rev.ticket}
                  </span>
                  <span className="text-[10px] text-accent font-semibold mt-1">
                    {rev.result}
                  </span>
                </div>
              </div>

              <p className="text-sm text-ink/80 font-light leading-relaxed italic">
                "{rev.review}"
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-hairline-soft flex items-center justify-between text-xs text-muted">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-ink text-ink" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-ink">
                <ShieldCheck className="w-3.5 h-3.5 text-ink" />
                <span>Verified Studio Audit</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

