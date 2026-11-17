import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-10 border-t border-slate-200/80 bg-gradient-to-b from-white to-slate-100 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center font-bold text-white text-xs shadow-sm">
              H
            </div>
            <span className="font-bold text-slate-800 tracking-tight">
              {personal.fullName}
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-600 font-medium">
            <a href="#about" className="hover:text-slate-950 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-950 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-950 transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-950 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-950 transition-colors">Contact</a>
          </div>

          <div className="text-slate-500">
            © {new Date().getFullYear()} Harshavardhan • B.Tech ECE Saveetha
          </div>

        </div>
      </div>
    </footer>
  );
}
