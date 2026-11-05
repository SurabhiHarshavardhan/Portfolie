import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-10 border-t border-white/5 bg-[#050507] text-white/50 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg glass-crimson flex items-center justify-center font-bold text-white text-xs">
              H
            </div>
            <span className="font-bold text-white">
              {personal.fullName}
            </span>
          </div>

          <div className="flex items-center gap-5 text-white/60">
            <a href="#about" className="hover:text-[#ff3366] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#ff3366] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#ff3366] transition-colors">Projects</a>
            <a href="#education" className="hover:text-[#ff3366] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#ff3366] transition-colors">Contact</a>
          </div>

          <div>
            © {new Date().getFullYear()} Harshavardhan • B.Tech ECE Saveetha
          </div>

        </div>
      </div>
    </footer>
  );
}
