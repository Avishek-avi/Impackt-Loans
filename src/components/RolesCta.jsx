'use client';

export default function RolesCta({ onOpenChecklist }) {
  const roles = [
    {
      id: 'lenders',
      label: 'I am a lender',
      sub: 'Move from loan sourcing to livelihood coordination with transparent post-sanction oversight.',
      hexColor: '#e8062a',
      tilt: '-1.5deg'
    },
    {
      id: 'brands',
      label: 'I represent a brand',
      sub: 'Reach new rural and peri-urban markets through supported local entrepreneurs with funded escrow protection.',
      hexColor: '#ffca06',
      tilt: '1deg'
    },
    {
      id: 'owners',
      label: 'I want to build a business',
      sub: 'Start with a verified opportunity, practical setup, and reliable ongoing support from day one.',
      hexColor: '#ff6a00',
      tilt: '-0.6deg'
    }
  ];

  return (
    <section id="explore" style={{ background: 'var(--c-primary)', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative floating badges */}
      <div
        aria-hidden="true"
        className="bob hex-badge"
        style={{
          position: 'absolute',
          left: '8%',
          top: '90px',
          width: '34px',
          height: '39px',
          background: 'var(--c-accent-yellow)'
        }}
      />
      <div
        aria-hidden="true"
        className="bob2 hex-badge"
        style={{
          position: 'absolute',
          right: '9%',
          top: '160px',
          width: '24px',
          height: '28px',
          background: 'var(--c-accent-red)'
        }}
      />

      <div style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px)', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-hand)', fontSize: '28px', color: 'var(--c-accent-yellow)' }}>
          start with the right conversation
        </div>

        <h2
          style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(36px, 4.8vw, 66px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em'
          }}
        >
          One model. <em style={{ fontStyle: 'italic', color: 'var(--c-accent-yellow)' }}>Three ways</em> to participate.
        </h2>

        <p style={{ margin: '20px auto 0', maxWidth: '540px', fontSize: '17px', lineHeight: 1.6, color: '#cab8df' }}>
          Explore the qualification requirements, operational safeguards, and discussion checklist for your specific role.
        </p>

        {/* 3 Role Action Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '56px',
            textAlign: 'left'
          }}
        >
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              className="lift"
              onClick={() => onOpenChecklist(r.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                padding: '36px 30px',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--c-bg-page)',
                color: 'var(--c-text-main)',
                cursor: 'pointer',
                transform: `rotate(${r.tilt})`,
                boxShadow: `8px 8px 0 ${r.hexColor}`
              }}
            >
              <span
                aria-hidden="true"
                className="hex-badge"
                style={{
                  width: '32px',
                  height: '36px',
                  background: r.hexColor
                }}
              />

              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', lineHeight: 1.15, fontWeight: 600, color: 'var(--c-primary)' }}>
                {r.label}
              </span>

              <span style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--c-text-muted)' }}>
                {r.sub}
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--c-primary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'var(--c-accent-orange)',
                  textDecorationThickness: '2px'
                }}
              >
                Open discussion checklist →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
