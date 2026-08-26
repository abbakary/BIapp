import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['top', 'work', 'regions', 'about', 'services', 'process', 'packages', 'insights', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Clients & Africa', href: '#regions', id: 'regions' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Insights', href: '#insights', id: 'insights' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 md:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-6xl pointer-events-auto">
        {/* Floating pill navigation */}
        <nav
          id="main-nav-pill"
          className={`w-full flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md border-black/10'
              : 'bg-white/90 backdrop-blur-sm shadow-sm border-black/8'
          }`}
        >
          {/* Brand / Profile Avatar with authentic portrait photo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#top');
            }}
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-emerald-500/30 overflow-hidden bg-slate-900 group-hover:scale-105 transition-transform shrink-0">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full"></span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight whitespace-nowrap">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50 whitespace-nowrap hidden sm:inline-flex items-center gap-1">
                Tanzania 🇹🇿
              </span>
            </div>
          </a>

          {/* Desktop Nav Items - Strictly single horizontal line */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-gray-950 font-bold bg-gray-100'
                    : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs hover:shadow flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              id="nav-lets-talk-btn"
              onClick={() => onOpenBooking('General Discovery Call')}
              className="bg-[#0d4a36] hover:bg-[#093526] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Let's talk</span>
            </button>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="lg:hidden mt-2 p-3 bg-white/98 backdrop-blur-lg rounded-2xl border border-black/10 shadow-xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="px-3 py-2 border-b border-gray-100 mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</span>
              <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Tanzania Base 🇹🇿
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#0d4a36]/10 text-[#0d4a36] font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            ))}

            <div className="pt-2 mt-1 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                Chat on WhatsApp (+255 693 380 817)
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Business Intelligence Consulting');
                }}
                className="w-full py-2.5 px-4 bg-[#0d4a36] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
