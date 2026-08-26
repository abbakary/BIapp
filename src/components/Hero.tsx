import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, BarChart3, Award, Instagram, MapPin } from 'lucide-react';
import { PERSONAL_INFO, TOOLKIT, CLIENT_REGIONS_SUMMARY } from '../data/portfolioData';
import { CountryFlagSVG } from './CountryFlags';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onOpenBooking: (serviceType?: string) => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  return (
    <section id="top" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Client trust & East African regional flag banner */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-gray-600">
        <span className="text-gray-500 font-medium">Provider base in <strong className="text-gray-900">Tanzania 🇹🇿</strong> · Serving East African clients in</span>
        <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full border border-black/8 shadow-2xs overflow-x-auto scrollbar-none">
          {CLIENT_REGIONS_SUMMARY.map((region, idx) => (
            <div key={region.code} className="flex items-center gap-1.5 shrink-0" title={`${region.name} (${region.role}) - ${region.capital}`}>
              <div className="w-5 h-3.5 overflow-hidden rounded-xs shadow-2xs">
                <CountryFlagSVG countryCode={region.code} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold text-gray-800">{region.name}</span>
              {idx < CLIENT_REGIONS_SUMMARY.length - 1 && <span className="text-gray-300 ml-0.5">•</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Headline */}
      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-gray-400 tracking-tight leading-[1.08]">
          Business Intelligence Expert.
        </h1>
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-gray-900 tracking-tight leading-[1.08]">
          Companies bring data. I build the dashboards that drive revenue.
        </h2>
      </div>

      {/* Subtitle description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
        Direct access to senior analytics consultant <strong className="text-gray-900 font-semibold">{PERSONAL_INFO.name}</strong>, based in Tanzania and delivering enterprise Power BI semantic models and automated data architectures across East Africa and worldwide. First working executive prototype in your hands within <span className="font-semibold text-gray-900">7 days</span>.
      </p>

      {/* Call to action buttons with direct WhatsApp and Instagram */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
        <a
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
          title="Chat directly on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span>WhatsApp ({PERSONAL_INFO.whatsappDisplay})</span>
        </a>

        <button
          id="hero-book-btn"
          onClick={() => onOpenBooking('Executive Dashboard Scope')}
          className="bg-[#0d4a36] hover:bg-[#083627] text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-emerald-300" />
          <span>Book Strategy Call</span>
        </button>

        <a
          href={PERSONAL_INFO.instagram}
          target="_blank"
          rel="noreferrer"
          className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 flex items-center gap-2"
        >
          <Instagram className="w-4 h-4 text-pink-600" />
          <span>{PERSONAL_INFO.instagramHandle}</span>
        </a>

        <button
          id="hero-see-work-btn"
          onClick={onExploreWork}
          className="text-gray-600 hover:text-gray-900 font-semibold text-sm sm:text-base px-4 py-3 transition-colors flex items-center gap-1.5"
        >
          <span>See live work</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Profile & Stats Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Left Column: Portrait & Title Card with User's Photo */}
        <div className="md:col-span-5 bg-white rounded-3xl p-4 sm:p-5 border border-black/8 shadow-sm flex flex-col justify-between overflow-hidden relative group">
          {/* Aesthetic Avatar Frame */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0d4a36] via-[#1b4332] to-[#2d6a4f] p-4 flex flex-col justify-between text-white shadow-inner">
            <div className="flex justify-between items-start z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium border border-white/15 text-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Active in Tanzania 🇹🇿
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Award className="w-4 h-4 text-emerald-300" />
              </div>
            </div>

            {/* Profile Avatar Graphic using user-provided portrait */}
            <div className="my-3 py-2 text-center flex flex-col items-center z-10">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-3 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20" style={{aspectRatio: '3/4'}}>
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 bg-[#0d4a36] text-white p-2 rounded-full shadow-lg border-2 border-white" title="Business Intelligence Expert">
                  <BarChart3 className="w-4 h-4 text-emerald-300" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">{PERSONAL_INFO.title}</p>
              <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-emerald-200/90 font-mono">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Dar es Salaam, Tanzania (HQ)</span>
              </div>
            </div>

            {/* Micro Badge */}
            <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-[11px] text-gray-200 flex items-center justify-between z-10">
              <span>Enterprise Business Intelligence & Power BI</span>
              <span className="font-mono text-emerald-300 font-bold">BI EXPERT</span>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-900">{PERSONAL_INFO.name}</p>
              <p className="text-[11px] text-gray-500">Tanzania Base · East Africa & Worldwide</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Projects</span>
            </span>
          </div>
        </div>

        {/* Right Column: 3 Metric Stats + Toolkit Chips */}
        <div className="md:col-span-7 flex flex-col gap-4 sm:gap-6">
          {/* Top 3 Stat Cards */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 bg-white rounded-3xl p-4 sm:p-6 border border-black/8 shadow-sm">
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                {PERSONAL_INFO.experienceYears}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 sm:mt-1">
                yrs in BI & Analytics
              </div>
            </div>

            <div className="text-left border-l border-gray-100 pl-2.5 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                {PERSONAL_INFO.projectsDelivered}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 sm:mt-1">
                dashboards built
              </div>
            </div>

            <div className="text-left border-l border-gray-100 pl-2.5 sm:pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-heading text-emerald-700">
                {PERSONAL_INFO.prototypeDays}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 sm:mt-1">
                to live prototype
              </div>
            </div>
          </div>

          {/* Toolkit Chips */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-black/8 shadow-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                Core Stack & Toolkit
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {TOOLKIT.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <p className="text-xs sm:text-sm font-serif italic text-gray-700">
                "One certified semantic model, all your metrics, zero data chaos."
              </p>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" /> High ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
