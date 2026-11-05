import React, { useRef } from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, projects, skillCategories, languages } = portfolioData;
  const resumeRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden my-4 shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-neutral-950 border-b border-neutral-800 print:hidden flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Official Resume • Black & White Standard A4
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all shadow-sm"
              title="Print or Save as PDF in A4 format"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save A4 PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Viewport (Preview on screen, exact A4 layout during print) */}
        <div className="overflow-y-auto no-scrollbar p-3 sm:p-6 md:p-8 bg-neutral-900 flex justify-center">
          
          {/* 
            Strict A4 Sheet Container:
            210mm wide x 297mm min-height.
            Clean, crisp, high-contrast black & white typography.
          */}
          <div
            ref={resumeRef}
            id="a4-resume-sheet"
            className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black p-8 sm:p-12 shadow-2xl font-sans text-[11px] leading-relaxed print:p-0 print:shadow-none print:m-0 print:w-full print:max-w-none"
            style={{ color: '#000000', backgroundColor: '#ffffff' }}
          >
            
            {/* Header: Name, Title, Contact Info */}
            <div className="border-b-2 border-black pb-4 mb-4 text-center">
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase text-black font-sans mb-1">
                {personal.fullName}
              </h1>
              <p className="text-xs font-semibold text-neutral-700 tracking-wide uppercase mb-2">
                Electronics and Communication Engineering Graduate
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] sm:text-[11px] text-neutral-800 font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-black" />
                  {personal.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-black" />
                  {personal.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-bold">
                  <GraduationCap className="w-3 h-3 text-black" />
                  Saveetha School of Engineering (CGPA: 7.38/10.0)
                </span>
              </div>
            </div>

            {/* Section 1: Professional Summary */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5 flex items-center justify-between">
                <span>Professional Summary</span>
              </h2>
              <p className="text-justify text-[10.5px] text-neutral-900 leading-normal">
                Electronics and Communication Engineering (ECE) graduate with strong fundamentals in digital electronics, signal processing, and embedded systems. Proficient in C and Python programming, with practical knowledge of IoT and embedded application development through academic and personal projects. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications. Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
              </p>
            </div>

            {/* Section 2: Education */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                Education
              </h2>
              <div className="space-y-2.5">
                {education.map((edu, idx) => (
                  <div key={idx} className="text-[10.5px]">
                    <div className="flex justify-between items-baseline font-bold text-black">
                      <span className="text-xs">{edu.institution}</span>
                      <span className="font-mono text-[10px] text-neutral-800">{edu.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-neutral-900 font-medium italic">
                      <span>{edu.degree} — [{edu.location}]</span>
                      <span className="font-bold text-black not-italic">{edu.score}</span>
                    </div>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-neutral-800 text-[10px]">
                      {edu.highlights.slice(0, 2).map((h, hIdx) => (
                        <li key={hIdx} className="leading-tight">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Technical Skills & Interests */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                Technical Skills & Areas of Interest
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[10.5px] text-neutral-900">
                <div>
                  <span className="font-bold text-black">Programming Languages: </span>
                  <span>Python, C, Object Oriented Programming (OOP)</span>
                </div>
                <div>
                  <span className="font-bold text-black">Areas of Interest: </span>
                  <span>IoT, Embedded Hardware, Digital Electronics, Signal Processing</span>
                </div>
                <div>
                  <span className="font-bold text-black">Machine Learning & AI: </span>
                  <span>Deep CNN, RNN, Support Vector Machines (SVM), Computer Vision</span>
                </div>
                <div>
                  <span className="font-bold text-black">Embedded Systems & Hardware: </span>
                  <span>Microcontrollers, Sensors & Actuators, Motor Interfacing, Telemetry</span>
                </div>
                <div>
                  <span className="font-bold text-black">Soft Skills: </span>
                  <span>Leadership, Problem Solving, Communication, Teamwork, Time Management</span>
                </div>
                <div>
                  <span className="font-bold text-black">Languages Known: </span>
                  <span>Telugu (Native), English, Hindi, Tamil</span>
                </div>
              </div>
            </div>

            {/* Section 4: Projects */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                Academic & Engineering Projects
              </h2>
              <div className="space-y-3">
                {projects.map((proj, idx) => (
                  <div key={idx} className="text-[10.5px]">
                    <div className="flex justify-between items-baseline font-bold text-black">
                      <span className="text-[11px]">{proj.title}</span>
                      <span className="text-[10px] text-neutral-700 uppercase font-mono">{proj.category}</span>
                    </div>
                    <p className="text-neutral-900 text-justify mt-0.5 leading-normal">
                      {proj.overview}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-2 text-[9.5px] text-neutral-700">
                      <span className="font-semibold text-black">Core Stack: </span>
                      <span>{proj.tags.join(' • ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Signoff */}
            <div className="border-t border-neutral-300 pt-2 text-[9px] text-neutral-500 flex justify-between items-center">
              <span>Saveetha School of Engineering Chennai • Department of ECE</span>
              <span>Candidate: Surabhi Kamesh Sri Surya Harshavardhan</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
