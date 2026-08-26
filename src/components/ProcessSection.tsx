import React from 'react';
import { Layers, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header matching prototype screenshot 10 */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-emerald-700" />
          <span>Execution Framework</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Process is everything.</span> Surprises are not.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl">
          A structured 4-step roadmap engineered for zero downtime, strict data governance, and rapid deployment.
        </p>
      </div>

      {/* 4 Process Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="bg-white rounded-3xl p-5 sm:p-6 border border-black/8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-mono font-black text-gray-300 group-hover:text-emerald-700 transition-colors">
                  {step.step}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  {step.duration}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>Stage {idx + 1} of 4</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Process Note */}
      <div className="mt-8 bg-[#0d4a36]/5 rounded-2xl p-4 sm:p-5 border border-[#0d4a36]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-xs sm:text-sm font-bold text-gray-900">Need a custom sprint for your team?</p>
          <p className="text-xs text-gray-600">From single-report rescues to multi-month corporate data migrations.</p>
        </div>
        <button
          onClick={() => onOpenBooking('Custom BI Project Scope')}
          className="w-full sm:w-auto bg-[#0d4a36] hover:bg-[#093526] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0 flex items-center justify-center gap-1.5"
        >
          <span>Schedule discovery call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
