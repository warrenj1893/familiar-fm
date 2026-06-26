import React, { useState } from 'react';
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

  const [added, setAdded] = useState(new Set());
  const [popup, setPopup] = useState(null); // 'contacts', 'username'
  const [igConnected, setIgConnected] = useState(false);
  const [unameSearch, setUnameSearch] = useState('');
  const [unameResult, setUnameResult] = useState(null);

  const toggleAdd = (id) => setAdded(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

  return (
    <APhone>
      <ScreenHead onBack={() => navigate(-1)} kicker="STEP 3 OF 3" title={<span>Find your<br/>familiar.fmly</span>} right={<span onClick={() => navigate('/festivals')} style={{ fontFamily: OM, fontSize: 12, color: O.blue, textDecoration: 'underline', cursor: 'pointer' }}>Skip</span>} />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px', overflowY: 'auto' }}>
        <div style={{ fontFamily: OF, fontWeight: 500, fontSize: 14, color: O.blue, lineHeight: 1.4, marginBottom: 16 }}>familiar.fm works great solo — but it’s better with the people you go with.</div>
        
        {/* CONTACTS */}
        <div onClick={() => setPopup('contacts')} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: `1.5px solid rgba(10,83,240,0.16)`, cursor: 'pointer' }}>
          <div style={{ width: 40, height: 40, border: `2px solid ${O.blue}`, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 16, height: 16, background: O.blue, mixBlendMode: 'multiply' }} /></div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 800, fontSize: 16, color: O.blue }}>Invite from your contacts</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.65)', marginTop: 3 }}>Find people you already text</div></div>
          <span style={{ fontFamily: OM, fontSize: 18, color: O.blue }}>›</span>
        </div>

        {/* USERNAME */}
        <div onClick={() => setPopup('username')} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: `1.5px solid rgba(10,83,240,0.16)`, cursor: 'pointer' }}>
          <div style={{ width: 40, height: 40, border: `2px solid ${O.blue}`, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 16, height: 16, background: O.blue, mixBlendMode: 'multiply' }} /></div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 800, fontSize: 16, color: O.blue }}>Search by username</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.65)', marginTop: 3 }}>Add @handles directly</div></div>
          <span style={{ fontFamily: OM, fontSize: 18, color: O.blue }}>›</span>
        </div>

        {/* INSTAGRAM */}
        <div onClick={() => setIgConnected(!igConnected)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderBottom: `1.5px solid rgba(10,83,240,0.16)`, cursor: 'pointer' }}>
          <div style={{ width: 40, height: 40, border: `2px solid ${O.blue}`, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 16, height: 16, background: O.blue, mixBlendMode: 'multiply' }} /></div>
          <div style={{ flex: 1 }}><div style={{ fontFamily: OF, fontWeight: 800, fontSize: 16, color: O.blue }}>Connect Instagram</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.65)', marginTop: 3 }}>See who’s already here</div></div>
          <span style={{ width: 36, height: 20, background: igConnected ? O.blue : 'transparent', border: `2px solid ${O.blue}`, borderRadius: 999, position: 'relative' }}><span style={{ position: 'absolute', top: 1, left: igConnected ? 17 : 1, width: 14, height: 14, borderRadius: 999, background: igConnected ? O.yellow : O.blue }}></span></span>
        </div>

        <div style={{ fontFamily: OM, fontSize: 11, letterSpacing: '0.16em', color: O.blue, margin: '18px 0 10px' }}>ALREADY HERE</div>
        {suggested.map((f) => {
          const isAdded = added.has(f.id);
          return (
            <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
              <Avatar f={f} size={38} />
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: OF, fontWeight: 700, fontSize: 15, color: O.blue }}>{f.name}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.6)' }}>{f.handle}</div></div>
              <Btn kind="fill" onClick={() => toggleAdd(f.id)} style={{ height: 36, fontSize: 13, padding: '0 16px', background: isAdded ? O.green : O.blue, color: isAdded ? O.paper : O.paper }}>{isAdded ? 'Added' : 'Add'}</Btn>
            </div>
          );
        })}
      </div>
      <div style={{ flex: 'none', padding: '12px 22px 22px' }}>
        <Btn kind="yellow" style={{ width: '100%' }} onClick={() => navigate('/festivals')}>Done →</Btn>
      </div>

      {popup === 'contacts' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(36,27,51,0.5)' }}>
          <div style={{ background: O.paper, borderTop: `3px solid ${O.blue}`, padding: '20px 22px', height: '60%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 22, color: O.blue }}>Contacts</div>
              <span onClick={() => setPopup(null)} style={{ fontFamily: OM, fontSize: 20, color: O.blue, cursor: 'pointer' }}>✕</span>
            </div>
            {['Mom', 'David (Work)', 'Sarah'].map((n) => (
              <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid rgba(10,83,240,0.1)` }}>
                <span style={{ fontFamily: OF, fontWeight: 700, fontSize: 16, color: O.blue }}>{n}</span>
                <Btn kind="ghost" style={{ height: 28, fontSize: 11, padding: '0 10px' }} onClick={(e) => { e.target.innerText = 'Sent ✓'; e.target.style.background = O.green; e.target.style.color = O.paper; }}>Invite</Btn>
              </div>
            ))}
          </div>
        </div>
      )}

      {popup === 'username' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(36,27,51,0.5)' }}>
          <div style={{ background: O.paper, borderTop: `3px solid ${O.blue}`, padding: '20px 22px', minHeight: '40%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontFamily: OF, fontWeight: 800, fontSize: 22, color: O.blue }}>Search Username</div>
              <span onClick={() => { setPopup(null); setUnameResult(null); setUnameSearch(''); }} style={{ fontFamily: OM, fontSize: 20, color: O.blue, cursor: 'pointer' }}>✕</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" autoFocus placeholder="@handle" value={unameSearch} onChange={e => setUnameSearch(e.target.value)} style={{ flex: 1, border: `2px solid ${O.blue}`, padding: '12px', fontFamily: OM, fontSize: 14, color: O.blue, background: 'transparent', outline: 'none' }} />
              <Btn kind="fill" onClick={() => {
                if (!unameSearch) return;
                const found = suggested.find(f => f.handle.toLowerCase().includes(unameSearch.toLowerCase()) || f.name.toLowerCase().includes(unameSearch.toLowerCase()));
                setUnameResult(found || { id: 'new', name: unameSearch, handle: `@${unameSearch.replace('@', '')}`, initial: unameSearch[0].toUpperCase(), color: 'butter' });
              }}>Go</Btn>
            </div>
            {unameResult && (
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12, padding: '14px', border: `2px solid ${O.blue}` }}>
                <Avatar f={unameResult} size={38} />
                <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: OF, fontWeight: 700, fontSize: 15, color: O.blue }}>{unameResult.name}</div><div style={{ fontFamily: OM, fontSize: 10, color: 'rgba(10,83,240,0.6)' }}>{unameResult.handle}</div></div>
                <Btn kind="fill" onClick={(e) => { e.target.innerText = 'Added'; e.target.style.background = O.green; }} style={{ height: 36, fontSize: 13, padding: '0 16px' }}>Add</Btn>
              </div>
            )}
          </div>
        </div>
      )}
    </APhone>
  );
}
