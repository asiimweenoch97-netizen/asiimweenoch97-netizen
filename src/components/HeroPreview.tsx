import React, { useState } from 'react';
import { UserConfig, HeroVariation } from '../types';
import { Copy, Check, ExternalLink, ArrowRight, ShieldCheck, Layout, CheckCircle2 } from 'lucide-react';

interface HeroPreviewProps {
  config: UserConfig;
  variations: HeroVariation[];
}

export const HeroPreview: React.FC<HeroPreviewProps> = ({ config, variations }) => {
  const [selectedVarIndex, setSelectedVarIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const currentVar = variations[selectedVarIndex] || variations[0];

  const handleCopyText = () => {
    const textToCopy = `TAGLINE: ${currentVar.tagline}
HEADLINE: ${currentVar.headline}
VALUE PROPOSITION: ${currentVar.valueProp}
SUBTITLE: ${currentVar.subtitle}
PRIMARY CTA: ${currentVar.primaryCta}
SECONDARY CTA: ${currentVar.secondaryCta}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine container styling according to selected aesthetic
  const getAestheticWrapperClass = () => {
    switch (config.aesthetic) {
      case 'dark-tech':
        return 'bg-zinc-950 text-zinc-100 font-mono border-zinc-800';
      case 'editorial-typographic':
        return 'bg-stone-900 text-stone-100 font-serif border-stone-800';
      case 'clean-saas':
        return 'bg-zinc-900 text-zinc-100 border-zinc-800';
      case 'minimalist-text':
      default:
        return 'bg-zinc-950 text-zinc-50 border-zinc-800/80';
    }
  };

  return (
    <div className="space-y-6">
      {/* Variation Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layout className="w-4 h-4 text-emerald-400" />
            <span>Interactive Hero Hook Variations</span>
          </h3>
          <p className="text-xs text-zinc-400">
            3-second high-impact messaging options tailored to {config.userName || 'your portfolio'}.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {variations.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setSelectedVarIndex(i)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedVarIndex === i
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Hook #{v.id}
            </button>
          ))}
          <button
            onClick={handleCopyText}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors border border-zinc-700 ml-2"
            title="Copy Hero Copy Text"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Psychology Note */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 p-3.5 rounded-xl text-xs text-emerald-300 flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-emerald-200">Psychological Hook Rationale: </span>
          {currentVar.psychologyNote}
        </div>
      </div>

      {/* Live Rendered Canvas Frame */}
      <div className="border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl bg-zinc-950">
        {/* Browser Top Bar */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs text-zinc-500 font-mono ml-2">
              https://{config.userName ? config.userName.toLowerCase().replace(/\s+/g, '') : 'asiimweenoch'}.dev
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700">
            Aesthetic: {config.aesthetic}
          </span>
        </div>

        {/* Hero Section Live Rendering */}
        <div className={`p-8 sm:p-14 border-b border-zinc-800/80 transition-all ${getAestheticWrapperClass()}`}>
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Tagline / Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                {currentVar.tagline}
              </span>
              <span className="text-xs text-zinc-500">
                • {config.userName || 'Asiimwe Enoch'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {currentVar.headline}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-xl font-medium text-zinc-300 leading-relaxed max-w-3xl">
              {currentVar.valueProp}
            </p>

            {/* Subtitle Details */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {currentVar.subtitle}
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#selected-work"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-lg active:scale-95"
              >
                <span>{currentVar.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all active:scale-95"
              >
                <span>{currentVar.secondaryCta}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Trust Signal Bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for Q3/Q4 Advisory & Engineering</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
