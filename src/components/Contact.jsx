import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send } from 'lucide-react';
import { SectionHeader } from './About';

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const email = 'harshavardhan9@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contact"
          subtitle="Open to opportunities, collaborations, and conversations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-8 reveal-left">

            <div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,224,212,0.6)', lineHeight: '1.9' }}>
                I am actively seeking graduate engineering roles in embedded systems, IoT, and AI-driven product development. If you are hiring or have an interesting project, I would love to hear from you.
              </p>
            </div>

            {/* Email card */}
            <div
              className="p-5 rounded-sm card-glow"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Mail size={14} style={{ color: '#c9a84c' }} />
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.12em' }}>
                  Direct Email
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm break-all" style={{ color: 'rgba(232,224,212,0.75)' }}>{email}</span>
                <button
                  onClick={handleCopy}
                  className="ml-3 flex-shrink-0 p-1.5 transition-colors"
                  style={{ color: copied ? '#c9a84c' : 'rgba(232,224,212,0.3)' }}
                  title="Copy email"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>
              {copied && (
                <p className="font-body text-xs mt-2" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  Copied to clipboard
                </p>
              )}
            </div>

            {/* Location */}
            <div
              className="p-5 rounded-sm card-glow"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} style={{ color: '#c9a84c' }} />
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.12em' }}>
                  Location
                </span>
              </div>
              <p className="font-body text-sm" style={{ color: 'rgba(232,224,212,0.65)' }}>
                Chennai, Tamil Nadu (Academic Base)<br />
                Tirupathi / Renigunta, Andhra Pradesh
              </p>
            </div>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="btn-primary w-full py-3 font-body text-sm tracking-widest uppercase text-center"
              style={{ letterSpacing: '0.12em' }}
            >
              View Resume
            </button>
          </div>

          {/* Right form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 reveal-right space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name: 'name', placeholder: 'Your name', label: 'Name *' },
                { name: 'email', placeholder: 'your@email.com', label: 'Email *', type: 'email' },
              ].map(({ name, placeholder, label, type }) => (
                <div key={name}>
                  <label className="block font-body text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(232,224,212,0.4)', letterSpacing: '0.1em' }}>
                    {label}
                  </label>
                  <input
                    type={type || 'text'}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent font-body text-sm px-4 py-3 outline-none transition-all duration-300"
                    style={{
                      color: '#e8e0d4',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.025)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(232,224,212,0.4)', letterSpacing: '0.1em' }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project collaboration / Hiring enquiry…"
                className="w-full bg-transparent font-body text-sm px-4 py-3 outline-none transition-all duration-300"
                style={{ color: '#e8e0d4', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', background: 'rgba(255,255,255,0.025)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(232,224,212,0.4)', letterSpacing: '0.1em' }}>
                Message *
              </label>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className="w-full bg-transparent font-body text-sm px-4 py-3 outline-none transition-all duration-300 resize-none"
                style={{ color: '#e8e0d4', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', background: 'rgba(255,255,255,0.025)' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>

            {status === 'error' && (
              <p className="font-body text-xs" style={{ color: '#e57373' }}>
                Please fill in all required fields.
              </p>
            )}

            {status === 'sent' && (
              <p className="font-body text-xs" style={{ color: '#c9a84c' }}>
                Message sent! I will get back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary flex items-center gap-3 px-8 py-3 font-body text-sm tracking-widest uppercase"
              style={{ letterSpacing: '0.12em', opacity: status === 'sending' ? 0.6 : 1 }}
            >
              <Send size={14} />
              <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
