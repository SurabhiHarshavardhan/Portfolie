import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-widest transition-colors duration-300"
          style={{ color: '#c9a84c', letterSpacing: '0.15em' }}
        >
          HARSHA
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                activeSection === link.href.slice(1) ? 'active' : ''
              }`}
              style={{
                color: activeSection === link.href.slice(1)
                  ? '#c9a84c'
                  : 'rgba(232,224,212,0.65)',
                letterSpacing: '0.12em',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="btn-primary font-body text-xs px-5 py-2 tracking-widest uppercase"
            style={{ letterSpacing: '0.12em' }}
          >
            Resume
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: '#c9a84c' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(13,13,13,0.97)',
          borderBottom: menuOpen ? '1px solid rgba(201,168,76,0.12)' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-widest uppercase"
              style={{ color: 'rgba(232,224,212,0.75)', letterSpacing: '0.12em' }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onOpenResume(); }}
            className="btn-primary font-body text-xs px-5 py-2.5 tracking-widest uppercase text-left w-fit"
          >
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
