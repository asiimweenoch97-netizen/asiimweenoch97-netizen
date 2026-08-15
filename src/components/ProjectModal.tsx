import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Film, Play, Code2, Check, Copy, Clock, Layers, Volume2, ShieldCheck, Share2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!project) return null;

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col my-auto">
        
        {/* Modal Header Bar */}
        <div className="bg-zinc-950 px-6 py-4 border-b border-zinc-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${project.category === 'software' ? 'bg-indigo-500' : 'bg-sky-500'}`}></span>
            <span className="text-xs text-zinc-400 uppercase font-semibold">
              {project.category === 'software' ? 'Software & AI Architecture' : 'Video Post-Production'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 space-y-6">
          
          {/* Media / Video Player Section */}
          {project.category === 'video' ? (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 group">
                {isPlayingVideo && project.videoEmbedUrl ? (
                  <iframe
                    src={`${project.videoEmbedUrl}?autoplay=1`}
                    title={project.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col items-center justify-center p-4">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-16 h-16 rounded-full bg-sky-500 hover:bg-sky-400 text-zinc-950 flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer"
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </button>
                      <p className="text-xs text-zinc-300 mt-3 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 font-medium">
                        Click to Play 4K Preview ({project.videoDuration || '02:30'})
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 block text-[10px]">DURATION</span>
                  <span className="font-bold text-sky-400">{project.videoDuration || '02:45'}</span>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 block text-[10px]">ASPECT / RESOLUTION</span>
                  <span className="font-bold text-sky-400">{project.videoAspect || '16:9 4K'}</span>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 text-zinc-300 col-span-2 sm:col-span-1">
                  <span className="text-zinc-500 block text-[10px]">PRIMARY EDIT SUITE</span>
                  <span className="font-bold text-sky-400">{project.videoTools?.[0] || 'Adobe Premiere Pro'}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs text-indigo-400 bg-zinc-950/90 px-3 py-1 rounded border border-zinc-800 font-bold">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-xs text-zinc-400 mt-1 font-medium">{project.subcategory}</p>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>

            {project.detailedNotes && (
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-2">
                <span className="text-indigo-400 font-bold block">Engineering & Architectural Focus:</span>
                <p className="leading-relaxed">{project.detailedNotes}</p>
              </div>
            )}

            {/* Video Editing Highlights */}
            {project.editingHighlights && project.editingHighlights.length > 0 && (
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                <span className="text-sky-400 text-xs font-bold block">Post-Production & Editing Highlights:</span>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {project.editingHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-sky-400" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-400 block font-semibold">Tools & Technologies:</span>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs font-medium text-indigo-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-zinc-950 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => handleCopyLink(project.liveDemoUrl || window.location.href)}
            className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-indigo-400 font-semibold">Copied Link!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Share Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
