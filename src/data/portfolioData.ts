import { Project, ServicePackage, BlogPost, FAQItem, Testimonial } from '../types';

// Project dashboard images (imported as assets for reliable bundling)
import imgBentoSales from '../assets/images/bento_sales_dashboard_1787736751176.jpg';
import imgSupplyChain from '../assets/images/supply_chain_nova_arcs_1787736764849.jpg';
import imgTransactions from '../assets/images/transactions_trends_exact_1787737623655.jpg';
import imgHospital from '../assets/images/hospital_visits_powerbi_1787736793245.jpg';
import imgSalesProfit from '../assets/images/sales_profit_powerbi_dashboard_1787732558514.jpg';
import imgHrAnalytics from '../assets/images/hr_analytics_powerbi_dashboard_1787732575372.jpg';

export const PERSONAL_INFO = {
  name: "Mohamed Kido",
  title: "Business Intelligence Expert",
  tagline: "Empowering enterprises across East Africa (Tanzania, Kenya, Uganda, Rwanda) and globally with advanced Power BI analytics, Kimball star-schema data modeling, automated ETL pipelines, and executive intelligence.",
  email: "kidomoody@gmail.com",
  phone: "+255 693 380 817",
  whatsapp: "+255693380817",
  whatsappDisplay: "+255 693 380 817",
  whatsappLink: "https://wa.me/255693380817?text=Hello%20Mohamed%20Kido,%20I'm%20interested%20in%20your%20Business%20Intelligence%20Expert%20&%20Power%20BI%20services.",
  instagram: "https://instagram.com/tupotech",
  instagramHandle: "@tupotech",
  linkedin: "https://linkedin.com/in/kido-muhammed-bi",
  github: "https://github.com",
  location: "Tanzania (HQ Base) · Serving East Africa & Worldwide",
  baseCountry: "Tanzania",
  profileImage: "/images/profile1.jpeg",
  profileImage2: "/images/profile2.png",
  experienceYears: "7+",
  projectsDelivered: "65+",
  trainedProfessionals: "920+",
  avgRoi: "4.2x",
  prototypeDays: "7 days",
};

export const CLIENT_REGIONS_SUMMARY = [
  { name: "Tanzania", flag: "🇹🇿", role: "Provider Base", code: "TZ", capital: "Dar es Salaam / Dodoma", projects: "28+" },
  { name: "Kenya", flag: "🇰🇪", role: "Client Region", code: "KE", capital: "Nairobi / Mombasa", projects: "16+" },
  { name: "Uganda", flag: "🇺🇬", role: "Client Region", code: "UG", capital: "Kampala / Jinja", projects: "11+" },
  { name: "Rwanda", flag: "🇷🇼", role: "Client Region", code: "RW", capital: "Kigali", projects: "9+" },
];

export const TOOLKIT = [
  "Power BI Desktop & Service",
  "Advanced DAX & Tabular Editor",
  "Power Query (M Language)",
  "Microsoft Fabric & Synapse",
  "Kimball Star Schema Modeling",
  "SQL Server & PostgreSQL",
  "Azure Data Factory & ETL",
  "Row-Level Security (RLS)",
  "Decomposition Tree & Root Cause",
  "Financial Scenario Modeling",
  "Automated Refresh Architecture",
  "Executive Decision Storytelling"
];

export const TRUSTED_INDUSTRIES = [
  { name: "Commercial & Regional Distribution", icon: "TrendingUp", flag: "📈" },
  { name: "Cross-Border Logistics & Freight", icon: "Truck", flag: "🚚" },
  { name: "Corporate Banking & Treasury", icon: "Building2", flag: "🏦" },
  { name: "Retail & FMCG Networks", icon: "ShoppingBag", flag: "🛍️" },
  { name: "Healthcare & Referral Hospitals", icon: "Activity", flag: "🏥" },
  { name: "Corporate BI Training Masterclasses", icon: "GraduationCap", flag: "🎓" },
];

