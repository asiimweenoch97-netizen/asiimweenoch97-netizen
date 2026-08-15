import React, { useState } from 'react';
import { TECH_STACK_DATA } from '../data/portfolioData';
import { Search, CheckCircle2, Code2, Brain, Film, Cpu, Check, Filter } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  const filteredCategories = TECH_STACK_DATA.map((cat) => {
    const matchesCategory = activeCategoryTab === 'all' || cat.title.toLowerCase().includes(activeCategoryTab.toLowerCase());
    
    const filteredSkills = cat.skills.filter((skill) => {
      const q = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q) ||
        (skill.highlight && skill.highlight.toLowerCase().includes(q))
      );
    });

    return {
      ...cat,
      skills: matchesCategory ? filteredSkills : []
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-zinc-950/90 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Skillset & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tech Stack & Tooling
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Clean breakdown of software engineering tools, AI platforms, and video editing software.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools (e.g. Python, React, Premiere)..."
                className="w-full sm:w-64 bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-zinc-800/80 pb-4 text-xs font-medium">
          <button
            onClick={() => setActiveCategoryTab('all')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeCategoryTab === 'all'
                ? 'bg-indigo-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Tooling Matrix
          </button>
          <button
            onClick={() => setActiveCategoryTab('Languages')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeCategoryTab === 'Languages'
                ? 'bg-indigo-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Languages & Core
          </button>
          <button
            onClick={() => setActiveCategoryTab('Frontend')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeCategoryTab === 'Frontend'
                ? 'bg-indigo-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Frontend Engineering
          </button>
          <button
            onClick={() => setActiveCategoryTab('AI')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeCategoryTab === 'AI'
                ? 'bg-indigo-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            AI & Backend
          </button>
          <button
            onClick={() => setActiveCategoryTab('Video')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeCategoryTab === 'Video'
                ? 'bg-sky-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Video & Editing
          </button>
        </div>

        {/* Stack Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-12 text-center text-zinc-400 font-medium text-xs space-y-2">
            <p>No stack item matches "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryTab('all');
              }}
              className="text-indigo-400 underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-xs text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {category.skills.length} Items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{skill.name}</span>
                        <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 font-semibold">
                          {skill.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                        <span>{skill.category}</span>
                        <span className="text-zinc-500">{skill.years}</span>
                      </div>

                      {skill.highlight && (
                        <p className="text-[10px] text-zinc-500 truncate pt-0.5">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
