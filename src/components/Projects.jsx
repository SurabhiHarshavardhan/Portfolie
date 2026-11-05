import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { SectionHeader } from './About';

const projects = [
  {
    num: '01',
    title: 'Malaria Parasite Categorization',
    subtitle: 'CNN vs. Support Vector Machines',
    category: 'Medical AI & Computer Vision',
    tags: ['Deep Learning', 'CNN', 'SVM', 'Python', 'TensorFlow', 'Medical Imaging'],
    metric: '96.4%',
    metricLabel: 'CNN Accuracy',
    desc: 'Developed a novel machine learning diagnostic framework to classify malaria parasites from microscopic blood cell images. Performed rigorous comparative evaluation of Deep Convolutional Neural Networks against Support Vector Machines, achieving a +7.3% accuracy improvement with CNN and 97.1% sensitivity — directly reducing false-negative clinical diagnoses.',
    highlights: [
      'End-to-end image preprocessing pipeline for RBC slide segmentation',
      'Custom Conv-Pool-Dense CNN architecture with Dropout regularisation',
      'SVM baseline with RBF kernel and handcrafted texture/colour features',
      '97.1% sensitivity in detecting infected erythrocytes',
      '42ms average inference time per sample',
    ],
    stack: 'Python · TensorFlow · Keras · Scikit-learn · OpenCV · NumPy · Matplotlib',
  },
  {
    num: '02',
    title: 'Typhoid Parasite Detection',
    subtitle: 'RNN vs. Deep CNN Comparative Study',
    category: 'Deep Learning & Healthcare Analytics',
    tags: ['RNN', 'CNN', 'Python', 'Healthcare', 'Sequential Analysis'],
    metric: '95.1%',
    metricLabel: 'Model Accuracy',
    desc: 'Explored and contrasted Recurrent Neural Networks (RNN) and Convolutional Neural Networks (CNN) for typhoid-related medical data analysis. Investigated how spatial feature extraction compares against sequential temporal patient biomarker dynamics, with key insights into hybrid CNN-RNN architectures for comprehensive multi-modal diagnostics.',
    highlights: [
      'Structured evaluation framework: spatial (CNN) vs. sequential (RNN)',
      'Patient biomarker trend preprocessing and augmentation',
      'Precision, recall, F1-score, and ROC-AUC analysis across both models',
      'Insights into hybrid CNN-RNN pipelines for multi-modal diagnostics',
      'Early detection capability to reduce diagnostic turnaround time',
    ],
    stack: 'Python · TensorFlow · Keras · Pandas · NumPy · Matplotlib',
  },
  {
    num: '03',
    title: 'AI-Integrated Tennis Ball Collector Robot',
    subtitle: 'Autonomous Embedded Robotic System',
    category: 'Robotics, Embedded IoT & AI',
    tags: ['Robotics', 'Embedded Systems', 'IoT', 'C/C++', 'Python', 'Sensors', 'Autonomous'],
    metric: '92%',
    metricLabel: 'Collection Rate',
    desc: 'Designed and built an autonomous AI-integrated robotic rover for tennis court ball retrieval. Combines computer vision-based ball detection, embedded C microcontroller firmware for precise motor control, an ultrasonic obstacle avoidance system, and a mechanical roller intake mechanism — eliminating manual collection effort.',
    highlights: [
      'Ultrasonic HC-SR04 + IR proximity sensor fusion for environment awareness',
      'Embedded C/C++ firmware with PWM differential motor steering',
      'Mechanical rotating roller intake and ball hopper storage system',
      'AI-guided pathfinding to nearest detected tennis ball',
      'IoT telemetry: battery status, ball count, and diagnostic logs',
    ],
    stack: 'C / C++ · Python · Microcontroller · HC-SR04 · IR Sensors · DC Motors · Li-Ion Power',
  },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-sm"
        style={{ background: '#141414', border: '1px solid rgba(201,168,76,0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div>
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#c9a84c', letterSpacing: '0.15em' }}>
              {project.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold mt-1" style={{ color: '#e8e0d4' }}>{project.title}</h3>
            <p className="font-elegant text-base italic mt-0.5" style={{ color: 'rgba(232,224,212,0.5)' }}>{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 ml-4 flex-shrink-0 transition-colors" style={{ color: 'rgba(232,224,212,0.4)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Metric */}
          <div className="flex items-center gap-6">
            <div>
              <p className="font-display text-4xl font-bold gold-text">{project.metric}</p>
              <p className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.6)' }}>{project.metricLabel}</p>
            </div>
            <div className="divider flex-1" />
          </div>

          {/* Description */}
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,224,212,0.65)', lineHeight: '1.9' }}>
            {project.desc}
          </p>

          {/* Key Highlights */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em' }}>
              Key Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c9a84c' }} />
                  <span className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.65)' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div
            className="p-4 rounded-sm"
            style={{ background: 'rgba(201,168,76,0.05)', borderLeft: '2px solid rgba(201,168,76,0.3)' }}
          >
            <p className="font-body text-xs tracking-widest uppercase mb-1.5" style={{ color: 'rgba(201,168,76,0.5)', letterSpacing: '0.12em' }}>Stack</p>
            <p className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.7)' }}>{project.stack}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-body text-xs px-3 py-1 rounded-sm"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(232,224,212,0.5)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32" style={{ background: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Research & Projects"
          subtitle="Rigorous engineering solutions at the intersection of hardware and intelligence"
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className={`reveal delay-${(i + 1) * 100} hover-lift card-glow group cursor-pointer`}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '2px',
                padding: '28px 32px',
              }}
              onClick={() => setSelected(project)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">

                {/* Number & Metric */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 flex-shrink-0">
                  <span className="font-elegant text-5xl font-light" style={{ color: 'rgba(201,168,76,0.2)' }}>
                    {project.num}
                  </span>
                  <div className="sm:mt-3">
                    <p className="font-display text-2xl font-bold gold-text">{project.metric}</p>
                    <p className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.5)', lineHeight: '1.4' }}>{project.metricLabel}</p>
                  </div>
                </div>

                {/* Vertical divider */}
                <div
                  className="hidden sm:block w-px self-stretch"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em' }}>
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 group-hover:text-gold transition-colors duration-300" style={{ color: '#e8e0d4' }}>
                      {project.title}
                    </h3>
                    <p className="font-elegant text-base italic" style={{ color: 'rgba(232,224,212,0.4)' }}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-sm leading-relaxed line-clamp-3" style={{ color: 'rgba(232,224,212,0.55)', lineHeight: '1.8' }}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs px-2.5 py-1 rounded-sm"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(232,224,212,0.4)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="self-center flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'rgba(201,168,76,0.6)',
                    background: 'rgba(201,168,76,0.05)',
                  }}
                >
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
