import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { DashboardPreviewWidget } from './DashboardPreviewWidget';
import { Sparkles, BarChart3, Clock, Calendar, Check, ExternalLink } from 'lucide-react';

interface ProjectShowcaseProps {
  onOpenLiveDemo: (project: Project) => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenLiveDemo, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', count: PROJECTS.length },
    { label: 'Executive & Sales', count: PROJECTS.filter(p => p.category === 'Executive' || p.clientIndustry.includes('Commercial') || p.clientIndustry.includes('Sales')).length },
    { label: 'HR & Workforce', count: PROJECTS.filter(p => p.category.includes('HR') || p.clientIndustry.includes('HR') || p.clientIndustry.includes('Human')).length },
    { label: 'Supply Chain & Freight', count: PROJECTS.filter(p => p.category.includes('Supply') || p.clientIndustry.includes('Supply') || p.clientIndustry.includes('Logistics') || p.clientIndustry.includes('Freight')).length },
    { label: 'Treasury & Finance', count: PROJECTS.filter(p => p.category === 'Finance' || p.clientIndustry.includes('Banking') || p.clientIndustry.includes('Treasury')).length },
    { label: 'Healthcare & Clinical', count: PROJECTS.filter(p => p.category === 'Healthcare' || p.clientIndustry.includes('Healthcare')).length }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (selectedCategory === 'Executive & Sales') {
          return p.category === 'Executive' || p.clientIndustry.includes('Commercial') || p.clientIndustry.includes('Sales');
        }
        if (selectedCategory === 'HR & Workforce') {
          return p.category.includes('HR') || p.clientIndustry.includes('HR') || p.clientIndustry.includes('Human');
        }
        if (selectedCategory === 'Supply Chain & Freight') {
          return p.category.includes('Supply') || p.clientIndustry.includes('Supply') || p.clientIndustry.includes('Logistics') || p.clientIndustry.includes('Freight');
        }
        if (selectedCategory === 'Treasury & Finance') {
          return p.category === 'Finance' || p.clientIndustry.includes('Banking') || p.clientIndustry.includes('Treasury');
        }
        if (selectedCategory === 'Healthcare & Clinical') {
          return p.category === 'Healthcare' || p.clientIndustry.includes('Healthcare');
        }
        return p.category === selectedCategory || p.clientIndustry.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4 text-emerald-700" />
          <span>Selected BI Architectures & Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Enterprise solutions.</span> Different industries, one data architect.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl">
          Every project features custom Star Schema data modeling, automated ETL pipelines, sub-second DAX execution, and high-adoption executive UX.
        </p>

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gray-900 text-white shadow-xs'
                    : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-emerald-500/30 text-emerald-300' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-10 sm:space-y-16">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="bg-white rounded-3xl p-5 sm:p-8 border border-black/8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
            >
              {/* Left Column: Interactive Power BI Simulation Widget */}
              <div className={`lg:col-span-7 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <DashboardPreviewWidget
                  project={project}
                  onOpenLiveDemo={onOpenLiveDemo}
                />
              </div>

              {/* Right Column: Case Study Breakdown & Quantified Results */}
              <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div>
                  {/* Top Impact Tag & Delivery Speed */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/60">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      {project.impactBadge}
                    </span>
                    <span className="text-xs text-gray-600 font-medium flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-gray-400" />
                      {project.deliveryTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-emerald-800 mb-3 flex items-center gap-1.5">
                    <span>{project.clientIndustry}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600 font-normal">Production Semantic Model</span>
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem & Solution Accordion-like Quick Comparison */}
                  <div className="space-y-2 mb-4 bg-gray-50/90 rounded-2xl p-3.5 border border-gray-100 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block">
                        The Challenge
                      </span>
                      <p className="text-gray-700 text-[11px] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-gray-200/60">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                        Architected Solution
                      </span>
                      <p className="text-gray-700 text-[11px] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Quantified Business Results */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Quantified Business Outcomes
                    </span>
                    <ul className="space-y-1.5">
                      {project.results.map((res, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenLiveDemo(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore Live Power BI Report</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(`Request similar architecture to ${project.title}`)}
                    className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition-all shadow-2xs hover:shadow-xs flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Get Similar System</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
