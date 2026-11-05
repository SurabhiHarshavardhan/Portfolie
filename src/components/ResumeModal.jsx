import React from 'react';
import { X, Printer } from 'lucide-react';
import profilePhoto from '../image/Harshavardhan.jpeg';

const data = {
  name: 'SURABHI KAMESH SRI SURYA HARSHAVARDHAN',
  title: 'Electronics & Communication Engineering Graduate',
  email: 'harshavardhan9@gmail.com',
  location: 'Chennai, TN / Tirupathi, AP',
  summary:
    'Electronics and Communication Engineering (ECE) graduate with strong fundamentals in digital electronics, signal processing, and embedded systems. Proficient in C and Python programming, with practical knowledge of IoT and embedded application development. Passionate about developing efficient hardware-software integrated solutions and exploring real-world engineering applications.',
  education: [
    { inst: 'Saveetha School of Engineering, Chennai', period: '2022–2026', degree: 'B.Tech ECE', grade: 'CGPA: 7.38 / 10.0' },
    { inst: 'Viswasai Junior College, Tirupathi', period: '2020–2022', degree: 'Intermediate (MPC)', grade: '51%' },
    { inst: 'Model Academy EM School, Renigunta', period: '2019–2020', degree: 'SSC / 10th Standard', grade: '85%' },
  ],
  skills: ['Python', 'C / Embedded C', 'OOP', 'IoT & MQTT', 'Digital Electronics', 'Signal Processing', 'Deep CNN', 'RNN', 'SVM', 'TensorFlow', 'OpenCV', 'Microcontrollers', 'Sensor Interfacing'],
  softSkills: ['Leadership', 'Problem Solving', 'Communication', 'Teamwork', 'Time Management'],
  languages: ['Telugu (Native)', 'English (Professional)', 'Hindi (Working)', 'Tamil (Conversational)'],
  projects: [
    {
      title: 'Malaria Parasite Categorization: CNN vs. SVM',
      desc: 'Developed a machine learning framework to classify malaria parasites from microscopic blood cell images using CNN and SVM models. CNN achieved 96.4% accuracy, outperforming SVM by +7.3% with 97.1% sensitivity.',
    },
    {
      title: 'Typhoid Parasite Detection: RNN vs. CNN',
      desc: 'Comparative deep learning study evaluating RNN (temporal biomarker trends) against CNN (spatial morphology) for typhoid detection, with key insights into hybrid multi-modal diagnostic architectures.',
    },
    {
      title: 'AI-Integrated Tennis Ball Collector Robot',
      desc: 'Designed an autonomous robot combining computer vision ball detection, embedded C/C++ motor firmware, ultrasonic obstacle avoidance, and a mechanical roller intake — achieving 92% collection efficiency.',
    },
  ],
};

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.9)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-sm my-6"
        style={{ background: '#fff', color: '#1a1a1a' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action bar */}
        <div
          className="flex items-center justify-between px-6 py-3 print:hidden"
          style={{ background: '#f9f7f3', borderBottom: '1px solid #e5e0d8' }}
        >
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#888', letterSpacing: '0.12em' }}>
            Resume Preview
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 font-body text-xs tracking-wider"
              style={{ background: '#c9a84c', color: '#fff', borderRadius: '2px', letterSpacing: '0.08em' }}
            >
              <Printer size={13} />
              Print / Save PDF
            </button>
            <button onClick={onClose} style={{ color: '#999' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Document */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto" style={{ background: '#fff' }}>

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 mb-6" style={{ borderBottom: '2px solid #c9a84c' }}>
            <img
              src={profilePhoto}
              alt={data.name}
              className="w-20 h-20 object-cover object-top flex-shrink-0 rounded-sm"
              style={{ border: '2px solid #c9a84c' }}
            />
            <div className="text-center sm:text-left">
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.03em' }}>
                {data.name}
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#c9a84c', marginTop: 4, letterSpacing: '0.08em' }}>
                {data.title}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#888' }}>
                <span>📧 {data.email}</span>
                <span>📍 {data.location}</span>
                <span>🎓 CGPA 7.38 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <ResumeSection title="Professional Summary">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', lineHeight: 1.8, color: '#555' }}>{data.summary}</p>
          </ResumeSection>

          {/* Education */}
          <ResumeSection title="Education">
            <div className="space-y-3">
              {data.education.map((e) => (
                <div key={e.inst} className="flex justify-between items-start">
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#1a1a1a' }}>{e.inst}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#777', fontStyle: 'italic' }}>{e.degree}</p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#c9a84c', fontWeight: 600 }}>{e.grade}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#999' }}>{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Skills */}
          <ResumeSection title="Technical Skills">
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s) => (
                <span key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', background: '#f5f0e8', border: '1px solid #e0d5c0', borderRadius: 2, padding: '3px 10px', color: '#5a4a30' }}>
                  {s}
                </span>
              ))}
            </div>
          </ResumeSection>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-2 gap-6">
            <ResumeSection title="Soft Skills" compact>
              {data.softSkills.map((s) => (
                <p key={s} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#555', lineHeight: 1.7 }}>• {s}</p>
              ))}
            </ResumeSection>
            <ResumeSection title="Languages" compact>
              {data.languages.map((l) => (
                <p key={l} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#555', lineHeight: 1.7 }}>• {l}</p>
              ))}
            </ResumeSection>
          </div>

          {/* Projects */}
          <ResumeSection title="Projects">
            <div className="space-y-4">
              {data.projects.map((p) => (
                <div key={p.title}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#1a1a1a' }}>{p.title}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#666', marginTop: 3, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </ResumeSection>

        </div>
      </div>
    </div>
  );
}

function ResumeSection({ title, children, compact }) {
  return (
    <div className={compact ? 'mb-4' : 'mb-6'}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, paddingBottom: 4, borderBottom: '1px solid #e0d5c0' }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