export const PROJECTS: Project[] = [
  {
    id: "modular-bento-sales-intelligence",
    title: "Modular Executive Sales & Revenue Forecast Suite",
    subtitle: "Bento-Grid Architecture, Multi-Country Performance, Customer Segmentation & Target Gauges",
    category: "Executive & Sales",
    impactBadge: "$270.7K Monthly Volume",
    imageUrl: imgBentoSales,
    tags: ["Power BI", "Bento Grid UI", "Customer Segmentation", "Revenue Forecast", "Country Performance", "Executive KPIs"],
    clientIndustry: "Commercial Retail & Multi-Region Enterprise",
    deliveryTime: "6 days",
    problem: "Executives struggled with cluttered traditional reports that made quick morning health checks difficult for commercial directors.",
    solution: "Designed a modern modular Bento-Grid dashboard with floating cards, segmented customer donut metrics, country flag split-bars, revenue forecast comparisons, and circular target completion gauges.",
    results: [
      "Reduced executive dashboard scan time from 15 minutes to under 30 seconds",
      "Spotted $42,900 in new customer expansion across UK, US, and regional hubs",
      "Achieved 98% daily active adoption among commercial division leadership"
    ],
    kpis: [
      { label: "Total Gross Sales", value: "$34,914", trend: "Current Month Active", isPositive: true },
      { label: "Country Volume", value: "$270,738", trend: "Across 5 Territories", isPositive: true },
      { label: "Revenue Forecast", value: "$3,975", trend: "+$1,099 vs target", isPositive: true },
      { label: "Sales Target Hit", value: "73.0%", trend: "On track for July", isPositive: true }
    ],
    chartType: "bento",
    demoData: {
      filterOptions: ["All Customers", "Existing Customers", "New Acquisition Cohort", "Enterprise Tier", "Small Business"],
      defaultFilter: "All Customers",
      metricSeries: [
        { name: "Jun", value: 32, target: 28, secondary: 14 },
        { name: "Jul", value: 18, target: 22, secondary: 8 },
        { name: "Aug", value: 45, target: 40, secondary: 20 },
        { name: "Sep", value: 68, target: 55, secondary: 32 },
        { name: "Oct", value: 48, target: 42, secondary: 18 }
      ]
    }
  },
  {
    id: "nova-arcs-supply-chain-performance",
    title: "NOVA ARCS Supply Chain & OTIF Command Tower",
    subtitle: "Burgundy Delivery Fleet Telematics, On-Time In-Full (OTIF), Country Volume & Line Fill Rate",
    category: "Supply Chain & Logistics",
    impactBadge: "99.4% Delivery Compliance",
    imageUrl: imgSupplyChain,
    tags: ["Power BI", "Supply Chain", "OTIF Fulfillment", "Fleet Telematics", "Line Fill Rate", "Logistics"],
    clientIndustry: "Cross-Border Logistics & Freight Distribution",
    deliveryTime: "8 days",
    problem: "Logistics directors faced recurring stockouts and detention penalties due to lack of visibility into corridor dispatch timings and incomplete shipments.",
    solution: "Architected the NOVA ARCS Supply Chain Command Report with delivery truck metric cards, line fill rate tracking (LIFR), country dispatch breakdowns, and monthly OTIF concentric gauge rings.",
    results: [
      "Increased On-Time-In-Full (OTIF) compliance from 59.0% to 99.4%",
      "Surfaced and eliminated 7,110 remaining order line backlog units in 3 weeks",
      "Saved $120,000 in monthly port container demurrage and late penalty fees"
    ],
    kpis: [
      { label: "On-Time Rate", value: "59.03%", trend: "Target: 87.2%", isPositive: false },
      { label: "In-Full Delivery", value: "52.78%", trend: "Target: 76.5%", isPositive: false },
      { label: "OTIF Compliance", value: "29.02%", trend: "Strict Multi-Condition", isPositive: false },
      { label: "Line Fill Rate", value: "65.96%", trend: "7.11K Lines Remaining", isPositive: true }
    ],
    chartType: "supply",
    demoData: {
      filterOptions: ["All Fleet Routes", "Central Corridor (Dar-Rwanda)", "Northern Corridor (Mombasa-Uganda)", "Southern Feeder Hub", "Port Customs Queue"],
      defaultFilter: "All Fleet Routes",
      metricSeries: [
        { name: "Mar", value: 59.6, target: 85, secondary: 52.3 },
        { name: "Apr", value: 59.3, target: 85, secondary: 52.5 },
        { name: "May", value: 58.3, target: 85, secondary: 53.7 },
        { name: "Jun", value: 58.5, target: 85, secondary: 52.0 },
        { name: "Jul", value: 59.4, target: 85, secondary: 52.5 },
        { name: "Aug", value: 58.9, target: 85, secondary: 53.6 }
      ]
    }
  },
  {
    id: "transactions-to-trends-dark-executive",
    title: "From Transactions to Trends: Sales & Customer Analysis",
    subtitle: "Dark Slate Executive Theme, Multi-Year Category Delta Indicators, Seasonality & Customer Frequency Treemap",
    category: "Executive & Sales",
    impactBadge: "233,081 Total Sales Modeled",
    imageUrl: imgTransactions,
    tags: ["Power BI", "Dark Slate Theme", "Category Matrix", "Seasonality", "Customer Frequency", "Payment Donut", "US Sales Map"],
    clientIndustry: "Omnichannel Commercial & Customer Intelligence",
    deliveryTime: "7 days",
    problem: "Executives needed to analyze multi-year category growth, customer purchase frequency, payment channel share, and geographic state revenue from one dark-mode executive console.",
    solution: "Engineered a centralized Power BI dashboard with Season/Location/Category/Year drop-down slicers, an Indicator for Category delta matrix table (+/- % YoY), seasonal trend bars, customer frequency treemaps, and payment method donuts.",
    results: [
      "Tracked 233,081 total transactions across 3,900 unique active customers",
      "Identified +47.2% multi-year breakout in Outerwear and strong winter/fall volume",
      "Mapped payment distribution across 6 methods (Credit Card $43K, Venmo $40K, Cash $39K)"
    ],
    kpis: [
      { label: "Sales in 2023", value: "$47,129.00", trend: "+1.67% YoY", isPositive: true },
      { label: "Total Sales", value: "233,081", trend: "Volume Units", isPositive: true },
      { label: "Total Customers", value: "3,900", trend: "Active Cohort", isPositive: true },
      { label: "Avg Purchase Amount", value: "$59.76", trend: "Rating: 3.750", isPositive: true }
    ],
    chartType: "dark_trends",
    demoData: {
      filterOptions: ["All Categories", "Clothing (70.6K Male)", "Accessories (50.3K Male)", "Footwear (24.2K Male)", "Outerwear (Winter Peak)"],
      defaultFilter: "All Categories",
      metricSeries: [
        { name: "Summer", value: 55777, target: 52000, secondary: 12400 },
        { name: "Winter", value: 58607, target: 55000, secondary: 14200 },
        { name: "Spring", value: 58679, target: 55000, secondary: 13900 },
        { name: "Fall", value: 60018, target: 58000, secondary: 15600 }
      ]
    }
  },
  {
    id: "hospital-visits-clinical-command",
    title: "Hospital Operations & Patient Visits Suite",
    subtitle: "Clinical Power BI Desktop Layout, Week Calendar Matrix Slicer, Department Wait Times & MoM Flow",
    category: "Healthcare & Operations",
    impactBadge: "33.96 Min Avg Wait Time",
    imageUrl: imgHospital,
    tags: ["Power BI", "Healthcare BI", "Patient Flow", "Wait Time Tracking", "Calendar Matrix", "Clinical Ops"],
    clientIndustry: "Healthcare Systems & Multi-Specialty Hospitals",
    deliveryTime: "9 days",
    problem: "Hospital administrators lacked real-time visibility into emergency room bottleneck surges, specialty department wait times, and patient satisfaction trends.",
    solution: "Engineered a clinical Power BI dashboard with 4 top KPI tiles (Patient Age, Total Visits, Wait Time, Satisfaction Rating 4.79/5), a 44-week interactive matrix calendar slicer, department-level patient bars, and MoM variance columns.",
    results: [
      "Decreased average emergency and outpatient wait times from 48 mins to 33.96 mins",
      "Balanced daily physician staffing ratios across Cardiology, General Practice, and Orthopedics",
      "Maintained 4.79/5.0 patient satisfaction rating across 1,170 monthly visits"
    ],
    kpis: [
      { label: "Average Patient Age", value: "39 Yrs", trend: "Balanced Demographics", isPositive: true },
      { label: "Monthly Patient Visits", value: "117", trend: "-1.68% MoM Variance", isPositive: false },
      { label: "Avg Wait Time", value: "33.96 Mins", trend: "-1.40 mins improved", isPositive: true },
      { label: "Satisfaction Score", value: "4.79 / 5.0", trend: "High Patient Rating", isPositive: true }
    ],
    chartType: "hospital",
    demoData: {
      filterOptions: ["All Departments", "General Practice (56% Vol)", "Orthopedics (24% Vol)", "Physiotherapy (10% Vol)", "Cardiology (6% Vol)", "Neurology (4% Vol)"],
      defaultFilter: "All Departments",
      metricSeries: [
        { name: "W26", value: 12.5, target: 0, secondary: 26 },
        { name: "W27", value: 18.8, target: 0, secondary: 27 },
        { name: "W28", value: 0.0, target: 0, secondary: 28 },
        { name: "W29", value: -7.1, target: 0, secondary: 29 },
        { name: "W30", value: 14.3, target: 0, secondary: 30 },
        { name: "W31", value: -30.0, target: 0, secondary: 31 },
        { name: "W32", value: 31.3, target: 0, secondary: 32 }
      ]
    }
  },
  {
    id: "sales-profit-intelligence-dashboard",
    title: "Classic Sales & Profit Analysis Dashboard",
    subtitle: "Multi-Category Margin Breakdown, Regional Contribution & Top Customer Profit Ranking",
    category: "Executive & Sales",
    impactBadge: "$1.93M Gross Revenue Tracked",
    imageUrl: imgSalesProfit,
    tags: ["Power BI", "Sales Analysis", "Profit Margins", "Vertical Slicers", "Top Customers", "East Africa"],
    clientIndustry: "Commercial & Regional Distribution",
    deliveryTime: "8 days",
    problem: "Sales executives lacked unified visibility into which product categories and customer accounts were generating real net profits versus those operating at thin or negative margins.",
    solution: "Built a consolidated Power BI Sales & Profit dashboard with intuitive vertical slicing, subcategory profit rankings, monthly momentum bars, and instant Pareto customer analysis.",
    results: [
      "Identified top 5 accounts contributing over $30,000 in net profit margin",
      "Surfaced underperforming product subcategories for immediate repricing",
      "Streamlined monthly commercial board reporting from 3 days to instantaneous drill-down"
    ],
    kpis: [
      { label: "Total Gross Sales", value: "$1.93M", trend: "+22.4% YoY", isPositive: true },
      { label: "Total Net Profit", value: "$248.0K", trend: "12.86% margin", isPositive: true },
      { label: "Active Customer Count", value: "794", trend: "+14.1% new clients", isPositive: true },
      { label: "Top Customer Profit", value: "$8,981", trend: "Tamara Chand", isPositive: true }
    ],
    chartType: "sales",
    demoData: {
      filterOptions: ["All Product Categories", "Technology (Phones & Accessories)", "Office Supplies & Binders", "Commercial Furniture & Chairs"],
      defaultFilter: "All Product Categories",
      metricSeries: [
        { name: "Jan", value: 95, target: 80, secondary: 22 },
        { name: "Feb", value: 60, target: 70, secondary: 18 },
        { name: "Mar", value: 205, target: 150, secondary: 48 },
        { name: "Apr", value: 137, target: 120, secondary: 32 },
        { name: "May", value: 155, target: 140, secondary: 36 },
        { name: "Jun", value: 153, target: 140, secondary: 35 },
        { name: "Jul", value: 147, target: 135, secondary: 33 },
        { name: "Aug", value: 123, target: 130, secondary: 28 },
        { name: "Sep", value: 220, target: 180, secondary: 52 },
        { name: "Oct", value: 234, target: 190, secondary: 56 },
        { name: "Nov", value: 241, target: 200, secondary: 58 }
      ]
    }
  },
  {
    id: "hr-analytics-workforce-retention",
    title: "HR Analytics & Workforce Retention Command Suite",
    subtitle: "Attrition Metrics, Department Turnover, Salary Slabs & Job Satisfaction Matrix",
    category: "Operations & HR",
    impactBadge: "16.1% Attrition Contained",
    imageUrl: imgHrAnalytics,
    tags: ["Power BI", "HR Analytics", "Attrition Rate", "Job Satisfaction Matrix", "Workforce Planning", "East Africa"],
    clientIndustry: "Corporate Human Resources & Operations",
    deliveryTime: "9 days",
    problem: "HR Directors and C-level management had no proactive warning system for employee turnover, leading to critical knowledge drain in operations and high recruitment replacement costs.",
    solution: "Architected a full HR intelligence suite with automated attrition rate tracking, job satisfaction heatmaps, salary band correlations, and demographic retention forecasting.",
    results: [
      "Pinpointed primary attrition drivers within mid-tenure operations and sales roles",
      "Improved employee retention intervention rate by 34% within 90 days of rollout",
      "Automated monthly CHRO executive reporting package, saving 25 hours per cycle"
    ],
    kpis: [
      { label: "Total Headcount", value: "1,480", trend: "Complete Organization", isPositive: true },
      { label: "Active Employees", value: "1,242", trend: "83.9% active workforce", isPositive: true },
      { label: "Attrition Count", value: "238", trend: "Tracked departures", isPositive: false },
      { label: "Attrition Rate", value: "16.1%", trend: "-3.2% vs prior year", isPositive: true },
      { label: "Average Employee Age", value: "36.9 Yrs", trend: "Balanced demographic", isPositive: true },
      { label: "Average Experience", value: "7.01 Yrs", trend: "High institutional depth", isPositive: true }
    ],
    chartType: "workforce",
    demoData: {
      filterOptions: ["All Departments", "Operations (540 Staff)", "Administration (487 Staff)", "Sales & Commercial (180 Staff)", "IT & Engineering (145 Staff)", "Marketing & Growth (128 Staff)"],
      defaultFilter: "All Departments",
      metricSeries: [
        { name: "18-25", value: 611, target: 550, secondary: 98 },
        { name: "26-35", value: 471, target: 450, secondary: 78 },
        { name: "36-45", value: 268, target: 300, secondary: 42 },
        { name: "46-55", value: 130, target: 150, secondary: 20 }
      ]
    }
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "core-audit",
    name: "Web & App Development",
    tagline: "Turn your idea into a live, revenue-generating digital product — fast.",
    duration: "1 – 6 Weeks",
    idealFor: "Startups, SMEs, and enterprises ready to launch or modernize a web platform, business app, or customer-facing digital product.",
    features: [
      "Custom websites & web apps (React, Next.js, TypeScript)",
      "Mobile apps for iOS & Android (Flutter / React Native)",
      "Backend APIs with Laravel, FastAPI & Flask",
      "Payment systems, auth flows, real-time features & admin panels",
      "Cloud deployment on Vercel / AWS / GCP with CI/CD pipelines",
      "Performance-first builds — sub-2s load times, SEO-ready",
      "30 days of post-launch support & iteration included"
    ],
    ctaText: "Start Your Build"
  },
  {
    id: "full-bi-solution",
    name: "End-to-End BI Architecture Build",
    tagline: "From raw disconnected databases to board-ready executive intelligence.",
    duration: "2 – 3 Weeks",
    idealFor: "Mid-to-large organizations seeking a certified single source of truth across ERP, CRM, SQL, and Excel.",
    popular: true,
    features: [
      "Custom Kimball Star-Schema dimensional data modeling",
      "Automated ETL pipelines connecting ERPs, SQL, CRM & cloud sources",
      "3 to 5 Interactive executive & operational dashboard views",
      "Granular Row-Level Security (RLS) & department permission groups",
      "Advanced DAX measure library with dynamic drill-throughs & tooltips",
      "Deployment to Power BI Service with automated scheduled refreshes",
      "2-Hour live executive & team handover workshop with recordings",
      "30 days of included post-launch enhancements & fine-tuning"
    ],
    ctaText: "Start BI Build"
  },
  {
    id: "corporate-training",
    name: "Corporate BI Training & Advisory",
    tagline: "Upskill internal analyst teams into self-sufficient Power BI champions.",
    duration: "1 to 4 Weeks",
    idealFor: "Organizations looking to build resilient internal Business Intelligence and Power BI capabilities.",
    features: [
      "Customized curriculum built directly on your company's actual data",
      "Zero-to-Hero DAX, Power Query & Star Schema dimensional masterclass",
      "Executive storytelling & dashboard UX visual design framework",
      "Hands-on case studies with real-time feedback & code reviews",
      "Reusable corporate DAX measure library & cheatsheet toolkit",
      "Direct 1-on-1 coaching office hours for internal team members",
      "Certificate of completion for all participating staff",
      "60 days of ongoing Q&A advisory channel access"
    ],
    ctaText: "Request Training Plan"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "dax-performance-mistakes",
    title: "5 DAX Performance Bottlenecks Slowing Down Your Enterprise Power BI Reports",
    readTime: "5 min read",
    date: "Aug 2026",
    category: "DAX & Performance",
    summary: "Why your visual takes 15 seconds to render and how simple adjustments to CALCULATE, filter contexts, and bi-directional relationships make it instantaneous.",
    content: [
      "Many developers jump straight into writing complex DAX without considering the storage engine and formula engine mechanics. Here are the 5 biggest bottlenecks:",
      "1. Overusing Bi-Directional Relationships: This forces the engine into expensive cross-table scans. Instead, maintain clean 1-to-many single-direction relationships and use CROSSFILTER() inside specific measures only when required.",
      "2. Using FILTER(All(Table)) instead of KEEPFILTERS(): FILTER() forces an iterator loop over every row, while KEEPFILTERS() preserves column indexes and executes in sub-seconds.",
      "3. Calculating Scalars inside Row Contexts without Variables: Always cache expensive calculations with VAR/RETURN blocks to avoid redundant evaluations.",
      "4. Pulling High-Cardinality Columns into Visuals: Unique timestamps and transaction IDs bloat memory. Truncate dates to days and separate time into discrete buckets.",
      "5. Neglecting Query Folding in Power Query: Push joins, group-bys, and filters back to the SQL database before data hits Power BI memory."
    ],
    keyTakeaways: [
      "Always inspect Query Plan in DAX Studio before shipping to executives.",
      "Variables (VAR) are evaluated once—use them generously to eliminate repeated measure calculations.",
      "Keep relationships strictly Single Direction; use measures for selective bi-directional needs."
    ]
  },
  {
    id: "star-schema-vs-flat-tables",
    title: "Why Kimball Star Schema Still Outperforms Flat Tables in Modern Power BI",
    readTime: "6 min read",
    date: "Jul 2026",
    category: "Data Modeling",
    summary: "Why denormalized flat spreadsheets lead to incorrect totals, slow slicers, and DAX nightmares—and how dimensional modeling saves your projects.",
    content: [
      "In modern analytics, some data engineers advocate for One Big Table (OBT). But in Power BI, the columnar storage engine is explicitly engineered around dimensional Star Schemas.",
      "When you flatten everything into a single 50-column table, you destroy dictionary encoding efficiency. A dedicated Fact table with integer keys pointing to lean Dimension tables (Customer, Date, Store, Product) reduces model size by up to 70%.",
      "More importantly, DAX time intelligence functions (like TOTALYTD, DATEADD, SAMEPERIODLASTYEAR) require a dedicated, contiguous Date dimension table to calculate correctly without missing days.",
      "Follow the Kimble methodology: 1 Fact table containing numerical metrics surrounded by pure Dimension tables. Your reports will respond in under 300ms."
    ],
    keyTakeaways: [
      "Never do analytics directly on raw denormalized wide spreadsheets.",
      "A dedicated Date table is mandatory for reliable time-intelligence DAX.",
      "Star schema reduces memory usage and provides instant cross-filtering."
    ]
  },
  {
    id: "executive-dashboard-ux",
    title: "How to Design Dashboards That C-Level Executives Actually Use Every Morning",
    readTime: "4 min read",
    date: "Jun 2026",
    category: "Dashboard Design",
    summary: "The 3-second rule for executive dashboards, visual hierarchy guidelines, and how to avoid the '30-charts-on-one-screen' trap.",
    content: [
      "The number one reason Power BI projects fail isn't wrong DAX—it's dashboard bloat. When a CEO opens a dashboard with 25 competing charts and 12 slicers, they close it and ask their assistant for an Excel summary instead.",
      "1. The 3-Second Rule: An executive must understand company health (Are we ahead or behind target? Which region needs attention?) within 3 seconds of opening the page.",
      "2. The 3-Tier Hierarchy: Place High-level KPI summary cards at the top, Trend and Velocity lines in the middle, and Detailed Drill-Down tables at the bottom.",
      "3. Restraint in Color: Use neutral slates and grays for context; reserve vibrant green and red strictly for KPI delta signals.",
      "4. Provide Context: A standalone number like '$4.9M' is meaningless without comparison (vs Target, vs Prior Month, vs Prior Year)."
    ],
    keyTakeaways: [
      "Limit each dashboard page to 1 primary business question and maximum 5-7 visual elements.",
      "Always pair metrics with target benchmarks and trend direction.",
      "Build drill-through pages for operational staff rather than cluttering executive views."
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How fast can we start and see the first working dashboard prototype?",
    answer: "We kick off with a 45-minute discovery call to review your business questions and data architecture. Within 7 days, you will receive an interactive working prototype on Power BI Service with your real data so you can test and provide feedback before final delivery."
  },
  {
    id: "faq-2",
    question: "What data sources and databases do you connect to Power BI?",
    answer: "Almost anything! I connect SQL databases (PostgreSQL, SQL Server, MySQL), ERPs (SAP, NetSuite, Dynamics 365, Oracle), CRMs (Salesforce, HubSpot), E-commerce platforms (Shopify, WooCommerce), Cloud warehouses (Snowflake, BigQuery, Azure Synapse), Microsoft Fabric, Google Sheets, Excel repositories, and custom REST APIs."
  },
  {
    id: "faq-3",
    question: "What if our current data is messy or spread across multiple Excel spreadsheets?",
    answer: "That is completely normal and where many enterprise projects begin! I use Power Query (M Language) and SQL transformations to automate data cleansing, deduplicate records, establish strict primary/foreign key mappings, and construct an automated pipeline that turns chaotic files into a clean, unified semantic model."
  },
  {
    id: "faq-4",
    question: "Do you train our internal team so we are self-sufficient?",
    answer: "Yes, 100%. Every deliverable includes structured video documentation, DAX cheat-sheets, and a live hands-on walkthrough workshop with your internal analysts. I also offer dedicated 1-to-4 week corporate training bootcamps so your internal staff can build and maintain advanced reports independently."
  },
  {
    id: "faq-5",
    question: "How does the pricing and consultation booking work?",
    answer: "You can schedule a free strategy call directly on this website. We review your reporting goals and technical architecture. Following the call, I provide a transparent, fixed-scope proposal—guaranteeing fixed delivery timelines with zero hidden surprises."
  },
  {
    id: "faq-6",
    question: "Do you sign Non-Disclosure Agreements (NDAs) to protect sensitive company data?",
    answer: "Yes, absolutely. Client data confidentiality and security are strictly guaranteed. I routinely execute mutual NDAs before any database credentials, schemas, or proprietary business metrics are shared."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Scope & Data Architecture Audit",
    duration: "45-min Discovery Call",
    description: "We map your critical business questions, current reporting bottlenecks, source database schemas, and define the core revenue-driving KPIs."
  },
  {
    step: "02",
    title: "Dimensional Modeling & Automated ETL",
    duration: "Week 1",
    description: "I construct a high-speed Kimball Star Schema model, write optimized DAX measures, and setup resilient automated refresh pipelines."
  },
  {
    step: "03",
    title: "Executive Dashboard Sprint & UX",
    duration: "Week 2",
    description: "Interactive visual reports crafted with clean executive UX. Tested together directly on your screen with live cross-filtering and drill-throughs."
  },
  {
    step: "04",
    title: "Training, Power BI Launch & Support",
    duration: "Week 3 + 30 Days",
    description: "Deployment to Power BI Service with Row-Level Security, live team handover workshop, and 30 days of included post-launch enhancements."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Mohamed Kido completely transformed how our executive board meetings operate. We went from debating spreadsheet formulas to making instant strategic decisions in Power BI. He delivered our multi-country commercial dashboard in under two weeks.",
    author: "Marcus Vance",
    role: "Chief Commercial Officer",
    company: "East Africa Distribution Group",
    industry: "Commercial & Regional Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    metric: "18 hrs saved / week"
  },
  {
    id: "t2",
    quote: "The corporate Power BI masterclass Mohamed Kido conducted for our 22 business analysts was the most impactful training we've ever sponsored. He used our actual ERP dataset for practical exercises. Our team now builds automated dashboards independently.",
    author: "Elena Rostova",
    role: "Head of Data & Analytics",
    company: "Novis Health Networks",
    industry: "Healthcare & Referral Hospitals",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
    metric: "4.96 / 5 Training Rating"
  },
  {
    id: "t3",
    quote: "Mohamed Kido audited our Power BI semantic model and reduced our report refresh time from 58 minutes to 2.4 minutes. His knowledge of Kimball star schemas and DAX calculation engines is exceptional.",
    author: "Tariq Al-Mansoor",
    role: "VP of Business Intelligence",
    company: "Zeta Cross-Border Commerce",
    industry: "Retail & Supply Chain",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    metric: "96% refresh speedup"
  }
];
