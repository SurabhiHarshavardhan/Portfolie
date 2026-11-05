import React from 'react';
import { 
  Cpu, 
  Wifi, 
  Brain, 
  Bot, 
  Target, 
  Compass, 
  Zap, 
  CheckCircle,
  MapPin,
  GraduationCap,
  Award,
  ShieldCheck,
  QrCode
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function About() {
  const { personal, areasOfInterest } = portfolioData;

  const iconMap = {
    Wifi: Wifi,
    CircuitBoard: Cpu,
    Bot: Bot,
    Brain: Brain
  };

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-800/80 no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>DISCOVER MY PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Background & Philosophy
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Bridging low-level embedded hardware and high-level artificial intelligence
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Professional Summary</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-cyan-300 font-semibold">{personal.fullName}</strong>, an 
                  Electronics and Communication Engineering graduate with robust fundamentals in digital electronics, 
                  signal processing, and embedded systems architecture.
                </p>
                <p>
                  Proficient in <strong className="text-white">C and Python programming</strong>, I bring hands-on 
                  practical knowledge of IoT and embedded application development gained through rigorous academic research 
                  and autonomous hardware-software projects.
                </p>
                <p>
                  I am deeply passionate about architecting <span className="text-teal-300 font-medium">efficient hardware-software integrated solutions</span> and 
                  translating theoretical engineering concepts into real-world applications—from AI-driven medical parasite 
                  detection to autonomous court robotics.
                </p>
              </div>

              {/* Quick Info Matrix */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Saveetha School of Engg (2022–2026)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Chennai, TN & Tirupathi, AP</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Hardware + Machine Learning Focus</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>B.Tech CGPA: 7.38 / 10.0</span>
                </div>
              </div>

            </div>

            {/* Core Mission Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/40 border border-cyan-500/20 text-slate-300 text-sm">
              <span className="font-mono text-cyan-400 font-semibold uppercase text-xs tracking-wider block mb-1">
                Career Objective
              </span>
              Eager to apply technical skills in embedded systems and machine learning, continuously learn evolving technologies, and contribute meaningfully to high-impact engineering projects within a growth-oriented organization.
            </div>
          </div>

          {/* Right Column: Engineering ID Badge & Areas of Interest */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* High-Tech Engineer ID Card */}
            <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-cyan-400/80 flex-shrink-0 shadow-lg shadow-cyan-500/20">
                  <img
                    src={profilePhoto}
                    alt="Harshavardhan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900"></span>
                </div>
                <div className="space-y-1 font-mono">
                  <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold block">
                    ENGINEER CREDENTIAL
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Surabhi Harshavardhan
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    B.Tech ECE • Saveetha University
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>CGPA 7.38 / 10.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest Cards */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Areas of Interest & Specialization</span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {areasOfInterest.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || Cpu;
                  return (
                    <div
                      key={idx}
                      className="glass-panel-interactive p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                            {item.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
