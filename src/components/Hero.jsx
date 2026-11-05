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
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
      }, 65);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTagline.slice(0, displayText.length - 1));
      }, 35);
    } else if (!isDeleting && displayText.length === currentTagline.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
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
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden circuit-grid">
      {/* Glow gradient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>ECE GRADUATE • SAVEETHA CHENNAI 2022–2026</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
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
            <div className="h-10 flex items-center">
              <div className="font-mono text-base sm:text-xl text-cyan-300 flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-md border border-cyan-500/20 w-fit">
                <span className="text-cyan-500">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block"></span>
              </div>
            </div>

            {/* Core Summary Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Electronics & Communication Engineering graduate passionate about bridging hardware and intelligent software. 
              Experienced in <span className="text-cyan-300 font-medium">IoT sensor networks</span>, <span className="text-cyan-300 font-medium">C & Python</span> embedded applications, and cutting-edge <span className="text-teal-300 font-medium">Deep Learning (CNN & RNN)</span> models for medical diagnostics and autonomous robotics.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'Embedded C', 'IoT Architecture', 'Deep Learning (CNN/RNN)', 'SVM', 'Digital Electronics', 'Robotics'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm font-mono shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-sm font-mono shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-sm font-mono transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch CLI</span>
              </a>
            </div>

            {/* Quick Micro Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-cyan-400 font-bold font-mono text-sm sm:text-base">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Hardware / MCU Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative backdrop-blur-xl glow-box">
              
              {/* Header: Chip info */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                      ECE-CORE::HARSHA
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400/80">Architecture: ECE / IoT / AI</p>
                  </div>
                </div>
                <div className="text-right font-mono text-[11px] text-slate-400">
                  <span>CLK: </span>
                  <span className="text-cyan-300 font-bold">{chipFrequency} MHz</span>
                </div>
              </div>

              {/* Chip Architecture Visual */}
              <div className="py-5 space-y-4 font-mono text-xs">
                
                {/* Status Bar */}
                <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span>SYS_STATUS:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> OPERATIONAL
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span>CYCLES_TICK:</span>
                    <span className="text-cyan-300 font-bold">{chipCycle.toString().padStart(6, '0')}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span>PORT_BINDING:</span>
                    <span className="text-teal-300">AUTO_DYNAMIC (0.0.0.0)</span>
                  </div>
                </div>

                {/* Simulated Pins */}
                <div className="space-y-1.5">
                  <div className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
                    Pin Configuration / Interfaces:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">GPIO_01 (UART)</span>
                      <span className="text-cyan-400 font-medium">IoT Comms</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">GPIO_02 (PWM)</span>
                      <span className="text-amber-400 font-medium">Motor Drive</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">ADC_03 (Sensor)</span>
                      <span className="text-emerald-400 font-medium">Diagnostic</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">NPU_ACCEL</span>
                      <span className="text-purple-400 font-medium">CNN / RNN</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Frequency Boost */}
                <div className="pt-2 flex items-center justify-between bg-cyan-950/30 p-2.5 rounded-lg border border-cyan-500/20">
                  <span className="text-[11px] text-cyan-300">Overclock Simulation:</span>
                  <div className="flex gap-1.5">
                    {[160, 240, 320].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setChipFrequency(freq)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                          chipFrequency === freq
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {freq}M
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Footer Details */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                  Saveetha School of Engg
                </span>
                <span className="text-cyan-400 font-semibold">CGPA 7.38</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

