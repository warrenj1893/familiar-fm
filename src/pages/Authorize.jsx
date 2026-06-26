import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { POS as O } from '../components/poster-kit';
import { APhone, Avatar, Btn } from '../components/app-kit';
import { FEST } from '../data/fest';
import { Mark } from './Login';

export default function Authorize() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [user, setUser] = useState(FEST.user);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser({ name: u.displayName, handle: '@' + (u.email?.split('@')[0] || 'user'), initial: u.displayName?.[0] || 'U', color: 'blue', avatar: u.photoURL });
      }
    });
    return unsub;
  }, []);
  
  const OF = "'Bricolage Grotesque', sans-serif";
  const OM = "'DM Mono', monospace";
  
  const toggleCheck = (k) => setChecked(p => ({ ...p, [k]: !p[k] }));

  const scopes = [
    ['View your account', ['Email, country & subscription', 'Name, picture & public playlists']],
    ['View your activity', ['Top artists & tracks', 'Recently played & saved library', 'Playlists you made or follow']],
    ['Act on your behalf', ['30-second previews', 'Create & edit playlists']],
  ];
  return (
    <APhone>
      <div style={{ flex: 'none', padding: '10px 22px 14px', borderBottom: `2.5px solid ${O.blue}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span onClick={() => navigate(-1)} style={{ fontFamily: OM, fontSize: 18, color: O.blue, cursor: 'pointer' }}>✕</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 16, height: 16, borderRadius: 999, border: `2.5px solid ${O.green}` }}></span><span style={{ fontFamily: OF, fontWeight: 800, fontSize: 15, color: O.green }}>Spotify</span></span>
        <span style={{ width: 16 }} />
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden', padding: '18px 22px 0' }}>
        <div style={{ fontFamily: OM, fontSize: 11, letterSpacing: '0.2em', color: O.blue }}>AUTHORIZE ACCESS</div>
        <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 30, lineHeight: 0.9, letterSpacing: '-0.03em', color: O.blue, marginTop: 10 }}>Allow <Mark size={26} /> to connect</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, padding: '10px 12px', border: `2px solid ${O.blue}` }}>
          <Avatar f={user} size={32} />
          <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 700, fontSize: 14, color: O.blue }}>{user.handle}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.6)' }}>Logged in</div></div>
          <span onClick={() => navigate('/')} style={{ fontFamily: OM, fontSize: 11, color: O.blue, textDecoration: 'underline', cursor: 'pointer' }}>Not you?</span>
        </div>
        {scopes.map(([h, items], gi) => (
          <div key={h} style={{ marginTop: 18 }}>
            <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 15, color: O.blue, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{h}</div>
            {items.map((it, i) => {
              const k = `${gi}-${i}`;
              const isChecked = checked[k] !== false; // default true
              return (
                <div key={i} onClick={() => toggleCheck(k)} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginTop: 8, cursor: 'pointer' }}>
                  <span style={{ width: 16, height: 16, background: isChecked ? O.blue : 'transparent', border: `1.5px solid ${O.blue}`, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply', transition: 'all 0.15s' }}>
                    {isChecked && <svg width="9" height="9" viewBox="0 0 10 10"><path d="M1.5 5.2l2.2 2.2 4.6-4.8" stroke={O.paper} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </span>
                  <span style={{ fontFamily: OF, fontWeight: 500, fontSize: 13, color: isChecked ? O.blue : 'rgba(10,83,240,0.6)', lineHeight: 1.35, transition: 'color 0.15s' }}>{it}</span>
                </div>
              );
            })}
          </div>
        ))}
        <div style={{ marginTop: 24, marginBottom: 24, textAlign: 'center' }}>
          <span onClick={() => setShowPrivacy(true)} style={{ fontFamily: OM, fontSize: 11, color: O.blue, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
        </div>
      </div>
      <div style={{ flex: 'none', borderTop: `2.5px solid ${O.blue}`, padding: '14px 18px', display: 'flex', gap: 10 }}>
        <Btn kind="ghost" style={{ flex: 1 }} onClick={() => navigate(-1)}>Cancel</Btn>
        <Btn kind="fill" style={{ flex: 1.4 }} onClick={() => navigate('/friend-setup')}>Agree</Btn>
      </div>

      {showPrivacy && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(36,27,51,0.5)', backdropFilter: 'blur(3px)' }}>
          <div style={{ background: O.paper, border: `2.5px solid ${O.blue}`, width: '85%', maxWidth: 400, padding: 20, position: 'relative' }}>
            <span onClick={() => setShowPrivacy(false)} style={{ position: 'absolute', top: 12, right: 16, fontFamily: OM, fontSize: 20, color: O.blue, cursor: 'pointer' }}>✕</span>
            <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 22, color: O.blue, marginBottom: 12 }}>Privacy Policy</div>
            <div style={{ fontFamily: OF, fontWeight: 700, fontSize: 14, color: '#EE4326', marginBottom: 8 }}>Do Not Sell My Data</div>
            <div style={{ fontFamily: OF, fontWeight: 500, fontSize: 13, color: O.blue, lineHeight: 1.5 }}>
              <p style={{ marginBottom: 10 }}>familiar.fm was developed as an open source app powered by the Spotify/Apple Music Web API. By choosing to use this app, you agree to the use of your Spotify account username and data for your top artists and tracks.</p>
              <p style={{ marginBottom: 10 }}>None of the data used is stored or collected anywhere, and it is NOT shared with any third parties. All information is used solely for displaying your matches.</p>
              <p>If you would like to revoke familiar.fm's permissions, you can visit your Spotify apps page and click "REMOVE ACCESS" on familiar.fm.</p>
            </div>
            <Btn kind="fill" style={{ width: '100%', marginTop: 20 }} onClick={() => setShowPrivacy(false)}>Got it</Btn>
          </div>
        </div>
      )}
    </APhone>
  );
}
