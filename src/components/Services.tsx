import React from 'react';
import { Tv, Award, Radio, Laptop, Cpu, FileCheck, Check, ArrowRight, Phone } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';
import { APP_IMAGES } from '../data/images';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenOrderModal: (serviceId?: string) => void;
  onScrollToContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal, onScrollToContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      default:
        return <Tv className="w-5 h-5" />;
    }
  };

  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'tv-servis':
        return {
          src: APP_IMAGES.workshopTv,
          alt: 'Oprava televizoru a LED podsvícení na dílně',
          label: 'Dílenská oprava TV'
        };
      case 'anteny-satelity':
        return {
          src: APP_IMAGES.antennaSta,
          alt: 'Měření a servis anténních systémů STA',
          label: 'STA & Satelitní rozvody'
        };
      case 'it-audio':
        return {
          src: APP_IMAGES.pcRepair,
          alt: 'Servis notebooků a zrychlení montáží SSD',
          label: 'Servis PC & Notebooků'
        };
      case 'nahradni-dily':
        return {
          src: APP_IMAGES.remotesParts,
          alt: 'Dálkové ovladače a příslušenství k televizím',
          label: 'Ovladače & Náhradní díly'
        };
      default:
        return null;
    }
  };

  return (
    <section id="sluzby" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Přehled naší činnosti
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kompletní servisní služby v Praze a okolí
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Provádíme odborné opravy spotřební elektroniky pro domácnosti, bytové domy (SVJ) i firmy. 
            Pracujeme s moderním diagnostickým vybavením a originálními součástkami.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const imgData = getServiceImage(service.id);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Optional Service Visual Header */}
                {imgData && (
                  <div className="relative h-44 overflow-hidden border-b border-slate-100 group">
                    <img
                      src={imgData.src}
                      alt={imgData.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-700/50">
                        {imgData.label}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                        {getIcon(service.icon)}
                      </div>
                      {service.badge && (
                        <span className="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-200 text-amber-900 text-[11px] font-bold">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title and Short Description */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullet Points */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Price note and action */}
                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <div className="text-[11px] text-slate-500 font-medium mb-3 italic">
                      💡 {service.priceHint}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={onScrollToContact}
                        className="flex-1 py-2 px-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Poptat službu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        title="Zavolat na dílnu"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-blue-900" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

