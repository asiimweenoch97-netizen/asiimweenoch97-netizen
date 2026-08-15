import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, MapPin, CheckCircle2, HeartHandshake, Award, Globe, Rocket, Film, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Column - Developer Badge Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Asiimwe Enoch</h3>
                    <p className="text-[11px] text-zinc-400">Software Engineer & Video Editor</p>
                  </div>
                </div>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full font-bold">
                  2 YRS ENG
                </span>
              </div>

              {/* Location & Status Card */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Location
                  </span>
                  <span className="font-bold text-white">{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 flex items-center gap-1.5 font-medium">
                    <Globe className="w-3.5 h-3.5 text-violet-400" /> Availability
                  </span>
                  <span className="font-bold text-indigo-400">Remote & Local Roles</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-sky-400" /> Key Expertise
                  </span>
                  <span className="font-bold text-white">AI Chatbots & Video Editing</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 flex items-center gap-1.5 font-medium">
                    <Film className="w-3.5 h-3.5 text-emerald-400" /> Video Suite
                  </span>
                  <span className="font-bold text-white">Adobe Premiere Pro</span>
                </div>
              </div>

              {/* Highlights Summary Box */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs leading-relaxed text-zinc-300 space-y-2">
                <div className="text-xs text-indigo-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Professional Commitment
                </div>
                <p className="text-zinc-400 text-xs">
                  "Delivering clean code, responsive user experiences, and polished video content that clearly communicates value."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Purpose-Driven Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
                <Rocket className="w-3.5 h-3.5" />
                <span>Purpose & Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Driven by Real-World Impact
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-white">Software Engineer with 2 years of engineering experience</strong> and a <strong className="text-white">Video Editor</strong> based in Uganda. My core passion lies in building technology that solves real-world challenges—whether that means creating multi-lingual AI chatbots that assist local communities or producing high-impact video reels for emerging products.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              I believe that great software must be paired with clear, compelling visuals. By combining modern web engineering (React, TypeScript, Python) with creative video editing in Adobe Premiere Pro and After Effects, I help teams communicate complex ideas effortlessly and build digital products that users love.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <Rocket className="w-4 h-4" />
                  <span>2 Years Engineering</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building responsive web applications, smart AI chat systems, and automated data workflows.
                </p>
              </div>

              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Adobe Premiere Pro Video</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Crafting product promos, tech walkthroughs, and documentary stories with crisp cuts and motion graphics.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
