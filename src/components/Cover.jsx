import React from 'react';
import DotGrid from './DotGrid';

export default function Cover({ name, height = 150, fontSize = 32, corner, style, children }) {
  // Simple deterministic color map for clean brand
  const colors = [
    { bg: 'var(--blue)', fg: 'var(--white)' },
    { bg: 'var(--teal)', fg: 'var(--ink)' },
    { bg: 'var(--pink)', fg: 'var(--white)' },
    { bg: 'var(--paper2)', fg: 'var(--ink)' },
    { bg: 'var(--ink)', fg: 'var(--white)' },
  ];
  
  let h = 0;
  for (let i = 0; i < (name || '').length; i++) {
    h = ((h << 5) - h + (name || '').charCodeAt(i)) | 0;
  }
  const c = colors[Math.abs(h) % colors.length];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        background: c.bg,
        overflow: 'hidden',
        border: c.bg === 'var(--white)' || c.bg === 'var(--paper)' || c.bg === 'var(--paper2)' ? '1px solid var(--line)' : 'none',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 16,
        ...style
      }}
    >
      <DotGrid color={c.fg === 'var(--white)' ? 'rgba(255,255,255,0.2)' : 'rgba(14,14,18,0.12)'} />
      
      {name && (
        <div
          className="disp"
          style={{
            position: 'relative',
            fontSize: fontSize,
            color: c.fg,
            maxWidth: '100%'
          }}
        >
          {name}
        </div>
      )}

      {corner && (
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
          {corner}
        </div>
      )}

      {children}
    </div>
  );
}
