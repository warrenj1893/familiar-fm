import React from 'react';

export const POS = {
  paper:  '#EEEAD8',
  blue:   '#0A53F0',
  yellow: '#FFD400',
  green:  '#0B6B2E',
  ink:    '#241B33',
  teal:   '#10B0A0',
  red:    '#EE4326',
  lime:   '#CCFF00',
  butter: '#F2C23E',
  navy:   '#111A54',
  slate:  '#6A6F9C'
};

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Grain({ opacity = 0.26 }) {
  return <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity, mixBlendMode: 'multiply', backgroundImage: GRAIN, backgroundSize: '200px 200px' }}></div>;
}

export function Ink({ as = 'div', color, style, children }) {
  const Tag = as;
  return <Tag style={{ position: 'absolute', mixBlendMode: 'multiply', background: color, ...style }}>{children}</Tag>;
}

export function FacetBall({ size = 360, rot = 0, misreg = 4, bars = 4 }) {
  const p = POS;
  const cid = 'fb-' + Math.round(size) + '-' + Math.round(Math.random() * 9999);
  const span = size / bars;
  const bw = span * 0.6;
  const v = [], h = [];
  for (let i = 0; i < bars; i++) {
    const c = i * span + (span - bw) / 2;
    v.push(<rect key={'v' + i} x={c} y={-misreg} width={bw} height={size + misreg * 2} fill={p.blue} />);
    h.push(<rect key={'h' + i} x={-misreg} y={c + misreg} width={size + misreg * 2} height={bw} fill={p.yellow} />);
  }
  return (
    <div style={{ width: size, height: size, position: 'relative', transform: `rotate(${rot}deg)`, flex: 'none', borderRadius: '50%', overflow: 'hidden' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0 }}>
        <defs><clipPath id={cid}><circle cx={size / 2} cy={size / 2} r={size / 2 - 1} /></clipPath></defs>
        <g clipPath={`url(#${cid})`}>
          <rect width={size} height={size} fill={p.paper} />
          <g style={{ mixBlendMode: 'multiply' }}>{v}</g>
          <g style={{ mixBlendMode: 'multiply' }}>{h}</g>
        </g>
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 1.5} fill="none" stroke={p.blue} strokeWidth="3" style={{ mixBlendMode: 'multiply' }} />
      </svg>
      <Grain opacity={0.28} />
    </div>
  );
}

export function GeoStar({ size = 220, color = 'blue', points = 4, rot = 0 }) {
  const p = POS;
  const c = p[color];
  let a = -Math.PI / 2; const step = Math.PI / points; const inner = points === 4 ? 0.34 : 0.42;
  const pts = [];
  for (let i = 0; i < points * 2; i++) { const r = (i % 2 ? inner : 1) * (size / 2); pts.push([size / 2 + r * Math.cos(a), size / 2 + r * Math.sin(a)]); a += step; }
  const d = 'M' + pts.map((q) => q.map((v) => v.toFixed(1)).join(',')).join('L') + 'Z';
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: `rotate(${rot}deg)`, flex: 'none', overflow: 'visible' }}>
      <path d={d} fill={c} style={{ mixBlendMode: 'multiply' }} />
    </svg>
  );
}

export function Arc({ size = 400, color = 'yellow', start = 0, end = 180, rot = 0, style }) {
  const p = POS; const c = p[color]; const r = size / 2;
  const rad = (d) => (d * Math.PI) / 180;
  const x1 = r + r * Math.cos(rad(start)), y1 = r + r * Math.sin(rad(start));
  const x2 = r + r * Math.cos(rad(end)), y2 = r + r * Math.sin(rad(end));
  const large = end - start > 180 ? 1 : 0;
  const d = `M${r},${r} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: `rotate(${rot}deg)`, flex: 'none', ...style }}>
      <path d={d} fill={c} style={{ mixBlendMode: 'multiply' }} />
    </svg>
  );
}
