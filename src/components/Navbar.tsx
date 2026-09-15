import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  UserCheck, 
  Send, 
  Menu, 
  X,
  Compass
} from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenExportModal?: () => void;
  onOpenCustomizerModal: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCustomizerModal,
  onOpenResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kisah & Visi', href: '#tentang' },
    { name: 'Filosofi & PPL', href: '#filosofi-ppl' },
    { name: 'Kompetensi', href: '#keahlian' },
    { name: 'Modul & Proyek', href: '#proyek' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5'
          : 'bg-white/85 backdrop-blur-xs py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Professional Identity */}
          <a
            href="#"
            id="navbar-brand-logo"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-rose-500/30 shadow-xs group-hover:ring-rose-500 transition-all bg-red-600 shrink-0">
              <img
                src={profile.avatarUrl || '/images/roy_hanafi_photo.jpg'}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight group-hover:text-rose-600 transition-colors">
                {profile.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="font-medium text-[11px] text-rose-700 tracking-wide">
                  PPG Informatika &bull; Jambi
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-rose-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenResumeModal && (
              <button
                id="btn-nav-view-cv"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 rounded-xl transition-colors cursor-pointer"
                title="Lihat Dokumen CV Resmi"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Dokumen CV</span>
              </button>
            )}

            <button
              id="btn-nav-edit-profile"
              onClick={onOpenCustomizerModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-2xs"
              title="Perbarui Data Profil"
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Edit Profil</span>
            </button>

            <a
              id="btn-nav-hire-me"
              href="#kontak"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs hover:shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hubungi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl text-xs font-bold"
                title="Lihat Dokumen CV"
              >
                <FileText className="w-4 h-4" />
              </button>
            )}
            <button
              id="btn-mobile-toggle-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizerModal();
              }}
              className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl text-center"
            >
              Edit Profil
            </button>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-xs font-bold text-white bg-rose-600 rounded-xl text-center"
            >
              Hubungi
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
