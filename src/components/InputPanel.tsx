import React from 'react';
import { UserConfig, IndustryRole, DesignAesthetic, TechnicalSkill } from '../types';
import { User, Palette, Code, Target, Award, Sliders } from 'lucide-react';

interface InputPanelProps {
  config: UserConfig;
  onChangeConfig: (newConfig: Partial<UserConfig>) => void;
}

export const InputPanel: React.FC<InputPanelProps> = ({ config, onChangeConfig }) => {
  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl mb-8">
      <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Your Professional Profile Inputs</h2>
            <p className="text-xs text-zinc-400">
              Customize the three core parameters to tailor your architectural stack, hero hooks, and case study blueprints.
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono uppercase bg-zinc-800 text-emerald-400 px-2.5 py-1 rounded-full border border-zinc-700">
          Live Strategy Sync
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Input 1: Role & Industry */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
            <User className="w-4 h-4 text-emerald-400" />
            <span>1. Industry & Role</span>
          </label>
          <select
            value={config.role}
            onChange={(e) => onChangeConfig({ role: e.target.value as IndustryRole })}
            className="w-full bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="frontend-dev">Senior Front-End Engineer</option>
            <option value="product-designer">Principal Product Designer</option>
            <option value="fullstack-eng">Full-Stack Software Engineer</option>
            <option value="cro-specialist">Conversion Rate & Growth Specialist</option>
            <option value="custom">Custom Role / Industry</option>
          </select>

          {config.role === 'custom' && (
            <input
              type="text"
              placeholder="e.g. Lead UX Researcher, AI Product Engineer"
              value={config.customRole}
              onChange={(e) => onChangeConfig({ customRole: e.target.value })}
              className="w-full bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-emerald-500 mt-2"
            />
          )}
        </div>

        {/* Input 2: Preferred Design Aesthetic */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-emerald-400" />
            <span>2. Preferred Design Aesthetic</span>
          </label>
          <select
            value={config.aesthetic}
            onChange={(e) => onChangeConfig({ aesthetic: e.target.value as DesignAesthetic })}
            className="w-full bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="minimalist-text">Minimalist & Text-Forward (High Contrast)</option>
            <option value="editorial-typographic">Editorial & Typographic (Serif + Sans Pairing)</option>
            <option value="dark-tech">Dark Tech & Monospace Accents (Developer Mode)</option>
            <option value="clean-saas">Clean Modern SaaS (Card Grid & Light Canvas)</option>
            <option value="high-impact-visual">High-Impact Visual / Interactive Showcase</option>
          </select>
        </div>

        {/* Input 3: Technical Skill Level / Stack */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
            <Code className="w-4 h-4 text-emerald-400" />
            <span>3. Technical Skill & Implementation</span>
          </label>
          <select
            value={config.skillLevel}
            onChange={(e) => onChangeConfig({ skillLevel: e.target.value as TechnicalSkill })}
            className="w-full bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="code-scratch-astro">Coding from Scratch: Astro + Tailwind CSS</option>
            <option value="code-scratch-next">Coding from Scratch: Next.js 15 (App Router)</option>
            <option value="drag-drop-framer">Drag-and-Drop No-Code: Framer</option>
            <option value="drag-drop-webflow">Drag-and-Drop No-Code: Webflow</option>
            <option value="hybrid-react">Hybrid: Vite + React SPA</option>
          </select>
        </div>
      </div>

      {/* Optional Personalizer Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-zinc-800/60 text-xs">
        <div>
          <label className="text-zinc-400 font-medium flex items-center gap-1 mb-1">
            <User className="w-3.5 h-3.5 text-zinc-500" /> Name for Copy Placeholder
          </label>
          <input
            type="text"
            value={config.userName}
            onChange={(e) => onChangeConfig({ userName: e.target.value })}
            placeholder="e.g. Asiimwe Enoch"
            className="w-full bg-zinc-950 text-zinc-200 border border-zinc-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="text-zinc-400 font-medium flex items-center gap-1 mb-1">
            <Target className="w-3.5 h-3.5 text-zinc-500" /> Primary Target Audience
          </label>
          <input
            type="text"
            value={config.targetAudience}
            onChange={(e) => onChangeConfig({ targetAudience: e.target.value })}
            placeholder="e.g. Hiring Managers, Design Directors"
            className="w-full bg-zinc-950 text-zinc-200 border border-zinc-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="text-zinc-400 font-medium flex items-center gap-1 mb-1">
            <Award className="w-3.5 h-3.5 text-zinc-500" /> Key Achievement Metric
          </label>
          <input
            type="text"
            value={config.keyAchievement}
            onChange={(e) => onChangeConfig({ keyAchievement: e.target.value })}
            placeholder="e.g. Improved LCP by 62%"
            className="w-full bg-zinc-950 text-zinc-200 border border-zinc-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};
