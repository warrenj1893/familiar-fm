import React from 'react';
import Sparkle from './Sparkle';

export default function Logo({ size = 24, color = 'var(--ink)', spark = 'var(--blue)' }) {
  return (
    <span style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: size * 0.16, 
      fontFamily: "'Hanken Grotesk', sans-serif", 
      fontWeight: 800, 
      fontSize: size, 
      lineHeight: 0.9, 
      letterSpacing: '-0.01em', 
      color, 
      whiteSpace: 'nowrap' 
    }}>
      FAMILIAR
      <Sparkle size={size * 0.42} color={spark} style={{ margin: `0 ${-size * 0.02}px` }} />
      FM
    </span>
  );
}
