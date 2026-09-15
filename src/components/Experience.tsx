import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle,
  Clock
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'work' | 'edu-cert'>('all');

  const filteredItems = experienceData.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'work') return item.type === 'work';
    if (filterType === 'edu-cert') return item.type === 'education' || item.type === 'certification';
    return true;
  });

  const getBadgeIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-rose-600" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-sky-600" />;
      case 'certification':
        return <Award className="w-4 h-4 text-amber-600" />;
    }
  };

  const getBadgeLabel = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return 'Pekerjaan';
      case 'education':
        return 'Pendidikan';
      case 'certification':
        return 'Sertifikasi';
    }
  };

  return (
    <section id="pengalaman" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Jejak Pengabdian &amp; Akademik</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pengabdian Mengajar &amp; Riwayat Pendidikan
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Rekam jejak dedikasi sebagai guru honorer di Jambi, program Pendidikan Profesi Guru (PPG) Informatika, serta fondasi keilmuan Sarjana Komputer.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-1.5 p-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Semua Riwayat
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'work'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Pengabdian Mengajar
            </button>
            <button
              onClick={() => setFilterType('edu-cert')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'edu-cert'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Pendidikan &amp; Sertifikasi
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-300 group-hover:border-rose-500 flex items-center justify-center shadow-xs transition-colors">
                {getBadgeIcon(item.type)}
              </div>

              {/* Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs group-hover:border-slate-300 group-hover:shadow-xs transition-all">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-800">
                      {getBadgeLabel(item.type)}
                    </span>
                    <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mb-3">
                  {item.organization}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Key Achievements */}
                {item.achievements.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Pencapaian Kunci:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
