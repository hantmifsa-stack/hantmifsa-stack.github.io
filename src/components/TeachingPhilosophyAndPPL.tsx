import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Lightbulb, 
  HeartHandshake, 
  Target,
  Zap,
  Users
} from 'lucide-react';
import { modelGuruData, filosofiMengajarData, refleksiPplData } from '../data/portfolioData';

export const TeachingPhilosophyAndPPL: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'model-guru' | 'filosofi' | 'refleksi-ppl' | 'rtl'>('model-guru');

  return (
    <section id="filosofi-ppl" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Pendidikan Profesi Guru (PPG) Informatika</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visi Pendidik, Filosofi Mengajar &amp; Refleksi PPL
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menyelami panggilan jiwa sebagai pendidik di tanah kelahiran: mewujudkan filosofi Ki Hadjar Dewantara di era digital, 
            mengubah keterbatasan fasilitas menjadi ruang kreasi, serta merefleksikan praktik pengalaman lapangan (PPL) secara jujur dan objektif.
          </p>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/70 rounded-2xl mb-8 max-w-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('model-guru')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'model-guru'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Target className="w-4 h-4 text-rose-600" />
            <span>Model Guru yang Dituju</span>
          </button>

          <button
            onClick={() => setActiveTab('filosofi')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'filosofi'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Filosofi Ki Hadjar Dewantara</span>
          </button>

          <button
            onClick={() => setActiveTab('refleksi-ppl')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'refleksi-ppl'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Refleksi PPL Terbimbing</span>
          </button>

          <button
            onClick={() => setActiveTab('rtl')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'rtl'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Rencana Tindak Lanjut</span>
          </button>
        </div>

        {/* Tab 1: Model Guru yang Dituju */}
        {activeTab === 'model-guru' && (
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden border border-slate-800">
              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="inline-block px-3 py-1 bg-white/10 text-rose-300 rounded-full text-xs font-semibold tracking-wide uppercase">
                  Visi Kepemimpinan Guru
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  &ldquo;Menjadi Jembatan Peradaban bagi Tunas-Tunas Muda di Pelosok Desa&rdquo;
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Bukan sekadar memindahkan materi pelajaran dari buku teks ke kepala siswa, melainkan misi peradaban untuk tanah kelahiran: 
                  memperpendek jurang ketertinggalan teknologi antara pelosok Jambi dan kemajuan di pusat perkotaan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {modelGuruData.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 mb-3">
                      {item.badge}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Komitmen Praktik Nyata:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Filosofi Ki Hadjar Dewantara */}
        {activeTab === 'filosofi' && (
          <div className="space-y-6">
            {/* Quote Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Prinsip Pendidikan Nasional</span>
              </div>
              <blockquote className="text-base sm:text-lg font-serif italic text-slate-100 max-w-4xl leading-relaxed">
                {filosofiMengajarData.quote}
              </blockquote>
              <p className="text-xs text-slate-400">
                &mdash; Ki Hadjar Dewantara &bull; Bapak Pendidikan Nasional
              </p>
            </div>

            {/* Narrative Explanation */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Pendidikan yang Menuntun: Menyelaraskan Kodrat Alam &amp; Kodrat Zaman
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {filosofiMengajarData.description}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filosofiMengajarData.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {pillar.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Refleksi PPL Terbimbing */}
        {activeTab === 'refleksi-ppl' && (
          <div className="space-y-6">
            <div className="bg-white border border-emerald-200 p-5 sm:p-6 rounded-2xl text-slate-800 text-xs sm:text-sm leading-relaxed shadow-2xs">
              <p className="font-bold text-emerald-800 mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Pengantar Refleksi Metakognitif PPL</span>
              </p>
              <p className="text-slate-600 text-xs leading-relaxed">
                {refleksiPplData.pengantar}
              </p>
            </div>

            <div className="space-y-5">
              {refleksiPplData.aspek.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4"
                >
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      {item.dimension}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      {item.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                    {/* Strengths */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-emerald-100 space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-800 text-xs uppercase tracking-wide">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Kekuatan &amp; Praktik Baik:</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-700">
                        {item.strengths.map((str, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Weaknesses / Gaps */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-rose-100 space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-rose-800 text-xs uppercase tracking-wide">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Tantangan &amp; Area Perbaikan:</span>
                      </div>
                      <ul className="space-y-1.5 text-slate-700">
                        {item.weaknesses.map((weak, wIdx) => (
                          <li key={wIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                            <span>{weak}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Insight Kunci: </span>
                      {item.keyInsight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Rencana Tindak Lanjut (RTL) */}
        {activeTab === 'rtl' && (
          <div className="space-y-6">
            <div className="max-w-3xl mb-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Peta Jalan Rencana Tindak Lanjut (RTL) Pasca-PPL
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Langkah konkret dan terukur untuk menyempurnakan kualitas pembelajaran serta mewujudkan kemerdekaan berpikir murid tanpa terhalang sarana fisik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {refleksiPplData.rtl.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60">
                    {plan.area}
                  </span>

                  <h4 className="text-base font-bold text-slate-900">
                    {plan.action}
                  </h4>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div>
                      <span className="font-bold text-slate-800">Strategi Eksekusi:</span>
                      <p className="mt-0.5">{plan.targetMethod}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="font-bold text-emerald-800">Target Capaian:</span>
                      <p className="text-emerald-900 mt-0.5">{plan.expectedOutcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Banner: Komunitas Praktisi */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Komunitas Belajar Guru Informatika</span>
                </div>
                <h4 className="text-base font-bold">
                  Gerakan Literasi Komputasi Daerah 3T
                </h4>
                <p className="text-xs text-slate-300 max-w-xl">
                  Berbagi modul ajar unplugged dan inovasi pemrograman smartphone untuk memastikan tunas muda Indonesia memiliki daya saing global.
                </p>
              </div>

              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                <span>Ruang Kolaborasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
