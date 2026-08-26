import React from 'react';
import { ArrowUp, Linkedin, Mail, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/8 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left branding with real avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 bg-slate-900 shrink-0">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-[10px] font-normal text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  Tanzania 🇹🇿
                </span>
              </div>
              <div className="text-xs text-gray-500">{PERSONAL_INFO.title} · Serving East Africa & Globally</div>
            </div>
          </div>

          {/* Social Channels: WhatsApp, Instagram, LinkedIn, Email */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1EBE5D] font-bold text-xs flex items-center gap-1.5 transition-colors"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#1EBE5D]" />
              <span>{PERSONAL_INFO.whatsappDisplay}</span>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition-colors"
              title={`Instagram ${PERSONAL_INFO.instagramHandle}`}
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              title={`Email ${PERSONAL_INFO.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar with navigation & copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#regions" className="hover:text-gray-900 transition-colors font-semibold text-emerald-800">East African Clients</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#packages" className="hover:text-gray-900 transition-colors">Packages</a>
            <a href="#insights" className="hover:text-gray-900 transition-colors">Insights</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <span>
              © {new Date().getFullYear()} {PERSONAL_INFO.name} · Tanzania Base (HQ)
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
