import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Compass,
  Star
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Structured progression through rigorous engineering and analytical disciplines
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 z-10 shadow-lg shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card on active side */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Degree / Title */}
                      <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="space-y-1 mb-4 text-xs font-mono">
                        <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="text-slate-400 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Score Chip */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono mb-4">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-400">Score / Grade:</span>
                        <span className="text-emerald-400 font-bold">{item.score}</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 border-t border-slate-800/80 pt-3">
                        {item.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

