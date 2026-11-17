import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

// Smooth interactive cursor ambient spotlight
function AmbientMouseSpotlight() {
  const [pos, setPos] = useState({ x: -600, y: -600 });
  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <div
      className="cursor-ambient-glow hidden md:block"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
}

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#e2e8f0] text-slate-900 relative selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden no-scrollbar">
      
      {/* ──── INTERACTIVE MOUSE AMBIENT GLOW ──── */}
      <AmbientMouseSpotlight />

      {/* ──── ATTRACTIVE SPLASH SCREEN ──── */}
      {!splashFinished && (
        <SplashScreen onFinish={() => setSplashFinished(true)} />
      )}

      {/* ──── MAIN PORTFOLIO PAGE ──── */}
      <div
        className={`transition-opacity duration-700 ${
          splashFinished ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />

        <main className="relative z-10 space-y-4">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}
