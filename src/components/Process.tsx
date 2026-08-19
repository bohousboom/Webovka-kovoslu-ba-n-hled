import React from 'react';
import { PhoneCall, Search, PhoneForwarded, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ProcessProps {
  onScrollToContact: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onScrollToContact }) => {
  const steps = [
    {
      num: '1',
      title: 'Předání do servisu nebo výjezd',
      desc: 'Přístroj donesete k nám na dílnu (Cílkova 9, Praha 4) nebo si telefonicky domluvíte výjezd našeho technika přímo k vám domů.',
      icon: PhoneCall,
    },
    {
      num: '2',
      title: 'Odborná diagnostika závady',
      desc: 'Technik zařízení otevře, proměří obvody, zjistí přesnou příčinu nefunkčnosti a dostupnost i cenu potřebných náhradních dílů.',
      icon: Search,
    },
    {
      num: '3',
      title: 'Zavoláme vám s cenovou nabídkou',
      desc: 'Před započetím jakékoliv práce vám telefonicky sdělíme přesnou částku. Vy se v klidu rozhodnete, zda opravu schválíte.',
      icon: PhoneForwarded,
    },
    {
      num: '4',
      title: 'Předvedení a protokol se zárukou',
      desc: 'Po dokončení opravy přístroj otestujeme, předvedeme vám jeho plnou funkčnost a vystavíme daňový doklad s garancí na provedenou práci a díly.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="jak-to-funguje" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Férový postup bez překvapení
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Jak probíhá oprava u nás v servisu
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Žádné skryté poplatky. Vždy víte, kolik oprava bude stát dříve, než na ní začneme pracovat.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-900 text-amber-400 font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                      <Icon className="w-4 h-4 text-blue-900" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-blue-900">
                  Krok {step.num} ze 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-6 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-base font-bold text-white">
              Potřebujete se poradit ohledně vašeho televizoru nebo antény?
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Zavolejte nám na dílnu v pracovní době (Po–Pá 8:00–16:00) nebo pošlete zprávu.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={onScrollToContact}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors cursor-pointer"
            >
              Poptat online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
