import React, { useState } from 'react';
import { CLIENT_COUNTRIES, CountryFlagSVG } from './CountryFlags';
import { Globe2, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ClientFootprintSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const ClientFootprintSection: React.FC<ClientFootprintSectionProps> = ({ onOpenBooking }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('TZ');

  const selectedCountry = CLIENT_COUNTRIES.find(c => c.code === selectedCountryCode) || CLIENT_COUNTRIES[0];

  return (
    <section id="regions" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Globe2 className="w-4 h-4 text-emerald-700" />
          <span>East African Footprint & Clients</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Headquartered in Tanzania.</span> Empowering organizations across the East African Community.
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          From high-growth commercial enterprises in Dar es Salaam and Arusha to market leaders across Nairobi, Mombasa, and Kampala, Mohamed Kido builds localized, secure, and production-grade Power BI architectures tailored to East African trade corridors and business dynamics.
        </p>
      </div>

      {/* East African Country Selection Tabs with Official Flags */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
        {CLIENT_COUNTRIES.map((country) => {
          const isSelected = selectedCountryCode === country.code;
          return (
            <button
              key={country.code}
              onClick={() => setSelectedCountryCode(country.code)}
              className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md ring-2 ring-emerald-500/30'
                  : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-8 h-5 overflow-hidden rounded shadow-xs shrink-0">
                  <CountryFlagSVG countryCode={country.code} className="w-full h-full object-cover" />
                </div>
                {country.role === 'Provider Base' ? (
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}>
                    HQ Base
                  </span>
                ) : (
                  <span className={`text-[9px] font-mono ${
                    isSelected ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                    {country.code}
                  </span>
                )}
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold truncate">{country.name}</div>
                <div className={`text-[10px] truncate ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
                  {country.stats}
                </div>
              </div>

              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Country Spotlight Bento */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left column: Country Details & Impact */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-10 h-6.5 overflow-hidden rounded-md shadow-xs shrink-0 border border-black/10">
              <CountryFlagSVG countryCode={selectedCountry.code} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span>{selectedCountry.name}</span>
                {selectedCountry.nativeName && selectedCountry.nativeName !== selectedCountry.name && (
                  <span className="text-sm font-normal text-gray-500">({selectedCountry.nativeName})</span>
                )}
              </h3>
              <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Primary Hub: {selectedCountry.hub}</span>
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
            {selectedCountry.description}
          </p>

          {/* Sector tags */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              Core Industry Deployments
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCountry.sectors.map((sector, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{sector}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Callout for this region */}
          <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-gray-100">
            <a
              href={`${PERSONAL_INFO.whatsappLink}%20regarding%20projects%20in%20${selectedCountry.name}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Discuss {selectedCountry.name} Project</span>
            </a>

            <button
              onClick={() => onOpenBooking(`Regional Consultation for ${selectedCountry.name}`)}
              className="bg-gray-900 hover:bg-black text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-xs"
            >
              Book Strategy Session
            </button>
          </div>
        </div>

        {/* Right column: Delivery Metrics & Regional SLA */}
        <div className="lg:col-span-5 bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100 space-y-4">
          <div className="text-xs font-bold text-gray-900 flex items-center justify-between">
            <span>East Africa Regional Service Standard</span>
            <span className="text-emerald-800 font-mono text-[11px] bg-emerald-100/60 px-2 py-0.5 rounded">
              Active Coverage
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
              <span className="text-gray-500">Expert HQ Base</span>
              <span className="font-semibold text-gray-900">Tanzania (EAT / UTC+3)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
              <span className="text-gray-500">Deployment Mode</span>
              <span className="font-semibold text-gray-900">Remote & Regional On-site</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
              <span className="text-gray-500">Working Prototype SLA</span>
              <span className="font-semibold text-emerald-800 font-mono">7 Business Days</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500">Regional Coverage</span>
              <span className="font-semibold text-gray-900">Tanzania, Kenya, Uganda</span>
            </div>
          </div>

          <div className="bg-emerald-950 text-white p-3 rounded-xl text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Multi-Currency & Regional Trade Compliance</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Models configured with dynamic FX conversion (TZS, KES, UGX, RWF, USD, EUR) and granular Row-Level Security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
