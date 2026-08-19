import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, Bus, Car, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RepairFormData } from '../types';

interface ContactSectionProps {
  onOrderSuccess: (data: RepairFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOrderSuccess }) => {
  const [formData, setFormData] = useState<RepairFormData>({
    fullName: '',
    phone: '',
    email: '',
    deviceType: 'Televizor',
    brand: '',
    serviceType: 'branch',
    address: '',
    issueDescription: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vyplňte prosím vaše jméno';
    if (!formData.phone.trim()) errors.phone = 'Vyplňte prosím telefonní číslo';
    else if (formData.phone.replace(/\s+/g, '').length < 9) errors.phone = 'Telefon musí mít alespoň 9 číslic';
    if (!formData.issueDescription.trim()) errors.issueDescription = 'Uveďte prosím stručný popis závady';
    if (formData.serviceType === 'onsite' && !formData.address?.trim()) {
      errors.address = 'Zadejte prosím adresu v Praze pro výjezd technika';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    onOrderSuccess(formData);
  };

  return (
    <section id="kontakt" className="py-14 sm:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Kde nás najdete & Objednávka
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kontakt a adresa servisní dílny
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Můžete k nám kdykoliv v otevírací době přijít bez objednání, zavolat nám nebo odeslat poptávku níže.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contacts & Directions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">
                  A.V. Kovoslužba s.r.o.
                </h3>
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Provozovna od r. 1995
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-900 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Adresa provozovny a dílny:</div>
                  <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.address.full}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Městská část Praha 4 – Lhotka
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Telefony do dílny:</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-sm font-extrabold text-blue-950 hover:underline"
                    >
                      {COMPANY_INFO.phonePrimary}
                    </a>
                    <a
                      href={`tel:+420${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-700 hover:underline"
                    >
                      {COMPANY_INFO.phoneSecondary}
                    </a>
                  </div>
                  <div className="text-[11px] text-slate-400">Příjem zakázek, konzultace s technikem</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-50 text-slate-700 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">E-mail:</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-blue-900 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-50 text-slate-700 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Otevírací doba dílny a prodejny:</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">
                    {COMPANY_INFO.openingHours.weekdays}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {COMPANY_INFO.openingHours.weekends}
                  </div>
                </div>
              </div>

            </div>

            {/* Travel Directions Card & Map */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Doprava k nám & Parkování
              </h4>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Car className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong>Autem:</strong> Bezplatné a bezproblémové parkování přímo před budovou pro pohodlné naložení i vyložení přístroje.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Bus className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong>MHD (100 m):</strong> Zastávka <em>Cílkova</em> (autobus 189 ze stanice metra Kačerov nebo 197 ze Smíchovského nádraží / Chodova).
                </div>
              </div>

              {/* Interactive OpenStreetMap preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 h-44 relative mt-2">
                <iframe
                  title="Mapa sídla servisu Cílkova 9 Praha 4"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=14.4250%2C50.0150%2C14.4450%2C50.0260&amp;layer=mapnik&amp;marker=50.0207%2C14.4350"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded shadow-xs">
                  📍 Cílkova 9, Praha 4
                </div>
              </div>

              {/* Map Links */}
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href="https://mapy.cz/zakladni?q=C%C3%ADlkova%209%2C%20Praha%204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  Otevřít na Mapy.cz
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C%C3%ADlkova+9+Praha+4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  Otevřít v Google Mapách
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Honest Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Nezávazná poptávka opravy nebo výjezdu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Vyplňte stručné údaje o vašem zařízení. Technik se vám ozve s odhadem postupu a možným termínem.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Poptávka byla úspěšně odeslána
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Děkujeme. V nejbližší pracovní době se vám ozve náš technik s informacemi o diagnostice nebo termínu výjezdu.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        deviceType: 'Televizor',
                        brand: '',
                        serviceType: 'branch',
                        address: '',
                        issueDescription: '',
                      });
                    }}
                    className="mt-2 px-4 py-2 bg-white text-slate-800 font-bold text-xs rounded-lg border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  >
                    Odeslat další poptávku
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Service Mode Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Způsob vyřízení:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'branch' })}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          formData.serviceType === 'branch'
                            ? 'bg-blue-50 border-blue-900 font-bold text-blue-950 ring-1 ring-blue-900/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-bold text-sm">Donesu na dílnu (Cílkova 9)</div>
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">Praha 4 – Lhotka, parkování zdarma</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'onsite' })}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          formData.serviceType === 'onsite'
                            ? 'bg-amber-50 border-amber-500 font-bold text-slate-900 ring-1 ring-amber-500/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-bold text-sm">Požaduji výjezd technika domů</div>
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">Po celé Praze a blízkém okolí</div>
                      </button>
                    </div>
                  </div>

                  {formData.serviceType === 'onsite' && (
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800">
                        Adresa pro výjezd v Praze <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address || ''}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Ulice a číslo, městská část (např. Štúrova 12, Praha 4)"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                      {formErrors.address && (
                        <p className="text-[11px] text-rose-600 font-medium">{formErrors.address}</p>
                      )}
                    </div>
                  )}

                  {/* Device type and Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Typ zařízení
                      </label>
                      <select
                        value={formData.deviceType}
                        onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="Televizor">Televizor (LED / OLED / Smart TV)</option>
                        <option value="Antény / STA">Antény, satelit nebo rozvod STA</option>
                        <option value="Počítač / Notebook">Počítač / Notebook (SSD zrychlení)</option>
                        <option value="Audio / Hi-Fi">Audio technika / Hi-Fi / Video</option>
                        <option value="Posudek pro pojišťovnu">Posudek pro pojišťovnu (blesk/přepětí)</option>
                        <option value="Jiné">Jiné zařízení</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Značka a model (pokud víte)
                      </label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Např. Philips 55OLED, Samsung..."
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  {/* Issue description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Popis závady nebo požadavku <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                      placeholder="Např. TV hraje pouze zvuk, ale obrazovka je černá; po zapnutí bliká červená kontrolka..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                    {formErrors.issueDescription && (
                      <p className="text-[11px] text-rose-600 font-medium">{formErrors.issueDescription}</p>
                    )}
                  </div>

                  {/* Customer Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Vaše jméno a příjmení <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jan Novák"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-rose-600 font-medium">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Telefonní číslo <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+420 777 000 000"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-rose-600 font-medium">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Odeslat nezávaznou poptávku</span>
                    </button>
                    <div className="text-center text-[11px] text-slate-500 mt-2">
                      Odesláním formuláře nevzniká žádná povinnost platby. Cenu opravy vždy odsouhlasíme předem.
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
