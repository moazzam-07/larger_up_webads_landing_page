import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenForm }) {
  return (
    <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center max-w-[1700px] mx-auto overflow-hidden bg-gradient-to-b from-[#e2ebf5] via-[#ece5f5] via-60% to-white">
      
      {/* Soft Ethereal Atmospheric Light Blooms */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] sm:w-[950px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-[#9fc2e6]/40 via-[#c9b7e9]/35 to-[#f3bddb]/30 rounded-full blur-[100px] sm:blur-[130px] -translate-y-6 pointer-events-none" />
      </div>

      {/* Glossy Frosted Glass Underlay Card (Matching Reference Widget) */}
      <div className="relative z-20 w-full max-w-[360px] xs:max-w-[440px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[1020px] mx-auto rounded-[32px] sm:rounded-[48px] p-7 xs:p-9 sm:p-14 md:p-16 lg:p-20 bg-white/45 backdrop-blur-3xl border border-white/70 shadow-[0_30px_70px_-15px_rgba(20,25,45,0.12),0_10px_30px_-10px_rgba(20,25,45,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all">
        
        {/* Specular Top Glass Sheen Overlay */}
        <div className="absolute inset-0 rounded-[32px] sm:rounded-[48px] bg-gradient-to-b from-white/50 via-white/10 to-transparent pointer-events-none" />

        {/* Dominant Headline */}
        <h1 className="relative z-10 text-[32px] xs:text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-black text-ink tracking-tight leading-[1.08] sm:leading-[1.08] mb-4 sm:mb-6 animate-blur-in delay-150">
          Get a Professional Website for Your Interior Design Business.
        </h1>

        {/* Subtitle / Description */}
        <p className="relative z-10 text-sm xs:text-base sm:text-lg md:text-xl text-ink/75 font-medium max-w-xl mx-auto mb-7 sm:mb-9 leading-relaxed animate-blur-in delay-200">
          Showcase your projects, build trust, and turn potential clients into enquiries.
        </p>

        {/* Primary CTA Button */}
        <div className="relative z-10 w-full flex justify-center animate-blur-in delay-300">
          <button
            onClick={onOpenForm}
            className="bg-ink hover:bg-ink-soft text-white text-xs sm:text-base font-semibold px-7 sm:px-11 py-3.5 sm:py-4 rounded-full transition-all inline-flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span>Get My Website for ₹7,000</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </button>
        </div>

      </div>
    </section>
  );
}
