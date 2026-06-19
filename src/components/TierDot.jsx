import React from 'react';
import { TIER_LABEL } from '../data/fest';

export function TierDot({ tier, size = 8 }) {
  const style = size !== 8 ? { width: size, height: size } : undefined;
  return <span className={`dot dot-${tier}`} style={style} />;
}

export function TierBadge({ tier }) {
  return (
    <span className={`tier tier-${tier}`}>
      <TierDot tier={tier} />
      {TIER_LABEL[tier]}
    </span>
  );
}

export function ArtistName({ name, tier, size = 19, as = 'span' }) {
  const Component = as;
  let color = 'var(--ink)';
  if (tier === 'know') color = 'var(--blue)';
  else if (tier === 'heard') color = 'var(--teal)';
  else if (tier === 'new') color = 'var(--pink)';

  return (
    <Component className="disp" style={{ fontSize: size, color }}>
      {name}
    </Component>
  );
}
