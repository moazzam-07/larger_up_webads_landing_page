import React, { useState } from 'react';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 'wizspace',
    name: 'Wizspace Interior',
    headline: 'Bespoke Residential & Commercial Spaces',
    category: 'Turnkey Architecture',
    location: 'Kolkata',
    image: '/portfolio/portfolio-1.png',
    scope: 'Bespoke residential & commercial turnkey interior design engine with instant estimate calculator.',
    specs: ['Complete Turnkey Execution', 'Lead Qualification Funnel', 'High-Converting Estimate Engine'],
  },
  {
    id: 'da-interiors',
    name: 'DA Interiors',
    headline: 'Architecture & Bespoke Living',
    category: 'Bespoke Luxury Living',
    location: 'Kolkata',
    image: '/portfolio/portfolio-2.png',
    scope: 'Curated 3D panoramic showroom showcasing high-value apartment and duplex transformations.',
    specs: ['Panoramic 3D Visualizer', 'Direct Consultation Booking', 'Luxury Homeowner Positioning'],
  },
  {
    id: 'luxhome',
    name: 'LUXHOME Pvt. Ltd.',
    headline: 'Best Luxury Interior Designers in Kolkata',
    category: 'Ultra-Luxury Penthouses',
    location: 'Kolkata',
    image: '/portfolio/portfolio-3.png',
    scope: 'Architectural penthouses, standalone villas, and ultra-high-ticket residential design client acquisition.',
    specs: ['₹50L+ Project Pre-Screening', 'Interactive Virtual Walkthrough', 'Automated Calendar Sync'],
  },
  {
    id: 'deco-perfect',
    name: 'Deco Perfect',
    headline: 'Interior Design & Turnkey Execution',
    category: 'Turnkey Flats & Renovation',
    location: 'Kolkata',
    image: '/portfolio/portfolio-4.png',
    scope: 'Modern 2 & 3 BHK flats and full-home renovations with guaranteed handover timelines.',
    specs: ['Rapid 45-75 Day Handover Angle', 'Zero Cost Overrun Guarantee', 'Direct WhatsApp Inquiries'],
  },
];

export default function PortfolioCreations({ onOpenForm }) {
  const [activeProject, setActiveProject] = useState(null);

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

      {/* 2-Column Responsive Grid of Built Portfolio Websites */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group bg-canvas border border-hairline hover:border-ink rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99] shadow-sm hover:shadow-md"
          >
            {/* Website Preview Image Container (Clean, Unobstructed) */}
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
                  Click to view full preview ↗
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
                  <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight group-hover:text-ink-soft transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-muted font-medium">
                    {project.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed line-clamp-2">
                  {project.scope}
                </p>
              </div>

              {/* Bottom Specs & View Action */}
              <div className="pt-3.5 mt-3.5 border-t border-hairline-soft flex items-center justify-between text-xs">
                <span className="text-muted text-[11px] sm:text-xs font-light">
                  {project.category}
                </span>
                <span className="font-semibold text-ink group-hover:underline inline-flex items-center gap-0.5">
                  View preview ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen Preview Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-canvas border border-hairline w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-hairline flex items-center justify-between bg-canvas-soft sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-ink leading-tight">
                    {activeProject.name}
                  </h4>
                  <p className="text-[11px] text-muted font-medium">
                    {activeProject.category} • {activeProject.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-hairline hover:bg-canvas-soft flex items-center justify-center text-ink transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-3 sm:p-6 bg-canvas-soft/50">
              <div className="rounded-2xl overflow-hidden border border-hairline shadow-md bg-canvas">
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-auto max-h-[60vh] object-contain object-top"
                />
              </div>
            </div>

            {/* Modal Details & Action */}
            <div className="p-5 sm:p-7 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-canvas">
              <div>
                <p className="text-xs sm:text-sm text-ink/80 font-light max-w-lg leading-relaxed">
                  {activeProject.scope} Built and optimized for high-ticket client conversion in Tier-1 cities.
                </p>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {activeProject.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] bg-canvas-soft border border-hairline px-2.5 py-0.5 rounded-full text-ink font-medium"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full sm:w-auto flex justify-end shrink-0">
                <button
                  onClick={() => {
                    setActiveProject(null);
                    onOpenForm();
                  }}
                  className="w-full sm:w-auto bg-ink hover:bg-ink-soft text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all inline-flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                >
                  <span>Build One for My Studio</span>
                  <ArrowUpRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
