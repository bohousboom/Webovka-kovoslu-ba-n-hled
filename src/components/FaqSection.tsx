import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Odpovědi na nejčastější dotazy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Často kladené otázky k opravám
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Vše, co potřebujete vědět před předáním nebo objednáním výjezdu technika.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/50 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
