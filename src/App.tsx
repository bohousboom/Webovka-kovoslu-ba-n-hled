import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrokenPanelWarning } from './components/BrokenPanelWarning';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { AuthorizedBrands } from './components/AuthorizedBrands';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { RepairFormData } from './types';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOrderSuccess = (data: RepairFormData) => {
    console.log('Order received:', data);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Header with phone numbers, hours and address */}
      <Header onOpenOrderModal={scrollToContact} />

      <main className="flex-grow">
        {/* 2. Authentic Hero section with workshop facts, phone links & 2 options (branch / on-site) */}
        <Hero onOpenOrderModal={scrollToContact} />

        {/* 3. Honest advice regarding broken screens vs repairable backlight faults */}
        <BrokenPanelWarning onScrollToContact={scrollToContact} />

        {/* 4. Complete services with genuine craftsman details */}
        <Services
          onOpenOrderModal={scrollToContact}
          onScrollToContact={scrollToContact}
        />

        {/* 5. Honest 4-step repair process */}
        <Process onScrollToContact={scrollToContact} />

        {/* 6. Transparent pricing table */}
        <Pricing onScrollToContact={scrollToContact} />

        {/* 7. Partner authorizations and all serviced brands */}
        <AuthorizedBrands />

        {/* 8. Genuine Prague testimonials */}
        <Testimonials />

        {/* 9. Frequently asked questions */}
        <FaqSection />

        {/* 10. Contact details, travel guide and direct inquiry form */}
        <ContactSection onOrderSuccess={handleOrderSuccess} />
      </main>

      {/* 11. Footer with full company registration details */}
      <Footer />

      {/* Mobile sticky bar for quick dialing */}
      <MobileQuickBar onScrollToContact={scrollToContact} />
    </div>
  );
}
