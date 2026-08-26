import React, { useState } from 'react';
import { Calendar, Copy, Check, ArrowUpRight, Sparkles, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CTASectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Deep Forest Green Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0d4a36] via-[#093526] to-[#052219] text-white rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-16 shadow-2xl border border-emerald-900/50">
        {/* Background glow decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-semibold mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Currently taking on BI & Power BI projects across East Africa & Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Tell me what you're building with data.
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
            Send a message directly via WhatsApp or email with a couple of lines about your current reporting setup and timeline. You'll get an immediate reply from Mohamed Kido with scope breakdown and initial architecture advice.
          </p>

          {/* CTAs with WhatsApp, Call, Instagram, and Email */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp ({PERSONAL_INFO.whatsappDisplay})</span>
            </a>

            <button
              id="cta-book-btn"
              onClick={() => onOpenBooking('Free Strategy Call')}
              className="bg-white hover:bg-gray-100 text-[#0d4a36] font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>Book Discovery Call</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold px-4 py-3.5 rounded-full transition-all flex items-center justify-center gap-1.5 backdrop-blur-sm flex-1 sm:flex-none"
                title={`Instagram ${PERSONAL_INFO.instagramHandle}`}
              >
                <Instagram className="w-4 h-4 text-pink-300" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold px-4 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm flex-1 sm:flex-none"
                title={`Copy email (${PERSONAL_INFO.email})`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied {PERSONAL_INFO.email}!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-emerald-300" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-emerald-200/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Based in Tanzania 🇹🇿 (EAT Timezone)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Instant WhatsApp response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Mutual NDA before data sharing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
