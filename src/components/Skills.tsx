import React, { useState } from 'react';
import { 
  Server, 
  Palette, 
  Cpu, 
  Sparkles, 
  Code2, 
  Database,
  Terminal,
  GraduationCap,
  Layers,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-rose-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-600" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-600" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : [skillCategories[selectedCategory]];

  return (
    <section id="keahlian" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kompetensi Guru &amp; Keahlian Teknis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Keahlian Pedagogik &amp; Penguasaan Teknologi
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Kombinasi kompetensi pedagogis Kurikulum Merdeka, keilmuan informatika, serta keterampilan rekayasa web modern berbasis Laravel dan Tailwind CSS.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Bidang
            </button>
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === idx
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skills Display */}
        <div className="space-y-12">
          {displayedCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">
                          {skill.name}
                        </h4>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-50 text-rose-700 shrink-0">
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
