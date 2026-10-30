'use client';

export default function Hero({ onOpenChecklist }) {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        padding: '50px clamp(24px, 4.5vw, 72px) 110px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '64px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Decorative Floating Hexagons */}
      <div
        aria-hidden="true"
        className="bob hex-badge"
        style={{
          position: 'absolute',
          right: '8%',
          top: '40px',
          width: '46px',
          height: '52px',
          background: 'var(--c-accent-red)',
          opacity: 0.9,
          pointerEvents: 'none'
        }}
      />
      <div
        aria-hidden="true"
        className="bob2 hex-badge"
        style={{
          position: 'absolute',
          left: '42%',
          bottom: '40px',
          width: '28px',
          height: '32px',
          background: 'var(--c-accent-orange)',
          pointerEvents: 'none'
        }}
      />

      {/* Background Subtle Radial Circle */}
      <svg
        aria-hidden="true"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        style={{
          position: 'absolute',
          left: '-120px',
          top: '120px',
          opacity: 0.16,
          pointerEvents: 'none'
        }}
      >
        <circle cx="210" cy="210" r="200" fill="none" stroke="var(--c-accent-yellow)" strokeWidth="1.5" strokeDasharray="4 10" />
      </svg>

      {/* Left Column: Headlines & CTAs */}
      <div style={{ flex: '1 1 540px', minWidth: '320px', position: 'relative', zIndex: 10 }}>
        <div
          className="rise d1"
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: 'var(--c-accent-yellow)',
            transform: 'rotate(-2deg)',
            transformOrigin: 'left',
            display: 'inline-block'
          }}
        >
          for lenders, brands &amp; women building businesses —
        </div>

        <h1
          className="rise d2"
          style={{
            margin: '18px 0 26px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(44px, 6.2vw, 88px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: '#ffffff'
          }}
        >
          Finance a <em style={{ fontStyle: 'italic', color: 'var(--c-accent-yellow)' }}>livelihood.</em>
          <br />
          Measure its{' '}
          <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
            progress.
            <svg
              className="draw"
              aria-hidden="true"
              viewBox="0 0 300 24"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                left: '-2%',
                bottom: '-12px',
                width: '104%',
                height: '22px',
                overflow: 'visible'
              }}
            >
              <path
                d="M4 16 C 60 6, 140 4, 210 10 S 280 18, 296 8"
                fill="none"
                stroke="var(--c-accent-orange)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          className="rise d3"
          style={{
            margin: 0,
            maxWidth: '520px',
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.65,
            color: 'var(--c-primary-subtle)'
          }}
        >
          Credit becomes more meaningful when it comes with a viable business opportunity, a committed partner brand, and a clear view of what happens next.
        </p>

        {/* Buttons */}
        <div
          className="rise d4"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '20px',
            marginTop: '40px'
          }}
        >
          <a href="#partners" className="btn-primary" style={{ minHeight: '56px', padding: '0 28px', fontSize: '16px' }}>
            <span>Find your place in the model</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <a
            href="#journey"
            style={{
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255, 202, 6, 0.7)',
              textUnderlineOffset: '6px',
              textDecorationThickness: '2px',
              transition: 'color 0.2s ease'
            }}
          >
            See how it works →
          </a>
        </div>

        {/* Fast stat badges */}
        <div
          className="rise d5"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '44px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.14)'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--c-accent-yellow)', fontWeight: 600 }}>100%</div>
            <div style={{ fontSize: '13px', color: 'var(--c-primary-soft)', marginTop: '2px' }}>Escrow-backed stock deployment</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--c-accent-yellow)', fontWeight: 600 }}>750+</div>
            <div style={{ fontSize: '13px', color: 'var(--c-primary-soft)', marginTop: '2px' }}>Eligible CIBIL score benchmark</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--c-accent-yellow)', fontWeight: 600 }}>3-Way</div>
            <div style={{ fontSize: '13px', color: 'var(--c-primary-soft)', marginTop: '2px' }}>Lender, Brand &amp; Borrower synergy</div>
          </div>
        </div>
      </div>

      {/* Right Column: Rotated Visual Card */}
      <div
        className="rise d5"
        style={{
          flex: '1 1 420px',
          minWidth: '320px',
          maxWidth: '540px',
          position: 'relative'
        }}
      >
        {/* Handwritten callout */}
        <div
          className="wiggle"
          style={{
            position: 'absolute',
            top: '-46px',
            right: '10px',
            fontFamily: 'var(--font-hand)',
            fontSize: '24px',
            color: 'var(--c-accent-yellow)',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
            zIndex: 15
          }}
        >
          <span>the whole picture, not just the loan</span>
          <svg aria-hidden="true" width="44" height="40" viewBox="0 0 44 40" fill="none" stroke="var(--c-accent-yellow)" strokeWidth="2.2" strokeLinecap="round">
            <path d="M40 4 C 30 10, 22 22, 10 34" />
            <path d="M10 34 L 11 24 M10 34 L 20 32" />
          </svg>
        </div>

        {/* Paper Card */}
        <div
          style={{
            background: 'var(--c-bg-page)',
            color: 'var(--c-text-main)',
            borderRadius: '8px',
            padding: '36px 32px',
            transform: 'rotate(1.4deg)',
            boxShadow: '0 30px 60px -28px rgba(0,0,0,0.6), 10px 10px 0 #3a1580',
            position: 'relative'
          }}
        >
          {/* Masking tape effect */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-12px',
              left: '42%',
              width: '92px',
              height: '24px',
              background: 'rgba(255, 202, 6, 0.85)',
              transform: 'rotate(-4deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />

          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '15px',
              color: 'var(--c-text-subtle)'
            }}
          >
            The Impackt model, in three moves
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {/* Move 1 */}
            <div style={{ display: 'flex', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  aria-hidden="true"
                  className="pop d5 hex-badge"
                  style={{
                    width: '38px',
                    height: '44px',
                    background: 'var(--c-accent-red)'
                  }}
                />
                <div aria-hidden="true" className="grow d5" style={{ width: 0, height: '32px', borderLeft: '2px dashed #c8bed6' }} />
              </div>
              <div style={{ paddingTop: '4px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--c-primary)' }}>Purposeful credit</div>
                <div style={{ fontSize: '14px', color: 'var(--c-text-subtle)', marginTop: '3px' }}>
                  Lender-led assessment &amp; transparent approval
                </div>
              </div>
            </div>

            {/* Move 2 */}
            <div style={{ display: 'flex', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  aria-hidden="true"
                  className="pop d6 hex-badge"
                  style={{
                    width: '38px',
                    height: '44px',
                    background: 'var(--c-accent-yellow)'
                  }}
                />
                <div aria-hidden="true" className="grow d6" style={{ width: 0, height: '32px', borderLeft: '2px dashed #c8bed6' }} />
              </div>
              <div style={{ paddingTop: '4px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--c-primary)' }}>Escrow-backed engagement</div>
                <div style={{ fontSize: '14px', color: 'var(--c-text-subtle)', marginTop: '3px' }}>
                  Defined supplier terms &amp; structured release triggers
                </div>
              </div>
            </div>

            {/* Move 3 */}
            <div style={{ display: 'flex', gap: '18px' }}>
              <div
                aria-hidden="true"
                className="pop hex-badge"
                style={{
                  width: '38px',
                  height: '44px',
                  background: 'var(--c-accent-orange)',
                  animationDelay: '1.15s'
                }}
              />
              <div style={{ paddingTop: '4px' }}>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--c-primary)' }}>Brand-supported business</div>
                <div style={{ fontSize: '14px', color: 'var(--c-text-subtle)', marginTop: '3px' }}>
                  Hyperlocal territory, stock training &amp; ongoing handholding
                </div>
              </div>
            </div>
          </div>

          {/* Outcome highlight footer */}
          <div
            style={{
              marginTop: '26px',
              paddingTop: '20px',
              borderTop: '1.5px dashed var(--c-border-subtle)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-hand)', fontSize: '22px', color: '#c2410c' }}>
              what we actually track:
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                letterSpacing: '-0.01em',
                marginTop: '2px',
                color: 'var(--c-primary)',
                fontWeight: 600
              }}
            >
              Income. Repayment. Savings.
            </div>
            <div style={{ fontSize: '14px', color: 'var(--c-text-subtle)', marginTop: '4px' }}>
              A verifiable, continuing record of real livelihood progress.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
