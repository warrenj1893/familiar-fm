import React from 'react';

export default function Globe({ size = 64, color = 'var(--blue)', stroke = 0, style }) {
  const sw = stroke || size * 0.052;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', flex: 'none', ...style }}>
      <g stroke={color} strokeWidth={sw}>
        <circle cx="50" cy="50" r={50 - sw} />
        <ellipse cx="50" cy="50" rx="19" ry={50 - sw} />
        <line x1={sw} y1="50" x2={100 - sw} y2="50" />
        <line x1="50" y1={sw} x2="50" y2={100 - sw} />
        <path d={`M${sw + 1} 33 Q50 24 ${99 - sw} 33`} />
        <path d={`M${sw + 1} 67 Q50 76 ${99 - sw} 67`} />
      </g>
    </svg>
  );
}
