import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as S, GeoStar, Ink } from '../components/poster-kit';
import { APhone, Avatar, AvatarStack, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";

export default function Profile() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('log');
  
  const stats = [['38', 'shows'], ['214', 'artists'], ['9', 'festivals'], ['6', 'years']];
  const logs = [
    { artist: 'Third Eye Blind', fest: 'Summerfest ’26', who: 'Jo, Lia', ink: S.blue },
    { artist: 'Father John Misty', fest: 'Pitchfork ’25', who: 'Sam', ink: S.green },
    { artist: 'Muse', fest: 'Lolla ’24', who: 'solo', ink: S.blue },
  ];
  const going = FEST.friends.filter((f) => f.going);

  return (
    <APhone>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'relative', overflow: 'hidden', background: S.blue, padding: '16px 22px 20px', flex: 'none' }}>
          <div style={{ position: 'absolute', right: -44, top: -50 }}><GeoStar size={150} color="yellow" points={4} rot={10} /></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
            <Avatar f={FEST.user} size={64} ring={S.blue} />
            <div><div style={{ fontFamily: SF, fontWeight: 800, fontSize: 26, color: S.paper, letterSpacing: '-0.02em' }}>{FEST.user.handle}</div><div style={{ fontFamily: SM, fontSize: 11, color: S.paper, marginTop: 3 }}>The Indie Lifer</div></div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 18, position: 'relative' }}>
            {stats.map(([n, l]) => (
              <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 30, color: S.yellow, lineHeight: 0.8 }}>{n}</div>
                <div style={{ fontFamily: SM, fontSize: 8.5, color: S.paper, marginTop: 5, letterSpacing: '0.04em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, padding: '12px 22px 0', borderBottom: `2px solid rgba(10,83,240,0.2)`, flex: 'none' }}>
          {[['upcoming', 'Upcoming'], ['log', 'Log'], ['privacy', 'Privacy']].map(([id, l]) => (
            <div key={id} onClick={() => setTab(id)} style={{ paddingBottom: 9, cursor: 'pointer', borderBottom: tab === id ? `3px solid ${S.blue}` : '3px solid transparent', marginBottom: -2 }}>
              <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 15, color: tab === id ? S.blue : 'rgba(10,83,240,0.4)', mixBlendMode: 'multiply' }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 22px 0', flex: 1, overflowY: 'auto' }}>
          {tab === 'upcoming' && (
            <div style={{ border: `2px solid ${S.blue}`, padding: '14px 16px' }}>
              <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 22, color: S.blue, mixBlendMode: 'multiply' }}>Summerfest ’26</div>
              <div style={{ fontFamily: SM, fontSize: 10, color: 'rgba(10,83,240,0.7)', marginTop: 5 }}>{FEST.dayLabel} · 5 sets planned</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}><AvatarStack people={going} size={26} /><span style={{ fontFamily: SM, fontSize: 9.5, color: S.green }}>going with {going.length}</span></div>
            </div>
          )}
          {tab === 'log' && (
            <>
              <div onClick={() => navigate('/log-set')} style={{ fontFamily: SF, fontWeight: 800, fontSize: 14, color: S.blue, border: `2px dashed ${S.blue}`, padding: '10px', textAlign: 'center', marginBottom: 16, cursor: 'pointer', mixBlendMode: 'multiply' }}>+ Log a set</div>
              {logs.map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: `1.5px solid rgba(10,83,240,0.14)` }}>
                  <div style={{ width: 52, height: 52, flex: 'none', background: g.ink, position: 'relative', overflow: 'hidden' }}><Ink as="div" color={S.yellow} style={{ right: -10, top: -10, width: 34, height: 34, borderRadius: '50%' }} /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 17, color: S.blue, lineHeight: 0.95, mixBlendMode: 'multiply' }}>{g.artist}</div>
                    <div style={{ fontFamily: SM, fontSize: 9.5, color: 'rgba(10,83,240,0.7)', marginTop: 4 }}>{g.fest} · with {g.who}</div>
                  </div>
                </div>
              ))}
            </>
          )}
          {tab === 'privacy' && (
            <div>
              {[['Public profile', true], ['Show where I’m going', false], ['Log visible to friends', true]].map(([l, on]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0', borderBottom: `1.5px solid rgba(10,83,240,0.14)` }}>
                  <span style={{ fontFamily: SF, fontWeight: 600, fontSize: 14, color: S.blue }}>{l}</span>
                  <span style={{ width: 46, height: 26, background: on ? S.blue : 'transparent', border: `2px solid ${S.blue}`, borderRadius: 999, position: 'relative', mixBlendMode: on ? 'multiply' : 'normal' }}><span style={{ position: 'absolute', top: 2, left: on ? 22 : 2, width: 18, height: 18, borderRadius: 999, background: on ? S.yellow : S.blue }}></span></span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <HubTab active="profile" badge="2" navigate={navigate} />
    </APhone>
  );
}
