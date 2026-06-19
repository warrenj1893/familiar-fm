import React from 'react';

export default function DotGrid({ color = 'rgba(14,14,18,0.16)', gap = 16, size = 1.7, style }) {
  return (
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size + 0.3}px)`, 
      backgroundSize: `${gap}px ${gap}px`, 
      pointerEvents: 'none', 
      ...style 
    }}></div>
  );
}
