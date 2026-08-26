import React from 'react';

export interface CountryInfo {
  code: string;
  name: string;
  nativeName?: string;
  flagEmoji: string;
  role: 'Provider Base' | 'Client Region';
  hub: string;
  sectors: string[];
  stats: string;
  description: string;
}

export const CLIENT_COUNTRIES: CountryInfo[] = [
  {
    code: 'TZ',
    name: 'Tanzania',
    nativeName: 'Jamhuri ya Muungano wa Tanzania',
    flagEmoji: '🇹🇿',
    role: 'Provider Base',
    hub: 'Dar es Salaam, Arusha & Dodoma (HQ)',
    sectors: ['FMCG & Commercial Retail', 'Commercial Banking & Microfinance', 'Telecommunications', 'Port & Transit Logistics'],
    stats: '28+ Dashboards Deployed',
    description: 'Home base for Mohamed Kido. Delivering high-impact Power BI architectures, automated SQL/Excel pipelines, and corporate analytics training for leading enterprises in Tanzania.'
  },
  {
    code: 'KE',
    name: 'Kenya',
    nativeName: 'Republic of Kenya',
    flagEmoji: '🇰🇪',
    role: 'Client Region',
    hub: 'Nairobi & Mombasa',
    sectors: ['Fintech & Mobile Money', 'Agribusiness & Horticultural Exports', 'Supply Chain Corridors', 'Retail Supermarket Chains'],
    stats: '16 Enterprise Solutions',
    description: 'Partnering with Kenyan corporations to streamline real-time transaction reporting, automated M-Pesa / ERP reconciliation, and board-ready executive KPI suites.'
  },
  {
    code: 'UG',
    name: 'Uganda',
    nativeName: 'Republic of Uganda',
    flagEmoji: '🇺🇬',
    role: 'Client Region',
    hub: 'Kampala, Jinja & Entebbe',
    sectors: ['Healthcare Networks & Hospitals', 'FMCG Distribution', 'Cross-Border Wholesale', 'NGO & Development Analytics'],
    stats: '11 Production Models',
    description: 'Designing clinical KPI monitoring, multi-branch revenue intelligence, and grant allocation dashboards with robust Row-Level Security for Ugandan leadership teams.'
  },
  {
    code: 'RW',
    name: 'Rwanda',
    nativeName: 'Repubulika y\'u Rwanda',
    flagEmoji: '🇷🇼',
    role: 'Client Region',
    hub: 'Kigali Innovation City',
    sectors: ['Tech & Financial Services', 'Hospitality & Tourism Analytics', 'Government & Public Sector Reporting', 'Agri-Processing'],
    stats: '9 Executive Suites',
    description: 'Equipping Rwandan enterprises and high-growth startups with modern cloud analytics, star-schema semantic models, and automated financial variance reporting.'
  },
];

interface FlagProps {
  countryCode: string;
  className?: string;
}

