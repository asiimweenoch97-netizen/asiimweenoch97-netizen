import React from 'react';
import { Briefcase, FileText, Layout, CheckCircle2, Code2, Eye } from 'lucide-react';
import { UserConfig } from '../types';

interface HeaderProps {
  config: UserConfig;
  onSelectPreset: (roleKey: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onSelectPreset,
  activeTab,
  setActiveTab,
  onOpenExport
}) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500 text-zinc-950 rounded-lg font-bold flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                Portfolio Strategy & Copy Blueprint
              </h1>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Conversion-optimized architectural blueprint generator
              </p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="hidden lg:flex items-center space-x-2">
            <span className="text-xs text-zinc-400 font-medium">Quick Presets:</span>
            <button
              onClick={() => onSelectPreset('frontend-dev')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                config.role === 'frontend-dev'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              Front-End Dev
            </button>
            <button
              onClick={() => onSelectPreset('product-designer')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                config.role === 'product-designer'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              Product Designer
            </button>
            <button
              onClick={() => onSelectPreset('fullstack-eng')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                config.role === 'fullstack-eng'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => onSelectPreset('cro-specialist')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                config.role === 'cro-specialist'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              CRO & Growth
            </button>
          </div>

          {/* Export Action */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenExport}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Export Full Strategy</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 sm:space-x-4 border-t border-zinc-800/80 overflow-x-auto py-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Interactive Strategy</span>
          </button>
          <button
            onClick={() => setActiveTab('hero-preview')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'hero-preview'
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Hero Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'case-studies'
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Case Study Framework</span>
          </button>
          <button
            onClick={() => setActiveTab('stack-visualizer')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'stack-visualizer'
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Stack & About</span>
          </button>
        </div>
      </div>
    </header>
  );
};
