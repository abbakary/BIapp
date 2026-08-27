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

        {/* Regional Client Footprint: Tanzania, Kenya, Uganda */}
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
