import React, { useState } from 'react';
import { PRICING_DATA, COMPANY_INFO } from '../data/mockData';
import { CheckCircle2, Phone, AlertCircle } from 'lucide-react';

interface PricingProps {
  onScrollToContact: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onScrollToContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tv' | 'antenna' | 'pc' | 'other'>('all');

  const filteredPrices = activeCategory === 'all' 
    ? PRICING_DATA 
    : PRICING_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="cenik" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Přehledné a férové ceny
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Orientační ceník servisních prací
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Konečná cena opravy vždy závisí na typu zařízení, velikosti úhlopříčky a ceně náhradních dílů. 
            Přesnou kalkulaci vám vždy sdělíme po provedené diagnostice dříve, než začneme opravovat.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'all', label: 'Všechny služby' },
            { id: 'tv', label: 'Televizory' },
            { id: 'antenna', label: 'Antény & STA' },
            { id: 'pc', label: 'PC & Notebooky' },
            { id: 'other', label: 'Posudky & Ostatní' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price Table / Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-200">
            {filteredPrices.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors"
              >
                <div className="space-y-1 flex-1">
                  <div className="text-sm font-bold text-slate-900">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.note}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-right">
                    <div className="text-base font-extrabold text-blue-950">
                      {item.price}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Doba: {item.timeframe}
                    </div>
                  </div>

                  <button
                    onClick={onScrollToContact}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Poptat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note on diagnostic and pricing guarantee */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-950">
          <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Záruka transparentnosti:</strong> Pokud se po diagnostice rozhodnete přístroj neopravovat 
            (např. z důvodu nerentability), hradí se pouze vstupní diagnostický poplatek (300 – 450 Kč). 
            V případě provedení opravy se tento poplatek <strong>započítává do celkové ceny</strong>.
          </div>
        </div>

      </div>
    </section>
  );
};
