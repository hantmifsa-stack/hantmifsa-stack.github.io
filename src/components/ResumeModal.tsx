import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types';
import { experienceData, sampleProjects, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs print:p-0 print:bg-white">
      <div className="fixed inset-0 print:hidden" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800">
              Curriculum Vitae (CV) - Format Standar Cetak / PDF
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible print:p-0 space-y-6 text-slate-800 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-5 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-rose-700 mt-1 uppercase tracking-wider">
                {profile.title} &bull; Calon Guru Profesional &bull; Fortis Fortuna Adiuvat
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {profile.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Pas Foto 3x4 */}
            <div className="w-24 aspect-3/4 rounded-lg overflow-hidden border-2 border-slate-300 shadow-2xs shrink-0 bg-red-600 print:w-20">
              <img
                src={profile.avatarUrl || '/images/roy_hanafi_photo.jpg'}
                alt={`Pas foto ${profile.name}`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Ringkasan Profil & Filosofi Mengajar
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Kompetensi Pedagogik & Keahlian Teknis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <p className="font-bold text-slate-900">Pedagogik & Kurikulum:</p>
                <p className="text-slate-600 mt-0.5">Filosofi Ki Hadjar Dewantara (Menuntun Kodrat), Pembelajaran Berdiferensiasi, Scaffolding Parsons Puzzles, Asesmen Formatif Wordwall/Quizizz</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Informatika & Pemrograman:</p>
                <p className="text-slate-600 mt-0.5">Computational Thinking (4 Pilar), Pemrograman Bahasa C (Coding C Android), Logika Algoritma & Flowchart, Informatika Unplugged</p>
              </div>
              <div>
                <p className="font-bold text-slate-900">Web Edukasi & Tools:</p>
                <p className="text-slate-600 mt-0.5">Laravel 11, Tailwind CSS, Blade Components, MySQL, Platform Merdeka Mengajar (PMM), Canva for Education, Git & GitHub</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Pengabdian Mengajar &amp; Pengalaman Profesional
            </h2>
            {experienceData.filter(e => e.type === 'work').map(exp => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-xs">
                    {exp.role} &mdash; <span className="font-normal text-slate-700">{exp.organization}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">{exp.period}</span>
                </div>
                <p className="text-[11px] text-slate-600">{exp.summary}</p>
                <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Pendidikan &amp; Sertifikasi
            </h2>
            <div className="space-y-2 text-xs">
              {experienceData.filter(e => e.type !== 'work').map(item => (
                <div key={item.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900">{item.role}</span>
                    <span className="text-slate-600 block text-[11px]">{item.organization} &bull; {item.summary}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Inovasi Pembelajaran &amp; Karya Web Terkemuka
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              {sampleProjects.slice(0, 4).map(proj => (
                <div key={proj.id} className="border border-slate-200 p-2.5 rounded-lg">
                  <p className="font-bold text-slate-900">{proj.title}</p>
                  <p className="text-slate-600 mt-0.5 line-clamp-2">{proj.summary}</p>
                  <p className="text-[10px] text-rose-700 font-mono mt-1">Stack: {proj.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
