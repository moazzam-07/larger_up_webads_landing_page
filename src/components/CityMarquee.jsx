import React from 'react';
import { Building2, MapPin } from 'lucide-react';

const developments = [
  { name: 'DLF The Camellias', city: 'Gurugram', avgTicket: '₹1.2 Cr+' },
  { name: 'Lodha World Towers', city: 'South Mumbai', avgTicket: '₹95L+' },
  { name: 'Prestige Kingfisher Towers', city: 'Bangalore', avgTicket: '₹1.1 Cr+' },
  { name: 'Oberoi Three Sixty West', city: 'Worli, Mumbai', avgTicket: '₹1.5 Cr+' },
  { name: 'Sobha Palm Court', city: 'Yelahanka, BLR', avgTicket: '₹45L+' },
  { name: 'My Home Bhooja', city: 'Hitec City, HYD', avgTicket: '₹60L+' },
  { name: 'Panchshil One North', city: 'Kalyani Nagar, Pune', avgTicket: '₹55L+' },
  { name: 'Godrej Woods', city: 'Noida Sector 43', avgTicket: '₹50L+' },
];

export default function CityMarquee() {
  return (
    <div className="w-full border-y border-hairline py-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-muted font-medium">
        <span className="uppercase tracking-wider">
          Recent Luxury Developments Won by Our Partner Studios
        </span>
        <span className="hidden sm:inline-block">Tier-1 Metros: Mumbai • Delhi NCR • Bangalore • Hyderabad • Pune</span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right subtle gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {[...developments, ...developments].map((dev, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-canvas-soft border border-hairline-soft px-4 py-2.5 rounded-full whitespace-nowrap group hover:border-ink transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-white border border-hairline flex items-center justify-center text-ink squircle">
                <Building2 className="w-3.5 h-3.5 text-ink" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-ink">{dev.name}</span>
                <span className="text-xs text-muted font-normal">({dev.city})</span>
              </div>
              <span className="text-[11px] font-semibold text-ink bg-white px-2 py-0.5 rounded-full border border-hairline">
                {dev.avgTicket}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

