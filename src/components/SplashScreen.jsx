import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // fast & responsive 1.6s
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setFading(true);
        setTimeout(onFinish, 600);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050507] transition-all duration-700 ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Glossy crimson ambient background blobs */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#e60039]/20 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#ff3366]/15 blur-[80px] pointer-events-none" />

      {/* Main Brand Card */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm sm:max-w-md">
        
        {/* Animated Gloss Emblem */}
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl glass-crimson mb-6 crimson-glow">
          <div className="absolute inset-0 rounded-3xl border border-white/20" />
          <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-wider">
            H
          </span>
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#ff3366] shadow-[0_0_12px_#ff3366] animate-ping" />
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5">
          HARSHAVARDHAN
        </h1>
        <p className="text-xs sm:text-sm text-white/60 font-medium tracking-widest uppercase mb-8 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#ff3366]" />
          ECE • IoT • AI Research
        </p>

        {/* Progress Bar with Glossy Finish */}
        <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#e60039] via-[#ff3366] to-white transition-all duration-75 shadow-[0_0_15px_#e60039]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="mt-3 text-[11px] font-mono text-white/40 tracking-wider">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

