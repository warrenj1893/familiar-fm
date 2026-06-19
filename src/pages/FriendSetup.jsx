import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as O } from '../components/poster-kit';
import { APhone, Avatar, Btn, ScreenHead } from '../components/app-kit';
import { FEST } from '../data/fest';

export default function FriendSetup() {
  const navigate = useNavigate();
  const OF = "'Bricolage Grotesque', sans-serif";
  const OM = "'DM Mono', monospace";
  
  const F = FEST;
  const methods = [
    ['CONTACTS', 'Invite from your contacts', 'Find people you already text'],
    ['USERNAME', 'Search by username', 'Add @handles directly'],
    ['INSTAGRAM', 'Connect Instagram', 'See who’s already here'],
  ];
  const suggested = F.friends;

  return (
    <APhone>
      <ScreenHead onBack={() => navigate(-1)} kicker="STEP 3 OF 3" title={<span>Find your<br/>familiar.fmly</span>} right={<span onClick={() => navigate('/discover')} style={{ fontFamily: OM, fontSize: 12, color: O.blue, textDecoration: 'underline', cursor: 'pointer' }}>Skip</span>} />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px', overflowY: 'auto' }}>
        <div style={{ fontFamily: OF, fontWeight: 500, fontSize: 14, color: O.blue, lineHeight: 1.4, marginBottom: 16 }}>familiar.fm works great solo — but it’s better with the people you go with.</div>
        {methods.map(([tag, t, sub]) => (
          <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: `1.5px solid rgba(10,83,240,0.16)`, cursor: 'pointer' }}>
            <div style={{ width: 40, height: 40, border: `2px solid ${O.blue}`, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 16, height: 16, background: O.blue, mixBlendMode: 'multiply' }} /></div>
            <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 800, fontSize: 16, color: O.blue }}>{t}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.65)', marginTop: 3 }}>{sub}</div></div>
            <span style={{ fontFamily: OM, fontSize: 18, color: O.blue }}>›</span>
          </div>
        ))}
        <div style={{ fontFamily: OM, fontSize: 11, letterSpacing: '0.16em', color: O.blue, margin: '18px 0 10px' }}>ALREADY HERE</div>
        {suggested.map((f) => (
          <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
            <Avatar f={f} size={38} />
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: OF, fontWeight: 700, fontSize: 15, color: O.blue }}>{f.name}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.6)' }}>{f.handle}</div></div>
            <Btn kind="fill" style={{ height: 36, fontSize: 13, padding: '0 16px' }}>Add</Btn>
          </div>
        ))}
      </div>
      <div style={{ flex: 'none', padding: '12px 22px 22px' }}>
        <Btn kind="yellow" style={{ width: '100%' }} onClick={() => navigate('/discover')}>Done →</Btn>
      </div>
    </APhone>
  );
}
