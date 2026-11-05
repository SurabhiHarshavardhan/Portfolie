import React from 'react';
import { MapPin, GraduationCap, Languages, Zap } from 'lucide-react';
import profilePhoto from '../image/Harshavardhan.jpeg';

const interests = [
  { title: 'Internet of Things (IoT)', desc: 'Smart sensor networks, MQTT protocols, edge analytics, and cloud data pipelines.' },
  { title: 'Embedded Systems', desc: 'Microcontroller architecture, sensor interfacing, and low-level C programming.' },
  { title: 'Robotics & Automation', desc: 'Sensor fusion, motor actuation, and autonomous navigation algorithms.' },
  { title: 'AI & Medical Imaging', desc: 'CNN/RNN models for clinical microscopy and automated disease diagnostics.' },
];

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 reveal">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-px" style={{ background: '#c9a84c' }} />
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#c9a84c', letterSpacing: '0.2em' }}>
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#e8e0d4' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-elegant text-lg italic" style={{ color: 'rgba(232,224,212,0.5)' }}>
          {subtitle}
        </p>
      )}
      <div className="mt-5 divider" style={{ maxWidth: '80px' }} />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Engineering intelligence, one circuit at a time"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal space-y-5">
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(232,224,212,0.7)', lineHeight: '1.9' }}>
                I am <strong style={{ color: '#e8e0d4' }}>Surabhi Kamesh Sri Surya Harshavardhan</strong>, an Electronics and Communication Engineering graduate from Saveetha School of Engineering, Chennai. My academic journey has equipped me with deep expertise in digital electronics, signal processing, and embedded system design.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(232,224,212,0.7)', lineHeight: '1.9' }}>
                Proficient in <span style={{ color: '#c9a84c' }}>C and Python</span>, I have channelled my skills into building real-world applications — from AI-powered malaria diagnostic systems achieving <span style={{ color: '#c9a84c' }}>96.4% classification accuracy</span> to autonomous tennis ball-collecting robots that merge embedded hardware with intelligent control.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(232,224,212,0.7)', lineHeight: '1.9' }}>
                I am passionate about architecting elegant hardware–software integrated solutions and eager to contribute to growth-oriented organisations pushing the frontier of engineering.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="reveal delay-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: 'Institution', val: 'Saveetha School of Engineering' },
                { icon: MapPin, label: 'Location', val: 'Chennai, TN & Tirupathi, AP' },
                { icon: Zap, label: 'Focus Area', val: 'Hardware + AI Integration' },
                { icon: Languages, label: 'Languages', val: 'Telugu, English, Hindi, Tamil' },
              ].map(({ icon: Icon, label, val }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-sm card-glow"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Icon size={15} style={{ color: '#c9a84c', marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.1em' }}>{label}</p>
                    <p className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.8)' }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Career objective */}
            <div
              className="reveal delay-300 p-5 rounded-sm"
              style={{
                background: 'rgba(201,168,76,0.05)',
                borderLeft: '2px solid rgba(201,168,76,0.4)',
              }}
            >
              <p className="font-elegant text-base italic" style={{ color: 'rgba(232,224,212,0.65)', lineHeight: '1.8' }}>
                "Eager to apply technical skills in embedded systems and machine learning, continuously learn evolving technologies, and contribute meaningfully to high-impact engineering projects."
              </p>
            </div>
          </div>

          {/* Interests Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="reveal font-body text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(201,168,76,0.7)', letterSpacing: '0.15em' }}>
              Areas of Specialisation
            </h3>
            {interests.map((item, i) => (
              <div
                key={item.title}
                className={`reveal delay-${(i + 1) * 100} hover-lift card-glow p-5 rounded-sm cursor-default`}
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a84c' }} />
                  <h4 className="font-body text-sm font-semibold" style={{ color: '#e8e0d4' }}>{item.title}</h4>
                </div>
                <p className="font-body text-xs leading-relaxed pl-4" style={{ color: 'rgba(232,224,212,0.5)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export { SectionHeader };
