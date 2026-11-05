import React from 'react';
import { Target, Cpu, Wifi, Bot, Brain, GraduationCap, MapPin, CheckCircle2, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, areasOfInterest } = portfolioData;

  const iconMap = {
    Wifi: Wifi,
    CircuitBoard: Cpu,
    Bot: Bot,
    Brain: Brain,
  };

  return (
    <section id="about" className="py-16 sm:py-24 relative border-t border-white/5 bg-[#07070b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e60039]/10 border border-[#e60039]/30 text-xs font-bold text-[#ff3366] tracking-wider uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            Engineering Journey & Objective
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Harmonizing digital hardware circuits with advanced machine learning
          </p>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Bio Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3366]" />
                Professional Summary
              </h3>

              <div className="space-y-3 text-white/75 text-xs sm:text-sm leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">{personal.fullName}</strong>, an Electronics and Communication Engineering (ECE) graduate from Saveetha School of Engineering Chennai with strong fundamentals in digital electronics, signal processing, and embedded systems.
                </p>
                <p>
                  Proficient in <span className="text-[#ff3366] font-semibold">C and Python programming</span>, with practical knowledge of IoT and embedded application development through academic and personal projects. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications.
                </p>
                <p>
                  Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
                </p>
              </div>

              {/* Fast Facts Badge Grid */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <GraduationCap className="w-4 h-4 text-[#ff3366] flex-shrink-0" />
                  <span className="text-white/80">Saveetha School of Engg (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#ff3366] flex-shrink-0" />
                  <span className="text-white/80">Chennai, TN & Tirupathi, AP</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <Zap className="w-4 h-4 text-[#ff3366] flex-shrink-0" />
                  <span className="text-white/80">IoT & Embedded Hardware</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3366] flex-shrink-0" />
                  <span className="text-white/80">B.Tech CGPA: 7.38 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Objective Banner */}
            <div className="p-4 sm:p-5 rounded-2xl glass-crimson border border-[#e60039]/30 text-white/90 text-xs sm:text-sm leading-relaxed">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3366] block mb-1">
                Career Objective
              </span>
              Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
            </div>
          </div>

          {/* Right Column: Focus Areas (Adaptive Layout) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs uppercase font-bold text-white/50 tracking-widest pl-1">
              Areas of Specialization
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {areasOfInterest.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Cpu;
                return (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-white/5 flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-xl bg-[#e60039]/15 border border-[#e60039]/30 text-[#ff3366] flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
