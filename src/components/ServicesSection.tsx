import React from 'react';
import { BarChart3, GraduationCap, Database, LineChart, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

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
      icon: Cpu,
      title: "DAX Optimization & Report Rescues",
      badge: "Speed & Performance",
      description: "Got slow dashboards that take 30+ seconds to load or break during refresh? We audit VertiPaq engine queries, optimize filter contexts, and resolve query folding bottlenecks.",
      features: [
        "DAX Studio query plan & memory profile audit",
        "Elimination of slow bi-directional relationship traps",
        "Incremental refresh & partition optimization",
        "Power Query M pipeline performance speedup",
        "Detailed architecture diagnostic and fix report"
      ],
      serviceKey: "DAX Performance & Model Audit"
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
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0d4a36]/10 text-[#0d4a36] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => onOpenBooking(service.serviceKey)}
                  className="w-full py-2.5 px-4 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
