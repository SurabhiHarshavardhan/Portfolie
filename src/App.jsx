import React, { useState } from 'react';
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

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#050507] text-[#f2f2f7] relative selection:bg-[#e60039]/30 selection:text-white overflow-x-hidden no-scrollbar">
      
      {/* ──── SPLASH SCREEN ──── */}
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
