import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200/90 py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Pearl Grey Gloss */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl glass-pearl flex items-center justify-center font-display font-black text-slate-900 text-base shadow-sm group-hover:scale-105 transition-transform">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-slate-900 text-sm sm:text-base tracking-wider leading-none group-hover:text-slate-700 transition-colors">
                HARSHAVARDHAN
              </span>
              <span className="text-[10px] text-slate-500 tracking-widest uppercase mt-0.5 font-semibold">
                ECE Innovator
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-pearl-dark flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white tracking-wide shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/80 text-slate-800 hover:text-slate-950 border border-slate-200 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-slate-200/90 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-200">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block py-2.5 rounded-xl btn-pearl-dark text-xs font-bold text-white text-center"
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
