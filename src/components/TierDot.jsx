import React from 'react';
import { TIER_LABEL } from '../data/fest';

export function TierDot({ tier, size = 9 }) {
  const style = size !== 9 ? { width: size, height: size } : undefined;
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
  let color = 'var(--navy)';
  if (tier === 'know') color = 'var(--blue)';
  else if (tier === 'heard') color = 'var(--teal-ink)';
  else if (tier === 'new') color = 'var(--red)';

  return (
    <Component className="disp" style={{ fontSize: size, color }}>
      {name}
    </Component>
  );
}
