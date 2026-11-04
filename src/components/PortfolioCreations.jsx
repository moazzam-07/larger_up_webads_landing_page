import React from 'react';
import { ExternalLink } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 'wizspace',
    name: 'Wizspace Interior',
    url: 'https://wizspaceinterior.com',
    category: 'Turnkey Architecture',
    location: 'Kolkata',
    image: '/portfolio/portfolio-1.png',
    scope: 'Bespoke residential & commercial turnkey interior design engine with instant estimate calculator.',
  },
  {
    id: 'da-interiors',
    name: 'DA Interiors',
    url: 'https://dainterior.in',
    category: 'Bespoke Luxury Living',
    location: 'Kolkata',
    image: '/portfolio/portfolio-2.png',
    scope: 'Curated 3D panoramic showroom showcasing high-value apartment and duplex transformations.',
  },
  {
    id: 'luxhome',
    name: 'LUXHOME Pvt. Ltd.',
    url: 'https://luxihome.in',
    category: 'Ultra-Luxury Penthouses',
    location: 'Kolkata',
    image: '/portfolio/portfolio-3.png',
    scope: 'Architectural penthouses, standalone villas, and ultra-high-ticket residential design client acquisition.',
  },
  {
    id: 'deco-perfect',
    name: 'Deco Perfect',
    url: 'https://decoperfect.com',
    category: 'Turnkey Flats & Renovation',
    location: 'Kolkata',
    image: '/portfolio/portfolio-4.png',
    scope: 'Modern 2 & 3 BHK flats and full-home renovations with guaranteed handover timelines.',
  },
];

export default function PortfolioCreations() {
  return (
    <section id="creations" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-hairline">
      {/* Clean, High-End Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
        <div>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted block mb-2">
            Selected Work
          </span>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-ink tracking-tight uppercase leading-none font-sans">
            CREATIONS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted font-light max-w-sm sm:text-right leading-relaxed">
          Client acquisition engines & luxury digital experiences built for interior studios in Kolkata.
        </p>
      </div>

      {/* 2-Column Responsive Grid of Built Portfolio Websites (Direct link on click - No popup) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {portfolioProjects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99] shadow-sm hover:shadow-md"
            title={`Visit ${project.name} (${project.url})`}
          >
            {/* Website Preview Image Container */}
            <div className="relative aspect-[16/9] bg-field overflow-hidden border-b border-hairline">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {/* Minimal Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5">
                <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Open live website ↗
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shadow">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-canvas">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight group-hover:text-ink-soft transition-colors flex items-center gap-1.5">
                    <span>{project.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-muted font-medium">
                    {project.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed line-clamp-2">
                  {project.scope}
                </p>
              </div>

              {/* Bottom Specs & Direct Action Link */}
              <div className="pt-3.5 mt-3.5 border-t border-hairline-soft flex items-center justify-between text-xs">
                <span className="text-muted text-[11px] sm:text-xs font-light">
                  {project.category}
                </span>
                <span className="font-semibold text-ink group-hover:underline inline-flex items-center gap-0.5">
                  Open website ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
