import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-10 text-xs text-zinc-400 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Brand & Quick Section Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Asiimwe Enoch</span>
              <span className="text-zinc-600">•</span>
              <span className="text-indigo-400">Uganda 🇺🇬</span>
            </div>
            <p className="text-zinc-500 text-xs mt-1">
              Software Engineer & Video Editor • AI Chatbots, Web Applications & Video Storytelling
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <button
              onClick={() => onNavigate('hero')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Top
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate('tech-stack')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Tech Stack
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Row: Status & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>© {new Date().getFullYear()} Asiimwe Enoch. Handcrafted with React, TypeScript & Tailwind CSS.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
