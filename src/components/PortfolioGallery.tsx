import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Code2, Film, ExternalLink, Play, Filter, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'software' | 'video'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Selected Works & Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio Showcase
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Filter through software architectures, AI chatbots, and professional video editing projects.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 text-xs font-medium">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-indigo-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              All Work ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('software')}
              className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeFilter === 'software'
                  ? 'bg-indigo-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Software & AI ({PROJECTS.filter(p => p.category === 'software').length})</span>
            </button>
            <button
              onClick={() => setActiveFilter('video')}
              className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeFilter === 'video'
                  ? 'bg-sky-500 text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Editing ({PROJECTS.filter(p => p.category === 'video').length})</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image / Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />

                  {/* Category Badge Top Left */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-800 text-[11px] font-medium backdrop-blur-md">
                    {project.category === 'software' ? (
                      <>
                        <Code2 className="w-3 h-3 text-indigo-400" />
                        <span className="text-indigo-400 font-bold">{project.subcategory}</span>
                      </>
                    ) : (
                      <>
                        <Film className="w-3 h-3 text-sky-400" />
                        <span className="text-sky-400 font-bold">{project.subcategory}</span>
                      </>
                    )}
                  </div>

                  {/* Video Play Overlay */}
                  {project.category === 'video' && (
                    <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-12 h-12 rounded-full bg-sky-500 text-zinc-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>
                  )}

                  {/* Video Specs Tag Bottom Right */}
                  {project.category === 'video' && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-zinc-950/90 border border-zinc-800 text-[10px] font-medium text-zinc-300">
                      {project.videoDuration || '02:45'} • {project.videoAspect || '4K'}
                    </div>
                  )}

                  {/* Metric Tag for Software */}
                  {project.category === 'software' && project.metrics && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-300 font-bold">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech / Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techTags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800/80 text-[11px] font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techTags.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800/80 text-[11px] font-medium text-zinc-500">
                        +{project.techTags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 mt-auto border-t border-zinc-800/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 font-bold cursor-pointer transition-colors"
                >
                  <span>{project.category === 'video' ? 'Play Video & Breakdown' : 'Inspect Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors flex items-center justify-center shrink-0"
                    title="Live Demo / External Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail / Video Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
