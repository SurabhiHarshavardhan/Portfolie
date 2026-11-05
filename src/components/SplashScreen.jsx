import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState(0); // 0=show, 1=hide
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const dur = 2200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / dur) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
      else setTimeout(() => { setPhase(1); setTimeout(onFinish, 700); }, 200);
    };
    requestAnimationFrame(tick);
  }, [onFinish]);

  return (
    <div
      className="splash-screen"
      style={{
        opacity: phase === 1 ? 0 : 1,
        transition: 'opacity 0.7s ease',
      }}
    >
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 7.5}%`,
            bottom: '20%',
            animationDuration: `${2.5 + (i % 4) * 0.7}s`,
            animationDelay: `${i * 0.2}s`,
            opacity: 0.4 + (i % 3) * 0.2,
            width: i % 3 === 0 ? '4px' : '2px',
            height: i % 3 === 0 ? '4px' : '2px',
          }}
        />
      ))}

      {/* Center content */}
      <div className="flex flex-col items-center gap-8 z-10">
        {/* Monogram / Logo */}
        <div
          style={{
            opacity: phase === 0 ? 1 : 0,
            transform: phase === 0 ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.5s ease',
          }}
        >
          <div className="relative flex items-center justify-center w-24 h-24">
            {/* Rotating outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-gold animate-spin-slow"
              style={{ borderStyle: 'dashed', borderColor: 'rgba(201,168,76,0.4)' }}
            />
            {/* Inner ring */}
            <div
              className="absolute inset-2 rounded-full border border-gold"
              style={{ borderColor: 'rgba(201,168,76,0.2)' }}
            />
            {/* Monogram */}
            <span className="font-display text-3xl font-bold gold-text">H</span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center space-y-2">
          <h1
            className="font-display text-4xl sm:text-5xl font-bold tracking-wide"
            style={{ color: '#e8e0d4', letterSpacing: '0.08em' }}
          >
            HARSHAVARDHAN
          </h1>
          <p
            className="font-elegant text-lg italic"
            style={{ color: 'rgba(201,168,76,0.8)', letterSpacing: '0.3em', fontSize: '0.9rem' }}
          >
            Electronics & Communication Engineer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80">
          <div className="h-px bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #c9a84c, #f5d78e)',
              }}
            />
          </div>
          <div className="flex justify-between mt-2 font-body text-xs" style={{ color: 'rgba(201,168,76,0.5)' }}>
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
