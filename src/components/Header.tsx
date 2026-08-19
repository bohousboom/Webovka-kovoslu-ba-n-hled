import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenOrderModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Information Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.address.full}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.openingHours.weekdays}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="topbar-phone-link"
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Dílna: {COMPANY_INFO.phonePrimary}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              Servis elektroniky od roku 1995
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand & Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-black text-xl shadow-xs border border-blue-950">
            KV
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
              A.V. KOVOSLUŽBA
            </div>
            <div className="text-xs text-slate-500 font-medium tracking-normal mt-0.5">
              Servis televizorů a elektroniky • Praha 4
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <button
            onClick={() => scrollTo('sluzby')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Služby
          </button>
          <button
            onClick={() => scrollTo('jak-to-funguje')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Jak to funguje
          </button>
          <button
            onClick={() => scrollTo('cenik')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Ceník
          </button>
          <button
            onClick={() => scrollTo('znacky')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Značky
          </button>
          <button
            onClick={() => scrollTo('zkusenosti')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Reference
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Časté dotazy
          </button>
          <button
            onClick={() => scrollTo('kontakt')}
            className="hover:text-blue-900 transition-colors cursor-pointer py-1"
          >
            Kde nás najdete
          </button>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            id="nav-call-btn"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold border border-slate-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-900" />
            <span>241 714 442</span>
          </a>

          <button
            onClick={() => {
              if (onOpenOrderModal) {
                onOpenOrderModal();
              } else {
                scrollTo('kontakt');
              }
            }}
            id="nav-poptavka-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            <span>Poptat opravu</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label="Menu"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-1 text-sm font-semibold text-slate-800">
            <button
              onClick={() => scrollTo('sluzby')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Služby a opravy
            </button>
            <button
              onClick={() => scrollTo('jak-to-funguje')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Jak to funguje
            </button>
            <button
              onClick={() => scrollTo('cenik')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Orientační ceník
            </button>
            <button
              onClick={() => scrollTo('znacky')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Servisované značky
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Časté dotazy
            </button>
            <button
              onClick={() => scrollTo('kontakt')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              Kontakt a adresa dílny
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Zavolat na dílnu: 241 714 442</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollTo('kontakt');
              }}
              className="w-full py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-sm"
            >
              Poptat opravu / výjezd
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
