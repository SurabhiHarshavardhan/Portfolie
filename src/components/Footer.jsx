import React from 'react';
import { Cpu, ArrowUp, Heart, Radio, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060911] text-slate-400 py-12 relative font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Title */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm tracking-wide">
                {personal.fullName}
              </span>
              <span className="text-[11px] text-cyan-400/80">
                B.Tech ECE • Embedded IoT & Deep Learning
              </span>
            </div>
          </div>

          {/* Middle: Vercel & Dynamic Port Status */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Vercel Production Ready</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px]">
              <Radio className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-300">Dynamic Port Enabled</span>
            </div>
          </div>

          {/* Right: Back to top */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Harshavardhan
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom micro note */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[10px] text-slate-500">
          Designed & Engineered with React, Vite & Tailwind CSS • Automated Single-Page Routing for Vercel Deployments
        </div>
      </div>
    </footer>
  );
}

