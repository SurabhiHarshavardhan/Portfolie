import React, { useState } from 'react';
import { SectionHeader } from './About';

const categories = [
  {
    id: 'technical',
    label: 'Technical',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C / Embedded C', level: 85 },
      { name: 'Object-Oriented Programming', level: 88 },
      { name: 'IoT Architecture & MQTT', level: 87 },
      { name: 'Digital Electronics', level: 85 },
      { name: 'Signal Processing', level: 80 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    skills: [
      { name: 'Deep CNN (Medical Imaging)', level: 88 },
      { name: 'Recurrent Neural Networks', level: 82 },
      { name: 'Support Vector Machines', level: 84 },
      { name: 'Computer Vision', level: 85 },
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'Scikit-learn', level: 83 },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware',
    skills: [
      { name: 'Microcontroller Programming', level: 86 },
      { name: 'Sensor & Actuator Interfacing', level: 85 },
      { name: 'PWM Motor Control', level: 83 },
      { name: 'I2C / SPI / UART Protocols', level: 80 },
      { name: 'Circuit Design & Debugging', level: 78 },
      { name: 'PCB Prototyping', level: 72 },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    skills: [
      { name: 'Leadership & Initiative', level: 90 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Communication', level: 88 },
      { name: 'Teamwork', level: 90 },
      { name: 'Time Management', level: 86 },
      { name: 'Adaptability', level: 88 },
    ],
  },
];

const languages = [
  { name: 'Telugu', level: 100, note: 'Native' },
  { name: 'English', level: 92, note: 'Professional' },
  { name: 'Hindi', level: 80, note: 'Working' },
  { name: 'Tamil', level: 75, note: 'Conversational' },
];

export default function Skills() {
  const [active, setActive] = useState('technical');

  const current = categories.find((c) => c.id === active);

  return (
    <section id="skills" className="py-24 sm:py-32" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Competencies"
          subtitle="A breadth of knowledge across hardware, software, and intelligent systems"
        />

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="font-body text-xs px-5 py-2.5 tracking-widest uppercase transition-all duration-300"
              style={{
                letterSpacing: '0.12em',
                background: active === cat.id ? 'rgba(201,168,76,0.12)' : 'transparent',
                border: active === cat.id ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(255,255,255,0.08)',
                color: active === cat.id ? '#c9a84c' : 'rgba(232,224,212,0.5)',
                borderRadius: '2px',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-7 mb-16">
          {current.skills.map((skill, i) => (
            <div key={skill.name} className={`reveal delay-${i < 3 ? (i + 1) * 100 : (i - 2) * 100}`}>
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.75)' }}>{skill.name}</span>
                <span className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.7)' }}>{skill.level}%</span>
              </div>
              <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="reveal">
          <h3
            className="font-body text-xs tracking-widest uppercase mb-8"
            style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em' }}
          >
            Spoken Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                className={`reveal delay-${(i + 1) * 100} hover-lift card-glow p-5 rounded-sm text-center`}
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="font-display text-xl font-bold mb-1" style={{ color: '#e8e0d4' }}>{lang.name}</p>
                <p className="font-elegant text-sm italic mb-3" style={{ color: 'rgba(201,168,76,0.7)' }}>{lang.note}</p>
                <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
