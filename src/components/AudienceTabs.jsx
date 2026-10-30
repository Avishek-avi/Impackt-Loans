'use client';

import { useState } from 'react';

export const AUDIENCE_DATA = {
  lenders: {
    id: 'lenders',
    label: 'Lenders',
    num: 'i.',
    heading: 'For lending partners',
    sub: 'Move from loan sourcing to livelihood coordination.',
    title: 'Move from loan sourcing to livelihood coordination.',
    intro:
      'A typical sourcing-led Direct Selling Agent (DSA) relationship focuses on connecting borrowers with lenders. Impackt Loans proposes an ongoing operating layer around the business behind the loan.',
    features: [
      {
        n: '1',
        t: 'An opportunity linked to the credit',
        d: 'Assess the business activity, brand relationship and expected cash flow alongside the borrower.'
      },
      {
        n: '2',
        t: 'Social intent that can be reviewed',
        d: 'Agree outcome measures and follow the livelihood after disbursement, using documented evidence.'
      },
      {
        n: '3',
        t: 'Lender control stays with the lender',
        d: 'Retain credit assessment, sanction and pricing authority. Define platform responsibilities, monitoring and exceptions through the partnership.'
      }
    ],
    check: [
      'Define eligible borrower and business categories.',
      'Agree underwriting information and lender approval responsibilities.',
      'Document escrow ownership, releases, recourse and loss allocation.',
      'Agree outcome indicators, evidence, consent and review frequency.',
      'Set intervention triggers for stalled business or repayment stress.'
    ]
  },
  brands: {
    id: 'brands',
    label: 'Brands',
    num: 'ii.',
    heading: 'For brand partners',
    sub: 'Reach more neighbourhoods through supported local businesses.',
    title: 'Reach more neighbourhoods through supported local businesses.',
    intro:
      'Build a peri-urban and hyperlocal distribution channel with women business owners and a fund-based escrow arrangement. Add a route to market alongside existing dealer and distributor networks.',
    features: [
      {
        n: '1',
        t: 'Contractual cover for trade engagement',
        d: 'Define the funded escrow amount, covered obligations, beneficiary rights and claim conditions before stock moves.'
      },
      {
        n: '2',
        t: 'A wider, local distribution footprint',
        d: 'Match suitable owners to territories and product opportunities, with clear order, margin and stock terms.'
      },
      {
        n: '3',
        t: 'Handholding as a defined commitment',
        d: 'Agree product training, onboarding, replenishment, returns and ongoing support so local owners can operate effectively.'
      }
    ],
    check: [
      'Identify products, territories and suitable local owner profiles.',
      'Define margins, minimum orders and replenishment terms.',
      'Specify stock ownership, returns, buyback and failure recourse.',
      'Document escrow coverage and release or claim conditions.',
      'Agree training, field support and business reporting responsibilities.'
    ]
  },
  owners: {
    id: 'owners',
    label: 'Business owners',
    num: 'iii.',
    heading: 'For business owners',
    sub: 'Start with an opportunity. Build with support.',
    title: 'Start with an opportunity. Build with support.',
    intro:
      'Whether you already run a business, have an idea or are exploring your first opportunity, the model connects business setup, lender assessment and brand handholding.',
    features: [
      {
        n: '1',
        t: 'Choose a business that fits',
        d: 'Review your interests, local demand, available time and the economics of the opportunity.'
      },
      {
        n: '2',
        t: 'Get help with the practical setup',
        d: 'Coordinate business requirements and supplier engagement before funds are deployed under the agreed arrangement.'
      },
      {
        n: '3',
        t: 'Stay connected after you start',
        d: 'Access the support agreed with your brand and keep a clear view of orders, income, repayments and savings. Business success depends on demand, execution and the terms of engagement.'
      }
    ],
    check: [
      'Review your eligibility and existing repayment record.',
      'Choose an existing business, your idea or a brand opportunity.',
      'Understand margins, costs, territory and stock responsibilities.',
      'Review loan terms, contribution requirements and guarantor obligations.',
      'Confirm brand training and ongoing support commitments.',
      'Understand what happens if the business underperforms.'
    ]
  }
};

