import React, { useState } from 'react';
import { FolderGit2, ArrowRight, CheckCircle2, Play, Sparkles, X, Brain, Bot, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Interactive Mini-Demo states
  const [malariaResult, setMalariaResult] = useState({
    cnn: 96.4,
    svm: 88.7,
    status: 'Parasitized (Plasmodium detected)',
  });
  const [tennisBallCount, setTennisBallCount] = useState(8);

  const simulateMalaria = () => {
    const infected = Math.random() > 0.4;
    setMalariaResult({
      cnn: (95 + Math.random() * 4).toFixed(1),
      svm: (86 + Math.random() * 5).toFixed(1),
      status: infected ? 'Parasitized (Infected Erythrocyte)' : 'Uninfected (Healthy Blood Cell)',
    });
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative border-t border-purple-500/10 bg-[#05050c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-300 tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Medical deep learning diagnostics & autonomous embedded robotic platforms
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left: Project Details (Cols 1-7) */}
                <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-bold">
                      {project.category}
                    </span>
                    <span className="text-xs text-purple-300/50 font-mono font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-white/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Modal Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-white transition-colors group"
                    >
                      <span>View Full Architecture & Tech Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: Live Interactive Telemetry / Benchmark Box (Cols 8-12) */}
                <div className="lg:col-span-5">
                  <div className="glass-aurora p-4 sm:p-5 rounded-2xl border border-purple-500/30 space-y-3.5">
                    
                    {/* Project 1 interactive test */}
                    {project.id === 'malaria-cnn-svm' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Brain className="w-3.5 h-3.5 text-purple-400" />
                            Model Diagnostic Test
                          </span>
                          <span className="text-purple-300 font-bold">CNN vs SVM</span>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-[11px] text-white/80 mb-1">
                              <span>Deep CNN Accuracy:</span>
                              <span className="text-purple-300 font-bold">{malariaResult.cnn}%</span>
                            </div>
                            <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{ width: `${malariaResult.cnn}%` }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] text-white/60 mb-1">
                              <span>SVM Baseline:</span>
                              <span className="text-white font-bold">{malariaResult.svm}%</span>
                            </div>
                            <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                              <div className="h-full bg-white/40" style={{ width: `${malariaResult.svm}%` }} />
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px]">
                          <span className="text-white/40 block">Result:</span>
                          <span className="text-emerald-400 font-bold">{malariaResult.status}</span>
                        </div>

                        <button
                          onClick={simulateMalaria}
                          className="w-full py-2 rounded-xl btn-aurora text-xs font-bold text-white flex items-center justify-center gap-1.5"
                        >
                          <Play className="w-3 h-3" />
                          <span>Simulate Blood Sample Test</span>
                        </button>
                      </>
                    )}

                    {/* Project 2: Typhoid overview */}
                    {project.id === 'typhoid-rnn-cnn' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-cyan-400" />
                            Comparative Matrix
                          </span>
                          <span className="text-cyan-300 font-bold">95.1% Acc</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                            <div className="text-[10px] text-white/40 uppercase">Spatial CNN</div>
                            <div className="text-sm font-bold text-white mt-0.5">Microscopy</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                            <div className="text-[10px] text-white/40 uppercase">Sequential RNN</div>
                            <div className="text-sm font-bold text-purple-300 mt-0.5">Biomarkers</div>
                          </div>
                        </div>

                        <p className="text-[11px] text-white/70 leading-relaxed italic">
                          Empirical benchmarks confirmed hybrid spatial-temporal architectures yield optimal clinical efficacy.
                        </p>
                      </>
                    )}

                    {/* Project 3: Tennis Robot interactive */}
                    {project.id === 'tennis-ball-robot' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Bot className="w-3.5 h-3.5 text-rose-400" />
                            Robotic Telemetry
                          </span>
                          <span className="text-emerald-400 font-semibold text-[11px]">Autonomous</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                            <div className="text-[10px] text-white/40 uppercase">Ball Reservoir</div>
                            <div className="text-base font-bold text-rose-400">{tennisBallCount} / 15</div>
                          </div>
                          <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                            <div className="text-[10px] text-white/40 uppercase">Efficiency</div>
                            <div className="text-base font-bold text-white">92% Rate</div>
                          </div>
                        </div>

                        <button
                          onClick={() => setTennisBallCount((c) => (c >= 15 ? 1 : c + 1))}
                          className="w-full py-2 rounded-xl btn-aurora text-xs font-bold text-white flex items-center justify-center gap-1.5"
                        >
                          <Play className="w-3 h-3" />
                          <span>Trigger Collector Sweep (+1)</span>
                        </button>
                      </>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Modal Specification View */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0b0b14] border border-purple-500/30 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-purple-300 tracking-wider block">
                  {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl bg-white/5 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-white/80 leading-relaxed">
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1.5">
                  Project Overview
                </h4>
                <p className="text-white/70">{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <div className="divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden bg-white/5">
                  {selectedProject.techSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-1 sm:grid-cols-12 p-2.5 text-xs">
                      <span className="sm:col-span-5 font-bold text-purple-300">{spec.label}</span>
                      <span className="sm:col-span-7 text-white/80">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
