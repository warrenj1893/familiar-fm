import React from 'react';

export default function Sparkle({ size = 24, color = 'var(--blue)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color} style={{ display: 'block', flex: 'none', ...style }}>
      <path d="M50 2 C55 40 60 45 98 50 C60 55 55 60 50 98 C45 60 40 55 2 50 C40 45 45 40 50 2Z" />
    </svg>
  );
}
