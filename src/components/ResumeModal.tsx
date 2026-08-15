import React, { useState } from 'react';
import { PERSONAL_INFO, SERVICES, TECH_STACK_DATA } from '../data/portfolioData';
import { X, Copy, Check, Download, FileText, MapPin, Mail, ExternalLink, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  if (!isOpen) return null;

  const resumeMarkdown = `# ASIIMWE ENOCH - RESUME
**Role:** Software Engineer & Video Editor
**Location:** Kampala, Uganda 🇺🇬
**Email:** ${PERSONAL_INFO.email}

---

## PROFESSIONAL SUMMARY
Software Engineer with 2 years of engineering experience and a skilled Video Editor based in Uganda. Specializing in building user-friendly AI chatbots, modern web applications, and producing high-impact video content using Adobe Premiere Pro and After Effects.

---

## CORE TECHNICAL COMPETENCIES
- **AI & Smart Systems:** Google Gemini AI, OpenAI Technologies, Smart Document Assistants, Automated Q&A Chatbots.
- **Full-Stack Web Development:** React, TypeScript, Python, Next.js, FastAPI, Node.js, Tailwind CSS, PostgreSQL.
- **Video Editing & Post-Production:** Adobe Premiere Pro (Timeline Editing, Transitions, Multi-cam), Adobe After Effects (Motion Graphics, Kinetic Titles), Audio Enhancement & Sound Design.
- **Developer Tools & Cloud:** Git, Linux, Vercel, REST APIs, Cloud Deployment.

---

## FEATURED SOFTWARE & AI PROJECTS
1. **NileBot - Multi-Lingual AI Health & Agriculture Assistant**
   - Built a conversational AI assistant providing instant agricultural and healthcare guidance in Luganda and English.
   - Achieved instant Q&A responses with 96% accuracy.

2. **FinPulse Uganda - SACCO Financial Web Platform**
   - Engineered an intuitive web analytics platform for community savings groups with automated records and SMS alerts.
   - Serves 2,400+ active user accounts with fast performance.

3. **DocuBrain - PDF Document Assistant**
   - Developed an AI document assistant that extracts key facts and summaries from PDF files in seconds.

---

## VIDEO PRODUCTION HIGHLIGHTS
1. **Kampala Tech Surge - Documentary Short (Adobe Premiere Pro)**
   - Edited a 4K mini-documentary showcasing Ugandan software startups with custom color enhancement and clear vocal sound design.

2. **AI SaaS Product Launch Reel (Adobe Premiere Pro & After Effects)**
   - Produced a high-converting promotional video combining motion graphics, animated screen walkthroughs, and soundtrack pacing.

---

## EDUCATION & LOCATION
- **Location:** Kampala, Uganda (GMT+3) • Available for Remote & On-Site Roles Worldwide
- **Degree / Training:** B.Sc. in Computer Science & Software Engineering Background
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(resumeMarkdown);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([resumeMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Asiimwe_Enoch_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-zinc-950 px-6 py-4 border-b border-zinc-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-bold text-white font-medium">Asiimwe_Enoch_Resume.md</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyMarkdown}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copiedMarkdown ? <Check className="w-4 h-4 text-indigo-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedMarkdown ? 'Copied' : 'Copy MD'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="p-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-zinc-950 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-zinc-200 text-xs font-sans leading-relaxed bg-zinc-950/90">
          
          {/* Top Banner */}
          <div className="border-b border-zinc-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">Asiimwe Enoch</h1>
              <p className="text-sm font-bold text-indigo-400 mt-0.5">Software Engineer & Video Editor</p>
              <p className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Kampala, Uganda 🇺🇬 • Open for Remote & On-Site Roles
              </p>
            </div>

            <div className="text-xs space-y-1 font-medium text-zinc-400">
              <p><strong className="text-white">Email:</strong> {PERSONAL_INFO.email}</p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-zinc-300">
              Software Engineer with 2 years of engineering experience and a skilled Video Editor based in Uganda. Specializing in building user-friendly AI chatbots, modern web applications, and producing high-impact video content using Adobe Premiere Pro and After Effects.
            </p>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
              <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
                <strong className="text-white block mb-1">AI & Full-Stack Web Development</strong>
                <p className="text-zinc-400 text-[11px]">
                  Python, TypeScript, React, Next.js, Google Gemini AI, OpenAI, Smart Q&A Chatbots, FastAPI, PostgreSQL, Tailwind CSS.
                </p>
              </div>
              <div className="bg-zinc-900/80 p-3 rounded-lg border border-zinc-800">
                <strong className="text-white block mb-1">Video Production & Editing</strong>
                <p className="text-zinc-400 text-[11px]">
                  Adobe Premiere Pro (Multi-cam, Precision Transitions, Color Lumetri), Adobe After Effects (Motion Titles, Graphics), Audio Enhancement.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Works */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
              Key Accomplishments & Systems
            </h2>

            <div className="space-y-2">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                <div className="flex justify-between font-bold text-white">
                  <span>WRCC Time Tracking System</span>
                  <span className="text-indigo-400">Web & Workforce Analytics</span>
                </div>
                <p className="text-zinc-400 text-[11px] mt-1">
                  Engineered an enterprise staff time tracking and attendance web application for WRCC featuring automated shift logs, timesheet reports, and project tracking.
                </p>
              </div>

              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                <div className="flex justify-between font-bold text-white">
                  <span>B-I-G Closet Uganda - E-Commerce Fashion Platform</span>
                  <span className="text-indigo-400">React & E-Commerce</span>
                </div>
                <p className="text-zinc-400 text-[11px] mt-1">
                  Engineered an interactive e-commerce fashion web platform featuring product galleries, mobile shopping, and instant order inquiries.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-zinc-950 px-6 py-3 border-t border-zinc-800 flex items-center justify-between text-xs font-medium text-zinc-500">
          <span>Formatted for Recruiter & Hiring Manager Review</span>
          <button
            onClick={onClose}
            className="text-indigo-400 font-bold hover:underline"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
