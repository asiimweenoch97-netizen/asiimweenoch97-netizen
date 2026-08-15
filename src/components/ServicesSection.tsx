import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { Bot, Code2, Film, CheckCircle2, ArrowRight, Code, Cpu } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeSnippetService, setActiveSnippetService] = useState<string>(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-violet-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I Build & Deliver
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Specialized expertise bridging software architecture and visual storytelling for businesses, products, and tech brands.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>3 Core Disciplines • Built to Scale</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isSelected = activeSnippetService === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-900/90 border-indigo-500/50 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500/20'
                    : 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
                }`}
              >
                {/* Top Card Header */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      Service
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Highlights Bullet Points */}
                  <div className="pt-2 space-y-2">
                    <h4 className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                      Deliverables & Capabilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Client Impact & Outcome Bar */}
                <div className="bg-zinc-950 p-4 border-t border-zinc-800/80">
                  {service.clientOutcome && (
                    <div className="mb-3">
                      <div className="text-[10px] font-semibold text-zinc-500 mb-1 flex items-center justify-between">
                        <span>Expected Client Impact</span>
                        <Cpu className="w-3 h-3 text-indigo-400" />
                      </div>
                      <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-xs font-medium text-indigo-300/90 leading-relaxed">
                        {service.clientOutcome}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-indigo-500 hover:text-zinc-950 text-indigo-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-zinc-800 hover:border-indigo-400 cursor-pointer"
                  >
                    <span>Request {service.title.split(' ')[0]} Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
