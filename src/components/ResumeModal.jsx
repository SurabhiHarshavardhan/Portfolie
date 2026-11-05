import React from 'react';
import { X, Printer, Mail, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../image/Harshavardhan.jpeg';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, projects, skillCategories, languages } = portfolioData;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d0d14] border border-white/20 rounded-3xl overflow-hidden my-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/5 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366] shadow-[0_0_8px_#ff3366]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Curriculum Vitae • {personal.fullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="btn-glossy flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto no-scrollbar space-y-6 text-white/80 text-xs sm:text-sm bg-[#0a0a0f] print:max-h-none print:p-0">
          
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-white/10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#ff3366] shadow-[0_0_15px_rgba(230,0,57,0.3)] flex-shrink-0">
              <img
                src={profilePhoto}
                alt={personal.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {personal.fullName}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#ff3366]">
                Electronics and Communication Engineering (ECE) Graduate
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-white/60 pt-1">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#ff3366]" />
                  {personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff3366]" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ff3366]" />
                  CGPA: 7.38 / 10.0
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-[#ff3366] uppercase tracking-wider border-b border-white/10 pb-1">
              Professional Summary
            </h2>
            <p className="text-white/70 leading-relaxed text-xs">
              {personal.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold text-[#ff3366] uppercase tracking-wider border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{edu.institution} ({edu.location})</span>
                    <span className="font-mono text-white/50 text-[11px]">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#ff3366]">
                    <span>{edu.degree}</span>
                    <span className="font-bold text-white">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#ff3366] uppercase tracking-wider border-b border-white/10 pb-1">
              Technical Skills & Areas of Interest
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[#ff3366] font-bold block mb-1">Technical Skills:</span>
                <span>Python, Object Oriented Programming, C, Embedded Systems</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[#ff3366] font-bold block mb-1">Areas of Interest:</span>
                <span>IoT, Embedded Hardware, Signal Processing, Digital Electronics</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#ff3366] uppercase tracking-wider border-b border-white/10 pb-1">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-xs">{proj.title}</h3>
                    <span className="text-[10px] text-[#ff3366] font-bold">{proj.category}</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
