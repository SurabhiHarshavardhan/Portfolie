import React from 'react';
import { SectionHeader } from './About';

const edu = [
  {
    period: '2022 – 2026',
    institution: 'Saveetha School of Engineering',
    location: 'Chennai, Tamil Nadu',
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    grade: 'CGPA: 7.38 / 10.0',
    color: '#c9a84c',
    highlights: [
      'Core coursework in Digital Electronics, Signals & Systems, Microprocessors & Microcontrollers',
      'Research in Deep Learning for medical parasite classification (CNN vs. SVM, RNN vs. CNN)',
      'Developed an AI-integrated autonomous tennis ball collector robot',
    ],
  },
  {
    period: '2020 – 2022',
    institution: 'Viswasai Junior College',
    location: 'Tirupathi, Andhra Pradesh',
    degree: 'Intermediate Education (MPC — Mathematics, Physics, Chemistry)',
    grade: 'Percentage: 51%',
    color: 'rgba(201,168,76,0.5)',
    highlights: [
      'Foundation in Calculus, Electromagnetism, Analytical Mechanics, and Chemistry',
      'Developed analytical problem-solving and mathematical rigour',
    ],
  },
  {
    period: '2019 – 2020',
    institution: 'Model Academy EM School',
    location: 'Renigunta, Andhra Pradesh',
    degree: 'Secondary School Certificate (SSC / 10th Standard)',
    grade: 'Percentage: 85%',
    color: 'rgba(201,168,76,0.3)',
    highlights: [
      'Distinction achievement with 85% overall score',
      'Active participation in science exhibitions and mathematics competitions',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Background"
          title="Education"
          subtitle="A structured path through engineering and analytical disciplines"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 sm:left-6 top-2 bottom-2 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))' }}
          />

          <div className="space-y-10 sm:space-y-12">
            {edu.map((item, i) => (
              <div
                key={item.institution}
                className={`reveal delay-${(i + 1) * 100} flex flex-col sm:flex-row gap-6 sm:gap-10`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full mt-2 relative z-10"
                    style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 hover-lift card-glow p-6 sm:p-7 rounded-sm"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <span
                        className="font-body text-xs tracking-widest uppercase"
                        style={{ color: item.color, letterSpacing: '0.15em' }}
                      >
                        {item.period}
                      </span>
                      <h3
                        className="font-display text-xl font-bold mt-1"
                        style={{ color: '#e8e0d4' }}
                      >
                        {item.institution}
                      </h3>
                      <p className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.45)' }}>
                        {item.location}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span
                        className="font-display text-lg font-bold"
                        style={{ color: '#c9a84c' }}
                      >
                        {item.grade}
                      </span>
                    </div>
                  </div>

                  <p
                    className="font-elegant text-base italic mb-4"
                    style={{ color: 'rgba(232,224,212,0.5)' }}
                  >
                    {item.degree}
                  </p>

                  <div className="space-y-2">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: item.color }}
                        />
                        <span className="font-body text-xs leading-relaxed" style={{ color: 'rgba(232,224,212,0.5)', lineHeight: '1.7' }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
