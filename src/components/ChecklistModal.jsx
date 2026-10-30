'use client';

import { useState, useEffect } from 'react';
import { AUDIENCE_DATA } from './AudienceTabs';

export default function ChecklistModal({ role, onClose }) {
  const [activeRole, setActiveRole] = useState(role || 'lenders');
  const [checkedItems, setCheckedItems] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (role) setActiveRole(role);
  }, [role]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const currentAudience = AUDIENCE_DATA[activeRole] || AUDIENCE_DATA.lenders;

  const toggleCheck = (idx) => {
    const key = `${activeRole}-${idx}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const copyChecklist = () => {
    const text = [
      `Impackt Loans — ${currentAudience.heading}`,
      '----------------------------------------',
      ...currentAudience.check.map((item, i) => `[${checkedItems[`${activeRole}-${i}`] ? 'x' : ' '}] ${item}`),
      '',
      'Notes: This checklist is for structuring tripartite partnership discussions.'
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fade"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(24, 6, 48, 0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Participation checklist"
        className="sheet"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#fbf9f4',
          color: 'var(--c-text-main)',
          borderRadius: '8px',
          padding: '44px 38px 36px',
          boxShadow: '10px 10px 0 var(--c-accent-yellow)',
          backgroundImage: 'repeating-linear-gradient(#fbf9f4 0 39px, #ebe4f3 39px 40px)',
          border: '2px solid var(--c-primary)'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close checklist"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '42px',
            height: '42px',
            border: 'none',
            borderRadius: '50%',
            background: 'var(--c-primary)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s, background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--c-accent-orange)';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--c-primary)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Modal Role Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['lenders', 'brands', 'owners'].map((key) => {
            const isSel = activeRole === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveRole(key)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: isSel ? '2px solid var(--c-primary)' : '1px solid #c9bed6',
                  background: isSel ? 'var(--c-primary)' : 'transparent',
                  color: isSel ? 'var(--c-accent-yellow)' : 'var(--c-text-muted)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {AUDIENCE_DATA[key].label}
              </button>
            );
          })}
        </div>

        <div style={{ fontFamily: 'var(--font-hand)', fontSize: '24px', color: '#c2410c' }}>
          your participation checklist
        </div>

        <h2
          style={{
            margin: '4px 0 20px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 36px)',
            letterSpacing: '-0.02em',
            color: 'var(--c-primary)'
          }}
        >
          {currentAudience.heading}
        </h2>

        {/* Interactive Checklist Items */}
        <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {currentAudience.check.map((text, idx) => {
            const isChecked = !!checkedItems[`${activeRole}-${idx}`];
            return (
              <li
                key={`${activeRole}-${idx}`}
                onClick={() => toggleCheck(idx)}
                className="drop"
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '10px 0',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '22px',
                    height: '22px',
                    flex: 'none',
                    marginTop: '2px',
                    border: '2px solid var(--c-primary)',
                    borderRadius: '4px',
                    backgroundColor: isChecked ? 'var(--c-accent-orange)' : '#ffffff',
                    borderColor: isChecked ? 'var(--c-accent-orange)' : 'var(--c-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 800,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isChecked && '✓'}
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    textDecoration: isChecked ? 'line-through' : 'none',
                    opacity: isChecked ? 0.6 : 1,
                    color: isChecked ? 'var(--c-text-subtle)' : 'var(--c-text-main)'
                  }}
                >
                  {text}
                </span>
              </li>
            );
          })}
        </ol>

        {/* Actions inside modal */}
        <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px', borderTop: '1.5px dashed var(--c-border-subtle)', paddingTop: '20px' }}>
          <button
            type="button"
            onClick={copyChecklist}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              background: copied ? '#10b981' : '#ffffff',
              color: copied ? '#ffffff' : 'var(--c-primary)',
              border: '1.5px solid var(--c-primary)',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {copied ? '✓ Checklist Copied!' : 'Copy Checklist to Clipboard'}
          </button>

          <a
            href="#contact"
            onClick={onClose}
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--c-primary)',
              textDecoration: 'underline'
            }}
          >
            Schedule a discussion on this →
          </a>
        </div>

        <p style={{ margin: '18px 0 0', fontSize: '13px', lineHeight: 1.6, color: 'var(--c-text-subtle)' }}>
          This prepares your structured discussion; it does not submit a formal application.
        </p>
      </div>
    </div>
  );
}
