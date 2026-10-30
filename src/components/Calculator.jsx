'use client';

import { useState, useMemo } from 'react';

const PRESETS = [
  {
    name: 'Kirana & FMCG Distribution',
    loan: 150000,
    tenure: 18,
    rate: 13.5,
    monthlyRevenue: 75000,
    marginPct: 22,
    opexPct: 8
  },
  {
    name: 'Apparel & Tailoring Studio',
    loan: 90000,
    tenure: 12,
    rate: 13.0,
    monthlyRevenue: 48000,
    marginPct: 35,
    opexPct: 10
  },
  {
    name: 'Solar Energy & Appliance Kiosk',
    loan: 220000,
    tenure: 24,
    rate: 14.0,
    monthlyRevenue: 95000,
    marginPct: 26,
    opexPct: 9
  }
];

export default function Calculator({ onOpenChecklist }) {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [tenureMonths, setTenureMonths] = useState(18);
  const [interestRate, setInterestRate] = useState(13.5);
  const [monthlyRevenue, setMonthlyRevenue] = useState(75000);
  const [marginPct, setMarginPct] = useState(22);
  const [opexPct, setOpexPct] = useState(8);

  const applyPreset = (preset) => {
    setLoanAmount(preset.loan);
    setTenureMonths(preset.tenure);
    setInterestRate(preset.rate);
    setMonthlyRevenue(preset.monthlyRevenue);
    setMarginPct(preset.marginPct);
    setOpexPct(preset.opexPct);
  };

  const results = useMemo(() => {
    // 10% Contribution Check
    const escrowContribution = Math.round(loanAmount * 0.1);

    // Monthly EMI calculation
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      monthlyRate === 0
        ? loanAmount / tenureMonths
        : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
          (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const roundedEmi = Math.round(emi);

    // Financial Flow
    const grossProfit = Math.round(monthlyRevenue * (marginPct / 100));
    const operatingExpenses = Math.round(monthlyRevenue * (opexPct / 100));
    const netBusinessCashflow = grossProfit - operatingExpenses;
    const netTakeHome = netBusinessCashflow - roundedEmi;
    const estimatedMonthlySavings = Math.max(0, Math.round(netTakeHome * 0.3));

    // Debt Service Coverage Ratio (DSCR)
    const dscr = roundedEmi > 0 ? (netBusinessCashflow / roundedEmi).toFixed(2) : 'N/A';

    // Projected Impackt Score Tier
    let scoreTier = 'Tier A (High Viability)';
    let scoreColor = '#10b981';
    let scoreBadge = 'Strong Cashflow';
    if (dscr < 1.3) {
      scoreTier = 'Tier C (Needs Restructuring)';
      scoreColor = 'var(--c-accent-red)';
      scoreBadge = 'High Repayment Pressure';
    } else if (dscr < 1.7) {
      scoreTier = 'Tier B (Stable)';
      scoreColor = 'var(--c-accent-orange)';
      scoreBadge = 'Adequate Buffer';
    }

    return {
      escrowContribution,
      roundedEmi,
      grossProfit,
      operatingExpenses,
      netBusinessCashflow,
      netTakeHome,
      estimatedMonthlySavings,
      dscr,
      scoreTier,
      scoreColor,
      scoreBadge,
      annualSavings: estimatedMonthlySavings * 12
    };
  }, [loanAmount, tenureMonths, interestRate, monthlyRevenue, marginPct, opexPct]);

  return (
    <section
      id="calculator"
      style={{
        background: '#f4effa',
        borderTop: '1.5px solid var(--c-border-subtle)',
        padding: '110px clamp(24px, 4.5vw, 72px)'
      }}
    >
      <div style={{ width: '100%', maxWidth: '100%' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', fontWeight: 600, color: 'var(--c-text-subtle)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--c-primary)' }}>SIMULATOR</span>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--c-primary)' }} />
            <span>Interactive Opportunity Modeling</span>
          </div>

          <h2
            style={{
              margin: '18px 0 12px',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--c-primary)'
            }}
          >
            Livelihood &amp; <em style={{ fontStyle: 'italic' }}>Progress</em> Calculator.
          </h2>

          <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: 'var(--c-text-muted)' }}>
            Simulate how enterprise opportunity, escrow contribution, and monthly revenue come together to support sustainable repayment and real household savings.
          </p>
        </div>

        {/* Preset Selector */}
        <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-primary)' }}>Load a scenario:</span>
          {PRESETS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => applyPreset(p)}
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--c-primary)',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--c-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '2px 2px 0 rgba(36,6,91,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--c-accent-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Calculator Body: 2 Columns */}
        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Controls Column */}
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid var(--c-primary)',
              borderRadius: '8px',
              padding: '36px 30px',
              boxShadow: '6px 6px 0 var(--c-primary)'
            }}
          >
            <h3 style={{ margin: '0 0 24px', fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--c-primary)' }}>
              1. Credit &amp; Enterprise Inputs
            </h3>

            {/* Loan Amount Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-main)' }}>Loan Requirement</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-primary)' }}>
                  ₹{Number(loanAmount).toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="500000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--c-accent-orange)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--c-text-subtle)', marginTop: '4px' }}>
                <span>₹30,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-main)' }}>Loan Tenure</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-primary)' }}>
                  {tenureMonths} Months
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="36"
                step="3"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--c-accent-orange)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--c-text-subtle)', marginTop: '4px' }}>
                <span>6 Months</span>
                <span>36 Months</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-main)' }}>Indicative Interest Rate (p.a.)</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-primary)' }}>
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="9"
                max="22"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--c-accent-orange)' }}
              />
            </div>

            {/* Projected Monthly Revenue */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-main)' }}>Projected Monthly Revenue</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-primary)' }}>
                  ₹{Number(monthlyRevenue).toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--c-accent-orange)' }}
              />
            </div>

            {/* Margin % */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-main)' }}>Gross Margin Percentage</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-primary)' }}>
                  {marginPct}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="1"
                value={marginPct}
                onChange={(e) => setMarginPct(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--c-accent-orange)' }}
              />
            </div>
          </div>

          {/* Results Summary Column */}
          <div
            style={{
              background: 'var(--c-primary)',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '36px 30px',
              boxShadow: '6px 6px 0 var(--c-accent-yellow)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--c-accent-yellow)' }}>
                2. Livelihood Projection
              </h3>
              <span
                style={{
                  background: 'rgba(255, 202, 6, 0.2)',
                  color: 'var(--c-accent-yellow)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                {results.scoreBadge}
              </span>
            </div>

            {/* Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '28px'
              }}
            >
              {/* Metric 1 */}
              <div style={{ background: '#310a75', padding: '18px', borderRadius: '6px' }}>
                <div style={{ fontSize: '13px', color: '#cab8df' }}>10% Escrow Contribution</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#ffffff', marginTop: '4px', fontWeight: 600 }}>
                  ₹{results.escrowContribution.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '11px', color: '#cab8df', marginTop: '2px' }}>Required in designated account</div>
              </div>

              {/* Metric 2 */}
              <div style={{ background: '#310a75', padding: '18px', borderRadius: '6px' }}>
                <div style={{ fontSize: '13px', color: '#cab8df' }}>Monthly EMI</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--c-accent-yellow)', marginTop: '4px', fontWeight: 600 }}>
                  ₹{results.roundedEmi.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '11px', color: '#cab8df', marginTop: '2px' }}>For {tenureMonths} months @ {interestRate}%</div>
              </div>

              {/* Metric 3 */}
              <div style={{ background: '#310a75', padding: '18px', borderRadius: '6px' }}>
                <div style={{ fontSize: '13px', color: '#cab8df' }}>Net Take-Home / Month</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#4ade80', marginTop: '4px', fontWeight: 600 }}>
                  ₹{Math.max(0, results.netTakeHome).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '11px', color: '#cab8df', marginTop: '2px' }}>After operating costs &amp; EMI</div>
              </div>

              {/* Metric 4 */}
              <div style={{ background: '#310a75', padding: '18px', borderRadius: '6px' }}>
                <div style={{ fontSize: '13px', color: '#cab8df' }}>Coverage (DSCR)</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#ffffff', marginTop: '4px', fontWeight: 600 }}>
                  {results.dscr}x
                </div>
                <div style={{ fontSize: '11px', color: '#cab8df', marginTop: '2px' }}>Cashflow vs. repayment requirement</div>
              </div>
            </div>

            {/* Annual Savings & Score Tier */}
            <div
              style={{
                marginTop: '24px',
                padding: '20px',
                background: '#1a0444',
                borderRadius: '6px',
                border: '1px solid rgba(255,202,6,0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: '#cab8df' }}>Estimated Year-1 Savings Potential:</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--c-accent-yellow)', fontWeight: 600 }}>
                  ₹{results.annualSavings.toLocaleString('en-IN')}
                </span>
              </div>
              <div style={{ marginTop: '12px', fontSize: '13px', color: '#d4c6e5', lineHeight: 1.5 }}>
                Indicative assessment: <strong style={{ color: results.scoreColor }}>{results.scoreTier}</strong>. Livelihood demonstrates healthy surplus for sustained debt servicing and business expansion.
              </div>
            </div>

            {/* Quick Action */}
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onOpenChecklist('owners')}
                className="btn-primary"
                style={{ flex: '1 1 200px' }}
              >
                <span>Review Business Owner Checklist</span>
              </button>
              <a
                href="#contact"
                className="btn-outline"
                style={{ flex: '1 1 180px', textAlign: 'center' }}
              >
                Submit for Pre-Screening
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
