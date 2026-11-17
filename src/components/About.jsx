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
    <section id="about" className="py-16 sm:py-24 relative border-t border-slate-200/80 bg-gradient-to-b from-slate-100/80 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold text-slate-700 tracking-wider uppercase shadow-sm">
            <Target className="w-3.5 h-3.5 text-slate-600" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold pearl-gradient-text">
            Engineering Journey & Objective
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Harmonizing digital hardware circuits with advanced machine learning
          </p>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Bio Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 space-y-4 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                Professional Summary
              </h3>

              <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  I am <strong className="text-slate-950 font-semibold">{personal.fullName}</strong>, an Electronics and Communication Engineering (ECE) graduate from Saveetha School of Engineering Chennai with strong fundamentals in digital electronics, signal processing, and embedded systems.
                </p>
                <p>
                  Proficient in <span className="text-slate-950 font-semibold">C and Python programming</span>, with practical knowledge of IoT and embedded application development through academic and personal projects. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications.
                </p>
                <p>
                  Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
                </p>
              </div>

              {/* Fast Facts Badge Grid */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Saveetha School of Engg (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">B.Tech Electronics & Comm. Engg</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Zap className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">IoT & Embedded Hardware</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Brain className="w-4 h-4 text-slate-900 flex-shrink-0" />
                  <span className="text-slate-900 font-bold">GenAI, Deep Learning & Robotics</span>
                </div>
              </div>
            </div>

            {/* Objective Banner */}
            <div className="p-4 sm:p-5 rounded-2xl glass-pearl border border-slate-300 text-slate-800 text-xs sm:text-sm leading-relaxed shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600 block mb-1">
                Career Objective
              </span>
              Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">
              Areas of Specialization
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {areasOfInterest.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Cpu;
                return (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-slate-200 flex items-start gap-3.5 group hover:border-slate-400"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 group-hover:scale-110 transition-transform flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
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
