import React from 'react';
import { BarChart3, GraduationCap, Database, Code2, Sparkles, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const serviceOfferings = [
    {
      icon: GraduationCap,
      title: "Power BI Corporate & Team Trainings",
      badge: "Hands-on Workshops",
      description: "Customized training cohorts for finance, marketing, logistics, and executive teams. We use your real dataset so your analysts learn practical DAX, dimensional modeling, and report storytelling.",
      features: [
        "Zero-to-Hero DAX & Star Schema masterclasses",
        "Tailored syllabus using your company's actual data",
        "Executive storytelling & dashboard UX principles",
        "Interactive homework reviews & live office hours",
        "Custom reusable company template pack & cheatsheet"
      ],
      serviceKey: "Corporate Power BI Training Workshop"
    },
    {
      icon: BarChart3,
      title: "Data Analytics Consulting & BI Builds",
      badge: "End-to-End Solutions",
      description: "Full-cycle analytics implementation: from database connections and automated ETL pipelines to sub-second DAX measures and board-ready Power BI reporting suites.",
      features: [
        "Multi-source data ingestion (SQL, ERP, Shopify, Fabric, CRM)",
        "Kimball dimensional Star Schema modeling",
        "Dynamic scenario forecasting & What-If parameter tools",
        "Granular Row-Level Security (RLS) configuration",
        "Automated scheduled refreshes on Power BI Service"
      ],
      serviceKey: "End-to-End Power BI Implementation"
    },
    {
      icon: Code2,
      title: "Web & App Development",
      badge: "Full-Stack & Mobile",
      description: "From idea to live product. We build high-performance websites, web apps, and mobile applications using the latest frameworks — React, Next.js, Laravel, FastAPI, Flask, and Flutter. Clean code, pixel-perfect UIs, and launch-ready in weeks, not months.",
      features: [
        "Custom web apps & SaaS platforms (React, Next.js, TypeScript)",
        "Mobile apps for iOS & Android (Flutter / React Native)",
        "Backend APIs with Laravel, FastAPI & Flask",
        "Payment gateways, auth, real-time features & admin dashboards",
        "Cloud deployment, CI/CD pipelines & performance optimization"
      ],
      serviceKey: "Web & App Development"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Database className="w-4 h-4 text-emerald-700" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Consulting & Trainings.</span> Built for measurable business ROI.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl">
          Whether you need a fully-built analytics system or want to empower your internal staff to become self-sufficient Power BI champions.
        </p>
      </div>

      {/* 3 Main Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {serviceOfferings.map((service, index) => {
          const Icon = service.icon;
          const isDevCard = index === 2;
          return (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-7 border shadow-sm flex flex-col justify-between transition-all group relative overflow-hidden ${
                isDevCard
                  ? 'bg-gradient-to-br from-[#0d1f3c] to-[#0a2540] border-blue-900/40 text-white hover:border-blue-500/60 hover:shadow-blue-900/20 hover:shadow-lg'
                  : 'bg-white border-black/8 hover:border-gray-300'
              }`}
            >
              {/* Trending glow for dev card */}
              {isDevCard && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold ${
                    isDevCard
                      ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-[#0d4a36]/10 text-[#0d4a36]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    isDevCard
                      ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200/50'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {isDevCard && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Trending Now</span>
                  </div>
                )}

                <h3 className={`text-xl font-bold tracking-tight mb-2 transition-colors ${
                  isDevCard ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-emerald-800'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  isDevCard ? 'text-blue-100/70' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feat, i) => (
                    <div key={i} className={`flex items-start gap-2 text-xs ${isDevCard ? 'text-blue-100/80' : 'text-gray-700'}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDevCard ? 'text-blue-400' : 'text-emerald-600'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t ${isDevCard ? 'border-white/10' : 'border-gray-100'}`}>
                <button
                  onClick={() => onOpenBooking(service.serviceKey)}
                  className={`w-full py-2.5 px-4 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
                    isDevCard
                      ? 'bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white shadow-md shadow-blue-500/20'
                      : 'bg-gray-900 hover:bg-black text-white'
                  }`}
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
