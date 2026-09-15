import React from 'react';
import { 
  Code2, 
  Layers, 
  CreditCard, 
  Gauge, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-rose-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-emerald-600" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-600" />;
      default:
        return <Code2 className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <section id="layanan" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solusi & Layanan Profesional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Pengembangan Web Berbasis Laravel
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Membantu perusahaan, instansi, dan pelaku bisnis mewujudkan aplikasi berbasis web yang aman, cepat, dan mudah dioperasikan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative bg-slate-50/70 p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                service.popularBadge
                  ? 'border-rose-200 shadow-sm ring-1 ring-rose-100 bg-white'
                  : 'border-slate-200/90 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {service.popularBadge && (
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-600 text-white shadow-xs">
                    Paling Diminati
                  </span>
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-5">
                  {getServiceIcon(service.icon)}
                </div>

                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Yang Anda Dapatkan:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="pt-4 border-t border-slate-200/80">
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  <span>Konsultasikan Kebutuhan Anda</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
