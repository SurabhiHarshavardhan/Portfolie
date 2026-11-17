import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-24 relative border-t border-slate-200/80 bg-gradient-to-b from-slate-100/70 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold text-slate-700 tracking-wider uppercase shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold pearl-gradient-text">
            Education Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Structured foundation in electronics, analytical sciences, and computational engineering
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative">
          
          {/* Vertical Connecting Track */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-slate-800 via-slate-400 to-transparent hidden sm:block" />

          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-0 sm:pl-14 group"
            >
              {/* Timeline Node */}
              <div className="hidden sm:flex absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-white border-2 border-slate-800 items-center justify-center shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-400 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {item.institution}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-bold text-xs font-mono shadow-sm">
                      {item.score}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-semibold mb-3">
                  {item.degree}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-700" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-700" />
                    {item.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-slate-200 pt-3">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 flex-shrink-0 mt-0.5" />
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
