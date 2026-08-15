import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Bot, Code2, Film, ArrowRight, Check, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'web' | 'video'>('ai');

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background Subtle Grid & Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-400 font-bold">📍 Uganda</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Software Engineer & Video Editor</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Software Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-400">
                  & Video Editor
                </span>
              </h1>
              
              {/* Value Proposition Sub-headline */}
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
                With 2 years of engineering experience, I build user-friendly AI chat systems, responsive web applications, and produce cinematic videos in Adobe Premiere Pro.
              </p>
            </div>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-medium pt-1">
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-indigo-400 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" /> AI Chatbots & Smart Q&A
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-violet-400 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Modern Web Applications
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-sky-400 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" /> Adobe Premiere Pro & After Effects
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-zinc-950 font-bold text-sm shadow-lg shadow-indigo-500/10 flex items-center gap-2 transition-all group cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 text-zinc-400 hover:text-white font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-[11px] text-zinc-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Capability Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-xs">
              
              {/* Card Header Bar */}
              <div className="bg-zinc-950 px-4 py-3.5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs text-zinc-300 font-semibold ml-2">Core Solutions Preview</span>
                </div>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-semibold">
                  Client Ready
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex border-b border-zinc-800/80 bg-zinc-950/60 text-xs">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'ai'
                      ? 'bg-zinc-900 text-indigo-400 border-b-2 border-indigo-500 font-bold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Assistants</span>
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'web'
                      ? 'bg-zinc-900 text-violet-400 border-b-2 border-violet-500 font-bold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Web Platforms</span>
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'video'
                      ? 'bg-zinc-900 text-sky-400 border-b-2 border-sky-500 font-bold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Video Production</span>
                </button>
              </div>

              {/* Tab Card Body */}
              <div className="p-5 bg-zinc-950/90 text-zinc-200 min-h-[270px] space-y-4">
                {activeTab === 'ai' && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                      <div>
                        <h4 className="font-bold text-white text-sm">Smart AI Customer Support</h4>
                        <p className="text-xs text-zinc-400">24/7 automated answers for your website</p>
                      </div>
                      <Bot className="w-5 h-5 text-indigo-400" />
                    </div>

                    <div className="space-y-2 text-xs text-zinc-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Instant document Q&A: Upload PDFs or website content for instant answers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Multi-language assistance: Responds fluently in English, Luganda, and more</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Seamless website embedding with personalized branding</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Primary Tools: Google Gemini AI & Python</span>
                      <span className="text-indigo-400 font-semibold">96%+ Accuracy</span>
                    </div>
                  </div>
                )}

                {activeTab === 'web' && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                      <div>
                        <h4 className="font-bold text-white text-sm">Responsive Web Applications</h4>
                        <p className="text-xs text-zinc-400">Fast, mobile-friendly portals & dashboards</p>
                      </div>
                      <Zap className="w-5 h-5 text-violet-400" />
                    </div>

                    <div className="space-y-2 text-xs text-zinc-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Mobile-first design: Looks perfect on phones, tablets, and laptops</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Fast loading speed with clean visual navigation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Secure database storage & real-time analytics reports</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Primary Tools: React, Next.js & Tailwind</span>
                      <span className="text-violet-400 font-semibold">100% Responsive</span>
                    </div>
                  </div>
                )}

                {activeTab === 'video' && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                      <div>
                        <h4 className="font-bold text-white text-sm">Adobe Premiere Pro Video Editing</h4>
                        <p className="text-xs text-zinc-400">4K videos, product demos & storytelling</p>
                      </div>
                      <Film className="w-5 h-5 text-sky-400" />
                    </div>

                    <div className="space-y-2 text-xs text-zinc-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Adobe Premiere Pro: Precision cuts, pacing, transitions & color polish</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Adobe After Effects: Animated titles, motion graphics & on-screen highlights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Multi-format exports: YouTube Widescreen (16:9) & Social Reels (9:16)</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Primary Suite: Adobe Premiere Pro & After Effects</span>
                      <span className="text-sky-400 font-semibold">4K UHD Quality</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Status */}
              <div className="bg-zinc-950 px-4 py-2.5 border-t border-zinc-800 text-[11px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-zinc-400 font-medium">Available for new client projects & engineering roles</span>
                </div>
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

