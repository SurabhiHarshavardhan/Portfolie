import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-10 sm:py-12"
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div>
            <h3
              className="font-display text-lg font-semibold tracking-widest"
              style={{ color: '#c9a84c', letterSpacing: '0.15em' }}
            >
              HARSHAVARDHAN SURABHI
            </h3>
            <p
              className="font-elegant text-sm italic mt-0.5"
              style={{ color: 'rgba(232,224,212,0.35)' }}
            >
              Electronics & Communication Engineer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {['#about', '#skills', '#projects', '#education', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="underline-animate font-body text-xs uppercase tracking-widest"
                style={{ color: 'rgba(232,224,212,0.4)', letterSpacing: '0.12em' }}
              >
                {href.slice(1)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="font-body text-xs"
            style={{ color: 'rgba(232,224,212,0.25)' }}
          >
            © {new Date().getFullYear()} Harshavardhan
          </p>
        </div>
      </div>
    </footer>
  );
}
