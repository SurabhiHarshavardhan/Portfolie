import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import profilePhoto from '../image/Harshavardhan.jpeg';

const taglines = [
  'Electronics & Communication Engineer',
  'IoT & Embedded Systems Developer',
  'AI & Deep Learning Researcher',
  'Hardware–Software Integration Specialist',
];

export default function Hero({ onOpenResume }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Entrance animation
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  // Typewriter
  useEffect(() => {
    const current = taglines[index];
    let timer;
    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % taglines.length);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Thin vertical gold line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Profile Photo ── */}
          <div
            className="flex justify-center lg:justify-start order-1"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 1s ease 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            <div className="profile-frame relative">
              {/* Background decorative box */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-sm"
                style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.15)' }}
              />

              {/* Main photo */}
              <div
                className="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[30rem] overflow-hidden rounded-sm shadow-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <img
                  src={profilePhoto}
                  alt="Harshavardhan Surabhi"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'contrast(1.03) brightness(0.95)' }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7), transparent)' }}
                />
                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className="font-elegant italic text-sm"
                    style={{ color: 'rgba(201,168,76,0.9)', letterSpacing: '0.08em' }}
                  >
                    B.Tech ECE · Saveetha University
                  </span>
                </div>
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-5 -left-5 glass px-4 py-3 rounded-sm animate-float"
                style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(13,13,13,0.9)' }}
              >
                <p className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.8)', letterSpacing: '0.08em' }}>CGPA</p>
                <p className="font-display text-2xl font-bold" style={{ color: '#c9a84c' }}>7.38</p>
                <p className="font-body text-xs" style={{ color: 'rgba(232,224,212,0.4)' }}>out of 10.0</p>
              </div>

              {/* Year badge */}
              <div
                className="absolute -top-4 -right-4 w-14 h-14 flex flex-col items-center justify-center rounded-full"
                style={{
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                <span className="font-display text-xs font-bold" style={{ color: '#c9a84c' }}>2026</span>
                <span className="font-body text-[9px]" style={{ color: 'rgba(201,168,76,0.6)' }}>Grad.</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="order-2 space-y-7">

            {/* Greeting line */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.4s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px" style={{ background: '#c9a84c' }} />
                <span
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: '#c9a84c', letterSpacing: '0.2em' }}
                >
                  Hello, I am
                </span>
              </div>
            </div>

            {/* Name */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 0.9s ease 0.5s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s',
              }}
            >
              <h1 className="font-display leading-tight">
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl font-bold"
                  style={{ color: '#e8e0d4', letterSpacing: '0.02em' }}
                >
                  Surabhi
                </span>
                <span
                  className="block text-4xl sm:text-5xl lg:text-6xl font-bold shimmer-text"
                >
                  Harshavardhan
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.9s ease 0.65s',
              }}
            >
              <div
                className="font-elegant text-xl sm:text-2xl italic flex items-center gap-2"
                style={{ color: 'rgba(232,224,212,0.65)', minHeight: '2rem' }}
              >
                <span>{text}</span>
                <span
                  className="inline-block w-0.5 h-6 ml-0.5"
                  style={{
                    background: '#c9a84c',
                    animation: 'pulse 1s step-end infinite',
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div
              className="divider"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.9s ease 0.75s',
              }}
            />

            {/* Summary */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.9s ease 0.85s',
              }}
            >
              <p
                className="font-body text-sm sm:text-base leading-relaxed"
                style={{ color: 'rgba(232,224,212,0.6)', lineHeight: '1.8' }}
              >
                ECE graduate from Saveetha School of Engineering, Chennai with expertise in
                embedded systems, IoT, and AI-driven medical diagnostics. Passionate about
                building intelligent hardware–software solutions.
              </p>
            </div>

            {/* Stats Row */}
            <div
              className="grid grid-cols-3 gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.9s ease 0.95s',
              }}
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Languages', value: '4' },
                { label: 'Specializations', value: '5+' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-display text-2xl sm:text-3xl font-bold gold-text"
                  >
                    {s.value}
                  </div>
                  <div
                    className="font-body text-xs mt-1 uppercase tracking-wider"
                    style={{ color: 'rgba(232,224,212,0.4)', letterSpacing: '0.1em' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.9s ease 1.05s',
              }}
            >
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2 px-6 py-3 font-body text-sm tracking-wider"
              >
                <span>View My Work</span>
                <ArrowRight size={15} />
              </a>
              <button
                onClick={onOpenResume}
                className="btn-secondary flex items-center gap-2 px-6 py-3 font-body text-sm tracking-wider"
              >
                <Download size={15} />
                <span>Resume</span>
              </button>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center mt-16 lg:mt-20"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease 1.4s',
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group"
            style={{ color: 'rgba(201,168,76,0.4)' }}
          >
            <span className="font-body text-xs tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
              Scroll
            </span>
            <ChevronDown
              size={16}
              className="animate-bounce"
              style={{ color: 'rgba(201,168,76,0.5)' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
