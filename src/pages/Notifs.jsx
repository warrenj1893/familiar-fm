import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as S } from '../components/poster-kit';
import { APhone, Avatar, Btn, HubTab, ScreenHead } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";
const fn = (f) => f.name.split(' ')[0];

export default function Notifs() {
  const navigate = useNavigate();
  const fr = (id) => FEST.friends.find((f) => f.id === id);
  const requests = [fr('max')];
  const activity = [
    { type: 'invite', who: 'sam', txt: 'invited you to Third Eye Blind', sub: 'FRI · 8:30 PM · BMO', act: true },
    { type: 'joined', who: 'lia', txt: 'is going to Summerfest', sub: '2h ago' },
    { type: 'blend', who: 'jo', txt: 'wants to Blend a pre-fest mix', sub: '4h ago', act: true },
    { type: 'drop', who: null, txt: 'Lollapalooza lineup just dropped', sub: '92% of your top artists · 1d ago' },
    { type: 'soon', who: null, txt: 'flipturn starts in 30 min', sub: 'Generac Power Stage · live' },
  ];
  
  const Glyph = ({ t }) => {
    const map = { drop: '★', soon: '◷' };
    return <div style={{ width: 40, height: 40, flex: 'none', background: S.blue, color: S.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SF, fontWeight: 800, fontSize: 18, mixBlendMode: 'multiply' }}>{map[t] || '♪'}</div>;
  };

  return (
    <APhone>
      <ScreenHead kicker="ALERTS" title="What’s new" />
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '0 22px', overflowY: 'auto' }}>
        <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.16em', color: S.blue, marginBottom: 8 }}>FRIEND REQUESTS · 1</div>
        {requests.map((f) => (
          <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: `1.5px solid rgba(10,83,240,0.14)` }}>
            <Avatar f={f} size={42} />
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: SF, fontWeight: 700, fontSize: 15, color: S.blue }}>{f.name}</div><div style={{ fontFamily: SM, fontSize: 9.5, color: 'rgba(10,83,240,0.6)' }}>knows 5 acts you do</div></div>
            <Btn kind="fill" style={{ height: 34, fontSize: 12, padding: '0 12px' }}>Confirm</Btn>
            <span style={{ width: 34, height: 34, border: `2px solid ${S.blue}`, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: S.blue, fontFamily: SM, cursor: 'pointer' }}>✕</span>
          </div>
        ))}
        <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.16em', color: S.blue, margin: '16px 0 6px' }}>EARLIER</div>
        {activity.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: `1.5px solid rgba(10,83,240,0.12)` }}>
            {n.who ? <Avatar f={fr(n.who)} size={40} /> : <Glyph t={n.type} />}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: SF, fontWeight: 600, fontSize: 13.5, color: S.blue, lineHeight: 1.25 }}>{n.who ? <b style={{ fontWeight: 800 }}>{fn(fr(n.who))} </b> : ''}{n.txt}</div>
              <div style={{ fontFamily: SM, fontSize: 9, color: n.type === 'soon' ? S.green : 'rgba(10,83,240,0.6)', marginTop: 4 }}>{n.sub}</div>
            </div>
            {n.act && <div style={{ display: 'flex', gap: 6, flex: 'none' }}><Btn kind="fill" style={{ height: 32, fontSize: 11, padding: '0 11px' }}>{n.type === 'blend' ? 'Open' : 'Accept'}</Btn></div>}
          </div>
        ))}
      </div>
      <HubTab active="notifs" badge="2" navigate={navigate} />
    </APhone>
  );
}
