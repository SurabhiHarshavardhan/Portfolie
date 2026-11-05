import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Menu, X, FileText, Send, Sparkles, Radio } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPort, setCurrentPort] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Detect dynamic port
    if (typeof window !== 'undefined') {
      const port = window.location.port;
      setCurrentPort(port ? `PORT: ${port}` : 'HOSTED: VERCEL');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-cyan-500/20 py-2.5 sm:py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Profile Avatar */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-cyan-400/80 group-hover:border-cyan-300 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.6)] transition-all duration-300 p-0.5 bg-slate-900">
              <img
                src={profilePhoto}
                alt="Harshavardhan"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900"></span>
              </span>
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors block text-sm sm:text-base leading-tight font-mono">
                HARSHAVARDHAN
              </span>
              <span className="text-[10px] text-cyan-400/90 font-mono tracking-wider flex items-center gap-1 uppercase">
                <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-400" />
                ECE • IoT • AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-mono px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            {/* Dynamic port badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{currentPort}</span>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all text-xs font-mono font-medium shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all text-xs font-mono shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200 no-scrollbar">
            <div className="flex flex-col gap-2">
              <div className="pb-2.5 border-b border-slate-800 flex justify-between items-center text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {currentPort}
                </span>
                <span className="text-slate-400 text-[11px]">Saveetha ECE</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-slate-200 hover:bg-cyan-500/15 hover:text-cyan-300 font-mono text-xs sm:text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-medium text-center"
                >
                  View Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
