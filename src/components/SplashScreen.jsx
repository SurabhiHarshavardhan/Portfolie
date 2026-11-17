import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6s smooth cinematic load
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
    }, 20);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-200 text-slate-900 transition-all duration-700 ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Soft Pearl & Slate Grey Ambient Glow Blobs */}
      <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-slate-200/60 via-slate-100/50 to-white blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-slate-300/40 blur-[90px] pointer-events-none" />

      {/* Floating Sparkle Accents */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-slate-400/50 pointer-events-none animate-ping"
          style={{
            top: `${25 + (i * 10)}%`,
            left: `${20 + (i * 11)}%`,
            animationDuration: `${2.5 + (i % 3)}s`,
            animationDelay: `${i * 0.35}s`,
            opacity: 0.5
          }}
        />
      ))}

      {/* Central Glassmorphic Portal */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm sm:max-w-md">
        
        {/* Animated Rotating Gradient Emblem */}
        <div className="relative mb-6">
          {/* Outer rotating dashed ring */}
          <div className="absolute -inset-3.5 rounded-full border border-dashed border-slate-300 animate-spin-slow pointer-events-none" />
          
          {/* Inner glass emblem */}
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl glass-pearl shadow-xl group">
            <span className="font-display text-4xl sm:text-5xl font-extrabold pearl-gradient-text tracking-widest drop-shadow-sm">
              H
            </span>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-slate-800 shadow-[0_0_10px_rgba(15,23,42,0.4)] animate-ping" />
          </div>
        </div>

        {/* Title with Pearl Gradient */}
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight pearl-gradient-text mb-1.5">
          HARSHAVARDHAN
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold tracking-widest uppercase mb-8 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-slate-600 animate-spin-slow" />
          ECE Graduate • IoT & AI Researcher
        </p>

        {/* Glossy White & Grey Progress Bar */}
        <div className="w-56 sm:w-72 h-2 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-slate-300/80 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 transition-all duration-75 shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between w-56 sm:w-72 text-[10px] font-mono text-slate-500 tracking-wider">
          <span>INITIALIZING</span>
          <span className="text-slate-800 font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
