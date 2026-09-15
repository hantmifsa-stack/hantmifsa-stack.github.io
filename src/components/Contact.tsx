import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  GraduationCap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Kolaborasi Modul Ajar Informatika',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'Kolaborasi Modul Ajar Informatika',
    'Diskusi Implementasi Berpikir Komputasional & Coding HP',
    'Pengembangan Sistem Informasi Sekolah (Laravel)',
    'Undangan Berbagi Praktik Baik / Webinar',
    'Pertanyaan Umum & Inkuiri Pendidik'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Harap lengkapi semua kolom formulir.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Kolaborasi Modul Ajar Informatika',
        message: '',
      });
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    }, 800);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Ruang Diskusi &amp; Kolaborasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mari Berkolaborasi untuk Kemajuan Edukasi
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Terbuka untuk kolaborasi modul ajar Kurikulum Merdeka, diskusi implementasi Berpikir Komputasional di daerah 3T, penelitian tindakan kelas (PTK), maupun pengembangan sistem informasi pendidikan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50/90 p-6 sm:p-7 rounded-3xl border border-slate-200/90 space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                Kontak &amp; Layanan Komunikasi
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 text-rose-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Surel Resmi / Akun Belajar:</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold text-slate-900 hover:text-rose-600 transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 text-emerald-600">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Respon Cepat via WhatsApp:</span>
                    <a
                      href={profile.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 text-sky-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Wilayah Pengabdian:</span>
                    <span className="font-semibold text-slate-900">
                      {profile.location} &bull; Indonesia
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 text-amber-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Status Ketersediaan:</span>
                    <span className="font-semibold text-slate-900">
                      Aktif mengajar &amp; terbuka untuk riset kolaboratif
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-3 border-t border-slate-200">
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Pesan via WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Academic Integrity Note */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  Etika &amp; Integritas Akademik
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Semua korespondensi, materi ajar kolaboratif, dan inkuiri pendidikan ditanggapi dengan penuh rasa hormat serta standar profesionalisme pendidik.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Kirimkan Pesan atau Rencana Kolaborasi
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Silakan isi pesan di bawah ini. Tanggapan akan dikirimkan langsung ke alamat surel Anda.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold">Pesan Anda Berhasil Terkirim!</p>
                    <p className="mt-0.5 text-emerald-700">
                      Terima kasih telah menghubungi. Saya akan meninjau pesan Anda dan segera memberikan tanggapan.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold">Gagal Mengirim Pesan</p>
                    <p className="mt-0.5 text-rose-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda / Nama Sekolah"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Alamat Surel (Email) *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@sekolah.sch.id / email anda"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Topik / Subjek Diskusi
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-slate-900"
                  >
                    {subjects.map((subj, idx) => (
                      <option key={idx} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Isi Pesan / Catatan Kolaborasi *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan rencana kolaborasi, pertanyaan seputar modul ajar, atau undangan berbagi praktik baik..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all text-slate-900 placeholder:text-slate-400 leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    * Wajib diisi dengan informasi yang valid
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs transition-all cursor-pointer disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
