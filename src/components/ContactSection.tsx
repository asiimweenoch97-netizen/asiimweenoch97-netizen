import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, Copy, Check, MapPin, Clock, ShieldCheck, ChevronDown } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'AI Chatbot Development',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const randomTicket = `ENOCH-TICKET-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950/90 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Together
              </h2>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Have an AI chatbot project, custom web application, or video editing campaign? Drop a line and let's turn your ideas into functional tech & media.
              </p>
            </div>

            {/* Direct Contact Info Box */}
            <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 space-y-4 text-xs font-medium">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-2 font-bold">
                  <Mail className="w-4 h-4 text-indigo-400" /> Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-indigo-400" />
                      <span className="text-indigo-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-white hover:text-indigo-400 block underline underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1 text-indigo-400">
                  <Clock className="w-3.5 h-3.5" /> Replies within 24h
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="space-y-4 py-8 text-center font-sans">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                      CONFIRMATION {ticketId}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3">Message Dispatched Successfully</h3>
                    <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Asiimwe Enoch will review your inquiry regarding <strong className="text-indigo-300">{formData.service}</strong> and respond to <strong className="text-white">{formData.email}</strong> within 24 business hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'AI Chatbot Development',
                        budget: '$1,000 - $3,000',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Send className="w-4 h-4 text-indigo-400" />
                      <span>Direct Message Form</span>
                    </h3>
                    <span className="text-[10px] text-zinc-500 font-medium">Fast Response Guarantee</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium">Core Service Needed</label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3.5 pr-9 py-2.5 appearance-none focus:outline-none focus:border-indigo-500 transition-all font-medium cursor-pointer"
                        >
                          <option value="AI Chatbot Development">AI Chatbot Development (LLMs / RAG)</option>
                          <option value="Full-Stack Website Engineering">Full-Stack Website Engineering</option>
                          <option value="Professional Video Editing">Professional Video Editing & Post</option>
                          <option value="Combined Tech & Media Package">Combined Tech & Media Package</option>
                          <option value="Full-Time / Contract Role Inquiry">Full-Time / Contract Role Inquiry</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 font-medium">Estimated Timeline / Budget</label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3.5 pr-9 py-2.5 appearance-none focus:outline-none focus:border-indigo-500 transition-all font-medium cursor-pointer"
                        >
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                          <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                          <option value="Recruitment / Full-Time Role">Recruitment / Full-Time Role</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-300 font-medium">Project Scope & Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, required features, or video editing vision..."
                      className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl p-3.5 focus:outline-none focus:border-indigo-500 transition-all resize-none font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-500/10"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Asiimwe Enoch</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
