import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  BookOpen, 
  GraduationCap, 
  Compass, 
  Smartphone, 
  CheckCircle2, 
  MessageCircle, 
  Flame, 
  Terminal, 
  Globe, 
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenExportModal?: () => void;
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onDownloadCV }) => {
  const [activeFeature, setActiveFeature] = useState<'visi' | 'metode' | 'teknologi'>('visi');

  return (
    <section id="beranda" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 left-0 -z-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Educational Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-bold tracking-wide">
                <GraduationCap className="w-3.5 h-3.5 text-rose-600" />
                <span>PPG Informatika &bull; Kemendikbudristek</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Calon Guru Profesional</span>
              </span>
            </div>

            {/* Master Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                Menuntun Kodrat Zaman Melalui{' '}
                <span className="text-rose-600 underline decoration-rose-200 decoration-wavy underline-offset-4">
                  Berpikir Komputasional
                </span>{' '}
                &amp; Inovasi Digital
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                Halo, saya <span className="font-bold text-slate-900">{profile.name}</span>, {profile.title}. 
                Tumbuh dan mengabdi di pelosok Jambi, saya memegang teguh prinsip 
                <span className="font-semibold text-rose-600"> &ldquo;Fortis Fortuna Adiuvat&rdquo;</span>: 
                mengubah keterbatasan fasilitas menjadi ruang inovasi belajar merdeka, 
                agar tunas-tunas muda desa mampu berdaya saing global tanpa kehilangan akar budaya.
              </p>
            </div>

            {/* Core Values Pill */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">Ki Hadjar Dewantara</p>
                  <p className="text-[11px] text-slate-500 truncate">Pendidikan Menuntun</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">Coding C Android</p>
                  <p className="text-[11px] text-slate-500 truncate">Solusi Low-Resource</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">Laravel &amp; Tailwind</p>
                  <p className="text-[11px] text-slate-500 truncate">Sistem Web Edukasi</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#filosofi-ppl"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs hover:shadow-sm transition-all"
              >
                <span>Filosofi &amp; Refleksi PPL</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-rose-600" />
                <span>Modul &amp; Karya Ajar</span>
              </a>

              <button
                onClick={onDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Unduh CV</span>
              </button>

              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                title="Hubungi via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Authentic Educator Metrics */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900">{profile.experienceYears}+ Tahun</p>
                <p className="text-xs text-slate-500 font-medium">Pengabdian Mengajar</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-rose-600">Pelosok Jambi</p>
                <p className="text-xs text-slate-500 font-medium">Konteks Daerah 3T</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900">Kurikulum</p>
                <p className="text-xs text-slate-500 font-medium">Merdeka &amp; KHD</p>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-700 mt-1.5 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Fortis Fortuna</span>
                </p>
                <p className="text-xs text-slate-500 font-medium">Prinsip Keberanian</p>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Portrait & Professional Identity Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden space-y-5">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Profil Pendidik Terverifikasi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  PPG 2026
                </span>
              </div>

              {/* Portrait Display & Title */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative w-36 sm:w-40 aspect-3/4 rounded-2xl overflow-hidden shadow-md ring-4 ring-rose-500/20 bg-red-600 shrink-0">
                  <img
                    src={profile.avatarUrl || '/images/roy_hanafi_photo.jpg'}
                    alt={`Foto resmi ${profile.name}`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 text-center">
                    <p className="text-[11px] font-bold text-white tracking-wide">
                      {profile.name}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold">
                    Mahasiswa PPG Informatika
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sarjana Komputer (S.Kom.) &bull; Pendidik yang bertekad membawa kemajuan literasi teknologi ke tanah kelahirannya di Jambi.
                  </p>
                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-rose-600 italic">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    <span>&ldquo;Fortis Fortuna Adiuvat&rdquo;</span>
                  </div>
                </div>
              </div>

              {/* Interactive Showcase Tabs */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="flex gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveFeature('visi')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFeature === 'visi'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Visi Pengabdian
                  </button>
                  <button
                    onClick={() => setActiveFeature('metode')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFeature === 'metode'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Metode Ajar
                  </button>
                  <button
                    onClick={() => setActiveFeature('teknologi')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      activeFeature === 'teknologi'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Stack Web
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70 text-xs leading-relaxed text-slate-700 min-h-[90px] flex items-center">
                  {activeFeature === 'visi' && (
                    <p>
                      Mewujudkan jembatan peradaban bagi anak-anak desa di Jambi. Memastikan mereka memiliki daya nalar komputasional yang tajam agar tidak tertinggal oleh kemajuan di Pulau Jawa.
                    </p>
                  )}
                  {activeFeature === 'metode' && (
                    <p>
                      Memanfaatkan gawai Android (aplikasi Coding C) dan metode Informatika Unplugged. Mengatasi ketiadaan lab komputer dengan hands-on coding praktis yang memerdekakan siswa.
                    </p>
                  )}
                  {activeFeature === 'teknologi' && (
                    <p>
                      Membangun perangkat lunak sekolah dengan Laravel 11 &amp; Tailwind CSS yang hemat bandwidth (low-bandwidth) serta ramah diakses dari jaringan koneksi daerah pedesaan.
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Portofolio Asli &bull; PPG Prajabatan/Daljab</span>
                </span>
                <a
                  href="#tentang"
                  className="font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  Baca Kisah Lengkap &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
