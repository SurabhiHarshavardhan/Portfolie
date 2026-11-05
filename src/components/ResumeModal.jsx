import React from 'react';
import { X, Printer, Mail, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, education, projects, skillCategories, languages } = portfolioData;

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
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden my-4 shadow-2xl flex flex-col max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-neutral-950 border-b border-neutral-800 print:hidden flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Single-Page A4 Executive Resume
            </span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all shadow-sm"
              title="Print or Save as 1-Page PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print 1-Page A4 PDF</span>
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

        {/* Scrollable Viewport on screen */}
        <div className="overflow-y-auto no-scrollbar p-2 sm:p-4 md:p-6 bg-neutral-900 flex justify-center">
          
          {/* 
            Strict Single-Page A4 Resume Sheet 
            Width: 210mm, Height: 297mm (Fixed single page)
          */}
          <div
            id="a4-resume-sheet"
            className="w-full max-w-[210mm] bg-white text-black p-6 sm:p-8 shadow-2xl font-sans text-[10px] leading-tight flex flex-col justify-between"
            style={{ 
              color: '#000000', 
              backgroundColor: '#ffffff',
              boxSizing: 'border-box'
            }}
          >
            
            {/* Header: Name, Contact & Title */}
            <div className="border-b border-black pb-2 mb-2 text-center flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight uppercase text-black font-sans leading-none mb-1">
                {personal.fullName}
              </h1>
              <p className="text-[10.5px] font-semibold text-neutral-800 tracking-wide uppercase mb-1">
                Electronics and Communication Engineering Graduate
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[9.5px] text-neutral-800">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-black inline" />
                  {personal.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-black inline" />
                  {personal.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-bold">
                  <GraduationCap className="w-3 h-3 text-black inline" />
                  Saveetha School of Engineering (CGPA: 7.38/10.0)
                </span>
              </div>
            </div>

            {/* Section 1: Professional Summary */}
            <div className="mb-2 flex-shrink-0">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1">
                Professional Summary
              </h2>
              <p className="text-justify text-[9.5px] text-neutral-900 leading-snug">
                Electronics and Communication Engineering (ECE) graduate with strong fundamentals in digital electronics, signal processing, and embedded systems. Proficient in C and Python programming, with practical knowledge of IoT and embedded application development through academic and personal projects. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications. Eager to apply technical skills, learn new technologies, and contribute to innovative projects in a growth-oriented organization.
              </p>
            </div>

            {/* Section 2: Education */}
            <div className="mb-2 flex-shrink-0">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1">
                Education
              </h2>
              <div className="space-y-1.5">
                {education.map((edu, idx) => (
                  <div key={idx} className="text-[9.5px]">
                    <div className="flex justify-between items-baseline font-bold text-black leading-tight">
                      <span className="text-[10px]">{edu.institution} <span className="font-normal text-neutral-700">[{edu.location}]</span></span>
                      <span className="font-mono text-[9px] text-neutral-800">{edu.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-neutral-900 leading-tight">
                      <span className="italic">{edu.degree}</span>
                      <span className="font-bold text-black not-italic">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Technical Skills & Areas of Interest */}
            <div className="mb-2 flex-shrink-0">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1">
                Technical Skills & Areas of Interest
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9.5px] text-neutral-900 leading-tight">
                <div>
                  <span className="font-bold text-black">Programming: </span>
                  <span>Python, C, Object Oriented Programming (OOP)</span>
                </div>
                <div>
                  <span className="font-bold text-black">Areas of Interest: </span>
                  <span>IoT, Embedded Hardware, Digital Electronics, Signal Processing</span>
                </div>
                <div>
                  <span className="font-bold text-black">AI & Machine Learning: </span>
                  <span>Deep CNN, RNN, Support Vector Machines (SVM), Computer Vision</span>
                </div>
                <div>
                  <span className="font-bold text-black">Hardware Interfacing: </span>
                  <span>Microcontrollers, Sensors, Motors, Autonomous Control, Telemetry</span>
                </div>
                <div>
                  <span className="font-bold text-black">Soft Skills: </span>
                  <span>Leadership, Problem Solving, Communication, Teamwork, Time Management</span>
                </div>
                <div>
                  <span className="font-bold text-black">Languages: </span>
                  <span>Telugu (Native), English, Hindi, Tamil</span>
                </div>
              </div>
            </div>

            {/* Section 4: Academic & Engineering Projects */}
            <div className="mb-2 flex-grow">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-1.5">
                Engineering Projects
              </h2>
              <div className="space-y-2">
                {projects.map((proj, idx) => (
                  <div key={idx} className="text-[9.5px] leading-tight">
                    <div className="flex justify-between items-baseline font-bold text-black">
                      <span className="text-[10px]">{proj.title}</span>
                      <span className="text-[8.5px] text-neutral-700 uppercase font-mono">{proj.category}</span>
                    </div>
                    <p className="text-neutral-900 text-justify mt-0.5 leading-snug">
                      {proj.overview}
                    </p>
                    <div className="mt-0.5 text-[8.5px] text-neutral-700">
                      <span className="font-semibold text-black">Key Highlights: </span>
                      <span>{proj.keyFeatures.slice(0, 2).join('; ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Signoff */}
            <div className="border-t border-neutral-400 pt-1 text-[8.5px] text-neutral-600 flex justify-between items-center flex-shrink-0">
              <span>Saveetha School of Engineering, Chennai • Department of ECE (2022–2026)</span>
              <span>Candidate: Surabhi Kamesh Sri Surya Harshavardhan</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
