export default function Journey() {
  const steps = [
    {
      num: '1',
      title: 'Check eligibility',
      desc: 'Proposed screening: CIBIL score of at least 750, zero days past due in the previous year, anchor recommendation or membership, and a co-applicant and guarantor. Final acceptance rests with the lender.'
    },
    {
      num: '2',
      title: 'Find the business fit',
      desc: 'Assess an existing business, develop a business idea, or match an interested first-time owner with a suitable brand opportunity with proven local demand.'
    },
    {
      num: '3',
      title: 'Set up the engagement',
      desc: 'Complete business requirements, define supplier responsibilities, and establish the escrow arrangement and account controls before capital commitment.'
    },
    {
      num: '4',
      title: 'Meet the contribution check',
      desc: 'The proposed model requires at least 10% of the loan value to be maintained in the designated account before disbursement, subject to agreed lender terms.'
    },
    {
      num: '5',
      title: 'Approve & deploy funds',
      desc: 'The lender assesses and approves the loan. Disbursement and escrow use follow the signed contract, including permitted releases and recourse.'
    },
    {
      num: '6',
      title: 'Earn, repay & build a record',
      desc: 'Track trading activity, earnings, repayments and savings. Use these records to develop an Impackt Score with a defined, reviewable methodology.',
      highlight: true
    }
  ];

  return (
    <section id="journey" style={{ background: 'var(--c-primary)', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px)' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', fontWeight: 600, color: '#cab8df' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--c-accent-yellow)' }}>02</span>
            <span style={{ width: '40px', height: '1.5px', background: 'var(--c-accent-yellow)' }} />
            <span>From eligibility to earnings</span>
          </div>
          <h2
            style={{
              margin: '20px 0 0',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 58px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em'
            }}
          >
            The loan is one step.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--c-accent-yellow)' }}>The livelihood is the journey.</em>
          </h2>
        </div>

        {/* 6-step Grid with SVG Curve */}
        <div style={{ marginTop: '72px', position: 'relative' }}>
          {/* Subtle Connecting Dashed Wave SVG */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              left: 0,
              top: '30px',
              width: '100%',
              height: '40px',
              opacity: 0.35,
              pointerEvents: 'none'
            }}
          >
            <path d="M0 20 C 200 0, 300 40, 500 20 S 800 0, 1000 22 S 1150 30, 1200 18" fill="none" stroke="var(--c-accent-yellow)" strokeWidth="2" strokeDasharray="6 10" />
          </svg>

          <div
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              columnGap: '48px',
              rowGap: '56px'
            }}
          >
            {steps.map((step, idx) => (
              <article
                key={step.num}
                style={{
                  position: 'relative',
                  paddingTop: idx % 2 === 1 ? '24px' : '0'
                }}
              >
                {/* Hexagon Step Number */}
                <div
                  className="hex-badge"
                  style={{
                    width: '84px',
                    height: '96px',
                    background: step.highlight ? 'var(--c-accent-yellow)' : '#3a1580',
                    color: step.highlight ? 'var(--c-primary)' : 'var(--c-accent-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '34px',
                    fontWeight: 600,
                    boxShadow: step.highlight ? '0 10px 24px rgba(255,202,6,0.35)' : 'none'
                  }}
                >
                  {step.num}
                </div>

                {step.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '98px',
                      fontFamily: 'var(--font-hand)',
                      fontSize: '24px',
                      color: 'var(--c-accent-yellow)',
                      transform: 'rotate(-4deg)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    ← where it really starts
                  </div>
                )}

                <h3 style={{ margin: '22px 0 10px', fontSize: '21px', fontWeight: 700, color: '#ffffff' }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: '#d4c6e5' }}>
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
