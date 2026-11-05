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
  Sparkles 
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
  Clock,
};

export default function Skills() {
  const { skillCategories, languages } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'hardware', label: 'Embedded & IoT' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'softskills', label: 'Soft Skills' },
    { id: 'languages', label: 'Languages' },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 relative border-t border-purple-500/10 bg-[#030308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-300 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            Skills & Competencies
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Validated capabilities across embedded hardware, algorithms, and deep neural models
          </p>
        </div>

        {/* Swipeable Tabs on mobile with hidden scrollbar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === tab.id
                  ? 'btn-aurora text-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5 hover:border-purple-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        {activeTab !== 'languages' && (
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-rose-400 rounded-full" />
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.skills.map((skill, idx) => {
                    const IconComp = iconComponents[skill.icon] || Cpu;
                    return (
                      <div
                        key={idx}
                        className="glass-card p-4 rounded-2xl border border-white/5 group hover:border-purple-500/40"
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20 group-hover:scale-110 transition-transform">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-purple-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Multitone Aurora Level Bar */}
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden mb-2.5 border border-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#f43f5e] transition-all duration-700 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/5 font-medium"
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
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-rose-400 rounded-full" />
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Languages className="w-4 h-4 text-purple-400" />
                Spoken Languages
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl border border-white/5 text-center hover:border-purple-500/30"
                >
                  <div className="text-sm sm:text-base font-bold text-white mb-0.5">
                    {lang.name}
                  </div>
                  <div className="text-[11px] text-purple-300 font-semibold mb-2">
                    {lang.proficiency}
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7c3aed] to-[#db2777]"
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
