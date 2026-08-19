import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="zkusenosti" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Reference z Prahy a okolí
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Zkušenosti našich zákazníků
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dlouhodobě servisujeme elektroniku pro obyvatele Prahy 4 i celé metropole a spravujeme antény pro společenství vlastníků (SVJ).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars and badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {t.device}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.location}</span>
                  </div>
                </div>
                {t.type === 'b2b' && (
                  <span className="text-[10px] uppercase font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Správa SVJ / BD
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
