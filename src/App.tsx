import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ClientFootprintSection } from './components/ClientFootprintSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PackagesSection } from './components/PackagesSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DashboardLiveModal } from './components/DashboardLiveModal';
import { BookingModal } from './components/BookingModal';
import { Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { WhatsAppIcon } from './components/WhatsAppIcon';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string>('Free 30-min Strategy Call');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const handleOpenBooking = (serviceType?: string) => {
    if (serviceType) {
      setBookingInitialService(serviceType);
    }
    setIsBookingOpen(true);
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dot-pattern text-[#1a1918] flex flex-col selection:bg-[#0d4a36] selection:text-white relative">
      {/* Floating Pill Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreWork={handleExploreWork}
        />

        <ProjectShowcase
          onOpenLiveDemo={(project) => setActiveProjectModal(project)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Regional Client Footprint: Tanzania, Kenya, Uganda, Rwanda */}
        <ClientFootprintSection
          onOpenBooking={handleOpenBooking}
        />

        <AboutSection
          onOpenBooking={handleOpenBooking}
        />

        <ServicesSection
          onOpenBooking={handleOpenBooking}
        />

        <ProcessSection
          onOpenBooking={handleOpenBooking}
        />

        <PackagesSection
          onOpenBooking={handleOpenBooking}
        />

        <BlogSection
          onOpenBooking={handleOpenBooking}
        />

        <FAQSection />

        <CTASection
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Quick Connect with Real WhatsApp Logo */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center group">
        <a
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 border border-white/20 active:scale-95 group-hover:pr-5"
          title={`Direct WhatsApp with ${PERSONAL_INFO.name} (${PERSONAL_INFO.whatsappDisplay})`}
        >
          <div className="relative">
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border border-[#25D366] animate-ping"></span>
          </div>
          <span className="hidden sm:inline">WhatsApp Mohamed Kido</span>
          <span className="sm:hidden">WhatsApp</span>
          <span className="text-[11px] bg-black/20 px-1.5 py-0.5 rounded-full font-mono text-emerald-100 hidden md:inline">
            +255 693 380 817
          </span>
        </a>
      </div>

      {/* Live Power BI Dashboard Simulation Modal */}
      <DashboardLiveModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Consultation & Training Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingInitialService}
      />
    </div>
  );
}
