'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar({ onOpenChecklist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="rise"
      style={{
        position: 'relative',
        zIndex: 40,
        width: '100%',
        maxWidth: '100%',
        padding: '22px clamp(24px, 4vw, 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}
    >
      <a
        href="#top"
        aria-label="Impackt Loans home"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '160px',
            height: '60px',
            overflow: 'hidden',
            borderRadius: '6px'
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Impackt Loans"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav
        className="nav-desktop"
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }}
      >
        <a href="#partners" className="nav-link">Who we serve</a>
        <a href="#journey" className="nav-link">How it works</a>
        <a href="#outcomes" className="nav-link">Measuring impackt</a>
        <a href="#calculator" className="nav-link">Livelihood Calculator</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </nav>

      {/* Action Buttons */}
      <div
        className="nav-actions"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >

        <button
          onClick={() => onOpenChecklist('lenders')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '42px',
            padding: '0 16px',
            borderRadius: '8px',
            background: 'rgba(255, 202, 6, 0.15)',
            border: '1.5px solid rgba(255, 202, 6, 0.5)',
            color: '#ffca06',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className="checklist-quick-btn"
        >
          <span>Checklists</span>
        </button>

        <a
          href="#contact"
          className="btn-primary"
          style={{
            minHeight: '44px',
            padding: '0 20px',
            fontSize: '14px'
          }}
        >
          <span>Partner with Us</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="mobile-hamburger"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '8px',
            color: '#ffffff',
            cursor: 'pointer'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fade"
          style={{
            position: 'fixed',
            inset: 0,
            top: '80px',
            background: 'rgba(26, 4, 68, 0.98)',
            backdropFilter: 'blur(10px)',
            zIndex: 50,
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <a href="#partners" onClick={closeMobileMenu} style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>Who we serve</a>
          <a href="#journey" onClick={closeMobileMenu} style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>How it works</a>
          <a href="#outcomes" onClick={closeMobileMenu} style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>Measuring impackt</a>
          <a href="#calculator" onClick={closeMobileMenu} style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>Livelihood Calculator</a>
          <a href="#faq" onClick={closeMobileMenu} style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>FAQ</a>
          <a href="#contact" onClick={closeMobileMenu} className="btn-primary" style={{ textAlign: 'center', marginTop: '12px' }}>
            Partner with Us →
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .nav-desktop {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
          .checklist-quick-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
