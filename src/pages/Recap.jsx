import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POS as S, FacetBall } from '../components/poster-kit';
import { APhone, Btn, HubTab } from '../components/app-kit';
import { FEST } from '../data/fest';

const SF = "'Bricolage Grotesque', sans-serif";
const SM = "'DM Mono', monospace";

export default function Recap() {
  const navigate = useNavigate();
  const top5 = [...FEST.artists].sort((a, b) => b.plays - a.plays).slice(0, 5);
  const going = FEST.friends.filter((f) => f.going);

  return (
    <APhone>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 'none', position: 'relative', overflow: 'hidden', background: S.blue, padding: '14px 22px 20px' }}>
          <div style={{ position: 'absolute', right: -50, top: -50 }}><FacetBall size={150} bars={3} /></div>
          <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.2em', color: S.paper, position: 'relative' }}>SUMMERFEST ’26 · YOUR RECAP</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginTop: 12, position: 'relative' }}>
            <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 116, lineHeight: 0.7, color: S.paper, letterSpacing: '-0.05em' }}>14</span>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 30, lineHeight: 0.82, color: S.paper, textTransform: 'uppercase' }}>sets<br/>you saw</div>
            </div>
          </div>
          <div style={{ fontFamily: SM, fontSize: 10.5, color: S.paper, marginTop: 8, position: 'relative' }}>across 41 acts you already knew</div>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', padding: '14px 22px 0' }}>
          <div style={{ fontFamily: SM, fontSize: 11, letterSpacing: '0.16em', color: S.blue, marginBottom: 4 }}>YOUR TOP 5</div>
          {top5.map((a, i) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: `1.5px solid rgba(10,83,240,0.14)` }}>
              <span style={{ fontFamily: SF, fontWeight: 800, fontSize: 22, color: i === 0 ? S.green : 'rgba(10,83,240,0.4)', width: 24, flex: 'none' }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: SF, fontWeight: 800, fontSize: 18, color: S.blue, lineHeight: 0.95, mixBlendMode: 'multiply', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div></div>
              <span style={{ fontFamily: SM, fontSize: 9.5, color: 'rgba(10,83,240,0.65)', flex: 'none' }}>{a.plays} plays</span>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            {[['41', 'hrs logged'], ['Indie', 'top genre'], [String(going.length), 'went with']].map(([n, l]) => (
              <div key={l} style={{ flex: 1, border: `2px solid ${S.blue}`, padding: '9px 10px' }}>
                <div style={{ fontFamily: SF, fontWeight: 800, fontSize: 20, color: S.blue, lineHeight: 0.85, mixBlendMode: 'multiply' }}>{n}</div>
                <div style={{ fontFamily: SM, fontSize: 8.5, color: 'rgba(10,83,240,0.65)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 'none', padding: '12px 22px 16px', display: 'flex', flexDirection: 'column', gap: 9 }}>
          <Btn kind="yellow" onClick={() => navigate('/story/lineup')} style={{ width: '100%' }}>★ Share my lineup</Btn>
          <Btn kind="fill" onClick={() => navigate('/story/review')} style={{ width: '100%' }}>★ Share my top sets</Btn>
        </div>
      </div>
      <HubTab active="plan" badge="3" navigate={navigate} />
    </APhone>
  );
}