export default function AudienceTabs({ onOpenChecklist }) {
  const [activeTab, setActiveTab] = useState('lenders');
  const current = AUDIENCE_DATA[activeTab];

  return (
    <section id="partners" style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px) 90px' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '920px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', fontWeight: 600, color: 'var(--c-text-subtle)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--c-primary)' }}>01</span>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--c-primary)' }} />
            <span>Three participants, one connected model</span>
          </div>
          <h2
            style={{
              margin: '18px 0 0',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 58px)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--c-primary)'
            }}
          >
            A different value for <em style={{ fontStyle: 'italic' }}>everyone</em> involved.
          </h2>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '24px',
            color: '#c2410c',
            transform: 'rotate(-3deg)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>pick who you are</span>
          <svg aria-hidden="true" width="40" height="44" viewBox="0 0 40 44" fill="none" stroke="#c2410c" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 4 C 22 8, 30 22, 22 40" />
            <path d="M22 40 L 16 32 M22 40 L 29 34" />
          </svg>
        </div>
      </div>

      {/* Tabs list */}
      <div
        role="tablist"
        aria-label="Target Audience"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0,
          marginTop: '44px',
          borderBottom: '1.5px solid var(--c-border-subtle)'
        }}
      >
        {Object.keys(AUDIENCE_DATA).map(key => {
          const tab = AUDIENCE_DATA[key];
          const isSelected = activeTab === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(key)}
              style={{
                minHeight: '56px',
                padding: '0 28px',
                marginBottom: '-1.5px',
                border: 'none',
                borderBottom: `3px solid ${isSelected ? 'var(--c-accent-orange)' : 'transparent'}`,
                background: 'transparent',
                fontSize: '17px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.3s',
                color: isSelected ? 'var(--c-primary)' : 'var(--c-text-subtle)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, marginRight: '10px', opacity: 0.75 }}>
                {tab.num}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div
        role="tabpanel"
        key={activeTab}
        className="drop"
        style={{
          marginTop: '48px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '60px'
        }}
      >
        {/* Left Column: Intro & Action */}
        <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
          <h3
            style={{
              margin: '0 0 18px',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(26px, 3vw, 34px)',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: 'var(--c-primary)'
            }}
          >
            {current.title}
          </h3>
          <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.75, color: 'var(--c-text-muted)' }}>
            {current.intro}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
            <button
              onClick={() => onOpenChecklist(activeTab)}
              className="btn-dark"
            >
              <span>See the {current.label} checklist</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <a
              href="#contact"
              className="btn-outline"
              style={{ color: 'var(--c-primary)', borderColor: 'var(--c-primary)' }}
            >
              Inquire for {current.label}
            </a>
          </div>
        </div>

        {/* Right Column: 3 Pillar Features */}
        <ol style={{ flex: '1.2 1 480px', minWidth: '320px', margin: 0, padding: 0, listStyle: 'none' }}>
          {current.features.map(f => (
            <li
              key={f.n}
              className="table-hover-row"
              style={{
                display: 'flex',
                gap: '22px',
                padding: '24px 18px',
                borderTop: '1.5px solid var(--c-border-subtle)',
                borderRadius: '6px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '32px',
                  lineHeight: 1,
                  color: 'var(--c-accent-orange)',
                  width: '40px',
                  flex: 'none'
                }}
              >
                {f.n}
              </span>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--c-primary)' }}>{f.t}</div>
                <p style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: 1.65, color: 'var(--c-text-muted)' }}>
                  {f.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Comparison Table for Lenders */}
      {activeTab === 'lenders' && (
        <div className="drop" style={{ marginTop: '56px', position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '24px',
              color: '#c2410c',
              margin: '0 0 12px 6px',
              transform: 'rotate(-1.5deg)',
              transformOrigin: 'left'
            }}
          >
            how this differs from a typical DSA ↓
          </div>
          <div
            style={{
              border: '1.5px solid var(--c-primary)',
              borderRadius: '8px',
              overflowX: 'auto',
              background: '#ffffff',
              boxShadow: '8px 8px 0 #e9e2f3'
            }}
          >
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '640px', textAlign: 'left', fontSize: '15px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '18px 24px', fontWeight: 700, borderBottom: '1.5px solid var(--c-primary)' }}>
                    Relationship focus
                  </th>
                  <th style={{ padding: '18px 24px', fontWeight: 700, borderBottom: '1.5px solid var(--c-primary)', color: 'var(--c-text-subtle)' }}>
                    Typical sourcing-led DSA
                  </th>
                  <th style={{ padding: '18px 24px', background: 'var(--c-primary)', color: 'var(--c-accent-yellow)', fontWeight: 700, borderBottom: '1.5px solid var(--c-primary)' }}>
                    Proposed Impackt Loans model
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-hover-row">
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', fontWeight: 600 }}>Before sanction</td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-text-subtle)' }}>
                    Borrower sourcing and application support only
                  </td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-primary)', fontWeight: 700 }}>
                    Borrower + vetted business opportunity + brand engagement
                  </td>
                </tr>
                <tr className="table-hover-row">
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', fontWeight: 600 }}>Use of funds</td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-text-subtle)' }}>
                    Defined loosely by lender product
                  </td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-primary)', fontWeight: 700 }}>
                    Contract-led escrow and supplier engagement
                  </td>
                </tr>
                <tr className="table-hover-row">
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', fontWeight: 600 }}>After disbursement</td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-text-subtle)' }}>
                    Varies widely by DSA agreement; usually none
                  </td>
                  <td style={{ padding: '18px 24px', borderBottom: '1px solid #e3dfe9', color: 'var(--c-primary)', fontWeight: 700 }}>
                    Business support coordination and outcome tracking
                  </td>
                </tr>
                <tr className="table-hover-row">
                  <td style={{ padding: '18px 24px', fontWeight: 600 }}>Success measure</td>
                  <td style={{ padding: '18px 24px', color: 'var(--c-text-subtle)' }}>Often sourcing and disbursement volume</td>
                  <td style={{ padding: '18px 24px', color: 'var(--c-primary)', fontWeight: 700 }}>
                    Business activity, income, repayment and savings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
