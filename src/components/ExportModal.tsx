import React, { useState } from 'react';
import { UserConfig } from '../types';
import { ROLE_PRESETS } from '../data/presets';
import { X, Copy, Check, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: UserConfig;
  presetData: typeof ROLE_PRESETS['frontend-dev'];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  config,
  presetData
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleTitle = config.role === 'custom' && config.customRole ? config.customRole : presetData.roleTitle;
  const userName = config.userName || 'Asiimwe Enoch';
  const userEmail = `${userName.toLowerCase().replace(/\s+/g, '.')}@example.com`;

  const fullMarkdownDoc = `# COMPREHENSIVE PORTFOLIO ARCHITECTURE & COPY BLUEPRINT
**Target Persona:** ${userName} (${roleTitle})
**Preferred Aesthetic:** ${config.aesthetic}
**Implementation Choice:** ${config.skillLevel}
**Generated Date:** ${new Date().toLocaleDateString()}

---

## 1. ARCHITECTURAL STRATEGY & STACK RECOMMENDATION

### Stack Verdict
${presetData.recommendedStack.verdict}

### No-Code Option (${presetData.recommendedStack.noCodeOption.name})
- **Rationale:** ${presetData.recommendedStack.noCodeOption.rationale}
- **Pros:** ${presetData.recommendedStack.noCodeOption.pros.join(' | ')}
- **Cons:** ${presetData.recommendedStack.noCodeOption.cons.join(' | ')}

### Developer Option (${presetData.recommendedStack.developerOption.name})
- **Rationale:** ${presetData.recommendedStack.developerOption.rationale}
- **Pros:** ${presetData.recommendedStack.developerOption.pros.join(' | ')}
- **Cons:** ${presetData.recommendedStack.developerOption.cons.join(' | ')}

---

## 2. HERO SECTION COPY & HOOK VARIATIONS

${presetData.heroVariations.map((v, i) => `### Hook Variation #${i + 1}: ${v.label}
- **Tagline:** ${v.tagline}
- **Headline:** ${v.headline}
- **Value Proposition:** ${v.valueProp}
- **Subtitle:** ${v.subtitle}
- **Primary CTA:** ${v.primaryCta}
- **Secondary CTA:** ${v.secondaryCta}
- **Psychology Rationale:** ${v.psychologyNote}
`).join('\n')}

---

## 3. SELECTED WORK GRID & CASE STUDY FRAMEWORK

### Project Count Strategy
Showcase 3 to 4 flagship projects maximum. Quality, scannable depth, and metrics outweigh sheer thumbnail volume.

### Universal 5-Part Case Study Template
1. **Context & Goal:** ${presetData.caseStudyTemplate.context}
2. **Metadata:** Role: ${presetData.caseStudyTemplate.metadata.role} | Timeline: ${presetData.caseStudyTemplate.metadata.timeline} | Deliverables: ${presetData.caseStudyTemplate.metadata.deliverables.join(', ')}
3. **Challenge:** ${presetData.caseStudyTemplate.challenge}
4. **Solution:** ${presetData.caseStudyTemplate.solution}
5. **Impact Metrics:**
${presetData.caseStudyTemplate.impactMetrics.map(m => `   - **${m.label}:** ${m.value} (${m.qualitativeProxy})`).join('\n')}

### No-Hard-Data Metric Proxy Guidelines
1. **Core Web Vitals:** Audit pre/post Lighthouse scores (LCP, CLS, FID).
2. **Developer Velocity:** Quantify time saved during feature onboarding or build times.
3. **Workflow Step Reduction:** Count steps/clicks removed from user journey.
4. **Usability Testing:** Report unassisted task completion rates from testing sessions.

---

## 4. ABOUT ME & TECH STACK VISUALIZATION

### 2-Paragraph Narrative Frame
${presetData.aboutNarrative.paragraph1}

${presetData.aboutNarrative.paragraph2}

### Non-Percentage Stack Layout Strategy
Avoid misleading "90% React" progress bars. Group skills into categorized competency clusters with usage context, years/project depth, and key tags.

${presetData.stackCategories.map(cat => `#### ${cat.category} (${cat.description})
${cat.items.map(item => `- **${item.name}** [${item.tag || 'Skill'}]: ${item.proficiencyContext} (Experience: ${item.yearsOrProjects})`).join('\n')}
`).join('\n')}

---

## 5. CONTACT & FOOTER STRATEGY

### Friction-Free Microcopy
- **Heading:** Let's Build Something Resilient Together.
- **Direct Mailto:** ${userEmail}
- **Response Guarantee:** "I respond to all inquiries within 24 business hours."
- **Status:** Available for Q3/Q4 Senior Roles & Advisory

### Footer Microcopy
© ${new Date().getFullYear()} ${userName}. Handcrafted with Astro, React & Tailwind CSS. 100/100 Core Web Vitals baseline.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdownDoc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([fullMarkdownDoc], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Portfolio_Strategy_${userName.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-zinc-100">
        
        {/* Modal Header */}
        <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Full Customized Portfolio Blueprint</h3>
              <p className="text-xs text-zinc-400">
                Ready-to-use Markdown file containing all 5 strategy sections.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Markdown Text Area */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-zinc-300 bg-zinc-950 space-y-4 select-all">
          <textarea
            readOnly
            value={fullMarkdownDoc}
            className="w-full h-[55vh] bg-zinc-900/80 text-zinc-200 p-4 rounded-xl border border-zinc-800 focus:outline-none focus:border-emerald-500 font-mono text-xs leading-relaxed resize-none"
          />
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-zinc-900 px-6 py-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-zinc-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tailored for {userName} ({roleTitle})</span>
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy All Markdown'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download .md File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
