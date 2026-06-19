import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as P, FacetBall } from '../components/poster-kit';
import { APhone, HubTab, AvatarStack, TierChip } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Lineup() {
  const navigate = useNavigate();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  
  const pick = ['Third Eye Blind', 'flipturn', 'Muse', 'Grouplove', 'Holly Humberstone', 'Echo & The Bunnymen', 'Spoon', 'Don Toliver', 'David Lee Roth'];
  const acts = pick.map((n) => FEST.artists.find((a) => a.name === n)).filter(Boolean);
  
  const TIER = {
    know:  { ink: P.blue,  label: 'KNOW' },
    heard: { ink: P.green, label: 'HEARD' },
    new:   { ink: '#9A7A00', label: 'NEW' },
  };

  return (
    <APhone>
      <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: P.paper, padding: '12px 22px 18px', borderBottom: `2.5px solid ${P.blue}` }}>
        <div style={{ position: 'absolute', right: -48, top: -48 }}><FacetBall size={144} bars={3} /></div>
        <div style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.22em', color: P.blue, mixBlendMode: 'multiply' }}>SUMMERFEST · {FEST.dayLabel}</div>
        <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 46, lineHeight: 0.84, letterSpacing: '-0.035em', color: P.blue, mixBlendMode: 'multiply', marginTop: 14, textTransform: 'uppercase', maxWidth: 210 }}>You know<br/>41 acts</div>
        <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
          {['know', 'heard', 'new'].map((tk) => (
            <div key={tk} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 12, height: 12, background: tk === 'new' ? 'transparent' : TIER[tk].ink, border: tk === 'new' ? `2px solid ${P.blue}` : 'none', mixBlendMode: tk === 'know' ? 'multiply' : 'normal', flex: 'none' }}></span>
              <span style={{ fontFamily: PM, fontSize: 9, letterSpacing: '0.08em', color: P.blue }}>{TIER[tk].label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {acts.map((a, i) => {
          const know = FEST.friendsWhoKnow(a.name);
          return (
            <div key={a.id} onClick={() => navigate(`/artist/${a.id}`)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 22px', borderBottom: `1.5px solid rgba(10,83,240,0.14)`, cursor: 'pointer' }}>
              <span style={{ fontFamily: PM, fontSize: 11, color: 'rgba(10,83,240,0.45)', width: 18, flex: 'none' }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 19, lineHeight: 0.95, letterSpacing: '-0.02em', color: TIER[a.tier].ink, mixBlendMode: a.tier === 'know' ? 'multiply' : 'normal', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                {know.length > 0
                  ? <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 6 }}><AvatarStack people={know} size={19} max={3} /><span style={{ fontFamily: PM, fontSize: 9.5, color: 'rgba(10,83,240,0.7)' }}>{know.length} friend{know.length > 1 ? 's' : ''} know{know.length > 1 ? '' : 's'} them</span></div>
                  : <div style={{ fontFamily: PM, fontSize: 9.5, color: 'rgba(10,83,240,0.55)', marginTop: 5 }}>{a.genre} · {a.stageName}</div>}
              </div>
              <TierChip tier={a.tier} />
            </div>
          );
        })}
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
