export default function Marquee() {
  const items = [
    { text: 'Opportunity before disbursement', color: '#e8062a' },
    { text: 'Contract-led use of funds', color: '#ff6a00' },
    { text: 'Progress after lending', color: '#24065b' },
    { text: 'Brands that stay involved', color: '#e8062a' },
    { text: 'Records that tell the real story', color: '#ff6a00' },
  ];

  return (
    <div
      className="marquee-container"
      style={{
        backgroundColor: 'var(--c-accent-yellow)',
        color: 'var(--c-primary)',
        overflow: 'hidden',
        borderTop: '2px solid var(--c-primary)',
        borderBottom: '2px solid var(--c-primary)'
      }}
      aria-label="Core principles of Impackt Loans"
    >
      <div
        className="track"
        style={{
          padding: '18px 0',
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontStyle: 'italic'
        }}
      >
        {/* Set 1 */}
        <span style={{ display: 'flex', gap: '44px', paddingRight: '44px', whiteSpace: 'nowrap', alignItems: 'center' }}>
          {items.map((item, idx) => (
            <span key={`m1-${idx}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
              <span>{item.text}</span>
              <span aria-hidden="true" style={{ fontStyle: 'normal', color: item.color, fontSize: '18px' }}>⬢</span>
            </span>
          ))}
        </span>

        {/* Set 2 (for continuous loop) */}
        <span aria-hidden="true" style={{ display: 'flex', gap: '44px', paddingRight: '44px', whiteSpace: 'nowrap', alignItems: 'center' }}>
          {items.map((item, idx) => (
            <span key={`m2-${idx}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
              <span>{item.text}</span>
              <span style={{ fontStyle: 'normal', color: item.color, fontSize: '18px' }}>⬢</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
