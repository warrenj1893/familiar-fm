import React from 'react';
import { POS } from './poster-kit';

export const K = POS;
export const AFONT = "'Bricolage Grotesque', sans-serif";
export const AMONO = "'DM Mono', monospace";

export const TIER = {
  know:  { ink: K.blue,  label: 'KNOW' },
  heard: { ink: K.green, label: 'HEARD' },
  new:   { ink: '#9A7A00', label: 'NEW' },
};

export const AV = { blue: K.blue, green: K.green, yellow: K.yellow, ink: '#241B33' };

export function APhone({ children, statusInk }) {
  return (
    <div style={{ width: 384, height: 812, background: K.blue, borderRadius: 48, padding: 11, flex: 'none', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 38, overflow: 'hidden', background: K.paper, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 'none', height: 46, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 26px 6px', position: 'relative', zIndex: 20, color: statusInk || K.blue }}>
          <span style={{ fontFamily: AMONO, fontWeight: 500, fontSize: 13 }}>9:41</span>
          <div style={{ position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)', width: 96, height: 22, background: K.blue, borderRadius: 16 }}></div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="6" width="3" height="5"/><rect x="4.5" y="4" width="3" height="7"/><rect x="9" y="2" width="3" height="9"/><rect x="13.5" y="0" width="3" height="11"/></svg>
            <svg width="22" height="11" viewBox="0 0 24 12" fill="none"><rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor"/><rect x="2" y="2" width="15" height="8" fill="currentColor"/><rect x="21.5" y="4" width="2" height="4" fill="currentColor"/></svg>
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}

export function HubTab({ active = 'plan', badge, dark, navigate }) {
  const on = dark ? K.yellow : K.blue;
  const off = dark ? 'rgba(255,255,255,0.5)' : 'rgba(10,83,240,0.4)';
  const icons = {
    plan: (c) => <g fill="none" stroke={c} strokeWidth="2.4"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>, // Magnifying glass
    schedule: (c) => <g fill="none" stroke={c} strokeWidth="2.4"><rect x="3" y="4" width="18" height="17"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></g>, // Calendar
    feed: (c) => <g fill={c}><rect x="2" y="3" width="20" height="6"/><rect x="2" y="12" width="20" height="3"/><rect x="2" y="18" width="13" height="3"/></g>,
    notifs: (c) => <path d="M12 2a6 6 0 00-6 6c0 5-2 7-2 7h16s-2-2-2-7a6 6 0 00-6-6zM10 21a2 2 0 004 0" fill="none" stroke={c} strokeWidth="2.2" strokeLinejoin="round"/>,
    profile: (c) => <g fill={c}><circle cx="12" cy="8" r="5"/><path d="M3 22c0-5 4-8 9-8s9 3 9 8z"/></g>,
  };
  const labels = { plan: 'Discover', schedule: 'Schedule', feed: 'Feed', notifs: 'Alerts', profile: 'Profile' };
  
  const handleNav = (id) => {
    if (!navigate) return;
    if (id === 'plan') navigate('/discover');
    else if (id === 'schedule') navigate('/schedule');
    else if (id === 'feed') navigate('/feed');
    else if (id === 'notifs') navigate('/notifs');
    else if (id === 'profile') navigate('/profile');
  };

  return (
    <div style={{ flex: 'none', height: 76, borderTop: `2.5px solid ${dark ? K.yellow : K.blue}`, background: dark ? K.blue : K.paper, display: 'flex', alignItems: 'center', paddingBottom: 8 }}>
      {['plan', 'schedule', 'feed', 'notifs', 'profile'].map((id) => (
        <div key={id} onClick={() => handleNav(id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, position: 'relative', cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <svg width="25" height="25" viewBox="0 0 24 24" style={{ mixBlendMode: dark ? 'normal' : 'multiply' }}>{icons[id](active === id ? on : off)}</svg>
            {id === 'notifs' && badge ? <span style={{ position: 'absolute', top: -3, right: -7, minWidth: 16, height: 16, padding: '0 3px', background: K.yellow, color: K.blue, border: `1.5px solid ${dark ? K.blue : K.paper}`, borderRadius: 999, fontFamily: AMONO, fontWeight: 500, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{badge}</span> : null}
          </div>
          <span style={{ fontFamily: AMONO, fontSize: 9.5, letterSpacing: '0.04em', color: active === id ? on : off }}>{labels[id]}</span>
        </div>
      ))}
    </div>
  );
}

export function Avatar({ f, size = 34, ring = K.paper }) {
  const bg = AV[f.color] || K.blue;
  const fg = (f.color === 'yellow') ? K.blue : K.paper;
  return (
    <div title={f.name} style={{ width: size, height: size, borderRadius: 999, background: bg, color: fg, border: `2.5px solid ${ring}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: AFONT, fontWeight: 800, fontSize: size * 0.38, flex: 'none', letterSpacing: '-0.02em' }}>{f.initial}</div>
  );
}

export function AvatarStack({ people, size = 30, max = 4, ring = K.paper }) {
  const show = people.slice(0, max);
  const extra = people.length - show.length;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {show.map((f, i) => <div key={f.id || f.handle || i} style={{ marginLeft: i ? -size * 0.34 : 0, zIndex: 10 - i }}><Avatar f={f} size={size} ring={ring} /></div>)}
      {extra > 0 && <div style={{ marginLeft: -size * 0.34, width: size, height: size, borderRadius: 999, background: K.paper, color: K.blue, border: `2.5px solid ${ring}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: AMONO, fontWeight: 500, fontSize: size * 0.3, flex: 'none' }}>+{extra}</div>}
    </div>
  );
}

export function TierChip({ tier, dark }) {
  const t = TIER[tier];
  if (tier === 'new') return <span style={{ fontFamily: AMONO, fontWeight: 500, fontSize: 10, letterSpacing: '0.1em', color: dark ? K.paper : K.blue, border: `2px solid ${dark ? K.paper : K.blue}`, padding: '2px 7px', flex: 'none' }}>{t.label}</span>;
  return <span style={{ fontFamily: AMONO, fontWeight: 500, fontSize: 10, letterSpacing: '0.1em', color: K.paper, background: t.ink, padding: '3px 8px', flex: 'none', mixBlendMode: tier === 'know' ? 'multiply' : 'normal' }}>{t.label}</span>;
}

export function Btn({ children, kind = 'fill', dark, style, ...rest }) {
  const base = { height: 52, border: 'none', fontFamily: AFONT, fontWeight: 800, fontSize: 16, letterSpacing: '0.01em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '0 22px' };
  const kinds = {
    fill:  { background: K.blue, color: K.paper, mixBlendMode: dark ? 'normal' : 'multiply' },
    yellow:{ background: K.yellow, color: K.blue },
    ghost: { background: 'transparent', color: dark ? K.paper : K.blue, border: `2px solid ${dark ? K.paper : K.blue}` },
  };
  return <button style={{ ...base, ...kinds[kind], ...style }} {...rest}>{children}</button>;
}

export function ScreenHead({ kicker, title, dark, right, onBack }) {
  const c = dark ? K.paper : K.blue;
  return (
    <div style={{ flex: 'none', padding: '10px 22px 16px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 24 }}>
        {onBack ? <span onClick={onBack} style={{ fontFamily: AMONO, fontSize: 20, color: c, cursor: 'pointer', lineHeight: 1 }}>‹</span> : <span />}
        {right || <span />}
      </div>
      {kicker && <div style={{ fontFamily: AMONO, fontSize: 11, letterSpacing: '0.2em', color: c, marginTop: 6, mixBlendMode: dark ? 'normal' : 'multiply' }}>{kicker}</div>}
      {title && <div style={{ fontFamily: AFONT, fontWeight: 800, fontSize: 40, lineHeight: 0.86, letterSpacing: '-0.035em', color: c, textTransform: 'uppercase', marginTop: 10, mixBlendMode: dark ? 'normal' : 'multiply' }}>{title}</div>}
    </div>
  );
}
