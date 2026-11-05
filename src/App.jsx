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

// Cursor glow component
function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y, pointerEvents: 'none' }}
    />
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useScrollReveal();

  return (
    <>
      {/* Splash Screen */}
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      {/* Main portfolio (always rendered, hidden by splash overlay) */}
      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: splashDone ? 'auto' : 'none',
          background: '#0d0d0d',
          minHeight: '100vh',
        }}
      >
        <CursorGlow />
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </main>
        <Footer />
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </>
  );
}
