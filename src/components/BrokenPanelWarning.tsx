import React from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, FileText } from 'lucide-react';

interface BrokenPanelWarningProps {
  onScrollToContact: () => void;
}

export const BrokenPanelWarning: React.FC<BrokenPanelWarningProps> = ({ onScrollToContact }) => {
  return (
    <section className="bg-amber-50 border-y border-amber-200 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-300/80 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
            
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Důležité informace před poptávkou opravy televizoru</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kdy se oprava VYPLATÍ:</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-5.5">
                    Pokud je sklo obrazovky neporušené, ale televize <strong>nejde zapnout, bliká kontrolka, jde pouze zvuk bez obrazu</strong> (vadné podsvícení) nebo vypadává signál. Tyto závady jsou běžně a rentabilně opravitelné.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-amber-800">
                    <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Prasklý nebo rozbitý displej (sklo):</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-5.5">
                    Výměna prasklého LCD panelu se finančně nevyplatí (samotný náhradní panel stojí většinu ceny nové TV). V tomto případě vám rádi <strong>vystavíme odborný posudek pro pojišťovnu</strong>.
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
