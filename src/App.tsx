import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('AI Chatbot Development');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-indigo-500 selection:text-zinc-950 flex flex-col">
      {/* Fixed IDE Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onNavigate={scrollToSection}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Services / What I Do Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Filterable Portfolio Gallery (Software & Video) */}
        <PortfolioGallery />

        {/* Technical Verification Matrix / Tech Stack */}
        <TechStackSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Contact Form & Direct Links */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
