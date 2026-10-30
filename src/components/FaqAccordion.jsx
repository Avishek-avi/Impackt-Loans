'use client';

import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Does an escrow guarantee remove business or lending risk?',
    a: 'No. A funded escrow provides a defined source of contractual cover; it does not automatically eliminate losses. Ownership, beneficiary rights, release triggers, disputes, unsold stock and shortfall responsibility must be documented before engagement.'
  },
  {
    q: 'Who approves the loan and decides its terms?',
    a: 'The lending partner. Impackt Loans is designed to coordinate business opportunities, engagement and outcome tracking. Loan sanction, pricing and repayment terms remain subject to the lender’s independent assessment and executed agreement.'
  },
  {
    q: 'What support can a business owner expect?',
    a: 'The model seeks brand-led onboarding, product guidance, initial store setup assistance, and continuing business support. The exact training, territory exclusivity, stock terms, and service commitments are defined for each individual opportunity. Earnings and business success are not guaranteed.'
  },
  {
    q: 'Can the model support priority-sector lending objectives?',
    a: 'It is designed around livelihood-generating enterprise opportunities for underserved women entrepreneurs and micro-businesses. Any priority-sector lending (PSL) classification must be assessed by the lending partner against applicable regulatory guidelines for the specific borrower and credit product.'
  },
  {
    q: 'How are inventory returns and escrow shortfall handled?',
    a: 'Under the tripartite agreement, suppliers and brand partners specify stock buyback commitments, non-moving inventory return windows, and escrow replenishment protocols so neither the entrepreneur nor the lending institution bears unilateral downside.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" style={{ borderTop: '1.5px solid var(--c-border-subtle)', background: 'var(--c-bg-page)' }}>
      <div style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px)', display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
        {/* Left Column: Title */}
        <div style={{ flex: '1 1 320px', minWidth: '280px', maxWidth: '480px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', fontWeight: 600, color: 'var(--c-text-subtle)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--c-primary)' }}>04</span>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--c-primary)' }} />
            <span>The questions that matter</span>
          </div>

          <h2
            style={{
              margin: '20px 0 0',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 58px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--c-primary)'
            }}
          >
            Clarity before <em style={{ fontStyle: 'italic' }}>commitment.</em>
          </h2>

          <div
            style={{
              marginTop: '22px',
              fontFamily: 'var(--font-hand)',
              fontSize: '24px',
              color: '#c2410c',
              transform: 'rotate(-2deg)',
              transformOrigin: 'left'
            }}
          >
            the hard ones, answered straight.
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div style={{ flex: '2 1 560px', minWidth: '320px', borderTop: '1.5px solid var(--c-primary)' }}>
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1.5px solid var(--c-border-subtle)' }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    minHeight: '64px',
                    padding: '24px 4px',
                    background: 'transparent',
                    border: 0,
                    textAlign: 'left',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(19px, 2vw, 22px)',
                    fontWeight: 500,
                    color: 'var(--c-text-main)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '40px',
                      height: '40px',
                      flex: 'none',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: 1,
                      transition: 'transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), background-color 0.3s ease, color 0.3s ease',
                      backgroundColor: isOpen ? 'var(--c-accent-orange)' : 'transparent',
                      color: isOpen ? '#ffffff' : 'var(--c-primary)',
                      border: isOpen ? 'none' : '1.5px solid var(--c-primary)',
                      transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p
                    className="drop"
                    style={{
                      margin: 0,
                      padding: '0 54px 28px 4px',
                      maxWidth: '760px',
                      fontSize: '16px',
                      lineHeight: 1.75,
                      color: 'var(--c-text-muted)'
                    }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
