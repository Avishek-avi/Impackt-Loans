'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import AudienceTabs from '../components/AudienceTabs';
import Journey from '../components/Journey';
import Outcomes from '../components/Outcomes';
import Calculator from '../components/Calculator';
import FaqAccordion from '../components/FaqAccordion';
import RolesCta from '../components/RolesCta';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';
import ChecklistModal from '../components/ChecklistModal';

export default function HomePage() {
  const [modalRole, setModalRole] = useState(null);

  const handleOpenChecklist = (role = 'lenders') => {
    setModalRole(role);
  };

  const handleCloseChecklist = () => {
    setModalRole(null);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Dark Purple Top Hero Container */}
      <div style={{ background: 'var(--c-primary)', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <Navbar onOpenChecklist={handleOpenChecklist} />
        <Hero onOpenChecklist={handleOpenChecklist} />
      </div>

      {/* Infinite Marquee Banner */}
      <Marquee />

      {/* Section 01: Three Participants (Lenders, Brands, Business Owners) */}
      <AudienceTabs onOpenChecklist={handleOpenChecklist} />

      {/* Section 02: The Livelihood Journey (6 Steps) */}
      <Journey />

      {/* Section 03: Outcomes & Impact Measurement */}
      <Outcomes />

      {/* Interactive Simulator: Loan & Livelihood Cashflow Calculator */}
      <Calculator onOpenChecklist={handleOpenChecklist} />

      {/* Section 04: The Hard Questions (FAQ Accordion) */}
      <FaqAccordion />

      {/* 3-Way Role CTA */}
      <RolesCta onOpenChecklist={handleOpenChecklist} />

      {/* Section: Start a structured discussion. */}
      {/* <InquiryForm /> */}

      {/* Footer */}
      <Footer onOpenChecklist={handleOpenChecklist} />

      {/* Checklist Modal Dialog */}
      {modalRole && (
        <ChecklistModal role={modalRole} onClose={handleCloseChecklist} />
      )}
    </main>
  );
}
