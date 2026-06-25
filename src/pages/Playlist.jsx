import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as P, FacetBall } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, Btn, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Playlist() {
  const navigate = useNavigate();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  const blendCrew = FEST.friends.filter((f) => f.going);
  const tracks = [['Semi-Charmed Life', 'Third Eye Blind'], ['Take a Walk', 'Passion Pit'], ['August', 'flipturn'], ['The Killing Moon', 'Echo & The Bunnymen'], ['Colors', 'Grouplove']];
  
  const [showBlend, setShowBlend] = useState(false);
  const [blendChecked, setBlendChecked] = useState(new Set(blendCrew.map(f => f.id)));
  
  const toggleBlend = (id) => setBlendChecked(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  return (
    <APhone statusInk={P.paper}>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: P.blue, padding: '14px 22px 22px' }}>
          <div style={{ position: 'absolute', right: -50, top: -50 }}><FacetBall size={150} bars={3} /></div>
          <div style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.2em', color: P.paper, position: 'relative' }}>PLAYLIST · SUMMERFEST '26</div>
          <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 46, lineHeight: 0.82, letterSpacing: '-0.04em', color: P.paper, textTransform: 'uppercase', marginTop: 12, position: 'relative', maxWidth: 220 }}>Warm up</div>
          <div style={{ fontFamily: PM, fontSize: 11, color: P.paper, marginTop: 12, position: 'relative' }}>32 tracks · 2 hr 14 min</div>
        </div>
        <div style={{ flex: 'none', margin: '14px 22px', padding: '14px 16px', border: `2px solid ${P.blue}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 18, color: P.blue, mixBlendMode: 'multiply' }}>Blend with your crew</div>
              <div style={{ fontFamily: PM, fontSize: 9.5, color: 'rgba(10,83,240,0.7)', marginTop: 4 }}>Merge everyone’s taste</div>
              <div style={{ marginTop: 10 }}><AvatarStack people={[FEST.user, ...blendCrew]} size={26} /></div>
            </div>
            <Btn kind="fill" onClick={() => setShowBlend(true)} style={{ height: 40, fontSize: 13, padding: '0 14px' }}>Blend</Btn>
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '0 22px' }}>
          {tracks.map(([t, ar], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1.5px solid rgba(10,83,240,0.14)' }}>
              <span style={{ fontFamily: PM, fontSize: 11, color: 'rgba(10,83,240,0.45)', width: 18, flex: 'none' }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: PF, fontWeight: 700, fontSize: 15, color: P.blue }}>{t}</div><div style={{ fontFamily: PM, fontSize: 9, color: 'rgba(10,83,240,0.65)', marginTop: 2 }}>{ar}</div></div>
              <span style={{ fontFamily: PM, fontSize: 14, color: P.blue, cursor: 'pointer' }}>▶</span>
            </div>
          ))}
        </div>

        {showBlend && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(36,27,51,0.5)', backdropFilter: 'blur(3px)' }}>
            <div style={{ background: P.paper, border: `3px solid ${P.blue}`, width: '85%', maxWidth: 400, padding: 20 }}>
              <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 22, color: P.blue, marginBottom: 16 }}>Blend with friends</div>
              {blendCrew.map(f => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
                  <span onClick={() => toggleBlend(f.id)} style={{ width: 22, height: 22, border: `2px solid ${P.blue}`, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>{blendChecked.has(f.id) ? <span style={{ width: 12, height: 12, background: P.green }} /> : null}</span>
                  <Avatar f={f} size={30} />
                  <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 15, color: P.blue }}>{f.name}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <Btn kind="ghost" style={{ flex: 1 }} onClick={() => setShowBlend(false)}>Cancel</Btn>
                <Btn kind="fill" style={{ flex: 1 }} onClick={() => setShowBlend(false)}>Blend</Btn>
              </div>
            </div>
          </div>
        )}
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
