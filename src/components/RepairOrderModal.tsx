import React, { useState, useEffect } from 'react';
import { X, Wrench, Send, AlertCircle, Phone, MapPin, Truck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { RepairFormData } from '../types';

interface RepairOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDeviceType?: string;
  onOrderSuccess: (data: RepairFormData) => void;
}

export const RepairOrderModal: React.FC<RepairOrderModalProps> = ({
  isOpen,
  onClose,
  initialDeviceType = 'tv',
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<RepairFormData>({
    fullName: '',
    phone: '',
    email: '',
    deviceType: 'tv',
    brand: '',
    model: '',
    serviceType: 'branch',
    address: '',
    issueDescription: '',
    preferredTime: 'Kdykoliv v pracovní době',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialDeviceType) {
      // normalize
      if (initialDeviceType.includes('pc') || initialDeviceType.includes('laptop')) {
        setFormData((prev) => ({ ...prev, deviceType: 'laptop_pc' }));
      } else if (initialDeviceType.includes('antenna') || initialDeviceType.includes('sat')) {
        setFormData((prev) => ({ ...prev, deviceType: 'antenna_sat' }));
      } else if (initialDeviceType.includes('printer')) {
        setFormData((prev) => ({ ...prev, deviceType: 'printer' }));
      } else {
        setFormData((prev) => ({ ...prev, deviceType: 'tv' }));
      }
    }
  }, [initialDeviceType, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vyplňte vaše jméno';
    if (!formData.phone.trim()) errors.phone = 'Vyplňte telefonní číslo';
    else if (formData.phone.replace(/\s+/g, '').length < 9) errors.phone = 'Minimálně 9 číslic';
    if (!formData.issueDescription.trim()) errors.issueDescription = 'Popište prosím závadu';
    if (formData.serviceType === 'onsite' && !formData.address?.trim()) {
      errors.address = 'Zadejte adresu pro výjezd v Praze';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onOrderSuccess(formData);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Wrench className="w-4 h-4" />
            <span>Rychlá poptávka servisu</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Objednat opravu elektroniky
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Technik vám potvrdí termín a předem sdělí odhad ceny.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto" noValidate>
          {/* Device Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Zařízení k opravě:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
              {[
                { id: 'tv', label: 'Televizor' },
                { id: 'laptop_pc', label: 'Notebook/PC' },
                { id: 'antenna_sat', label: 'Antény/SAT' },
                { id: 'other', label: 'Jiné' },
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, deviceType: d.id as any })}
                  className={`py-2 px-2 rounded-lg font-bold border transition-all cursor-pointer text-center ${
                    formData.deviceType === d.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service delivery mode */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: 'branch' })}
              className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                formData.serviceType === 'branch'
                  ? 'bg-blue-50 border-blue-900 font-bold text-blue-950 ring-1 ring-blue-900/30'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="font-bold">Donesu na Cílkovu 9</div>
              <div className="text-[10px] text-slate-500 font-normal">Praha 4 (parkování zdarma)</div>
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: 'onsite' })}
              className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                formData.serviceType === 'onsite'
                  ? 'bg-amber-50 border-amber-500 font-bold text-slate-900 ring-1 ring-amber-500/30'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="font-bold flex items-center gap-1">
                <Truck className="w-3 h-3 text-amber-600" />
                <span>Výjezd technika domů</span>
              </div>
              <div className="text-[10px] text-slate-500 font-normal">Po celé Praze a okolí</div>
            </button>
          </div>

          {formData.serviceType === 'onsite' && (
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-800">
                Adresa v Praze pro výjezd <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.address || ''}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Ulice, číslo a městská část v Praze"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {formErrors.address && (
                <p className="text-[11px] text-rose-600 font-medium">{formErrors.address}</p>
              )}
            </div>
          )}

          {/* Brand & Model */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Značka</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="Např. Philips, Samsung"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Model (volitelné)</label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder="Číslo modelu / úhlopříčka"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Popis závady <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={formData.issueDescription}
              onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
              placeholder="Jak se závada projevuje (zhasnutá obrazovka, nejde zapnout, seká se...)"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {formErrors.issueDescription && (
              <p className="text-[11px] text-rose-600 font-medium">{formErrors.issueDescription}</p>
            )}
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Jméno <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jan Novák"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {formErrors.fullName && (
                <p className="text-[11px] text-rose-600 font-medium">{formErrors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Telefon <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+420 777 000 000"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              {formErrors.phone && (
                <p className="text-[11px] text-rose-600 font-medium">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Odesílám...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Odeslat nezávazně</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
