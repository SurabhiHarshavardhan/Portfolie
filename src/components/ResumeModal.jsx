import React, { useEffect } from 'react';
import { X, Printer, Download, GraduationCap, Briefcase, Award, CheckCircle2, Languages, Cpu, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, projects, skillCategories, languages } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Curriculum Vitae Preview • {personal.fullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-400 transition-colors shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-5 sm:p-10 max-h-[80vh] overflow-y-auto no-scrollbar space-y-8 bg-slate-950 text-slate-200 font-sans print:p-0 print:max-h-none print:overflow-visible">
          
          {/* Header with Photo */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400 flex-shrink-0 shadow-lg shadow-cyan-500/20">
              <img
                src={profilePhoto}
                alt={personal.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 flex-1">
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {personal.fullName}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                Electronics and Communication Engineering (ECE) Graduate
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  CGPA: 7.38 / 10.0
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <span>01. Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <span>02. Education</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{edu.institution} ({edu.location})</span>
                    <span className="font-mono text-slate-400 text-xs">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-xs text-cyan-300 font-mono">
                    <span>{edu.degree}</span>
                    <span className="font-bold text-emerald-400">{edu.score}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pt-1 pl-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Competencies */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <span>03. Technical Skills & Interests</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono font-semibold text-cyan-300 block">Technical Skills:</span>
                <span className="text-slate-300">Python, Object Oriented Programming, C, Embedded Systems</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono font-semibold text-cyan-300 block">Areas of Interest:</span>
                <span className="text-slate-300">IoT, Embedded Hardware, Signal Processing, Digital Electronics</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono font-semibold text-cyan-300 block">Soft Skills:</span>
                <span className="text-slate-300">Leadership, Problem Solving, Communication, Teamwork, Time Management</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono font-semibold text-cyan-300 block">Languages Known:</span>
                <span className="text-slate-300">Telugu, Hindi, English, Tamil</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <span>04. Research & Engineering Projects</span>
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-between items-center print:hidden">
          <span className="text-xs font-mono text-slate-400">
            Saveetha School of Engineering Chennai • B.Tech ECE
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}

