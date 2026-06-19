import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as O } from '../components/poster-kit';
import { APhone, Avatar, Btn } from '../components/app-kit';
import { FEST } from '../data/fest';
import { Mark } from './Login';

export default function Authorize() {
  const navigate = useNavigate();
  const OF = "'Bricolage Grotesque', sans-serif";
  const OM = "'DM Mono', monospace";
  
  const scopes = [
    ['View your account', ['Email, country & subscription', 'Name, picture & public playlists']],
    ['View your activity', ['Top artists & tracks', 'Recently played & saved library', 'Playlists you made or follow']],
    ['Act on your behalf', ['30-second previews', 'Create & edit playlists']],
  ];
  return (
    <APhone>
      <div style={{ flex: 'none', padding: '10px 22px 14px', borderBottom: `2.5px solid ${O.blue}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span onClick={() => navigate(-1)} style={{ fontFamily: OM, fontSize: 18, color: O.blue, cursor: 'pointer' }}>✕</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 16, height: 16, borderRadius: 999, border: `2.5px solid ${O.blue}` }}></span><span style={{ fontFamily: OF, fontWeight: 800, fontSize: 15, color: O.blue }}>Spotify</span></span>
        <span style={{ width: 16 }} />
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '18px 22px 0' }}>
        <div style={{ fontFamily: OM, fontSize: 11, letterSpacing: '0.2em', color: O.blue }}>AUTHORIZE ACCESS</div>
        <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 30, lineHeight: 0.9, letterSpacing: '-0.03em', color: O.blue, marginTop: 10 }}>Allow <Mark size={26} /> to connect</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, padding: '10px 12px', border: `2px solid ${O.blue}` }}>
          <Avatar f={FEST.user} size={32} />
          <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 700, fontSize: 14, color: O.blue }}>{FEST.user.handle}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.6)' }}>Logged in</div></div>
          <span style={{ fontFamily: OM, fontSize: 11, color: O.blue, textDecoration: 'underline' }}>Not you?</span>
        </div>
        {scopes.map(([h, items]) => (
          <div key={h} style={{ marginTop: 18 }}>
            <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 15, color: O.blue, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{h}</div>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginTop: 8 }}>
                <span style={{ width: 16, height: 16, background: O.blue, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply' }}><svg width="9" height="9" viewBox="0 0 10 10"><path d="M1.5 5.2l2.2 2.2 4.6-4.8" stroke={O.paper} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <span style={{ fontFamily: OF, fontWeight: 500, fontSize: 13, color: O.blue, lineHeight: 1.35 }}>{it}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ flex: 'none', borderTop: `2.5px solid ${O.blue}`, padding: '14px 18px', display: 'flex', gap: 10 }}>
        <Btn kind="ghost" style={{ flex: 1 }} onClick={() => navigate(-1)}>Cancel</Btn>
        <Btn kind="fill" style={{ flex: 1.4 }} onClick={() => navigate('/friend-setup')}>Agree</Btn>
      </div>
    </APhone>
  );
}
