import React from 'react';

export default function Logo({ size = 23, color = 'var(--navy)' }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800,
        letterSpacing: '-0.03em',
        fontSize: size,
        lineHeight: 1
      }}
    >
      <span style={{ color }}>familiar</span>
      <span style={{ color: 'var(--blue)' }}>.fm</span>
    </div>
  );
}
