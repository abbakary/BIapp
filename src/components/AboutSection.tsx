import React from 'react';
import { UserCheck, Target, GraduationCap, CheckCircle2, Shield, Star, Instagram, Award, Check } from 'lucide-react';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AboutSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Eyebrow and Headline */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <UserCheck className="w-4 h-4 text-emerald-700" />
          <span>About Mohamed Kido</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl">
          <span className="text-gray-400">Direct senior expertise.</span> I build data tools your leadership will actually open every day.
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          I'm Mohamed Kido — a dedicated Business Intelligence Expert and enterprise analytics consultant based in <strong className="text-gray-900 font-semibold">Tanzania 🇹🇿</strong>. Over the past 7+ years, I’ve helped enterprises, multi-entity commercial groups, and leadership teams across Tanzania, Kenya, Uganda, Rwanda, and globally turn fragmented spreadsheets into automated, high-speed decision engines.
        </p>
      </div>

      {/* Profile Spotlight Bento Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Photo and identity */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl mb-4 group bg-gradient-to-tr from-[#0d4a36]/10 via-emerald-50 to-[#0d4a36]/10">
            <img
              src={PERSONAL_INFO.profileImage2}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 right-3 bg-[#0d4a36] text-white px-2.5 py-1 rounded-full text-[10px] font-bold border-2 border-white shadow-md flex items-center gap-1">
              <span>🇹🇿 Tanzania (HQ)</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900">{PERSONAL_INFO.name}</h3>
          <p className="text-xs text-gray-500 font-medium">{PERSONAL_INFO.title}</p>
          
          {/* Social Channels Badge */}
          <div className="flex items-center gap-2 mt-3">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-colors border border-emerald-200"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-xl transition-colors border border-pink-200"
              title={`Instagram ${PERSONAL_INFO.instagramHandle}`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors border border-blue-200"
              title="LinkedIn Profile"
            >
              <Award className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bio Highlights */}
        <div className="md:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Senior Business Intelligence Expert · 100% Client Retention Rate</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Solving the "Messy Data & Slow Reporting" bottleneck for leadership.
          </h4>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Most organizations possess abundant transactional records but spend 15 to 30 hours each week manually copy-pasting numbers between spreadsheets. I eliminate this waste by designing resilient, automated ETL pipelines that feed directly into clean, executive Power BI semantic models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Sub-Second DAX:</strong> Optimized measures for instant slice and dice.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Automated Refreshes:</strong> Zero manual spreadsheet handling needed.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Direct Consultant Access:</strong> WhatsApp & video sync without middle layers.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Full Internal Handover:</strong> 100% semantic model ownership and team workshops.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div className="bg-white rounded-3xl p-6 border border-black/8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#0d4a36]/10 text-[#0d4a36] flex items-center justify-center font-bold mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
              Direct Expert Engagement
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You communicate directly with the data architect writing the DAX, designing the semantic model, and configuring the ETL pipelines. No junior hand-offs, no bureaucratic delays.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast direct iterations</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-black/8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#0d4a36]/10 text-[#0d4a36] flex items-center justify-center font-bold mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
              Decision-First UX
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Dashboards are built around the 3-second executive rule: instant clarity on whether targets are met, why variance occurred, and where action is required.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero visual clutter</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-black/8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#0d4a36]/10 text-[#0d4a36] flex items-center justify-center font-bold mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
              Team Training Included
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every deliverable comes with recorded video walkthroughs, DAX cheatsheets, and live team workshops so your internal analysts independently own the solution.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Independence guaranteed</span>
          </div>
        </div>
      </div>

      {/* Testimonials / Client Quotes */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>What Clients Say</span>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Verified Regional Feedback
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col justify-between bg-gray-50/80 rounded-2xl p-5 border border-gray-100">
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-0.5 text-xs">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{t.author}</h4>
                  <p className="text-[11px] text-gray-500">{t.role}, {t.company}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
