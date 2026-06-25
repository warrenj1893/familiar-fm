import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { POS as P, Ink } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, Btn, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function Artist() {
  const navigate = useNavigate();
  const { id } = useParams();
  const PF = "'Bricolage Grotesque', sans-serif";
  const PM = "'DM Mono', monospace";
  
  // Use 'Third Eye Blind' as default if not found
  const a = FEST.artists.find((x) => x.id === id) || FEST.artists.find((x) => x.name === 'Third Eye Blind');
  const know = FEST.friendsWhoKnow(a.name);
  const going = FEST.goingWith(a.name);
  
  const [invite, setInvite] = useState(false);
  const [added, setAdded] = useState(false);
  const [invited, setInvited] = useState(new Set(going.map(g => g.id)));
  
  const toggleInvite = (fid) => setInvited(prev => {
    const next = new Set(prev);
    if (next.has(fid)) next.delete(fid); else next.add(fid);
    return next;
  });

  const lib = [['Jumper', 'LIKED · 52'], ['Semi-Charmed Life', '44 PLAYS'], ['How’s It Going to Be', 'ON “90s”']];

  return (
    <APhone statusInk={P.paper}>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: P.blue, padding: '12px 22px 20px' }}>
          <Ink as="div" color={P.yellow} style={{ right: -60, top: -50, width: 210, height: 210, borderRadius: '50%' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <span onClick={() => navigate(-1)} style={{ fontFamily: PM, fontSize: 18, color: P.paper, cursor: 'pointer' }}>‹</span>
            <span style={{ fontFamily: PM, fontSize: 11, letterSpacing: '0.14em', color: P.paper }}>KNOW · #4 ARTIST</span>
          </div>
          <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 52, lineHeight: 0.8, letterSpacing: '-0.04em', color: P.paper, position: 'relative', marginTop: 14, textTransform: 'uppercase', maxWidth: 250 }}>{a.name}</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 18, position: 'relative' }}>
            {[['SET', FEST.dayLabel], ['TIME', a.time], ['STAGE', a.stageName]].map(([k, v]) => (
              <div key={k}><div style={{ fontFamily: PM, fontSize: 8, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)' }}>{k}</div><div style={{ fontFamily: PF, fontWeight: 700, fontSize: 13, color: P.paper, marginTop: 3 }}>{v}</div></div>
            ))}
          </div>
        </div>
        <div style={{ flex: 'none', padding: '14px 22px', borderBottom: `1.5px solid rgba(10,83,240,0.16)` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <AvatarStack people={know} size={30} max={4} />
              <div><div style={{ fontFamily: PF, fontWeight: 800, fontSize: 14, color: P.blue, mixBlendMode: 'multiply' }}>{know.length} friends know them</div><div style={{ fontFamily: PM, fontSize: 9.5, color: P.green }}>{going.length} going with you</div></div>
            </div>
            <Btn kind="fill" onClick={() => setInvite(true)} style={{ height: 40, fontSize: 13, padding: '0 16px' }}>Invite</Btn>
          </div>
        </div>
        <div style={{ flex: 'none', padding: '14px 22px 8px' }}>
          <Btn kind="yellow" onClick={() => setAdded(!added)} style={{ width: '100%', background: added ? P.green : P.yellow, color: added ? P.paper : P.blue }}>{added ? '✓ Added to schedule' : '+ Add to my schedule'}</Btn>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '10px 22px 0' }}>
          <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 22, color: P.blue, letterSpacing: '-0.02em', mixBlendMode: 'multiply' }}>HEAR IT COMING</div>
          <div style={{ fontFamily: PM, fontSize: 10, color: P.blue, marginTop: 7, marginBottom: 4, letterSpacing: '0.06em' }}>FROM YOUR LIBRARY ↓</div>
          {lib.map(([s, f], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '8px 0', borderBottom: '1.5px solid rgba(10,83,240,0.14)' }}>
              <span style={{ fontFamily: PF, fontWeight: 700, fontSize: 15, color: P.blue, cursor: 'pointer' }}>▶ {s}</span>
              <span style={{ fontFamily: PM, fontSize: 9, color: 'rgba(10,83,240,0.65)' }}>{f}</span>
            </div>
          ))}
          <div onClick={() => window.open(`https://www.setlist.fm/search?query=${encodeURIComponent(a.name)}`, '_blank')} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', cursor: 'pointer' }}>
            <div style={{ flex: 1, borderTop: `2px dashed rgba(10,83,240,0.5)` }}></div>
            <span style={{ fontFamily: PM, fontSize: 8.5, color: P.blue, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>SHOW ME THE SPOILERS</span>
            <div style={{ flex: 1, borderTop: `2px dashed rgba(10,83,240,0.5)` }}></div>
          </div>
        </div>

        {invite && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div onClick={() => setInvite(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(36,27,51,0.45)' }}></div>
            <div style={{ position: 'relative', background: P.paper, borderTop: `3px solid ${P.blue}`, padding: '20px 22px 24px' }}>
              <div style={{ fontFamily: PF, fontWeight: 800, fontSize: 24, color: P.blue, letterSpacing: '-0.02em', mixBlendMode: 'multiply' }}>Invite to this set</div>
              <div style={{ fontFamily: PM, fontSize: 10.5, color: 'rgba(10,83,240,0.7)', marginTop: 6, marginBottom: 14 }}>{know.length} friends listen to {a.name} — bring them to the show.</div>
              {know.map((f) => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
                  <Avatar f={f} size={36} />
                  <div style={{ flex: 1 }}><div style={{ fontFamily: PF, fontWeight: 700, fontSize: 15, color: P.blue }}>{f.name}</div><div style={{ fontFamily: PM, fontSize: 9, color: 'rgba(10,83,240,0.6)' }}>{f.handle}</div></div>
                  <span onClick={() => toggleInvite(f.id)} style={{ width: 26, height: 26, border: `2px solid ${P.blue}`, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>{invited.has(f.id) ? <span style={{ width: 14, height: 14, background: P.green }} /> : null}</span>
                </div>
              ))}
              <Btn kind="fill" onClick={() => setInvite(false)} style={{ width: '100%', marginTop: 14 }}>Send invites →</Btn>
            </div>
          </div>
        )}
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
