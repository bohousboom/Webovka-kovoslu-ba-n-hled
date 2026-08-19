import React from 'react';
import { Award, ShieldCheck, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const AuthorizedBrands: React.FC = () => {
  const authorized = [
    {
      id: 'philips',
      name: 'PHILIPS',
      role: 'Autorizovaný záruční i pozáruční servis',
      highlight: 'Oficiální servisní partner',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200'
    },
    {
      id: 'thomson',
      name: 'THOMSON',
      role: 'Autorizovaný záruční i pozáruční servis',
      highlight: 'Oficiální servisní zastoupení',
      badgeColor: 'bg-red-100 text-red-900 border-red-200'
    },
    {
      id: 'gogen-hyundai',
      name: 'GOGEN & HYUNDAI',
      role: 'Smluvní servis spotřební elektroniky',
      highlight: 'Smluvní středisko',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200'
    },
    {
      id: 'luxtronic',
      name: 'LUXTRONIC',
      role: 'Servisní zastoupení a náhradní díly',
      highlight: 'Smluvní partner',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
    },
  ];

  const popularBrands = [
    'Samsung', 'LG', 'Sony', 'Panasonic', 'TCL', 'Hisense'
  ];

  const otherBrands = [
    'Sharp', 'Toshiba', 'JVC', 'Sencor', 'Hitachi', 'Blaupunkt', 'Lenovo', 'Asus', 'HP', 'Philips', 'Thomson', 'GoGEN', 'Hyundai'
  ];

  return (
    <section id="znacky" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Oficiální autorizace & značky
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Autorizovaný a specializovaný servis značek
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Jsme autorizovaným servisním partnerem předních výrobců a zároveň provádíme odborné pozáruční opravy všech značek dostupných na českém trhu.
          </p>
        </div>

        {/* 1. Official Authorized Partners Grid */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Oficiální servisní partnerství & autorizace:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {authorized.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 rounded-2xl p-5 flex flex-col justify-between transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                      {item.highlight}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="h-10 flex items-center justify-center my-3 bg-white rounded-xl border border-slate-200 p-2 shadow-2xs">
                    {item.id === 'gogen-hyundai' ? (
                      <div className="flex items-center justify-center gap-2">
                        <BrandLogo name="gogen" className="h-5" />
                        <span className="text-slate-300 font-bold">•</span>
                        <BrandLogo name="hyundai" className="h-5" />
                      </div>
                    ) : (
                      <BrandLogo name={item.name} className="h-7" />
                    )}
                  </div>
                </div>

                <div className="text-xs text-slate-600 font-medium pt-3 border-t border-slate-200/80 mt-2">
                  {item.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Major Serviced TV Brands with Logos */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
              Nejčastěji opravované značky televizorů a audio techniky:
            </div>
            <p className="text-xs text-slate-500">
              Disponujeme přímými dodavatelskými kanály pro originální i kvalitní náhradní panely, LED podsvity a základní desky:
            </p>
          </div>

          {/* Logo badges row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {popularBrands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-3 flex flex-col items-center justify-center h-16 shadow-2xs transition-all"
              >
                <BrandLogo name={brand} className="h-6 max-w-full" />
              </div>
            ))}
          </div>

          {/* Additional text badges */}
          <div className="pt-2 border-t border-slate-200">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Opravujeme také ostatní značky na trhu:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {otherBrands.map((brand, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-700"
                >
                  {brand}
                </span>
              ))}
              <span className="px-2.5 py-1 bg-blue-100 border border-blue-200 rounded-md text-xs font-bold text-blue-900">
                + další starší i moderní výrobci
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

