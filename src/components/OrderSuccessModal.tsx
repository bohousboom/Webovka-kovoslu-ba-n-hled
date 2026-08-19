import React from 'react';
import { CheckCircle2, Phone, Calendar, Clock, MapPin, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { RepairFormData } from '../types';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: RepairFormData | null;
  ticketId: string;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderData,
  ticketId,
}) => {
  if (!isOpen || !orderData) return null;

  const getDeviceLabel = (type: string) => {
    switch (type) {
      case 'tv':
        return 'Televizor';
      case 'laptop_pc':
        return 'Notebook / PC';
      case 'antenna_sat':
        return 'Anténa / Satelit';
      case 'printer':
        return 'Tiskárna';
      default:
        return 'Spotřební elektronika';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with success badge */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Objednávka servisu přijata!
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Děkujeme, váš požadavek byl úspěšně zaevidován v našem systému.
          </p>

          <div className="mt-4 inline-block px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs font-mono font-bold">
            Číslo zakázky: <span className="text-amber-300">{ticketId}</span>
          </div>
        </div>

        {/* Content summary */}
        <div className="p-6 sm:p-7 space-y-4 text-xs sm:text-sm">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5">
              Shrnutí požadavku:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-slate-700">
              <div>
                <span className="text-slate-400 block text-[11px]">Zákazník:</span>
                <span className="font-semibold">{orderData.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Telefon:</span>
                <span className="font-semibold">{orderData.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Zařízení:</span>
                <span className="font-semibold">{getDeviceLabel(orderData.deviceType)} {orderData.brand}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Předání:</span>
                <span className="font-semibold">
                  {orderData.serviceType === 'onsite' ? 'Výjezd na adresu' : 'Pobočka Cílkova 9'}
                </span>
              </div>
            </div>
            {orderData.address && (
              <div className="pt-1 text-[11px] text-slate-600">
                <strong>Adresa výjezdu:</strong> {orderData.address}
              </div>
            )}
          </div>

          {/* Next steps guide */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
              Co bude následovat:
            </h4>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>
                  Náš servisní technik vás bude kontaktovat <strong>během pracovní doby (obvykle do 2 hodin)</strong> pro upřesnění termínu diagnostiky nebo výjezdu.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Po provedení diagnostiky vám sdělíme <strong>přesný cenový odhad před zahájením práce</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Need immediate action */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-950 flex items-center justify-between gap-3">
            <span>Potřebujete řešit opravu akutně?</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-3 py-1.5 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 shrink-0 flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Zavolat teď</span>
            </a>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer"
          >
            Rozumím, zavřít okno
          </button>
        </div>
      </div>
    </div>
  );
};
