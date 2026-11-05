import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Boxes, 
  Binary, 
  Wifi, 
  Activity, 
  Radio, 
  Brain, 
  GitCommit, 
  Gauge, 
  Eye, 
  Award, 
  Lightbulb, 
  MessageSquare, 
  Users, 
  Clock, 
  Languages, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconComponents = {
  Code2,
  Cpu,
  Boxes,
  Binary,
  Wifi,
  CircuitBoard: Cpu,
  Activity,
  Radio,
  Brain,
  GitCommit,
  Gauge,
  Eye,
  Award,
  Lightbulb,
  MessageSquare,
  Users,
  Clock
};

export default function Skills() {
  const { skillCategories, languages } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Programming & Core' },
    { id: 'hardware', label: 'Embedded & Hardware' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'softskills', label: 'Soft Skills' },
    { id: 'languages', label: 'Spoken Languages' },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative circuit-grid no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Proven competencies across electronics, software systems, and intelligent models
          </p>
        </div>

        {/* Tab Filters: Horizontally scrollable on mobile with hidden scrollbar */}
        <div className="flex items-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Skills Content */}
        {activeTab !== 'languages' && (
          <div className="space-y-10 sm:space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold font-mono text-cyan-300">
                    // {category.name}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {category.skills.map((skill, idx) => {
                    const IconComp = iconComponents[skill.icon] || Cpu;
                    return (
                      <div
                        key={idx}
                        className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="p-2 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                              <IconComp className="w-4 sm:w-5 h-4 sm:h-5" />
                            </div>
                            <span className="font-semibold text-white text-xs sm:text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-950 rounded-full h-1.5 sm:h-2 overflow-hidden border border-slate-800 mb-3">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Spoken Languages Section */}
        {(activeTab === 'all' || activeTab === 'languages') && (
          <div className="mt-12 sm:mt-14 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold font-mono text-teal-300 flex items-center gap-2">
                <Languages className="w-5 h-5 text-teal-400" />
                <span>// Spoken Languages (Multilingual Proficiency)</span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-teal-500/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-bold text-white font-mono">
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-950/70 border border-teal-500/30 text-teal-300">
                      {lang.level}%
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 mb-3">{lang.proficiency}</p>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-cyan-500 h-1.5 rounded-full"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
