import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  FileDown,
  Globe
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', msg: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'loading', msg: 'Transmitting packet over virtual socket...' });

    // Simulated transmission
    setTimeout(() => {
      setStatus({
        state: 'success',
        msg: 'Message sent successfully! Thank you for reaching out.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ state: 'idle', msg: '' }), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative circuit-grid no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Available for engineering opportunities, IoT/Embedded research, and collaborative projects
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-click Copy */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                Direct Communication
              </span>
              <div className="flex items-center justify-between p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Geographical & Academic Info */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                Locations & Presence
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Current Academic Base</span>
                    <span className="text-slate-400">Chennai, Tamil Nadu (Saveetha School of Engg)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Home Region</span>
                    <span className="text-slate-400">Tirupathi / Renigunta, Andhra Pradesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Callout */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-semibold">
                <FileDown className="w-4 h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download a formatted PDF/printable version of my comprehensive resume with coursework, academic records, and projects.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>View & Print Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2 font-mono flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Transmit a Message</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Fill in the details below to dispatch a message directly to my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-600 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-600 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. ECE Role / Project Collaboration / Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-600 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Status Message */}
                {status.state !== 'idle' && (
                  <div
                    className={`p-3 rounded-lg text-xs font-mono ${
                      status.state === 'error'
                        ? 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                        : status.state === 'success'
                        ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                        : 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300'
                    }`}
                  >
                    {status.msg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.state === 'loading' ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
