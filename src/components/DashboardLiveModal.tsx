import React, { useState } from 'react';
import { Project } from '../types';
import { X, Filter, BarChart3, Shield, Sparkles, Layers, Calendar, Eye, CheckCircle2, TrendingUp, Truck, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DashboardLiveModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const DashboardLiveModal: React.FC<DashboardLiveModalProps> = ({ project, onClose, onOpenBooking }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'visual' | 'sandbox' | 'matrix' | 'case_study'>('visual');
  const [activeSlicer, setActiveSlicer] = useState(project.demoData.defaultFilter);
  const [timePeriod, setTimePeriod] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4' | 'YTD'>('YTD');
  const [multiplier, setMultiplier] = useState(1.0);

  const handleSlicerChange = (opt: string) => {
    setActiveSlicer(opt);
    if (opt.includes('Tanzania') || opt.includes('Emergency') || opt.includes('Central') || opt.includes('Outerwear') || opt.includes('Existing')) {
      setMultiplier(1.18);
    } else if (opt.includes('Rwanda') || opt.includes('Northern') || opt.includes('New') || opt.includes('Cardiology')) {
      setMultiplier(0.85);
    } else {
      setMultiplier(1.0);
    }
  };

  const chartData = project.demoData.metricSeries.map(item => ({
    ...item,
    value: Math.round(item.value * multiplier * 10) / 10,
    target: Math.round(item.target * multiplier * 10) / 10,
    secondary: item.secondary ? Math.round(item.secondary * multiplier * 10) / 10 : undefined,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto overscroll-contain animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#090d16] text-white rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] sm:max-h-[90vh]">
        {/* Top Header simulating Power BI Service Titlebar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-3.5 bg-[#0e1424] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
              PBI
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="text-xs sm:text-base font-bold text-slate-100 line-clamp-1">{project.title}</h3>
                <span className="hidden xs:inline-flex items-center gap-1 text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-mono shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Certified Production Report
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">{project.clientIndustry} · High-Impact Dashboard Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            <button
              onClick={() => onOpenBooking(`Build custom dashboard like ${project.title}`)}
              className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Similar Solution</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-3 sm:px-6 py-2 bg-[#060a12] border-b border-slate-800/80 text-xs overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors shrink-0 ${
              activeTab === 'visual' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>High-Res Power BI View</span>
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors shrink-0 ${
              activeTab === 'sandbox' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Dynamic Sandbox</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors shrink-0 ${
              activeTab === 'matrix' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dimensional Metric Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('case_study')}
            className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors shrink-0 ${
              activeTab === 'case_study' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Executive Business Case</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-3.5 sm:p-6 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-5">
          {/* TAB 1: High-Res Visual Dashboard UI */}
          {activeTab === 'visual' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-[#0e1424] rounded-2xl p-4 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-100">{project.title}</h4>
                    <p className="text-xs text-slate-400">{project.subtitle}</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                    High-Fidelity Power BI UI Layout
                  </span>
                </div>

                {/* Main Full Mockup Frame */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black aspect-[16/9] shadow-2xl">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                      Power BI High-Resolution Visual Layout
                    </div>
                  )}
                </div>

                {/* 4 Bottom KPI cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  {project.kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-[#060a12] p-3 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 block truncate">{kpi.label}</span>
                      <div className="text-lg font-black text-white font-mono mt-0.5">{kpi.value}</div>
                      <div className="text-[10px] text-emerald-400 font-mono">{kpi.trend}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Live Slicers Sandbox */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Slicers Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0e1424] p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
                    <Filter className="w-3.5 h-3.5 text-emerald-400" /> Slicer Selection:
                  </span>
                  {project.demoData.filterOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSlicerChange(opt)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeSlicer === opt
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1 bg-[#060a12] p-1 rounded-lg border border-slate-800 text-xs">
                  {(['Q1', 'Q2', 'Q3', 'Q4', 'YTD'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setTimePeriod(period)}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                        timePeriod === period ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Interactive KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {project.kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-[#0e1424] rounded-2xl p-3.5 sm:p-4 border border-slate-800 flex flex-col justify-between">
                    <span className="text-xs text-slate-400 font-medium truncate">{kpi.label}</span>
                    <div className="my-1">
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">
                        {kpi.value}
                      </div>
                    </div>
                    <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1 font-mono">
                      <span>{kpi.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Visualizations */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-[#0e1424] rounded-2xl p-4 border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Performance Dynamics & Target Variance</h4>
                      <p className="text-[11px] text-slate-400">Interactive time-series response to slicer context</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      Live Context: {activeSlicer}
                    </span>
                  </div>
                  <div className="h-60 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="modalGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                        <YAxis stroke="#64748b" fontSize={11} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#modalGradient)" name="Actual Performance" />
                        <Area type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth={2} fill="none" name="Benchmark Target" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Secondary breakdown card */}
                <div className="bg-[#0e1424] rounded-2xl p-4 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 mb-1">Contribution Mix</h4>
                    <p className="text-[11px] text-slate-400 mb-4">Ranked by volume & operational margin</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Primary Commercial Hub', pct: 84, amt: '$1.42M' },
                        { label: 'Regional Secondary Network', pct: 72, amt: '$980k' },
                        { label: 'Expansion Territory Corridor', pct: 58, amt: '$640k' },
                        { label: 'Specialized Enterprise Line', pct: 42, amt: '$380k' },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-300">{item.label}</span>
                            <span className="text-emerald-400 font-mono">{item.amt}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                              style={{ width: `${item.pct * (multiplier === 1 ? 1 : multiplier > 1 ? 1.15 : 0.85)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Dynamic Cross-Filtering</span>
                    <span className="text-emerald-400 font-mono">100% Interactive</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Dimensional Drilldown Matrix Table */}
          {activeTab === 'matrix' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-[#0e1424] p-4 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-bold text-slate-100 mb-2">Hierarchical Matrix Table & Performance Drill-Through</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Enables executive drill-down from consolidated organizational levels down to granular units and categories.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-300">
                    <thead className="bg-[#060a12] text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                      <tr>
                        <th className="py-2.5 px-3">Dimension Entity</th>
                        <th className="py-2.5 px-3">Actuals</th>
                        <th className="py-2.5 px-3">Target</th>
                        <th className="py-2.5 px-3">Variance</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {[
                        { name: 'Core Enterprise Segment', actual: '$1,920,000', budget: '$1,650,000', varP: '+16.4%', status: 'Exceeding' },
                        { name: 'Commercial Network Operations', actual: '$1,410,000', budget: '$1,300,000', varP: '+8.5%', status: 'On Target' },
                        { name: 'Regional Logistics & Transit', actual: '$890,000', budget: '$820,000', varP: '+8.5%', status: 'On Target' },
                        { name: 'Emerging & Special Accounts', actual: '$480,000', budget: '$440,000', varP: '+9.1%', status: 'On Target' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-800/50">
                          <td className="py-2.5 px-3 font-semibold text-white">{row.name}</td>
                          <td className="py-2.5 px-3 font-mono">{row.actual}</td>
                          <td className="py-2.5 px-3 font-mono text-slate-400">{row.budget}</td>
                          <td className={`py-2.5 px-3 font-mono ${row.varP.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {row.varP}
                          </td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              row.status === 'Exceeding' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                              'bg-blue-950 text-blue-400 border border-blue-800'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Case Study & ROI */}
          {activeTab === 'case_study' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-[#0e1424] p-4 rounded-2xl border border-slate-800 space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">Client Problem & Business Challenge</h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#060a12] p-3 rounded-xl border border-slate-800">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">Architected Solution</h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#060a12] p-3 rounded-xl border border-slate-800">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-2">Quantified Results & Business Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.results.map((res, i) => (
                      <div key={i} className="bg-[#060a12] p-3 rounded-xl border border-slate-800 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs bg-[#060a12] p-3 rounded-xl border border-slate-800 text-slate-400">
                  <span>Delivery Turnaround: <strong className="text-white">{project.deliveryTime}</strong></span>
                  <span>Target Industry: <strong className="text-emerald-400">{project.clientIndustry}</strong></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#0e1424] border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built by {PERSONAL_INFO.name} · {PERSONAL_INFO.title}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
            >
              Close Inspector
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(`Consultation regarding ${project.title}`);
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
