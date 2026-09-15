import React from 'react';
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  ArrowUp,
  Heart,
  FileCode
} from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-rose-500/50 bg-red-600 shrink-0">
                <img
                  src={profile.avatarUrl || '/images/roy_hanafi_photo.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {profile.name}
                </span>
                <span className="text-[11px] text-rose-400 font-semibold">PPG Informatika &bull; Jambi</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-mono">{profile.availability}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#tentang" className="hover:text-rose-400 transition-colors">
                  Kisah &amp; Perjalanan
                </a>
              </li>
              <li>
                <a href="#filosofi-ppl" className="hover:text-rose-400 transition-colors">
                  Filosofi Mengajar &amp; PPL
                </a>
              </li>
              <li>
                <a href="#keahlian" className="hover:text-rose-400 transition-colors">
                  Kompetensi Guru &amp; IT
                </a>
              </li>
              <li>
                <a href="#proyek" className="hover:text-rose-400 transition-colors">
                  Modul Ajar &amp; Karya
                </a>
              </li>
              <li>
                <a href="#pengalaman" className="hover:text-rose-400 transition-colors">
                  Pengabdian &amp; Pendidikan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-rose-400 transition-colors">
                  Ruang Kolaborasi
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Laravel Export */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Hubungkan & Kode Sumber
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Tersedia kode template Laravel Blade & Tailwind CSS yang siap disalin ke instalasi proyek lokal Anda.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenExportModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-300 border border-rose-500/30 hover:bg-rose-600/30 transition-colors cursor-pointer text-xs"
              >
                <FileCode className="w-3.5 h-3.5 text-rose-400" />
                <span>Salin Template Blade Laravel</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {profile.name}. Dirancang dengan <span className="text-rose-400 font-semibold">Laravel 11</span> & <span className="text-sky-400 font-semibold">Tailwind CSS</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
