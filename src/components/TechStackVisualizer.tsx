import React, { useState } from 'react';
import { UserConfig, StackCategory } from '../types';
import { Code2, Copy, Check, UserCheck, AlertTriangle, Layers, Cpu } from 'lucide-react';

interface TechStackVisualizerProps {
  config: UserConfig;
  aboutNarrative: {
    paragraph1: string;
    paragraph2: string;
  };
  stackCategories: StackCategory[];
}

export const TechStackVisualizer: React.FC<TechStackVisualizerProps> = ({
  config,
  aboutNarrative,
  stackCategories
}) => {
  const [copiedAbout, setCopiedAbout] = useState(false);

  const fullAboutText = `${aboutNarrative.paragraph1}\n\n${aboutNarrative.paragraph2}`;

  const handleCopyAbout = () => {
    navigator.clipboard.writeText(fullAboutText);
    setCopiedAbout(true);
    setTimeout(() => setCopiedAbout(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* About Narrative Frame */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Biographical &quot;About Me&quot; Narrative Frame</h3>
          </div>
          <button
            onClick={handleCopyAbout}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
          >
            {copiedAbout ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedAbout ? 'Copied Narrative' : 'Copy About Copy'}</span>
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950 p-5 rounded-xl border border-zinc-800/80">
          <p className="border-l-2 border-emerald-500 pl-4">{aboutNarrative.paragraph1}</p>
          <p className="border-l-2 border-emerald-500/50 pl-4">{aboutNarrative.paragraph2}</p>
        </div>
      </div>

      {/* Anti-Progress Bar Guidance Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-xs text-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-300 text-sm">Why You Must Never Use Percentage Progress Bars</h4>
          <p className="leading-relaxed">
            Putting <span className="font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/50 text-amber-100">&quot;React: 90%&quot;</span> or <span className="font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/50 text-amber-100">&quot;TypeScript: 85%&quot;</span> triggers hiring manager skepticism. What does 90% mean? Do you know 90% of the React source code or 90% of your own usage?
          </p>
          <p className="text-amber-300/90 font-medium pt-1">
            <strong>The Conversion-Focused Alternative:</strong> Use categorized competency matrices paired with real-world application context and depth tags (Core, Production, Architectural).
          </p>
        </div>
      </div>

      {/* Modern Non-Percentage Stack Visualizer */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Code2 className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-base font-bold text-white">Non-Percentage Tech Stack & Tooling Matrix</h3>
            <p className="text-xs text-zinc-400">
              Categorized layout showcasing exact production usage and experience depth.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {stackCategories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{cat.category}</span>
                </h4>
                <span className="text-[11px] text-zinc-500">{cat.description}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 leading-snug">
                      {item.proficiencyContext}
                    </p>
                    <div className="text-[11px] font-mono text-zinc-500 pt-1 border-t border-zinc-900">
                      Experience: {item.yearsOrProjects}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
