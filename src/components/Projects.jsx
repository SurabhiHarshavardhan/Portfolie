import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Cpu, 
  Brain, 
  Bot, 
  CheckCircle2, 
  Play, 
  Activity, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeDemos, setActiveDemos] = useState({});

  // Malaria interactive simulation state
  const [malariaResult, setMalariaResult] = useState({
    cnnConfidence: 96.8,
    svmConfidence: 88.4,
    status: 'Parasitized (Plasmodium Detected)',
    latency: '38ms'
  });

  // Typhoid interactive simulation state
  const [typhoidMetric, setTyphoidMetric] = useState('cnn');

  // Tennis Robot interactive simulation state
  const [robotStatus, setRobotStatus] = useState({
    active: true,
    ballsCollected: 8,
    distanceToBall: 0.65, // meters
    motorSpeed: '75%',
    intakeActive: true
  });

  const triggerMalariaSample = () => {
    const isParasite = Math.random() > 0.3;
    setMalariaResult({
      cnnConfidence: (94 + Math.random() * 5).toFixed(1),
      svmConfidence: (84 + Math.random() * 6).toFixed(1),
      status: isParasite ? 'Parasitized (Infected Erythrocyte)' : 'Uninfected (Healthy Cell)',
      latency: `${Math.floor(32 + Math.random() * 15)}ms`
    });
  };

  const collectTennisBall = () => {
    setRobotStatus((prev) => ({
      ...prev,
      ballsCollected: prev.ballsCollected + 1,
      distanceToBall: (Math.random() * 1.5 + 0.3).toFixed(2)
    }));
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/70 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Research & Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Rigorous comparative deep learning studies and integrated autonomous hardware systems
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl"
              >
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Project Overview & Specs */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Top badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
                        PROJECT #{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Key Highlights Bullet Points */}
                    <div className="space-y-2 pt-1">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-300 text-xs font-mono font-semibold transition-all shadow-sm"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Full Architectural Deep Dive</span>
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Live Interactive Benchmarking / Telemetry Widget */}
                  <div className="lg:col-span-5">
                    
                    {/* Malaria Interactive Diagnostic Panel */}
                    {project.demoType === 'cnn-vs-svm' && (
                      <div className="bg-slate-900/90 rounded-xl p-5 border border-cyan-500/30 space-y-4 font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <span className="text-cyan-400 font-bold flex items-center gap-2">
                            <Brain className="w-4 h-4 text-cyan-400" />
                            LIVE MODEL BENCHMARK
                          </span>
                          <span className="text-[11px] text-slate-400">CNN vs SVM</span>
                        </div>

                        {/* Model comparison bars */}
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-slate-300 mb-1">
                              <span className="font-semibold text-cyan-300">Deep CNN (Conv-Pool-Dense)</span>
                              <span className="text-cyan-400 font-bold">{malariaResult.cnnConfidence}% Conf</span>
                            </div>
                            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                              <div
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${malariaResult.cnnConfidence}%` }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-300 mb-1">
                              <span className="font-semibold text-purple-300">SVM (RBF Kernel)</span>
                              <span className="text-purple-400 font-bold">{malariaResult.svmConfidence}% Conf</span>
                            </div>
                            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${malariaResult.svmConfidence}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Result Output Card */}
                        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                          <div className="text-[11px] text-slate-400 flex justify-between">
                            <span>SAMPLE DIAGNOSIS:</span>
                            <span className="text-teal-400">{malariaResult.latency}</span>
                          </div>
                          <div className="text-emerald-400 font-bold text-xs truncate">
                            &gt; {malariaResult.status}
                          </div>
                        </div>

                        <button
                          onClick={triggerMalariaSample}
                          className="w-full py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all"
                        >
                          <Play className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Classify Next Blood Sample</span>
                        </button>
                      </div>
                    )}

                    {/* Typhoid Interactive Model Comparison Panel */}
                    {project.demoType === 'rnn-vs-cnn' && (
                      <div className="bg-slate-900/90 rounded-xl p-5 border border-emerald-500/30 space-y-4 font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <span className="text-emerald-400 font-bold flex items-center gap-2">
                            <Activity className="w-4 h-4 text-emerald-400" />
                            SPATIAL VS SEQUENTIAL
                          </span>
                          <span className="text-[11px] text-slate-400">Typhoid Analysis</span>
                        </div>

                        {/* Switch buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setTyphoidMetric('cnn')}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              typhoidMetric === 'cnn'
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            CNN Spatial Vision
                          </button>
                          <button
                            onClick={() => setTyphoidMetric('rnn')}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              typhoidMetric === 'rnn'
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            RNN Temporal Trend
                          </button>
                        </div>

                        {/* Metric Display */}
                        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Architecture:</span>
                            <span className="text-white font-semibold">
                              {typhoidMetric === 'cnn' ? 'Convolutional Feature Hierarchy' : 'Recurrent Sequential Memory'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Evaluated Accuracy:</span>
                            <span className="text-emerald-400 font-bold">
                              {typhoidMetric === 'cnn' ? '95.1% Overall Accuracy' : '91.8% Temporal Trend Accuracy'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400">Primary Strength:</span>
                            <span className="text-teal-300">
                              {typhoidMetric === 'cnn' ? 'Cell Morphological Invariance' : 'Patient Fever & Vitals Dynamics'}
                            </span>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-400 italic">
                          * Research proved hybrid CNN-RNN configurations yield optimal clinical accuracy.
                        </div>
                      </div>
                    )}

                    {/* Tennis Ball Robot Telemetry Widget */}
                    {project.demoType === 'robotics-telemetry' && (
                      <div className="bg-slate-900/90 rounded-xl p-5 border border-amber-500/30 space-y-4 font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <span className="text-amber-400 font-bold flex items-center gap-2">
                            <Bot className="w-4 h-4 text-amber-400" />
                            ROBOT TELEMETRY & RADAR
                          </span>
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            AUTONOMOUS
                          </span>
                        </div>

                        {/* Radar metrics */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">COLLECTED BALLS</span>
                            <span className="text-lg font-bold text-amber-400">
                              {robotStatus.ballsCollected} / 15
                            </span>
                          </div>
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">TARGET DISTANCE</span>
                            <span className="text-lg font-bold text-cyan-400">
                              {robotStatus.distanceToBall}m
                            </span>
                          </div>
                        </div>

                        {/* System Status Indicators */}
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
                          <div className="flex justify-between">
                            <span className="text-slate-400">PWM Motor Output:</span>
                            <span className="text-white font-semibold">{robotStatus.motorSpeed}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Intake Roller Status:</span>
                            <span className="text-emerald-400 font-semibold">ROTATING (ACTIVE)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Obstacle Avoidance:</span>
                            <span className="text-cyan-400 font-semibold">CLEAR (HC-SR04 OK)</span>
                          </div>
                        </div>

                        <button
                          onClick={collectTennisBall}
                          className="w-full py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all"
                        >
                          <Play className="w-3.5 h-3.5 text-amber-400" />
                          <span>Simulate Ball Intake (+1)</span>
                        </button>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

