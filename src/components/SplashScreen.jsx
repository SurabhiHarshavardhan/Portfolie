import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Layers } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds smooth cinematic load
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030308] transition-all duration-700 ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Multitone Aurora Ambient Glow Blobs */}
      <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-[#7c3aed]/25 via-[#4f46e5]/20 to-[#db2777]/20 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#06b6d4]/15 blur-[100px] pointer-events-none" />

      {/* Floating Sparkle Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-300 pointer-events-none animate-ping"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${15 + (i * 10)}%`,
            animationDuration: `${2 + (i % 3)}s`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.6
          }}
        />
      ))}

      {/* Central Glassmorphic Portal */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm sm:max-w-md">
        
        {/* Animated Rotating Gradient Emblem */}
        <div className="relative mb-6">
          {/* Outer rotating dashed ring */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-purple-500/30 animate-spin-slow pointer-events-none" />
          
          {/* Inner glass emblem */}
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl glass-aurora aurora-glow group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-600/30 to-rose-500/30 backdrop-blur-xl" />
            <span className="relative font-display text-4xl sm:text-5xl font-black text-white tracking-widest drop-shadow-md">
              H
            </span>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-400 to-rose-400 shadow-[0_0_12px_#c084fc] animate-ping" />
          </div>
        </div>

        {/* Title with Multitone Gradient */}
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5 drop-shadow">
          HARSHAVARDHAN
        </h1>
        <p className="text-xs sm:text-sm aurora-gradient-text-alt font-medium tracking-widest uppercase mb-8 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
          ECE Graduate • IoT & AI Researcher
        </p>

        {/* Glossy Multitone Progress Indicator */}
        <div className="w-56 sm:w-72 h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#f43f5e] transition-all duration-75 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between w-56 sm:w-72 text-[10px] font-mono text-white/50 tracking-wider">
          <span>INITIALIZING</span>
          <span className="text-purple-300 font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
