import React from 'react';
import { Check, Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/portfolioData';

interface PackagesSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header matching prototype screenshot 11 */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-emerald-700" />
          <span>Services & Packages</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Clear deliverables.</span> Built around your growth.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl">
          Fixed-scope engagements with guaranteed delivery timelines and zero hidden surprises.
        </p>
      </div>

      {/* 3 Package Cards matching prototype screenshot 11 & 12 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 items-stretch">
        {SERVICE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-${pkg.id}`}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.popular
                ? 'bg-[#0d4a36] text-white shadow-xl ring-2 ring-emerald-500/50 md:-translate-y-2'
                : 'bg-white text-gray-900 border border-black/8 shadow-sm hover:border-gray-300'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-300 text-gray-950 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}

            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  pkg.popular ? 'bg-white/10 text-emerald-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  {pkg.duration}
                </span>
                <span className={`text-xs font-semibold ${pkg.popular ? 'text-emerald-200' : 'text-emerald-800'}`}>
                  Fixed Scope
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 ${
                pkg.popular ? 'text-white' : 'text-gray-900'
              }`}>
                {pkg.name}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                pkg.popular ? 'text-emerald-100/80' : 'text-gray-600'
              }`}>
                {pkg.tagline}
              </p>

              <div className={`text-xs p-3 rounded-2xl mb-6 ${
                pkg.popular ? 'bg-black/20 text-emerald-100' : 'bg-gray-50 text-gray-700'
              }`}>
                <span className="font-semibold block mb-0.5">Ideal for:</span>
                {pkg.idealFor}
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 mb-8">
                <div className={`text-[11px] font-bold uppercase tracking-wider ${
                  pkg.popular ? 'text-emerald-300' : 'text-gray-400'
                }`}>
                  Included Deliverables
                </div>
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      pkg.popular ? 'bg-emerald-400 text-gray-950' : 'bg-[#0d4a36]/10 text-[#0d4a36]'
                    }`}>
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className={pkg.popular ? 'text-gray-100' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-gray-100/10">
              <button
                id={`btn-select-${pkg.id}`}
                onClick={() => onOpenBooking(pkg.name)}
                className={`w-full py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-95 ${
                  pkg.popular
                    ? 'bg-white hover:bg-gray-100 text-[#0d4a36]'
                    : 'bg-[#0d4a36] hover:bg-[#083627] text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{pkg.ctaText}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
