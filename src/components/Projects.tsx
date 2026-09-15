import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Search, 
  Layers, 
  Sparkles,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { sampleProjects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'semua', label: 'Semua Modul & Karya' },
    { key: 'edukasi-informatika', label: 'Inovasi Pembelajaran & Coding HP' },
    { key: 'saas-system', label: 'Web Edukasi & SIAKAD (Laravel)' },
    { key: 'laravel-mysql', label: 'Komunitas Belajar (Kombel)' },
    { key: 'fullstack-api', label: 'Asesmen Formatif & API' },
  ];

  const filteredProjects = useMemo(() => {
    return sampleProjects.filter((project) => {
      const matchCategory = selectedCategory === 'semua' || project.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="proyek" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Karya Nyata & Modul Ajar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Inovasi Pembelajaran & Web Edukasi
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Koleksi modul ajar Kurikulum Merdeka, solusi coding smartphone, serta aplikasi web sekolah terstruktur menggunakan Laravel 11 &amp; Tailwind CSS.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fitur, tag, teknologi..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all placeholder:text-slate-400 text-slate-800"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm font-semibold text-slate-700">Tidak ada karya yang cocok dengan kata kunci.</p>
            <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci lain seperti &ldquo;Coding C&rdquo;, &ldquo;Parsons&rdquo;, &ldquo;SIAKAD&rdquo;, atau &ldquo;Kurikulum Merdeka&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('semua');
              }}
              className="mt-4 px-3.5 py-1.5 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/80 backdrop-blur-xs text-white">
                        {project.categoryLabel}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-rose-600 text-white shadow-xs">
                          Unggulan
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6 space-y-3">
                    
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-5 sm:px-6 py-3.5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ulasan Modul &amp; Tech</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Repository GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-rose-600 hover:text-rose-700 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Kunjungi Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
