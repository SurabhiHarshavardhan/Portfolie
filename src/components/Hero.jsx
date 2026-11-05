import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, MapPin, Award, CheckCircle2, Zap } from 'lucide-react';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function Hero({ onOpenResume }) {
  const titles = [
    'ECE Graduate',
    'IoT & Embedded Systems',
    'Deep Learning Researcher',
    'Hardware-Software Architect',
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = titles[titleIdx];
    let timer;
    if (!isDeleting && displayText.length < target.length) {
      timer = setTimeout(() => setDisplayText(target.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === target.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => setDisplayText(target.slice(0, displayText.length - 1)), 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIdx]);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden">
      {/* Multitone Glowing Cosmic Aura Mesh */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full bg-gradient-to-tr from-[#7c3aed]/20 via-[#6366f1]/15 to-[#db2777]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full bg-gradient-to-bl from-[#06b6d4]/15 via-[#8b5cf6]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Layout: Image on LEFT (Col 1-5), Content on RIGHT (Col 6-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          
          {/* ──── LEFT SIDE: PROFILE PHOTO WITH GRADIENT GLOSS HALO ──── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
            <div className="relative group w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
              
              {/* Multitone Gradient Glow Halo */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#8b5cf6] via-[#06b6d4] to-[#f43f5e] rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 sm:p-3 border border-purple-500/30 shadow-2xl">
                
                {/* Photo viewport */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0a0a14]">
                  <img
                    src={profilePhoto}
                    alt="Surabhi Harshavardhan"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white/90">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px]">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      Chennai / Tirupathi
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] shadow-lg shadow-purple-600/40">
                      B.Tech ECE
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating CGPA Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 -right-3 sm:-right-4 glass-aurora px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center font-bold text-white text-xs">
                  <Award className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Saveetha CGPA</div>
                  <div className="text-sm sm:text-base font-extrabold text-white">7.38 <span className="text-xs font-normal text-white/60">/ 10</span></div>
                </div>
              </div>

            </div>
          </div>

          {/* ──── RIGHT SIDE: HERO CONTENT ──── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left order-2">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shimmer-badge border border-purple-500/30 text-xs font-semibold text-white/90 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
              <span>Available for Engineering Roles & Innovations</span>
            </div>

            {/* Main Name Heading with Multitone Gradient */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="aurora-gradient-text">
                  Surabhi Harshavardhan
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-medium tracking-wider text-purple-200/50 uppercase">
                SURABHI KAMESH SRI SURYA HARSHAVARDHAN
              </p>
            </div>

            {/* Typewriter Title */}
            <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
              <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-purple-500/25 inline-flex items-center gap-2 text-sm sm:text-lg font-bold text-white">
                <span className="text-purple-400 font-mono">&gt;</span>
                <span>{displayText}</span>
                <span className="w-1.5 h-4 sm:h-5 bg-gradient-to-b from-purple-400 to-rose-400 animate-pulse rounded-full" />
              </div>
            </div>

            {/* Bio summary paragraph */}
            <p className="text-white/75 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Electronics and Communication Engineering graduate with strong fundamentals in digital electronics, embedded systems, and IoT. Experienced in building machine learning healthcare diagnostics (CNN & RNN) and autonomous robotic systems.
            </p>

            {/* Quick Skills Badges with Subtle Gradient Accents */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
              {['Python', 'Embedded C', 'IoT Architecture', 'Deep CNN & RNN', 'SVM', 'Robotics'].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-[11px] sm:text-xs font-semibold text-white/80 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="btn-aurora flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white tracking-wide"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-bold text-white transition-all hover:border-purple-400/50"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Compact Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-purple-400">7.38</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">B.Tech CGPA</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-cyan-400">3+</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">Core Projects</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-rose-400">4</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">Languages</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-white">2026</div>
                <div className="text-[10px] sm:text-[11px] text-white/50 font-medium">Graduate</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
