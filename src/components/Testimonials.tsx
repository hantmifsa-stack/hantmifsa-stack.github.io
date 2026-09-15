import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimoni Klien</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Mitra & Klien Kami
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Tingkat kepuasan tinggi didorong oleh komunikasi yang transparan, ketepatan waktu, dan kualitas kode yang teruji.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">
                    {item.role}, {item.company}
                  </p>
                  <span className="inline-block mt-0.5 text-[10px] text-rose-600 font-medium">
                    Proyek: {item.projectRelation}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