export const CountryFlagSVG: React.FC<FlagProps> = ({ countryCode, className = 'w-6 h-4' }) => {
  switch (countryCode.toUpperCase()) {
    case 'TZ': // Tanzania 🇹🇿
      return (
        <svg viewBox="0 0 72 48" className={`rounded-xs shadow-2xs ${className}`}>
          <defs>
            <clipPath id="tz-clip">
              <rect width="72" height="48" rx="1.5" />
            </clipPath>
          </defs>
          <g clipPath="url(#tz-clip)">
            {/* Green top-left triangle */}
            <polygon points="0,0 72,0 0,48" fill="#1eb53a" />
            {/* Blue bottom-right triangle */}
            <polygon points="72,0 72,48 0,48" fill="#00a3dd" />
            {/* Yellow diagonal borders */}
            <polygon points="0,48 0,36 72,0 72,12" fill="#fcd116" />
            {/* Black central diagonal stripe */}
            <polygon points="0,44 0,38 72,2 72,8" fill="#000000" />
          </g>
        </svg>
      );

    case 'KE': // Kenya 🇰🇪
      return (
        <svg viewBox="0 0 72 48" className={`rounded-xs shadow-2xs ${className}`}>
          <defs>
            <clipPath id="ke-clip">
              <rect width="72" height="48" rx="1.5" />
            </clipPath>
          </defs>
          <g clipPath="url(#ke-clip)">
            {/* Horizontal stripes: Black, White, Red, White, Green */}
            <rect width="72" height="14" fill="#000000" />
            <rect y="14" width="72" height="3" fill="#ffffff" />
            <rect y="17" width="72" height="14" fill="#bb0000" />
            <rect y="31" width="72" height="3" fill="#ffffff" />
            <rect y="34" width="72" height="14" fill="#006600" />
            {/* Crossed Spears */}
            <line x1="26" y1="10" x2="46" y2="38" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="46" y1="10" x2="26" y2="38" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            {/* Maasai Shield Center */}
            <path
              d="M 36,11 C 42,16 42,32 36,37 C 30,32 30,16 36,11 Z"
              fill="#bb0000"
              stroke="#000000"
              strokeWidth="0.8"
            />
            {/* Inner shield markings */}
            <path d="M 36,12 L 36,36" stroke="#ffffff" strokeWidth="0.8" />
            <ellipse cx="36" cy="24" rx="2.5" ry="4" fill="#000000" />
            <circle cx="36" cy="24" r="1.2" fill="#ffffff" />
          </g>
        </svg>
      );

    case 'UG': // Uganda 🇺🇬
      return (
        <svg viewBox="0 0 72 48" className={`rounded-xs shadow-2xs ${className}`}>
          <defs>
            <clipPath id="ug-clip">
              <rect width="72" height="48" rx="1.5" />
            </clipPath>
          </defs>
          <g clipPath="url(#ug-clip)">
            {/* 6 equal horizontal stripes: Black, Yellow, Red, Black, Yellow, Red */}
            <rect y="0" width="72" height="8" fill="#000000" />
            <rect y="8" width="72" height="8" fill="#fcdc04" />
            <rect y="16" width="72" height="8" fill="#d90000" />
            <rect y="24" width="72" height="8" fill="#000000" />
            <rect y="32" width="72" height="8" fill="#fcdc04" />
            <rect y="40" width="72" height="8" fill="#d90000" />
            {/* Central White Disc with Grey Crowned Crane Silhouette */}
            <circle cx="36" cy="24" r="7.5" fill="#ffffff" stroke="#000000" strokeWidth="0.4" />
            {/* Crane stylized body & crest */}
            <path d="M 34,22 C 34,18.5 38,18.5 38,22 C 38,25.5 34,27 34,29 L 38,29" stroke="#d90000" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            <circle cx="35" cy="20" r="1" fill="#000000" />
            <path d="M 34,17 L 37,16 L 36,18 Z" fill="#fcdc04" />
          </g>
        </svg>
      );

    case 'RW': // Rwanda 🇷🇼
      return (
        <svg viewBox="0 0 72 48" className={`rounded-xs shadow-2xs ${className}`}>
          <defs>
            <clipPath id="rw-clip">
              <rect width="72" height="48" rx="1.5" />
            </clipPath>
          </defs>
          <g clipPath="url(#rw-clip)">
            {/* Top band: Blue (half height 24) */}
            <rect y="0" width="72" height="24" fill="#00a1de" />
            {/* Middle band: Yellow (one quarter 12) */}
            <rect y="24" width="72" height="12" fill="#fad201" />
            {/* Bottom band: Green (one quarter 12) */}
            <rect y="36" width="72" height="12" fill="#20603d" />
            {/* Golden Sun on upper-right fly with 24 rays */}
            <g transform="translate(56, 12)">
              <circle cx="0" cy="0" r="3.5" fill="#e5aa00" />
              {/* Sun rays */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <line
                  key={angle}
                  x1="0"
                  y1="-4"
                  x2="0"
                  y2="-6"
                  stroke="#e5aa00"
                  strokeWidth="0.8"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>
          </g>
        </svg>
      );

    default:
      return <span className="text-xs font-mono">{countryCode}</span>;
  }
};
