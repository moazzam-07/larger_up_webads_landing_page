import React from 'react';
import { ExternalLink } from 'lucide-react';

export const clientBrands = [
  {
    name: 'Wizspace Interior',
    tagline: 'Turnkey Architecture',
    url: 'https://wizspaceinterior.com',
  },
  {
    name: 'DA Interiors',
    tagline: 'Bespoke Living',
    url: 'https://dainterior.in',
  },
  {
    name: 'LUXHOME Pvt. Ltd.',
    tagline: 'Ultra-Luxury Penthouses',
    url: 'https://luxihome.in',
  },
  {
    name: 'Deco Perfect',
    tagline: 'Turnkey Flats & Renovation',
    url: 'https://decoperfect.com',
  },
];

export default function BrandSlider() {
  // Repeat list 4 times for smooth infinite loop
  const repeatedBrands = [...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands];

  return (
    <div className="w-full pt-10 pb-6 overflow-hidden border-y border-hairline bg-canvas-soft/40">
      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted">
          Powering Acquisition For Kolkata's Leading Design Firms
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-1">
          {repeatedBrands.map((brand, idx) => (
            <a
              key={idx}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-hairline bg-canvas hover:border-ink hover:bg-white transition-all shadow-2xs whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-ink/70 group-hover:bg-ink transition-colors" />
              <span className="text-xs sm:text-sm font-bold text-ink tracking-tight group-hover:text-black">
                {brand.name}
              </span>
              <span className="text-[10px] text-muted font-normal border-l border-hairline pl-2">
                {brand.tagline}
              </span>
              <ExternalLink className="w-3 h-3 text-muted/60 group-hover:text-ink transition-colors ml-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
