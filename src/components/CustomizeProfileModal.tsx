import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';
import { initialProfileData } from '../data/portfolioData';

interface CustomizeProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
}

export const CustomizeProfileModal: React.FC<CustomizeProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(initialProfileData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Sesuaikan Informasi Portofolio
              </h2>
              <p className="text-[11px] text-slate-500">
                Ubah nama, peran, kontak, dan statistik untuk portofolio pribadi Anda
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          
          {/* Photo preview banner */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-12 aspect-3/4 rounded-lg overflow-hidden ring-2 ring-rose-500/30 bg-red-600 shrink-0 shadow-2xs">
              <img
                src={formData.avatarUrl || '/images/roy_hanafi_photo.jpg'}
                alt={formData.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-xs">{formData.name}</p>
              <p className="text-[11px] text-slate-500">Pas foto resmi PPG Informatika (latar belakang merah)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Nama Lengkap & Gelar</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

            {/* Title / Role */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Judul Pekerjaan / Peran</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

          </div>

          {/* Tagline */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Tagline Singkat Hero</label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            />
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Biografi / Ringkasan Tentang Saya</label>
            <textarea
              rows={3}
              required
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Alamat Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Nomor WhatsApp / HP</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Location */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Domisili / Lokasi</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

            {/* Availability */}
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Status Ketersediaan</label>
              <input
                type="text"
                required
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>

          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 text-xs">Tahun Pengalaman</label>
              <input
                type="number"
                min="0"
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-slate-700 text-xs">Jumlah Proyek</label>
              <input
                type="number"
                min="0"
                value={formData.completedProjects}
                onChange={(e) => setFormData({ ...formData, completedProjects: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <label className="font-semibold text-slate-700 text-xs">Kepuasan Klien (%)</label>
              <input
                type="number"
                min="1"
                max="100"
                value={formData.clientSatisfaction}
                onChange={(e) => setFormData({ ...formData, clientSatisfaction: Number(e.target.value) })}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Kembalikan Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
