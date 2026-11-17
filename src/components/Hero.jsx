import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function Hero() {
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
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80">
      {/* Soft Grey & Pearl Ambient Gradient Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full bg-gradient-to-tr from-slate-200/50 via-slate-100/40 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-[450px] h-72 sm:h-[450px] rounded-full bg-gradient-to-bl from-slate-200/60 via-slate-100/30 to-transparent blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Layout: Image on LEFT (Col 1-5), Content on RIGHT (Col 6-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          
          {/* ──── LEFT SIDE: TRANSPARENT CUTOUT PROFILE PHOTO (NO BOX / NO FRAME) ──── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[410px] flex justify-center items-end">
              <img
                src={profilePhoto}
                alt="Surabhi Harshavardhan"
                className="w-full h-auto object-contain select-none drop-shadow-[0_16px_28px_rgba(15,23,42,0.10)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
            </div>
          </div>

          {/* ──── RIGHT SIDE: HERO CONTENT ──── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left order-2">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shimmer-badge border border-slate-300/80 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" />
              <span>Available for Engineering Roles & Innovations</span>
            </div>

            {/* Main Name Heading with Pearl-to-Slate Gradient */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="pearl-gradient-text">
                  Surabhi Harshavardhan
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                SURABHI KAMESH SRI SURYA HARSHAVARDHAN
              </p>
            </div>

            {/* Typewriter Title */}
            <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
              <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-slate-200/90 inline-flex items-center gap-2 text-sm sm:text-lg font-bold text-slate-800 shadow-sm">
                <span className="text-slate-500 font-mono">&gt;</span>
                <span>{displayText}</span>
                <span className="w-1.5 h-4 sm:h-5 bg-slate-800 animate-pulse rounded-full" />
              </div>
            </div>

            {/* Bio summary paragraph */}
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Electronics and Communication Engineering graduate experienced in full-stack GenAI assessment portals (Groq LLaMA-3.3-70B), medical deep learning diagnostics (CNN & RNN), and autonomous robotics with Raspberry Pi 5.
            </p>

            {/* Action Buttons (Resume button removed!) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="btn-pearl-dark flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-pearl-light flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide"
              >
                <Send className="w-4 h-4 text-slate-600" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Compact Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-slate-900">4</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Flagship Projects</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-slate-800">10+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 foo istead as gradient glow with mact ui nt-semibold">Tech Stacks</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-slate-800">4</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Languages</div>
              </div>
              <div className="glass-card p-2.5 sm:p-3 rounded-xl">
                <div className="text-base sm:text-xl font-display font-black text-slate-700">2026</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Graduation</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
