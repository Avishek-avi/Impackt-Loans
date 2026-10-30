export default function Footer({ onOpenChecklist }) {
  return (
    <footer style={{ background: 'var(--c-primary-dark)', color: 'var(--c-primary-soft)', borderTop: '2px solid var(--c-primary)' }}>
      {/* Upper Footer: Links & Info */}
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          padding: '64px clamp(24px, 4.5vw, 72px) 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px'
        }}
      >
        {/* Brand Col */}
        <div>
          <div style={{ width: '150px', height: '56px', overflow: 'hidden', borderRadius: '6px' }}>
            <img
              src="/assets/logo.png"
              alt="Impackt Loans"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <p
            style={{
              marginTop: '16px',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '16px',
              lineHeight: 1.5,
              color: '#ffffff'
            }}
          >
            Livelihood finance. Brand engagement. Measurable progress.
          </p>
          <div style={{ fontSize: '13px', color: '#a995c4', marginTop: '12px', lineHeight: 1.6 }}>
            Connecting purposeful credit with structured market opportunities for women entrepreneurs and lenders.
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-accent-yellow)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Platform Navigation
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <li><a href="#partners" style={{ color: 'var(--c-primary-soft)' }}>Who We Serve</a></li>
            <li><a href="#journey" style={{ color: 'var(--c-primary-soft)' }}>How the Model Works</a></li>
            <li><a href="#outcomes" style={{ color: 'var(--c-primary-soft)' }}>Outcome Framework</a></li>
            <li><a href="#calculator" style={{ color: 'var(--c-primary-soft)' }}>Livelihood Simulator</a></li>
            <li><a href="#faq" style={{ color: 'var(--c-primary-soft)' }}>Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Checklists & Resources */}
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-accent-yellow)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Participation Checklists
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <li>
              <button
                type="button"
                onClick={() => onOpenChecklist('lenders')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--c-primary-soft)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              >
                Lending Partner Checklist
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenChecklist('brands')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--c-primary-soft)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              >
                Brand Partner Checklist
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenChecklist('owners')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--c-primary-soft)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              >
                Business Owner Checklist
              </button>
            </li>
            <li>
              <a href="#contact" style={{ color: 'var(--c-accent-orange)', fontWeight: 600 }}>
                Request Pilot Memorandum →
              </a>
            </li>
          </ul>
        </div>

        {/* Governance / Legal */}
        <div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-accent-yellow)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Governance &amp; Trust
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#a995c4' }}>
            Impackt Loans functions as an enterprise coordination and outcome verification mechanism. Underwriting authority, interest rate setting, and credit sanctions remain strictly with licensed regulated lending institutions.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '100%',
            padding: '24px clamp(24px, 4.5vw, 72px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: '#a995c4'
          }}
        >
          <span>© {new Date().getFullYear()} Impackt Loans. Concept-stage platform. All rights reserved.</span>
          <span>Partnerships, escrows, and territorial availability subject to definitive legal documentation.</span>
        </div>
      </div>
    </footer>
  );
}
