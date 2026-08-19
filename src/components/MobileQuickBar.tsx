import React from 'react';
import { Phone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface MobileQuickBarProps {
  onScrollToContact: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onScrollToContact }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-900 border-t border-slate-800 p-2 shadow-2xl safe-area-inset-bottom">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          id="mobile-call-btn"
          className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-slate-800 active:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Zavolat na dílnu</span>
        </a>

        <button
          type="button"
          onClick={onScrollToContact}
          id="mobile-inquiry-btn"
          className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-amber-400 active:bg-amber-300 text-slate-950 font-bold text-xs shadow-xs transition-colors cursor-pointer"
        >
          <Wrench className="w-4 h-4 text-slate-950" />
          <span>Poptat opravu</span>
        </button>
      </div>
    </div>
  );
};
