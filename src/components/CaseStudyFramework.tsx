import React, { useState } from 'react';
import { UserConfig, CaseStudyTemplate } from '../types';
import { Copy, Check, FileCheck, Layers, TrendingUp, HelpCircle, CheckCircle2 } from 'lucide-react';

interface CaseStudyFrameworkProps {
  config: UserConfig;
  template: CaseStudyTemplate;
}

export const CaseStudyFramework: React.FC<CaseStudyFrameworkProps> = ({ config, template }) => {
  const [copied, setCopied] = useState(false);

  const markdownContent = `### UNIVERSAL 5-PART CASE STUDY TEMPLATE

1. CONTEXT & GOAL
- Project Name: ${template.context}
- Primary Objective: Solve core performance & conversion bottlenecks.

2. METADATA
- Role: ${template.metadata.role}
- Timeline: ${template.metadata.timeline}
- Tech & Tools: ${template.metadata.tools.join(', ')}
- Deliverables: ${template.metadata.deliverables.join(', ')}

3. CHALLENGE
${template.challenge}

4. SOLUTION
${template.solution}

5. MEASURABLE IMPACT METRICS
${template.impactMetrics
  .map(m => `- ${m.label}: **${m.value}** (${m.qualitativeProxy})`)
  .join('\n')}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Project Count Guidance Banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">How Many Projects Should You Showcase?</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <strong className="text-emerald-400 font-semibold">Strict Rule: Showcase 3 to 4 flagship case studies maximum.</strong> Recruiting managers spend an average of 30 to 45 seconds on your portfolio. 12 mediocre thumbnails dilute your authority. 3 deeply detailed, high-impact case studies establish immediate staff-level credibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                <span className="font-bold text-emerald-400">Project 1: Flagship Depth</span>
                <p className="text-zinc-400 mt-0.5">Your most complex end-to-end system architectural achievement.</p>
              </div>
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                <span className="font-bold text-emerald-400">Project 2: Commercial Impact</span>
                <p className="text-zinc-400 mt-0.5">Focus on revenue, conversion, or user activation gains.</p>
              </div>
              <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                <span className="font-bold text-emerald-400">Project 3: Craft & Speed</span>
                <p className="text-zinc-400 mt-0.5">Focus on micro-interactions, accessibility, or design system scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No-Hard-Data Metric Strategy Guide */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white">
            How to Present Convincing Data Metrics Without Hard Analytics
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
          If you didn&apos;t have access to Mixpanel, Google Analytics, or NDA revenue figures, <strong className="text-emerald-300">never leave the Impact section blank or use generic filler like &quot;User feedback was great&quot;</strong>. Use these 4 proven proxy metrics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 1. Lighthouse & Core Web Vitals
            </span>
            <p className="text-zinc-300">
              Run free Chrome Lighthouse audits before & after your refactor.
            </p>
            <p className="text-zinc-400 font-mono text-[11px] bg-zinc-900 p-2 rounded border border-zinc-800">
              Example: &quot;Improved LCP from 3.8s to 1.1s, boosting Lighthouse Performance Score from 61 to 99/100.&quot;
            </p>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 2. Process & Developer Velocity Acceleration
            </span>
            <p className="text-zinc-300">
              Quantify time saved for engineering or design teams.
            </p>
            <p className="text-zinc-400 font-mono text-[11px] bg-zinc-900 p-2 rounded border border-zinc-800">
              Example: &quot;Reduced feature onboarding time for new engineers from 3 days to under 4 hours via documented component library.&quot;
            </p>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 3. Structural Task Reduction
            </span>
            <p className="text-zinc-300">
              Count steps removed from user workflows.
            </p>
            <p className="text-zinc-400 font-mono text-[11px] bg-zinc-900 p-2 rounded border border-zinc-800">
              Example: &quot;Simplified checkout flow from 7 modal clicks down to 2 automated steps.&quot;
            </p>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 4. Qualitative Usability Testing Proxies
            </span>
            <p className="text-zinc-300">
              Synthesize 5 unmoderated test recordings into task completion rates.
            </p>
            <p className="text-zinc-400 font-mono text-[11px] bg-zinc-900 p-2 rounded border border-zinc-800">
              Example: &quot;Achieved 100% unassisted task completion across 5 user test sessions with zero misclicks.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Universal 5-Part Template Visualizer */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <span>Universal 5-Part Scannable Case Study Template</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Tailored template ready to plug into your portfolio.
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Markdown' : 'Copy Template Markdown'}</span>
          </button>
        </div>

        {/* 5 Part Rendered Blocks */}
        <div className="space-y-5">
          {/* Part 1 */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
              1. Context & Goal
            </span>
            <h4 className="text-sm font-bold text-white">{template.context}</h4>
          </div>

          {/* Part 2 */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-2">
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
              2. Metadata at a Glance
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-zinc-500 block">Role</span>
                <span className="text-zinc-200 font-semibold">{template.metadata.role}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Timeline</span>
                <span className="text-zinc-200 font-semibold">{template.metadata.timeline}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Tech Stack</span>
                <span className="text-zinc-200 font-semibold">{template.metadata.tools.join(', ')}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Deliverables</span>
                <span className="text-zinc-200 font-semibold">{template.metadata.deliverables.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
              3. The Challenge (Problem Statement)
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{template.challenge}</p>
          </div>

          {/* Part 4 */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
              4. The Engineering / Design Solution
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{template.solution}</p>
          </div>

          {/* Part 5 */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-3">
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
              5. Measurable Impact Metrics
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {template.impactMetrics.map((m, idx) => (
                <div key={idx} className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                  <div className="text-lg font-bold text-emerald-400">{m.value}</div>
                  <div className="text-xs font-semibold text-zinc-200 mt-0.5">{m.label}</div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{m.qualitativeProxy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
