import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as P, FacetBall } from '../components/poster-kit';
import { APhone, AvatarStack, Btn, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Playlist() {
  const navigate = useNavigate();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  const blendCrew = FEST.friends.filter((f) => f.going);
  const tracks = [['Semi-Charmed Life', 'Third Eye Blind'], ['Take a Walk', 'Passion Pit'], ['August', 'flipturn'], ['The Killing Moon', 'Echo & The Bunnymen'], ['Colors', 'Grouplove']];
  
  return (
    <APhone statusInk={P.paper}>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: P.blue, padding: '14px 22px 22px' }}>
          <div style={{ position: 'absolute', right: -50, top: -50 }}><FacetBall size={150} bars={3} /></div>
          <div style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.2em', color: P.paper, position: 'relative' }}>PRE-FEST MIX · KNOW BEFORE YOU GO</div>
          <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 46, lineHeight: 0.82, letterSpacing: '-0.04em', color: P.paper, textTransform: 'uppercase', marginTop: 12, position: 'relative', maxWidth: 220 }}>Warm up</div>
          <div style={{ fontFamily: PM, fontSize: 11, color: P.paper, marginTop: 12, position: 'relative' }}>32 tracks · 2 hr 14 min</div>
        </div>
        <div style={{ flex: 'none', margin: '14px 22px', padding: '14px 16px', border: `2px solid ${P.blue}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 18, color: P.blue, mixBlendMode: 'multiply' }}>Blend with your crew</div>
              <div style={{ fontFamily: PM, fontSize: 9.5, color: 'rgba(10,83,240,0.7)', marginTop: 4 }}>Merge everyone’s taste for the road trip</div>
              <div style={{ marginTop: 10 }}><AvatarStack people={[FEST.user, ...blendCrew]} size={26} /></div>
            </div>
            <Btn kind="fill" style={{ height: 40, fontSize: 13, padding: '0 14px' }}>Blend</Btn>
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px' }}>
          {tracks.map(([t, ar], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1.5px solid rgba(10,83,240,0.14)' }}>
              <span style={{ fontFamily: PM, fontSize: 11, color: 'rgba(10,83,240,0.45)', width: 18, flex: 'none' }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: PF, fontWeight: 700, fontSize: 15, color: P.blue }}>{t}</div><div style={{ fontFamily: PM, fontSize: 9, color: 'rgba(10,83,240,0.65)', marginTop: 2 }}>{ar}</div></div>
              <span style={{ fontFamily: PM, fontSize: 14, color: P.blue }}>▶</span>
            </div>
          ))}
        </div>
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
