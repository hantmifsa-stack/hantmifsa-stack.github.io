import React from 'react';
import { 
  Sparkles, 
  Check, 
  MapPin, 
  GraduationCap, 
  Flame, 
  Heart, 
  Cpu, 
  Smartphone, 
  Globe, 
  ShieldCheck,
  Calendar,
  Milestone,
  BookOpen
} from 'lucide-react';
import { ProfileData } from '../types';

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      title: 'Menuntun Kodrat Zaman di Pelosok',
      description: 'Menghadirkan pemahaman literasi digital dan berpikir komputasional kepada anak-anak desa di Jambi agar tidak tertinggal oleh kemajuan di kota-kota besar.',
      icon: GraduationCap,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Inovasi Belajar Berdaya Guna',
      description: 'Mengatasi ketiadaan laboratorium komputer dengan memanfaatkan gawai Android (aplikasi Coding C) dan metode Informatika Unplugged yang kontekstual.',
      icon: Smartphone,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
    },
    {
      title: 'Prinsip "Fortis Fortuna Adiuvat"',
      description: 'Keberuntungan berpihak pada mereka yang berani: berani berinovasi di tengah keterbatasan, dan gigih belajar meniru praktik baik pendidik terbaik bangsa.',
      icon: Flame,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Rekayasa Web Edukasi Terstruktur',
      description: 'Membangun aplikasi web sekolah, sistem penilaian formatif, dan LMS ringan ramah bandwidth dengan arsitektur Laravel 11 dan Tailwind CSS modern.',
      icon: Cpu,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    }
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Listrik PLN Masuk Desa',
      desc: 'Cahaya listrik pertama menerangi malam desa setelah puluhan tahun mengandalkan pelita minyak.',
    },
    {
      year: '2018',
      title: 'Jalan Aspal Pertama',
      desc: 'Akses transportasi membaik, membuka keterisolasian daerah dari pusat kabupaten.',
    },
    {
      year: '2020',
      title: 'Titik Balik Guru Honorer',
      desc: 'Terjun ke ruang kelas dan terketuk binar mata tunas muda yang haus akan ilmu teknologi.',
    },
    {
      year: '2026',
      title: 'PPG Informatika Kemendikbudristek',
      desc: 'Memperdalam pedagogik modern Kurikulum Merdeka dan filosofi pendidikan Ki Hadjar Dewantara.',
    }
  ];

  return (
    <section id="tentang" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Kisah Perjalanan &amp; Panggilan Pengabdian</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dari Desa di Pelosok Jambi Menuju Ruang Kelas Merdeka
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menjadi guru bukan sekadar profesi, melainkan misi peradaban untuk memajukan tanah kelahiran. 
            Melalui pemikiran Ki Hadjar Dewantara dan inovasi teknologi adaptif, saya mendedikasikan diri agar tunas-tunas muda desa berani bermimpi melampaui batas geografis mereka.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50/90 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Refleksi Pribadi Roy Hanafi
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Jambi, Indonesia
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-normal">
                <p>
                  Saya lahir dan tumbuh di sebuah desa di Jambi yang selama bertahun-tahun seolah terlupakan oleh waktu. 
                  Di tempat saya, kemajuan adalah sesuatu yang datang terlambat: kami baru menyapa listrik PLN di tahun 2016, 
                  merasakan halus alur aspal di tahun 2018, dan hingga kini, akses teknologi kami masih tertinggal hampir setengah dekade 
                  dibanding saudara-saudara di kota-kota besar.
                </p>
                <p>
                  Jujur saja, menjadi seorang pendidik tidak pernah ada dalam daftar cita-cita saya. Ambisi awal saya sederhana namun berat: 
                  saya hanya ingin memajukan desa tempat saya dilahirkan. Namun, takdir menuntun saya ke pintu ruang kelas sebagai guru honorer. 
                  Di sanalah titik balik itu terjadi. Melihat binar mata anak-anak didik saya, saya merasa tertantang. Saya tidak lagi sekadar ingin 
                  membangun fisik desa, tetapi ingin mendidik dan menuntun tunas-tunas muda ini menuju impian yang ingin mereka gapai.
                </p>
                <p>
                  Saya sadar sepenuhnya akan keterbatasan keilmuan keguruan yang awalnya saya miliki. Namun, bagi saya, perbedaan akses itu 
                  bukanlah alasan untuk berkecil hati, melainkan pelecut untuk terus belajar, meniru praktik baik para pendidik teladan, 
                  dan membuktikan bahwa dedikasi tulus mampu meruntuhkan dinding pembatas sarana.
                </p>
              </div>

              {/* Motto Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-rose-100 uppercase tracking-wider">Semboyan Hidup &amp; Mengajar</p>
                  <p className="text-xs sm:text-sm font-extrabold italic">&ldquo;Fortis Fortuna Adiuvat&rdquo; &mdash; Keberuntungan Berpihak pada Mereka yang Berani</p>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div className={`w-9 h-9 rounded-xl ${pillar.bgColor} ${pillar.color} flex items-center justify-center mb-3`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Milestones & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Milestones Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Milestone className="w-4 h-4 text-rose-600" />
                  <span>Tonggak Perjalanan</span>
                </h3>
                <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                  Jejak Transformasi
                </span>
              </div>

              <div className="space-y-4 pt-1">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-14 text-xs font-bold font-mono text-rose-600 bg-rose-50/80 px-2 py-1 rounded-md text-center shrink-0">
                      {m.year}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{m.title}</p>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Credentials Summary */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-rose-600" />
                <span>Identitas &amp; Status PPG</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Nama Lengkap:</span>
                  <span className="text-slate-900 font-bold">{profile.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Program Profesi:</span>
                  <span className="text-rose-700 font-bold">PPG Informatika (Kemendikbud)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Latar Belakang:</span>
                  <span className="text-slate-900 font-semibold">Sarjana Komputer (S.Kom.)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Daerah Pengabdian:</span>
                  <span className="text-slate-900 font-semibold">{profile.location}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Fokus Pedagogik:</span>
                  <span className="text-slate-900 font-semibold">Pendidikan Menuntun (KHD) &amp; CT</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 font-medium">Spesialisasi Web:</span>
                  <span className="text-rose-600 font-semibold">Laravel 11 &amp; Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Teaching Standard Checklist */}
            <div className="bg-slate-50/80 p-5 rounded-3xl border border-slate-200/80 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span>Prinsip Mengajar di Ruang Kelas</span>
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Berani berinovasi dan membimbing murid meski fasilitas minim</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pembelajaran Mindful, Meaningful, dan Joyful berpusat pada murid</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pendekatan scaffolding bertahap dari konsep visual ke teks kode C</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menjadikan lingkungan pedesaan sebagai laboratorium nalar komputasi</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
