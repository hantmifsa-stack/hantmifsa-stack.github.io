import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/portfolioData';
import { ProfileData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TeachingPhilosophyAndPPL } from './components/TeachingPhilosophyAndPPL';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LaravelExportModal } from './components/LaravelExportModal';
import { CustomizeProfileModal } from './components/CustomizeProfileModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('laravel_portfolio_profile_roy') || localStorage.getItem('laravel_portfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name.toLowerCase().includes('roy hanafi')) {
          return parsed;
        }
      } catch {
        return initialProfileData;
      }
    }
    return initialProfileData;
  });

  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isCustomizerModalOpen, setIsCustomizerModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('laravel_portfolio_profile_roy', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        profile={profile}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          profile={profile}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onDownloadCV={() => setIsResumeModalOpen(true)}
        />
        <About profile={profile} />
        <TeachingPhilosophyAndPPL />
        <Skills />
        <Projects />
        <Experience />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Modals */}
      <LaravelExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      <CustomizeProfileModal
        isOpen={isCustomizerModalOpen}
        onClose={() => setIsCustomizerModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
      />
    </div>
  );
}
