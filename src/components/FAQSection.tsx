import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="mb-10 sm:mb-14 text-center sm:text-left">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center justify-center sm:justify-start gap-1.5">
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>Clear Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Frequently</span> asked questions.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl">
          Everything you need to know about working with a specialized Power BI architect.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-black/8 overflow-hidden transition-all duration-200"
            >
              <button
                id={`faq-toggle-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900 tracking-tight leading-snug">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-[#0d4a36] text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
