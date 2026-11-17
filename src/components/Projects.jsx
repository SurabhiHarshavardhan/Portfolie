import React, { useState } from 'react';
import { FolderGit2, ArrowRight, CheckCircle2, Play, X, Brain, Bot, Activity, Sparkles, Clock, ShieldCheck, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Interactive Mini-Demo states
  // 1. Cognita AI State
  const [cognitaRole, setCognitaRole] = useState('candidate');
  const [qIndex, setQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [evalResult, setEvalResult] = useState(null);

  const cognitaQuestions = [
    {
      q: "Which deep neural architecture is optimal for spatial feature extraction in cell microscopy?",
      options: ["Convolutional Neural Network (CNN)", "Recurrent Neural Network (RNN)", "Linear Regression", "Naive Bayes"],
      correct: 0,
      topic: "Deep Learning • Lecture_04.pdf"
    },
    {
      q: "In role-based authentication, what primary storage formats does the portal utilize?",
      options: ["JSON and CSV structured schemas", "Unencrypted Raw TXT", "Only RAM Cache", "External Hard Drive"],
      correct: 0,
      topic: "System Architecture • Security_Specs.pdf"
    }
  ];

  const handleSelectOption = (idx) => {
    setSelectedOption(idx);
    if (idx === cognitaQuestions[qIndex].correct) {
      setEvalResult({ status: 'Correct!', score: '+10 Pts', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200' });
    } else {
      setEvalResult({ status: 'Incorrect', score: '+0 Pts', bg: 'bg-rose-50 text-rose-800 border-rose-200' });
    }
  };

  const handleNextCognitaQuestion = () => {
    setSelectedOption(null);
    setEvalResult(null);
    setQIndex((prev) => (prev + 1) % cognitaQuestions.length);
  };

  // 2. Malaria State
  const [malariaResult, setMalariaResult] = useState({
    cnn: 96.4,
    svm: 88.7,
    status: 'Parasitized (Plasmodium detected)',
  });

  // 3. Tennis Robot State
  const [tennisBallCount, setTennisBallCount] = useState(8);
  const [robotStatus, setRobotStatus] = useState('Tracking Court (IR + Gyro)');

  const simulateMalaria = () => {
    const infected = Math.random() > 0.4;
    setMalariaResult({
      cnn: (95 + Math.random() * 4).toFixed(1),
      svm: (86 + Math.random() * 5).toFixed(1),
      status: infected ? 'Parasitized (Infected Blood Cell)' : 'Uninfected (Healthy Erythrocyte)',
    });
  };

  const triggerCollectorSweep = () => {
    setTennisBallCount((c) => (c >= 15 ? 1 : c + 1));
    const states = ['Obstacle Avoidance (Ultrasonic)', 'Sweeping Ball (Motor Active)', 'Tracking Court (IR + Gyro)', 'Deposit Ready'];
    setRobotStatus(states[Math.floor(Math.random() * states.length)]);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold text-slate-700 tracking-wider uppercase shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-slate-600" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold pearl-gradient-text">
            Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Full-stack AI assessment portals, medical deep learning & autonomous robotics
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-400 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left: Project Details (Cols 1-7) */}
                <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-display font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] sm:text-[11px] text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Modal Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors group"
                    >
                      <span>View Full Architecture & Tech Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: Live Interactive Telemetry / Benchmark Box (Cols 8-12) */}
                <div className="lg:col-span-5">
                  <div className="glass-pearl p-4 sm:p-5 rounded-2xl border border-slate-300/80 space-y-3.5 shadow-sm">
                    
                    {/* Project 1: COGNITA AI Interactive Portal */}
                    {project.id === 'cognita-ai' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-slate-700" />
                            COGNITA Live Demo
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-200/80 text-[10px] font-bold text-slate-800">
                            LLaMA-3.3-70B
                          </span>
                        </div>

                        {/* Role Switcher Tabs */}
                        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-200/60 rounded-xl text-[10px] font-bold text-slate-600">
                          <button
                            onClick={() => setCognitaRole('candidate')}
                            className={`py-1 rounded-lg transition-all ${
                              cognitaRole === 'candidate' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
                            }`}
                          >
                            Candidate
                          </button>
                          <button
                            onClick={() => setCognitaRole('teacher')}
                            className={`py-1 rounded-lg transition-all ${
                              cognitaRole === 'teacher' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
                            }`}
                          >
                            Teacher Studio
                          </button>
                          <button
                            onClick={() => setCognitaRole('admin')}
                            className={`py-1 rounded-lg transition-all ${
                              cognitaRole === 'admin' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
                            }`}
                          >
                            Admin Dash
                          </button>
                        </div>

                        {/* Role View: Candidate Portal Simulator */}
                        {cognitaRole === 'candidate' && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                              <span className="flex items-center gap-1 text-slate-700">
                                <Clock className="w-3 h-3 text-slate-500" />
                                Timer: 00:45
                              </span>
                              <span className="text-[10px] text-slate-500">{cognitaQuestions[qIndex].topic}</span>
                            </div>

                            <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                              <p className="font-bold text-slate-900 leading-snug">
                                Q{qIndex + 1}: {cognitaQuestions[qIndex].q}
                              </p>
                              
                              <div className="mt-2 space-y-1.5">
                                {cognitaQuestions[qIndex].options.map((opt, oIdx) => (
                                  <button
                                    key={oIdx}
                                    onClick={() => handleSelectOption(oIdx)}
                                    className={`w-full text-left p-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                                      selectedOption === oIdx
                                        ? 'bg-slate-900 text-white border-slate-900'
                                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                                    }`}
                                  >
                                    <span className="font-bold mr-1">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {evalResult && (
                              <div className={`p-2 rounded-xl border text-[11px] flex items-center justify-between font-bold ${evalResult.bg}`}>
                                <span>Automated Result: {evalResult.status}</span>
                                <span>{evalResult.score}</span>
                              </div>
                            )}

                            <button
                              onClick={handleNextCognitaQuestion}
                              className="w-full py-1.5 rounded-xl btn-pearl-dark text-xs font-bold text-white flex items-center justify-center gap-1.5"
                            >
                              <span>Next Extracted Question</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        {/* Role View: Teacher Studio Simulator */}
                        {cognitaRole === 'teacher' && (
                          <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-slate-900 font-bold">
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              <span>NLP PDF Ingestion Pipeline</span>
                            </div>
                            <div className="text-[11px] text-slate-600 space-y-1">
                              <div className="flex justify-between">
                                <span>PyPDF Extractor:</span>
                                <span className="font-bold text-slate-900">Active (Lecture.pdf)</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Groq LLaMA-3.3 Engine:</span>
                                <span className="font-bold text-slate-900">Connected (70B)</span>
                              </div>
                              <div className="flex justify-between">
                                <span>JSON Schema Validator:</span>
                                <span className="font-bold text-emerald-600">Passed 100%</span>
                              </div>
                            </div>
                            <div className="pt-1 border-t border-slate-100 text-[10px] text-slate-400 italic">
                              Enforces question uniqueness, option sanity, and answer keys.
                            </div>
                          </div>
                        )}

                        {/* Role View: Admin Dashboard Simulator */}
                        {cognitaRole === 'admin' && (
                          <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-slate-900 font-bold">
                              <Database className="w-4 h-4 text-slate-700" />
                              <span>Admin & Classroom Management</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                                <div className="text-[10px] text-slate-500">Storage</div>
                                <div className="font-bold text-slate-900 text-xs">JSON + CSV</div>
                              </div>
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                                <div className="text-[10px] text-slate-500">Security</div>
                                <div className="font-bold text-slate-900 text-xs">RBAC Auth</div>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-500 text-center font-medium">
                              Exportable performance spreadsheets & classroom gradebooks.
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project 2: Malaria interactive test */}
                    {project.id === 'malaria-cnn-svm' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Brain className="w-3.5 h-3.5 text-slate-700" />
                            Model Diagnostic Test
                          </span>
                          <span className="text-slate-900 font-bold">CNN vs SVM</span>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-[11px] text-slate-700 mb-1 font-medium">
                              <span>Deep CNN Accuracy:</span>
                              <span className="text-slate-900 font-bold">{malariaResult.cnn}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                              <div className="h-full bg-slate-900" style={{ width: `${malariaResult.cnn}%` }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] text-slate-600 mb-1 font-medium">
                              <span>SVM Baseline:</span>
                              <span className="text-slate-800 font-bold">{malariaResult.svm}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                              <div className="h-full bg-slate-500" style={{ width: `${malariaResult.svm}%` }} />
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px]">
                          <span className="text-slate-500 block font-medium">Sample Status:</span>
                          <span className="text-slate-900 font-bold">{malariaResult.status}</span>
                        </div>

                        <button
                          onClick={simulateMalaria}
                          className="w-full py-2 rounded-xl btn-pearl-dark text-xs font-bold text-white flex items-center justify-center gap-1.5"
                        >
                          <Play className="w-3 h-3" />
                          <span>Simulate Blood Sample Test</span>
                        </button>
                      </>
                    )}

                    {/* Project 3: Typhoid overview */}
                    {project.id === 'typhoid-rnn-cnn' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-slate-700" />
                            Comparative Analysis
                          </span>
                          <span className="text-slate-900 font-bold">RNN vs CNN</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                            <div className="text-[10px] text-slate-500 uppercase font-semibold">Spatial CNN</div>
                            <div className="text-xs font-bold text-slate-900 mt-0.5">Imaging & Cells</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                            <div className="text-[10px] text-slate-500 uppercase font-semibold">Sequential RNN</div>
                            <div className="text-xs font-bold text-slate-700 mt-0.5">Temporal Records</div>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-600 leading-relaxed font-medium italic">
                          Empirical benchmarks comparing Recurrent Neural Networks (RNN) and Convolutional Neural Networks (CNN) for clinical typhoid diagnostics.
                        </p>
                      </>
                    )}

                    {/* Project 4: Tennis Robot interactive */}
                    {project.id === 'tennis-ball-robot' && (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Bot className="w-3.5 h-3.5 text-slate-700" />
                            Robotic Telemetry
                          </span>
                          <span className="text-slate-800 font-semibold text-[11px]">Raspberry Pi 5</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-white border border-slate-200">
                            <div className="text-[10px] text-slate-500 uppercase font-semibold">Collected Balls</div>
                            <div className="text-base font-bold text-slate-900">{tennisBallCount} / 15</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white border border-slate-200">
                            <div className="text-[10px] text-slate-500 uppercase font-semibold">Sensors Active</div>
                            <div className="text-xs font-bold text-slate-700 mt-1">Ultrasonic + IR</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-slate-200 text-[11px]">
                          <span className="text-slate-500 block font-medium">Current Control State:</span>
                          <span className="text-slate-900 font-bold">{robotStatus}</span>
                        </div>

                        <button
                          onClick={triggerCollectorSweep}
                          className="w-full py-2 rounded-xl btn-pearl-dark text-xs font-bold text-white flex items-center justify-center gap-1.5"
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

      {/* Full Modal Specification View (White & Grey Glass) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1.5">
                  Project Overview
                </h4>
                <p className="text-slate-600 font-medium">{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  {selectedProject.techSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-1 sm:grid-cols-12 p-2.5 text-xs">
                      <span className="sm:col-span-5 font-bold text-slate-900">{spec.label}</span>
                      <span className="sm:col-span-7 text-slate-600">{spec.value}</span>
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
