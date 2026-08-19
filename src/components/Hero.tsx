import React from 'react';
import { Phone, MapPin, CheckCircle2, Truck, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { APP_IMAGES } from '../data/images';

interface HeroProps {
  onOpenOrderModal: (device?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Authentic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Dílna Praha 4 – Lhotka • Tradice od roku 1995</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Opravy televizí a servis elektroniky v Praze
            </h1>

            {/* Clear, honest description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Zajišťujeme spolehlivý záruční i pozáruční servis televizorů všech značek, 
              počítačů, audio techniky a televizních rozvodů (STA) pro SVJ a bytové domy. 
              <strong> Cenu opravy vám vždy sdělíme předem po diagnostice ke schválení.</strong>
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-base shadow-md transition-all text-center cursor-pointer"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span>Zavolat na dílnu: 241 714 442</span>
              </a>

              <button
                type="button"
                onClick={scrollToContact}
                id="hero-poptavka-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-base border border-slate-700 transition-all text-center cursor-pointer"
              >
                <Wrench className="w-5 h-5 text-amber-400" />
                <span>Nezávazná poptávka opravy</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bezplatné parkování před provozovnou</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Výjezdy technika a odvoz po celé Praze</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Diagnostika a odhad ceny vždy předem</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Autorizovaný partner Philips a Thomson</span>
              </div>
            </div>
          </div>

          {/* Practical Info & Workshop Visual Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Workshop Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src={APP_IMAGES.workshopTv}
                alt="Servisní dílna televizorů A.V. Kovoslužba Praha"
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-extrabold text-[11px]">
                    SERVISNÍ DÍLNA V PROVOZU
                  </span>
                  <span className="text-slate-300 text-[11px] font-medium bg-slate-900/80 px-2 py-0.5 rounded">
                    Cílkova 9, Praha 4
                  </span>
                </div>
                <p className="text-xs text-slate-200 mt-1.5 font-medium">
                  Vybavené pracoviště pro opravy LED podsvícení, zdrojů a elektroniky
                </p>
              </div>
            </div>

            {/* Quick Contact & Dispatch Box */}
            <div className="bg-slate-800/95 rounded-2xl border border-slate-700 p-5 shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Otevřeno pro veřejnost
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-bold">Po–Pá: 8:00 – 16:00</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/80 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Dílna Lhotka</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Parkování přímo před vchodem, bez objednání.
                  </p>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/80 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Svoz po Praze</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Přijedeme, svezeme i dovezeme zpět.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

