import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ShieldCheck, Wrench, ArrowRight, Truck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOrder: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOrder,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Zavřít"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            {service.badge && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                {service.badge}
              </span>
            )}
            {service.hasOnsiteService && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-800 text-blue-200 flex items-center gap-1">
                <Truck className="w-3 h-3" />
                <span>Výjezd po Praze</span>
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white pr-8">
            {service.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Popis služby & Postup
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Co všechno tato služba zahrnuje:
            </h4>
            <div className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {service.brands && service.brands.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Servisované a podporované značky:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {service.brands.map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-900 border border-blue-100"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing & Guarantee Box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-slate-800 block">Cenové podmínky:</span>
              <span className="text-amber-900 font-semibold">{service.priceHint}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Záruka na práci i díly</span>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-900" />
            <span>Zavolat na dotaz</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Zavřít
            </button>
            <button
              onClick={() => {
                onClose();
                onOrder(service.id);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>Poptat tuto službu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
