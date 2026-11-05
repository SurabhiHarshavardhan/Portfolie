import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, RefreshCw, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HardwareTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'HARSHA-OS v2.4 (ECE Embedded Kernel - Target: ECE-328P)'
    },
    {
      type: 'system',
      text: 'Dynamic Port Listener initialized. Type "help" or click suggestions below.'
    }
  ]);
  const bottomRef = useRef(null);

  const quickCommands = ['help', 'about', 'skills', 'projects', 'edu', 'contact', 'specs', 'clear'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: 'user', text: `$ ${raw}` }];

    switch (raw) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  about     - Displays engineer bio & career background
  skills    - Lists technical competencies & frameworks
  projects  - Shows featured research & hardware projects
  edu       - Displays academic degrees and institutions
  contact   - Shows direct contact info & channels
  specs     - Shows hardware / MCU architecture specifications
  clear     - Clears the terminal screen
  ping      - Pings target server and measures latency`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          text: `SURABHI KAMESH SRI SURYA HARSHAVARDHAN
B.Tech ECE (2022-2026), Saveetha School of Engineering Chennai (CGPA 7.38).
Focus: IoT, Embedded Hardware, Signal Processing, and Deep Learning.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `TECHNICAL CORE:
- Programming: Python, C, Object Oriented Programming (OOP)
- Embedded & IoT: Microcontrollers, Sensor Interfacing, Signal Processing, Digital Electronics
- AI & ML: Deep CNN, RNN, Support Vector Machines (SVM), Computer Vision
- Languages: Telugu, Hindi, English, Tamil`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `FEATURED PROJECTS:
1. Malaria Parasite Categorization: CNN vs SVM (96.4% Acc)
2. Typhoid Parasite Detection: RNN vs CNN Comparative Analysis
3. Tennis Ball Collector Robot Integrated with AI (Autonomous rover)`
        });
        break;

      case 'edu':
        newHistory.push({
          type: 'response',
          text: `EDUCATION TIMELINE:
- Saveetha School of Engineering, Chennai (B.Tech ECE, 2022-2026, CGPA 7.38)
- Viswasai Junior College, Tirupathi (Intermediate, 2022, 51%)
- Model Academy EM School, Renigunta (Secondary School, 2020, 85%)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `CONTACT & REACH:
- Email: harshavardhan.surabhi@gmail.com
- Location: Chennai, TN / Tirupathi, AP
- Portfolio Status: Vercel Ready (Dynamic Ports Enabled)`
        });
        break;

      case 'specs':
        newHistory.push({
          type: 'response',
          text: `HARDWARE PROFILE:
- MCU Architecture: Dual-Core 240MHz 32-bit RISC
- Wireless: 802.11 b/g/n IoT + Bluetooth 5 (LE)
- AI Accelerators: Custom CNN-Inference Engine
- Sensor Buses: I2C, SPI, UART, PWM, ADC`
        });
        break;

      case 'ping':
        newHistory.push({
          type: 'response',
          text: `PING vercel-dynamic-host (127.0.0.1): 64 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.421 ms
--- vercel ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, rtt = 0.421 ms`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Unknown command: "${raw}". Type "help" to see available options.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-20 relative bg-slate-950/80 border-t border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Embedded Hardware Console
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Execute real-time commands to query system status, projects, and telemetry
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#070b13] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm glow-box">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                harsha@ece-node: ~
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>TTY1 (PORT: DYNAMIC)</span>
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div className="p-5 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto text-slate-300">
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'system' && (
                  <div className="text-cyan-400/90">{line.text}</div>
                )}
                {line.type === 'user' && (
                  <div className="text-white font-bold flex items-center gap-1">
                    <span className="text-emerald-400">&gt;</span> {line.text}
                  </div>
                )}
                {line.type === 'response' && (
                  <pre className="text-slate-300 whitespace-pre-wrap pl-3 border-l-2 border-cyan-500/30 my-1 font-mono text-xs sm:text-sm">
                    {line.text}
                  </pre>
                )}
                {line.type === 'error' && (
                  <div className="text-rose-400 pl-3 border-l-2 border-rose-500/40">
                    {line.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick command pills */}
          <div className="px-5 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
              Suggestions:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-xs transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Input Line */}
          <form onSubmit={onSubmit} className="flex items-center px-5 py-3 bg-slate-950 border-t border-slate-800 gap-2">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'projects', 'specs')..."
              className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-all"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

