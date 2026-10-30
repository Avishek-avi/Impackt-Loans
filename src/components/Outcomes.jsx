export default function Outcomes() {
  const cards = [
    {
      badge: 'BUSINESS ACTIVITY',
      badgeColor: 'var(--c-accent-red)',
      title: 'Is the livelihood operating?',
      desc: 'Setup completion, trading continuity, stock replenishment frequency, and repeat orders in the local market.',
      bg: '#ffffff',
      textColor: 'var(--c-text-main)',
      offset: false
    },
    {
      badge: 'ECONOMIC PROGRESS',
      badgeColor: 'var(--c-primary)',
      title: 'Is income improving?',
      desc: 'Sales, margins, net household earnings, and retained savings, benchmarked against agreed initial baseline records.',
      bg: 'var(--c-accent-yellow)',
      textColor: 'var(--c-primary)',
      offset: true
    },
    {
      badge: 'CREDIT PERFORMANCE',
      badgeColor: 'var(--c-accent-orange)',
      title: 'Is repayment sustainable?',
      desc: 'Repayment timeliness, zero days past due (DPD), and demonstrated repayment capacity generated directly from business cash flow.',
      bg: '#ffffff',
      textColor: 'var(--c-text-main)',
      offset: false
    },
    {
      badge: 'ACCOUNTABILITY',
      badgeColor: 'var(--c-accent-yellow)',
      title: 'Can the outcome be checked?',
      desc: 'Consented business records, escrow bank statements, and documented brand support visits with automated audit flags.',
      bg: 'var(--c-primary)',
      textColor: '#ffffff',
      offset: true
    }
  ];

  return (
    <section id="outcomes" style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px)', display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
      {/* Left Column: Context & Sticky Note */}
      <div style={{ flex: '1 1 380px', minWidth: '300px', maxWidth: '520px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px', fontWeight: 600, color: 'var(--c-text-subtle)' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--c-primary)' }}>03</span>
          <span style={{ width: '40px', height: '1.5px', background: 'var(--c-primary)' }} />
          <span>Social purpose, with evidence</span>
        </div>

        <h2
          style={{
            margin: '20px 0 24px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(34px, 4.4vw, 58px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--c-primary)'
          }}
        >
          Success should be <em style={{ fontStyle: 'italic' }}>visible</em> in the records.
        </h2>

        <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.75, color: 'var(--c-text-muted)' }}>
          A disbursed loan is only the beginning of the story. The proposed outcome framework actively tracks whether an enterprise operates, generates positive cash flow, and supports long-term sustainable growth.
        </p>

        {/* Post-it Note */}
        <div
          style={{
            marginTop: '34px',
            padding: '22px 24px',
            background: 'var(--c-bg-note)',
            borderRadius: '4px',
            transform: 'rotate(-1.2deg)',
            boxShadow: '0 14px 24px -18px rgba(0,0,0,0.3)',
            maxWidth: '420px',
            border: '1px solid rgba(194, 65, 12, 0.2)'
          }}
        >
          <div style={{ fontFamily: 'var(--font-hand)', fontSize: '22px', color: '#7a3a00', lineHeight: 1 }}>
            a quick, honest note
          </div>
          <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.6, color: '#4d3a00' }}>
            These are proposed measures, not reported results. Baselines, review frequency, and verification responsibilities must be agreed with each lending partner.
          </p>
        </div>
      </div>

      {/* Right Column: 4 Pillar Cards */}
      <div
        style={{
          flex: '1.3 1 520px',
          minWidth: '320px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}
      >
        {cards.map((card, idx) => (
          <article
            key={idx}
            className="lift"
            style={{
              padding: '30px 28px',
              borderRadius: '8px',
              backgroundColor: card.bg,
              color: card.textColor,
              border: '1.5px solid var(--c-primary)',
              marginTop: card.offset ? '24px' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                className="hex-badge"
                style={{
                  width: '18px',
                  height: '21px',
                  background: card.badgeColor
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  opacity: 0.85
                }}
              >
                {card.badge}
              </span>
            </div>

            <h3
              style={{
                margin: '18px 0 10px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: '23px',
                letterSpacing: '-0.01em',
                lineHeight: 1.25
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.65,
                opacity: 0.9
              }}
            >
              {card.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
