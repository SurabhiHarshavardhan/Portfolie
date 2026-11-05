import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Brain, Bot, ArrowRight, Layers, FileCode, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-mono leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          
          {/* Metrics summary banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
            {Object.entries(project.metrics).map(([key, val], idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <div className="text-sm font-bold font-mono text-cyan-300 truncate">
                  {val}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider">
              // Research Overview & Methodology
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              {project.overview}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider">
              // Key Implementation Highlights
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider">
              // Technical Specifications & Stack
            </h4>
            <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 overflow-hidden bg-slate-950/60">
              {project.techSpecs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-3 text-xs sm:text-sm">
                  <span className="sm:col-span-4 font-mono font-semibold text-cyan-400">
                    {spec.label}
                  </span>
                  <span className="sm:col-span-8 text-slate-300 font-mono">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold font-mono text-slate-200 uppercase tracking-wider">
              // Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-slate-800 border border-cyan-500/30 text-xs font-mono text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}

