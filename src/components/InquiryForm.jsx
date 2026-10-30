'use client';

import { useState } from 'react';

export default function InquiryForm() {
  const [role, setRole] = useState('lender');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    pilotScale: '50-200 Livelihoods',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedId, setSubmittedId] = useState('');

  const roleLabels = {
    lender: 'Lending Partner / NBFC / Bank',
    brand: 'Brand / Manufacturer / Supplier',
    anchor: 'Community Anchor / Enterprise Owner'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: roleLabels[role] || role,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
          pilotScale: formData.pilotScale,
          message: formData.message
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedId(data.inquiry?.id || '');
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmittedId('');
    setErrorMsg('');
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      pilotScale: '50-200 Livelihoods',
      message: ''
    });
  };

  return (
    <section id="contact" style={{ width: '100%', maxWidth: '100%', padding: '110px clamp(24px, 4.5vw, 72px)' }}>
      <div
        style={{
          background: '#ffffff',
          border: '2px solid var(--c-primary)',
          borderRadius: '12px',
          boxShadow: '10px 10px 0 var(--c-accent-yellow)',
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 4vw, 56px)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--c-accent-orange)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px' }}>PARTNERSHIP INQUIRY</span>
            <span>•</span>
            <span>PILOT ALIGNMENT</span>
          </div>

          <h2
            style={{
              margin: '14px 0 16px',
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--c-primary)'
            }}
          >
            Start a structured discussion.
          </h2>

          <p style={{ margin: '0 auto', fontSize: '17px', lineHeight: 1.65, color: 'var(--c-text-muted)', maxWidth: '620px' }}>
            Schedule an exploratory review of our tripartite escrow structure, underwriting criteria, and livelihood outcome tracking framework.
          </p>
        </div>

        {submitted ? (
          <div
            className="drop"
            style={{
              maxWidth: '640px',
              margin: '48px auto 0',
              padding: '40px 32px',
              background: 'var(--c-bg-warm)',
              border: '2px dashed var(--c-primary)',
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <div
              className="hex-badge"
              style={{
                width: '54px',
                height: '62px',
                background: 'var(--c-accent-orange)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                margin: '0 auto 18px'
              }}
            >
              ✓
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--c-primary)' }}>
              Inquiry Successfully Recorded
            </h3>
            {submittedId && (
              <div style={{ fontSize: '13px', fontFamily: 'monospace', color: 'var(--c-text-subtle)', marginBottom: '14px' }}>
                Submission Reference: <strong>{submittedId}</strong>
              </div>
            )}
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--c-text-muted)' }}>
              Thank you, <strong>{formData.name}</strong>. Our partnership coordination team will review your discussion request for <strong>{formData.organization || 'your organization'}</strong> and share the customized memorandum within 24 hours.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={resetForm}
                className="btn-dark"
                style={{ padding: '0 28px', fontSize: '14px' }}
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '780px', margin: '48px auto 0' }}>
            {/* Role Radio Pills */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '15px', fontWeight: 700, color: 'var(--c-primary)', marginBottom: '12px' }}>
                I am reaching out as:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {[
                  { id: 'lender', label: 'Lending Partner / NBFC / Bank' },
                  { id: 'brand', label: 'Brand / Manufacturer / Supplier' },
                  { id: 'anchor', label: 'Community Anchor / Enterprise Owner' }
                ].map((r) => {
                  const isChecked = role === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '6px',
                        border: `1.5px solid ${isChecked ? 'var(--c-primary)' : 'var(--c-border-subtle)'}`,
                        background: isChecked ? 'var(--c-primary)' : '#ffffff',
                        color: isChecked ? 'var(--c-accent-yellow)' : 'var(--c-text-muted)',
                        fontSize: '14px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isChecked ? '3px 3px 0 var(--c-accent-orange)' : 'none'
                      }}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    border: '1.5px solid var(--c-border-subtle)',
                    fontSize: '15px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Official Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="ananya@partner.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    border: '1.5px solid var(--c-border-subtle)',
                    fontSize: '15px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Organization / Entity Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Rural Finance Ltd."
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    border: '1.5px solid var(--c-border-subtle)',
                    fontSize: '15px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Target Pilot Scale</label>
                <select
                  value={formData.pilotScale}
                  onChange={(e) => setFormData({ ...formData, pilotScale: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    border: '1.5px solid var(--c-border-subtle)',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="25-50 Livelihoods">Initial Cohort (25–50 Livelihoods)</option>
                  <option value="50-200 Livelihoods">Regional Pilot (50–200 Livelihoods)</option>
                  <option value="200-1000 Livelihoods">State Rollout (200–1,000 Livelihoods)</option>
                  <option value="1000+ Livelihoods">Pan-India Scale (1,000+ Livelihoods)</option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Key Areas of Interest or Specific Inquiries</label>
              <textarea
                rows={4}
                placeholder="Share any details about target geographical areas, product categories, or underwriting questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '6px',
                  border: '1.5px solid var(--c-border-subtle)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '6px', background: '#fee2e2', color: '#b91c1c', fontSize: '14px', fontWeight: 600 }}>
                ⚠ {errorMsg}
              </div>
            )}

            {/* Submit Button */}
            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  minHeight: '54px',
                  padding: '0 36px',
                  fontSize: '16px',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                <span>{loading ? 'Submitting inquiry...' : 'Request Partnership Discussion'}</span>
                {!loading && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
