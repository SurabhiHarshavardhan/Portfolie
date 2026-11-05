import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Terminal, 
  ArrowRight, 
  Download, 
  Activity, 
  Sparkles, 
  Wifi, 
  Bot, 
  CheckCircle2, 
  Radio, 
  Layers,
  Code,
  ShieldCheck,
  Zap,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [chipCycle, setChipCycle] = useState(0);
  const [chipFrequency, setChipFrequency] = useState(240); // MHz

  // Typing effect
  useEffect(() => {
    const currentTagline = personal.taglines[taglineIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentTagline.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTagline.slice(0, displayText.length + 1));
      }, 55);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTagline.slice(0, displayText.length - 1));
      }, 30);
    } else if (!isDeleting && displayText.length === currentTagline.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % personal.taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex, personal.taglines]);

  // Live MCU cycle simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setChipCycle((c) => (c + 1) % 1000000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden circuit-grid no-scrollbar">
      {/* Dynamic ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner max-w-full">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">ECE GRADUATE • SAVEETHA CHENNAI 2022–2026</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                  {personal.displayName}
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
                {personal.fullName}
              </p>
            </div>

            {/* Dynamic Typing Title */}
            <div className="min-h-12 flex items-center">
              <div className="font-mono text-xs sm:text-lg text-cyan-300 flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-cyan-500/30 shadow-inner max-w-full">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span className="truncate">{displayText}</span>
                <span className="w-2 h-4 sm:h-5 bg-cyan-400 animate-pulse inline-block flex-shrink-0"></span>
              </div>
            </div>

            {/* Core Summary Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Electronics & Communication Engineering graduate passionate about bridging hardware and intelligent software. 
              Experienced in <span className="text-cyan-300 font-semibold">IoT sensor networks</span>, <span className="text-cyan-300 font-semibold">C & Python</span> embedded applications, and cutting-edge <span className="text-teal-300 font-semibold">Deep Learning (CNN & RNN)</span> models for medical diagnostics and autonomous robotics.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {['Python', 'Embedded C', 'IoT Architecture', 'Deep Learning (CNN/RNN)', 'SVM', 'Digital Electronics', 'Robotics'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm font-mono shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-xs sm:text-sm font-mono shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>

              <a
                href="#terminal"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-mono transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Terminal</span>
              </a>
            </div>

            {/* Micro Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-cyan-400 font-bold font-mono text-sm sm:text-base">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Photo Showcase & Hardware Spec Card */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 order-1 lg:order-2">
            
            {/* Holographic Cyber Profile Avatar Card */}
            <div className="relative group w-full max-w-sm flex flex-col items-center">
              
              {/* Outer Cyber Glow Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-70 transition duration-700 group-hover:duration-300 animate-pulse-slow"></div>

              {/* Main Card Container */}
              <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-cyan-500/40 p-5 shadow-2xl backdrop-blur-2xl">
                
                {/* Top Cyber Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-cyan-400 font-bold">OPERATIONAL NODE</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">SAVEETHA ECE '26</span>
                </div>

                {/* Profile Photo with Rotating Circuit Rings */}
                <div className="relative flex items-center justify-center py-2">
                  
                  {/* Rotating Outer Dashed Circuit Ring */}
                  <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none"></div>
                  
                  {/* Counter-rotating Inner Dotted Ring */}
                  <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dotted border-teal-400/40 animate-spin-reverse pointer-events-none"></div>

                  {/* Corner HUD Brackets */}
                  <div className="absolute -top-1 -left-1 text-cyan-400/60 font-mono text-xs select-none">┌</div>
                  <div className="absolute -top-1 -right-1 text-cyan-400/60 font-mono text-xs select-none">┐</div>
                  <div className="absolute -bottom-1 -left-1 text-cyan-400/60 font-mono text-xs select-none">└</div>
                  <div className="absolute -bottom-1 -right-1 text-cyan-400/60 font-mono text-xs select-none">┘</div>

                  {/* Profile Image Frame */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 scanline-effect group-hover:border-cyan-300 transition-all duration-300">
                    <img
                      src={profilePhoto}
                      alt="Harshavardhan Surabhi"
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for tech vibe */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-1.5 left-2 right-2 text-center pointer-events-none">
                      <span className="text-[10px] font-mono text-cyan-300 font-bold tracking-wider drop-shadow-md">
                        SURABHI HARSHAVARDHAN
                      </span>
                    </div>
                  </div>

                </div>

                {/* Status Badges underneath Photo */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px]">Chennai / Tirupathi</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[10px]">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>CGPA 7.38</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Microcontroller Live Spec Widget */}
            <div className="w-full max-w-sm bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-4 shadow-lg backdrop-blur-xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-white">HARDWARE CO-PROCESSOR</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 font-bold">{chipFrequency} MHz</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-2">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">TICK:</span>
                  <span className="text-cyan-300 font-bold">{chipCycle.toString().padStart(6, '0')}</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">STATE:</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
              </div>

              {/* Overclock Pills */}
              <div className="flex items-center justify-between pt-1 text-[10px] font-mono">
                <span className="text-slate-400">Clock Profile:</span>
                <div className="flex gap-1">
                  {[160, 240, 320].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setChipFrequency(freq)}
                      className={`px-2 py-0.5 rounded transition-all ${
                        chipFrequency === freq
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {freq}M
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
