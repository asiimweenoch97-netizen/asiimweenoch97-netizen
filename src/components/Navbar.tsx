import React, { useState, useEffect } from 'react';
import { Code2, Film, Bot, User, Mail, FileText, Menu, X, ExternalLink, Check, Cpu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'services', label: 'Services', icon: Bot },
    { id: 'portfolio', label: 'Portfolio', icon: Code2 },
    { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('asiimweenoch97@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg py-3'
          : 'bg-zinc-950/60 backdrop-blur-sm border-b border-zinc-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider block">Software Engineer & Video Editor</span>
            <h1 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
              Asiimwe Enoch
            </h1>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1.5 rounded-full text-xs font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-indigo-500 text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Quick Location Badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span>Uganda (GMT+3)</span>
          </div>

          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            title="Copy Email"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-indigo-400 font-bold">Email Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Email</span>
              </>
            )}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-zinc-950 font-bold text-xs shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-indigo-500 text-zinc-950 font-bold text-xs flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[11px]">Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-5 space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    isActive
                      ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-400 font-bold'
                      : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Kampala, Uganda
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-indigo-400 underline underline-offset-2 flex items-center gap-1"
            >
              {copiedEmail ? 'Copied!' : 'asiimweenoch97@gmail.com'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
