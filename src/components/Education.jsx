import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-24 relative border-t border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e60039]/10 border border-[#e60039]/30 text-xs font-bold text-[#ff3366] tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            Education Timeline
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Structured foundation in electronics, analytical sciences, and computational engineering
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative">
          
          {/* Vertical Connecting Track */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#e60039] via-[#ff3366]/40 to-transparent hidden sm:block" />

          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-0 sm:pl-14 group"
            >
              {/* Glowing Timeline Node */}
              <div className="hidden sm:flex absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#050507] border-2 border-[#ff3366] items-center justify-center shadow-[0_0_12px_#ff3366]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#ff3366]/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff3366] block">
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {item.institution}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-2.5 py-1 rounded-lg bg-[#e60039]/15 border border-[#e60039]/30 text-white font-bold text-xs font-mono">
                      {item.score}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 font-medium mb-3">
                  {item.degree}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/50 mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#ff3366]" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#ff3366]" />
                    {item.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-white/10 pt-3">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3366] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
