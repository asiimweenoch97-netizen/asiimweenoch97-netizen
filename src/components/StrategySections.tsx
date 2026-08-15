import React, { useState } from 'react';
import { UserConfig } from '../types';
import { ROLE_PRESETS } from '../data/presets';
import { Server, CheckCircle2, XCircle, Mail, Copy, Check, ShieldCheck, Globe, Clock, CheckCircle } from 'lucide-react';

interface StrategySectionsProps {
  config: UserConfig;
  presetData: typeof ROLE_PRESETS['frontend-dev'];
}

export const StrategySections: React.FC<StrategySectionsProps> = ({ config, presetData }) => {
  const [copiedEmailCopy, setCopiedEmailCopy] = useState(false);
  const [copiedFooterCopy, setCopiedFooterCopy] = useState(false);

  const formattedEmail = `${(config.userName || 'asiimwe.enoch').toLowerCase().replace(/\s+/g, '.')}@example.com`;

  const emailMicrocopy = `Have an interesting architectural challenge or upcoming product role?
Drop me a direct line at ${formattedEmail} or book a 15-minute quick introductory call.
I respond to all inquiries within 24 business hours.`;

  const footerMicrocopy = `© ${new Date().getFullYear()} ${config.userName || 'Asiimwe Enoch'}. Handcrafted with Astro, React & Tailwind CSS. 100/100 Core Web Vitals baseline.
Built with zero bloat. Hosted on Cloud Run.`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailMicrocopy);
    setCopiedEmailCopy(true);
    setTimeout(() => setCopiedEmailCopy(false), 2000);
  };

  const handleCopyFooter = () => {
    navigator.clipboard.writeText(footerMicrocopy);
    setCopiedFooterCopy(true);
    setTimeout(() => setCopiedFooterCopy(false), 2000);
  };

  const rec = presetData.recommendedStack;

  return (
    <div className="space-y-10">
      {/* SECTION 1: ARCHITECTURAL STRATEGY & STACK RECOMMENDATION */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-400">Section 1</span>
            <h2 className="text-lg font-bold text-white">Architectural Strategy & Development Stack</h2>
          </div>
        </div>

        {/* Verdict Box */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm sm:text-base">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Recommended Stack Verdict for Your Role:</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 font-semibold leading-relaxed">
            {rec.verdict}
          </p>
        </div>

        {/* Stack Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* No Code Option */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-zinc-400" />
                <span>No-Code Option ({rec.noCodeOption.name})</span>
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                Visual Builder
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {rec.noCodeOption.rationale}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-emerald-400 block">Pros:</span>
              {rec.noCodeOption.pros.map((pro, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-red-400 block">Trade-Offs & Cons:</span>
              {rec.noCodeOption.cons.map((con, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Option */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-emerald-500/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-[10px] font-bold font-mono px-3 py-0.5 rounded-bl">
              RECOMMENDED
            </div>
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Developer Option ({rec.developerOption.name})</span>
              </h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {rec.developerOption.rationale}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-emerald-400 block">Pros:</span>
              {rec.developerOption.pros.map((pro, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-amber-400 block">Considerations:</span>
              {rec.developerOption.cons.map((con, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                  <XCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speed & SEO Optimization Blueprint */}
        <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase text-emerald-400">
            Speed & Core Web Vitals Optimization Checklist
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <strong className="text-white block mb-1">1. Static Generation (SSG)</strong>
              Pre-render all routes into HTML to achieve &lt;100ms Time to First Byte (TTFB).
            </div>
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <strong className="text-white block mb-1">2. Zero Font Layout Shift</strong>
              Use standard system font stacks or preloaded subset woff2 fonts with <code className="text-emerald-400">font-display: swap</code>.
            </div>
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <strong className="text-white block mb-1">3. Adaptive Image Assets</strong>
              Convert project screenshots to WebP / AVIF format with explicit aspect-ratio attributes.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT & FOOTER STRATEGY */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-400">Section 5</span>
            <h2 className="text-lg font-bold text-white">Contact & Footer Conversion Strategy</h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          The goal of your contact section is to eliminate drop-off friction. Most hiring managers do not want to fill out a 6-field form with CAPTCHA. Provide a direct <strong className="text-emerald-300">one-click copy email button</strong>, response time guarantee, and an optional introductory call scheduler.
        </p>

        {/* Contact Layout Mockup */}
        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                FRICTION-FREE CONTACT SECTION
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Let&apos;s Build Something Resilient Together.</h3>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors shadow"
            >
              {copiedEmailCopy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmailCopy ? 'Copied Contact Copy' : 'Copy Contact Microcopy'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-400" /> Direct Email Link
              </span>
              <a
                href={`mailto:${formattedEmail}`}
                className="text-sm font-bold text-white hover:text-emerald-300 underline underline-offset-4"
              >
                {formattedEmail}
              </a>
              <span className="text-[11px] text-zinc-500 block">One-click mailto launcher</span>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" /> Response Time Guarantee
              </span>
              <span className="text-sm font-bold text-white block">Within 24 Business Hours</span>
              <span className="text-[11px] text-zinc-500 block">Builds trust & professionalism</span>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Availability Status
              </span>
              <span className="text-sm font-bold text-emerald-400 block">Open for Q3 Opportunities</span>
              <span className="text-[11px] text-zinc-500 block">Staff / Senior Lead roles & advisory</span>
            </div>
          </div>
        </div>

        {/* Footer Microcopy Strategy */}
        <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase text-emerald-400">
              Footer Microcopy & Proof Signals
            </h4>
            <button
              onClick={handleCopyFooter}
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
            >
              {copiedFooterCopy ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Footer Text</span>
            </button>
          </div>
          <p className="text-xs font-mono text-zinc-300 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
            {footerMicrocopy}
          </p>
        </div>
      </section>
    </div>
  );
};
