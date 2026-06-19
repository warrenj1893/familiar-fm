import React, { useMemo } from 'react';
import { coverFor } from '../data/fest';

export default function Cover({ name, height = 120, fontSize, corner, style, children }) {
  const palette = useMemo(() => coverFor(name || ''), [name]);
  
  const rot = useMemo(() => {
    let h = 0;
    for (let i = 0; i < (name || '').length; i++) {
      h = ((h << 5) - h + (name || '').charCodeAt(i)) | 0;
    }
    return -1.2 + (Math.abs(h) % 24) * 0.1; // -1.2 to 1.2
  }, [name]);

  const fs = fontSize || ((name || '').length > 14 ? 22 : 28);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        background: palette.bg,
        overflow: 'hidden',
        borderBottom: '1.5px solid var(--navy)',
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${palette.dots} 1.5px, transparent 2px)`,
          backgroundSize: '8px 8px',
          opacity: 0.22,
          pointerEvents: 'none'
        }}
      />
      
      {name && (
        <div
          className="disp"
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            right: 12,
            fontSize: fs,
            color: palette.fg,
            lineHeight: 0.88,
            transform: `rotate(${rot}deg)`,
            transformOrigin: 'bottom left'
          }}
        >
          {name}
        </div>
      )}

      {corner && (
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          {corner}
        </div>
      )}

      {children}
    </div>
  );
}
