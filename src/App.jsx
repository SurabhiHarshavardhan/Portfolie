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
import ResumeModal from './components/ResumeModal';
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
  const [resumeOpen, setResumeOpen] = useState(false);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#030308] text-[#f3f3f8] relative selection:bg-purple-500/30 selection:text-white overflow-x-hidden no-scrollbar">
      
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
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        <main className="relative z-10 space-y-4">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </main>

        <Footer />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>

    </div>
  );
}
