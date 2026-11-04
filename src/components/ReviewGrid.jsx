import React from 'react';
import { Star, MapPin } from 'lucide-react';

const studioReviews = [
  {
    author: 'Ar. Ananya Sen',
    role: 'Principal Architect',
    studio: 'Sen & Associates',
    location: 'Alipore, Kolkata',
    review: 'The quality of homeowner inquiries is far better than any portal we used in the past. In our first month, we booked 8 site consultations and closed 2 full-home turnkey projects in South Kolkata.',
  },
  {
    author: 'Subhashish & Deblina Roy',
    role: 'Founders',
    studio: 'Bespoke Living Spaces',
    location: 'Salt Lake City, Kolkata',
    review: 'The best part is not having to deal with people asking for cheap discount carpentry. The clients who come through LargerUp are genuine homeowners with realistic budgets and clear timelines.',
  },
  {
    author: 'Tanvi Mehra',
    role: 'Creative Director',
    studio: 'Minimalist Interiors',
    location: 'Ballygunge, Kolkata',
    review: 'LargerUp took our existing site photography and turned it into clean campaigns. We stopped relying solely on friend referrals and now have steady meetings booked every week.',
  },
  {
    author: 'Siddharth Nambiar',
    role: 'Design Director',
    studio: 'Studio Nambiar',
    location: 'Indiranagar, Bangalore',
    review: 'Setup was completed within 8 days, and our first serious consultation happened in the second week. It has given our design studio genuine predictability.',
  },
];

export default function ReviewGrid() {
  return (
    <section id="reviews" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-hairline">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 bg-canvas-soft border border-hairline px-3 py-1 rounded-full text-xs font-semibold text-ink uppercase tracking-wider mb-3.5">
          <span>Client Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-2.5 sm:mb-3 leading-tight">
          What studio owners say about LargerUp.
        </h2>
        <p className="text-xs sm:text-base text-muted font-light leading-relaxed">
          From boutique studios to turnkey design firms, here is how founders describe the experience.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {studioReviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-canvas border border-hairline rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:border-ink transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 sm:pb-4 border-b border-hairline-soft mb-3 sm:mb-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-ink">{rev.author}</h4>
                  <p className="text-xs text-muted font-medium">{rev.role} • {rev.studio}</p>
                  <p className="text-[11px] text-muted flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-ink" />
                    <span>{rev.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-ink text-ink" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink/80 font-light leading-relaxed italic">
                "{rev.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
