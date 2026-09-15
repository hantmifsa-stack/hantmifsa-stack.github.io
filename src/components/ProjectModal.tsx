import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Database, 
  CheckCircle2, 
  Cpu, 
  Tag,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {project.laravelVersion}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 h-56 sm:h-72 bg-slate-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-xs">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">Peran Saya:</span>
              <span className="font-semibold text-slate-900">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Framework & Versi:</span>
              <span className="font-semibold text-rose-600">{project.laravelVersion}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 block">Database:</span>
              <span className="font-semibold text-slate-900">{project.database}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Deskripsi & Solusi Proyek
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Fitur Unggulan Sistem</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-rose-600" />
              <span>Sorotan Arsitektur Kode & Database</span>
            </h3>
            <div className="space-y-2 text-xs">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/40 border border-rose-100 text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Tags */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Teknologi yang Digunakan:
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Lihat Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors shadow-xs"
              >
                <span>Kunjungi Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
