import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 sm:pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: About company */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-amber-400 font-black text-sm flex items-center justify-center border border-blue-950">
                KV
              </div>
              <span className="text-white font-extrabold text-sm tracking-tight">
                A.V. KOVOSLUŽBA s.r.o.
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tradiční servis televizorů, spotřební elektroniky, anténních rozvodů STA pro bytové domy a výpočetní techniky. Provozovna na Lhotce v provozu již od roku 1995.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              IČO: {COMPANY_INFO.billing.ico} • DIČ: {COMPANY_INFO.billing.dic}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Rychlá navigace
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => scrollTo('sluzby')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Opravy televizorů & služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('jak-to-funguje')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Jak probíhá oprava
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('cenik')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Orientační ceník
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('znacky')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Autorizované značky
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Časté dotazy zákazníků
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-2.5">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Dílna a kontakt
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline text-white font-bold">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.openingHours.weekdays}</span>
              </div>
            </div>
          </div>

          {/* Col 4: SVJ and Call to action */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">
              Pro bytové domy a SVJ
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Zajišťujeme pravidelnou údržbu, servis i rekonstrukce společných televizních antén (STA) pro společenství vlastníků a bytová družstva po celé Praze.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Zpět nahoru</span>
            </button>
          </div>

        </div>

        {/* Legal baseline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} A.V. Kovoslužba s.r.o. Všechna práva vyhrazena.
          </div>
          <div>
            {COMPANY_INFO.billing.court}
          </div>
        </div>

      </div>
    </footer>
  );
};
