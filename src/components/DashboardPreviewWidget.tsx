import React, { useState } from 'react';
import { Project } from '../types';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Filter, Eye, Sparkles, Layers, Maximize2, CheckCircle2, TrendingUp, Truck, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface DashboardPreviewWidgetProps {
  project: Project;
  onOpenLiveDemo: (project: Project) => void;
}

export const DashboardPreviewWidget: React.FC<DashboardPreviewWidgetProps> = ({ project, onOpenLiveDemo }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'simulator' | 'insights'>('visual');
  const [selectedFilter, setSelectedFilter] = useState(project.demoData.defaultFilter);
  const [multiplier, setMultiplier] = useState(1);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    if (filter.includes('Tanzania') || filter.includes('Emergency') || filter.includes('Existing') || filter.includes('Central') || filter.includes('Outerwear')) {
      setMultiplier(1.18);
    } else if (filter.includes('New') || filter.includes('Northern') || filter.includes('Cardiology')) {
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

  // Render archetype-specific live visual simulation
  const renderInteractiveContent = () => {
    if (project.chartType === 'bento') {
      return (
        <div className="space-y-3">
          {/* Bento-style mini cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-2.5">
              <span className="text-[10px] text-emerald-300 font-medium block">Total Sales</span>
              <div className="text-base font-black text-white font-mono mt-0.5">$34,914</div>
              <span className="text-[9px] text-emerald-400 font-mono">-$4,266 vs last mo</span>
            </div>
            <div className="bg-[#0e1424] border border-slate-800 rounded-xl p-2.5">
              <span className="text-[10px] text-slate-400 font-medium block">Customer Segments</span>
              <div className="text-base font-black text-white font-mono mt-0.5">1,732</div>
              <span className="text-[9px] text-emerald-400 font-mono">Small Business (82%)</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-[#0e1424] border border-slate-800 rounded-xl p-2.5">
              <span className="text-[10px] text-slate-400 font-medium block">Country Performance</span>
              <div className="text-base font-black text-white font-mono mt-0.5">$270,738</div>
              <span className="text-[9px] text-cyan-400 font-mono">UK, USA, Germany</span>
            </div>
          </div>

          {/* Interactive Bar Chart */}
          <div className="w-full h-36 bg-[#0e1424] rounded-xl p-2 border border-slate-800">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                />
                <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} name="Actual Sales" />
                <Bar dataKey="secondary" fill="#f59e0b" radius={[4, 4, 0, 0]} name="New Acquisition" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }

    if (project.chartType === 'supply') {
      return (
        <div className="space-y-3">
          {/* NOVA ARCS Truck Delivery KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-[#1a0f16] border border-rose-900/60 rounded-xl p-2">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold">
                <span>ON TIME</span>
                <Truck className="w-3 h-3 text-rose-400" />
              </div>
              <div className="text-sm font-black text-white font-mono mt-0.5">59.03%</div>
              <span className="text-[9px] text-rose-400">v/s Target: -28.1%</span>
            </div>
            <div className="bg-[#1a0f16] border border-rose-900/60 rounded-xl p-2">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold">
                <span>IN FULL</span>
                <Truck className="w-3 h-3 text-rose-400" />
              </div>
              <div className="text-sm font-black text-white font-mono mt-0.5">52.78%</div>
              <span className="text-[9px] text-rose-400">v/s Target: -23.7%</span>
            </div>
            <div className="bg-[#1a0f16] border border-rose-900/60 rounded-xl p-2">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold">
                <span>OTIF</span>
                <Truck className="w-3 h-3 text-rose-400" />
              </div>
              <div className="text-sm font-black text-white font-mono mt-0.5">29.02%</div>
              <span className="text-[9px] text-rose-400">v/s Target: -37.1%</span>
            </div>
            <div className="bg-[#1a0f16] border border-rose-900/60 rounded-xl p-2">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold">
                <span>LINE FILL</span>
                <Truck className="w-3 h-3 text-rose-400" />
              </div>
              <div className="text-sm font-black text-white font-mono mt-0.5">65.96%</div>
              <span className="text-[9px] text-emerald-400">7.11K Remaining</span>
            </div>
          </div>

          {/* Area trend */}
          <div className="w-full h-36 bg-[#12080e] rounded-xl p-2 border border-rose-950">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id={`colorRose-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={10} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1a0a14', borderColor: '#881337', borderRadius: '8px', fontSize: '11px' }} />
                <Area type="monotone" dataKey="value" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill={`url(#colorRose-${project.id})`} name="On-Time %" />
                <Area type="monotone" dataKey="secondary" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth={1.5} fill="none" name="In-Full %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }

    if (project.chartType === 'dark_trends') {
      return (
        <div className="space-y-3">
          {/* Top exact 5 KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 bg-[#141b2d] p-2 rounded-xl border border-slate-700/80">
            <div className="bg-[#1b253b] p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-[9px] text-slate-400 block truncate">Sales in 2023</span>
              <div className="text-xs font-bold text-white font-mono mt-0.5">$47,129.00</div>
              <span className="text-[8px] text-emerald-400 font-mono">▲ 1.67%</span>
            </div>
            <div className="bg-[#1b253b] p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-[9px] text-slate-400 block truncate">Total Sales</span>
              <div className="text-xs font-bold text-white font-mono mt-0.5">233,081</div>
              <span className="text-[8px] text-slate-400 font-mono">Units</span>
            </div>
            <div className="bg-[#1b253b] p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-[9px] text-slate-400 block truncate">Total Customers</span>
              <div className="text-xs font-bold text-white font-mono mt-0.5">3,900</div>
              <span className="text-[8px] text-cyan-400 font-mono">Active</span>
            </div>
            <div className="bg-[#1b253b] p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-[9px] text-slate-400 block truncate">Avg Purchase</span>
              <div className="text-xs font-bold text-white font-mono mt-0.5">$59.76</div>
              <span className="text-[8px] text-slate-400 font-mono">Per order</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-[#1b253b] p-1.5 rounded-lg border border-slate-700/60">
              <span className="text-[9px] text-slate-400 block truncate">Avg Review</span>
              <div className="text-xs font-bold text-white font-mono mt-0.5">3.750</div>
              <span className="text-[8px] text-amber-400 font-mono">★ Rating</span>
            </div>
          </div>

          {/* Middle 2 columns: Indicator for Category & Seasonality Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Exact Indicator for Category Table */}
            <div className="bg-[#141b2d] rounded-xl p-2.5 border border-slate-700/80">
              <div className="text-[10px] font-bold text-slate-300 mb-1.5 flex items-center justify-between border-b border-slate-700/60 pb-1">
                <span>Indicator for Category</span>
                <span className="text-[9px] font-mono text-slate-400">2020 - 2023 YoY</span>
              </div>
              <div className="space-y-1 text-[9px] font-mono">
                <div className="grid grid-cols-5 text-slate-400 font-semibold border-b border-slate-800 pb-0.5">
                  <span>Category</span>
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                </div>
                <div className="grid grid-cols-5 items-center">
                  <span className="text-slate-200 font-sans truncate">Accessories</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲15.1%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼10.5%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲12.2%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼13.3%</span>
                </div>
                <div className="grid grid-cols-5 items-center">
                  <span className="text-slate-200 font-sans truncate">Clothing</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼11.5%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲17.9%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲4.1%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼3.3%</span>
                </div>
                <div className="grid grid-cols-5 items-center">
                  <span className="text-slate-200 font-sans truncate">Footwear</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼23.9%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼6.3%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼2.0%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲13.8%</span>
                </div>
                <div className="grid grid-cols-5 items-center">
                  <span className="text-slate-200 font-sans truncate">Outerwear</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲16.6%</span>
                  <span className="text-rose-400 flex items-center gap-0.5">▼21.6%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲47.2%</span>
                  <span className="text-emerald-400 flex items-center gap-0.5">▲0.8%</span>
                </div>
              </div>
            </div>

            {/* Sales Trends by Season Bars */}
            <div className="bg-[#141b2d] rounded-xl p-2.5 border border-slate-700/80">
              <div className="text-[10px] font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                <span>Sales Trends by Season</span>
                <span className="text-[9px] font-mono text-cyan-400">Peak: Fall (60,018)</span>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[9px] pt-1">
                <div className="bg-rose-950/60 border border-rose-800/80 rounded-lg p-1.5">
                  <span className="text-rose-300 block text-[8px] font-sans">Summer</span>
                  <span className="text-white font-bold block mt-0.5">55,777</span>
                </div>
                <div className="bg-sky-950/60 border border-sky-800/80 rounded-lg p-1.5">
                  <span className="text-sky-300 block text-[8px] font-sans">Winter</span>
                  <span className="text-white font-bold block mt-0.5">58,607</span>
                </div>
                <div className="bg-sky-950/60 border border-sky-800/80 rounded-lg p-1.5">
                  <span className="text-sky-300 block text-[8px] font-sans">Spring</span>
                  <span className="text-white font-bold block mt-0.5">58,679</span>
                </div>
                <div className="bg-blue-950/60 border border-blue-800/80 rounded-lg p-1.5">
                  <span className="text-blue-300 block text-[8px] font-sans">Fall</span>
                  <span className="text-white font-bold block mt-0.5">60,018</span>
                </div>
              </div>

              {/* Customer Frequency mini treemap representation */}
              <div className="mt-2 pt-2 border-t border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 block mb-1">Customer Frequency:</span>
                <div className="grid grid-cols-3 gap-1 text-[8px] font-mono">
                  <div className="bg-[#1e3a8a] text-sky-100 p-1 rounded">Every 3 Mo: 584</div>
                  <div className="bg-[#1e40af] text-sky-100 p-1 rounded">Annually: 572</div>
                  <div className="bg-[#2563eb] text-sky-100 p-1 rounded">Quarterly: 563</div>
                  <div className="bg-[#b91c1c] text-rose-100 p-1 rounded">Monthly: 553</div>
                  <div className="bg-[#c2410c] text-amber-100 p-1 rounded">Bi-Weekly: 547</div>
                  <div className="bg-[#991b1b] text-rose-100 p-1 rounded">Weekly: 539</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.chartType === 'hospital') {
      return (
        <div className="space-y-3">
          {/* Hospital Navy KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-[#0e1f38] border border-blue-900/60 rounded-xl p-2">
              <span className="text-[10px] text-blue-300 block">Ø Patient Age</span>
              <div className="text-base font-black text-white font-mono mt-0.5">39 Yrs</div>
              <span className="text-[9px] text-blue-400 font-mono">F: 39 · M: 39</span>
            </div>
            <div className="bg-[#0e1f38] border border-blue-900/60 rounded-xl p-2">
              <span className="text-[10px] text-blue-300 block">Visits</span>
              <div className="text-base font-black text-white font-mono mt-0.5">117</div>
              <span className="text-[9px] text-rose-400 font-mono">-1.68% MoM</span>
            </div>
            <div className="bg-[#0e1f38] border border-blue-900/60 rounded-xl p-2">
              <span className="text-[10px] text-blue-300 block">Ø Wait Time</span>
              <div className="text-base font-black text-white font-mono mt-0.5">33.96m</div>
              <span className="text-[9px] text-emerald-400 font-mono">-1.4m faster</span>
            </div>
            <div className="bg-[#0e1f38] border border-blue-900/60 rounded-xl p-2">
              <span className="text-[10px] text-blue-300 block">Ø Satisfaction</span>
              <div className="text-base font-black text-white font-mono mt-0.5">4.79</div>
              <span className="text-[9px] text-blue-400 font-mono">Out of 5.0</span>
            </div>
          </div>

          {/* Department breakdown bars */}
          <div className="bg-[#0e1f38] rounded-xl p-2.5 border border-blue-900/60 space-y-1.5 text-[10px]">
            <div className="flex justify-between items-center text-slate-300">
              <span>General Practice</span>
              <span className="font-mono text-blue-400">28 (56.0%)</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '56%' }}></div>
            </div>
            <div className="flex justify-between items-center text-slate-300 pt-0.5">
              <span>Orthopedics</span>
              <span className="font-mono text-blue-400">12 (24.0%)</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
        </div>
      );
    }

    // Default chart
    return (
      <div className="w-full h-44 bg-[#0e1424] rounded-xl p-2 border border-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`colorValue-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
              itemStyle={{ color: '#10b981' }}
            />
            <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill={`url(#colorValue-${project.id})`} />
            <Area type="monotone" dataKey="target" stroke="#64748b" strokeDasharray="3 3" strokeWidth={1.5} fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="w-full bg-[#0a0f1d] rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between text-white relative group">
      {/* Top Bar simulating Power BI Service Ribbon with View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3.5 sm:px-4 sm:py-3 bg-[#0e1424] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="text-xs font-bold text-slate-200 tracking-tight truncate max-w-[160px] sm:max-w-[220px]">
              {project.title}
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-[10px] font-mono font-medium">
            Power BI Report
          </span>
        </div>

        {/* 3 View Tabs Switcher */}
        <div className="flex items-center gap-1 bg-[#060a12] p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1 ${
              activeTab === 'visual'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Dashboard UI</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1 ${
              activeTab === 'simulator'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Filter className="w-3 h-3" />
            <span>Live Slicer</span>
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1 ${
              activeTab === 'insights'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            <span>Business Impact</span>
          </button>
        </div>
      </div>

      {/* Main Preview Body */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        {/* TAB 1: High Resolution Visual Dashboard UI */}
        {activeTab === 'visual' && (
          <div className="space-y-3">
            {/* Dashboard Mockup Image Frame */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black aspect-[16/9] group/img">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs font-mono">
                  Loading Power BI High-Res Mockup...
                </div>
              )}

              {/* Hover overlay with Inspect Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-mono flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> High-Resolution Power BI Visual Architecture
                  </span>
                  <button
                    onClick={() => onOpenLiveDemo(project)}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow-md transition-transform active:scale-95"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Open Live Simulator</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick KPI summary bar below image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {project.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-[#0e1424] rounded-xl p-2.5 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block truncate">{kpi.label}</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="text-xs sm:text-sm font-extrabold text-white font-mono">{kpi.value}</span>
                    <span className="text-[10px] font-semibold text-emerald-400 font-mono truncate">{kpi.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Live Slicer Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-3">
            {/* Slicers Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center gap-1 text-[10px] text-slate-400 mr-1 shrink-0 font-mono">
                <Filter className="w-3 h-3 text-emerald-400" />
                <span>SLICER:</span>
              </div>
              {project.demoData.filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleFilterChange(opt)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all shrink-0 ${
                    selectedFilter === opt
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Archetype custom interactive visual container */}
            {renderInteractiveContent()}
          </div>
        )}

        {/* TAB 3: Business Impact & Outcomes */}
        {activeTab === 'insights' && (
          <div className="space-y-3">
            <div className="bg-[#0e1424] rounded-xl p-3 border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Executive Problem & Scope
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#0e1424] rounded-xl p-3 border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1.5">
                Quantified Outcomes & ROI
              </span>
              <ul className="space-y-1.5">
                {project.results.map((res, i) => (
                  <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-[11px] bg-[#060a12] p-2.5 rounded-xl border border-slate-800 text-slate-400">
              <span>Delivery Turnaround: <strong className="text-white">{project.deliveryTime}</strong></span>
              <span>Industry: <strong className="text-emerald-400">{project.clientIndustry}</strong></span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Ribbon with inspect button */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1424] border-t border-slate-800 text-[11px]">
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono">
          <Layers className="w-3 h-3 text-emerald-400" />
          <span>Interactive Power BI Visual Simulation</span>
        </div>

        <button
          onClick={() => onOpenLiveDemo(project)}
          className="text-emerald-400 hover:text-emerald-300 font-semibold text-xs flex items-center gap-1 transition-colors"
        >
          <span>Launch Full Interactive Report</span>
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
