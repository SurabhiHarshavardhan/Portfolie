import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-slate-100/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold text-slate-700 tracking-wider uppercase shadow-sm">
            <Mail className="w-3.5 h-3.5 text-slate-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold pearl-gradient-text">
            Connect & Collaborate
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Open for full-time engineering positions, embedded projects, and innovative teams
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Location Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Direct Communication
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs sm:text-sm font-mono text-slate-900 truncate mr-2 font-medium">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors flex-shrink-0 shadow-sm"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-700 font-semibold">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Geographical Base */}
            <div className="glass-panel p-5 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Primary Presence
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Saveetha School of Engineering</span>
                    <span className="text-slate-600">Chennai, Tamil Nadu</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Home Base</span>
                    <span className="text-slate-600">Tirupathi / Renigunta, Andhra Pradesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Opportunity Note Card (replacing resume card) */}
            <div className="glass-pearl p-5 rounded-2xl sm:rounded-3xl border border-slate-300 space-y-2 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-800" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Available for full-time graduate roles in Electronics, IoT solutions, Embedded Systems, and AI engineering starting 2026.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-700" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Have a job opportunity, project inquiry, or question? Leave a note and I will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Harsha"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-slate-800 focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. name@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-slate-800 focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. ECE Role / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-slate-800 focus:outline-none transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your note here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-slate-800 focus:outline-none transition-colors resize-none shadow-sm"
                  />
                </div>

                {status === 'success' && (
                  <p className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold">
                    Message sent successfully! Thank you for reaching out.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl btn-pearl-dark text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'loading' ? 'Sending...' : 'Dispatch Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
